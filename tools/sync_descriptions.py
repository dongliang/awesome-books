#!/usr/bin/env python3
"""
sync_descriptions.py — 将 book-descriptions.json 中的描述同步到 js 数据文件

用法:
  python3 sync_descriptions.py                  严格同步,缺失则报错退出
  python3 sync_descriptions.py --allow-missing   缺失只警告不退出
  python3 sync_descriptions.py --check           只校验不写入
  python3 sync_descriptions.py --dry-run         打印变更不写入
  python3 sync_descriptions.py --file X.js       只处理指定 js 文件
  python3 sync_descriptions.py --extract         从 js 抽取骨架生成空 JSON

描述字段位置:chinese-title 后、tags/note 前(与现有 book 对象字段顺序一致)。
重复书(author+title 相同)在 JSON 中只存一条,同步到所有出现位置。
"""
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SRC_DIR = ROOT.parent / "src"
DATA_DIR = ROOT.parent / "data"
JS_FILES = [
    SRC_DIR / "knowledge-tree-data.js",
    SRC_DIR / "knowledge-tree-practical-data.js",
]
JSON_FILE = DATA_DIR / "book-descriptions.json"


def make_key(author, title):
    """用 author+title 生成去重主键(strip+小写)。"""
    return f"{author.strip().lower()}\u0000{title.strip().lower()}"


def parse_book_line(line):
    """尝试把一行解析为 book dict。
    返回 (indent, book_dict, trailing) 或 None。
    trailing 是行尾逗号(如有)。
    """
    stripped = line.rstrip("\n")
    match = re.match(r'^(\s*)\{"author":"', stripped)
    if not match:
        return None
    indent = match.group(1)
    content = stripped[len(indent):]
    trailing = ""
    if content.endswith(","):
        trailing = ","
        content = content[:-1]
    try:
        book = json.loads(content)
    except json.JSONDecodeError:
        return None
    if not isinstance(book, dict) or "author" not in book or "title" not in book:
        return None
    return indent, book, trailing


def serialize_book(book, indent):
    """按固定字段顺序序列化 book,保持与现有 js 格式一致。
    字段顺序:author, title, chinese-title, description, tags, note。
    格式:字段间逗号后无空格,tags 冒号后有空格,双引号,中文不转义。
    """
    parts = []
    parts.append(f'"author":{json.dumps(book["author"], ensure_ascii=False)}')
    parts.append(f'"title":{json.dumps(book["title"], ensure_ascii=False)}')
    if "chinese-title" in book:
        parts.append(f'"chinese-title":{json.dumps(book["chinese-title"], ensure_ascii=False)}')
    if book.get("description"):
        parts.append(f'"description":{json.dumps(book["description"], ensure_ascii=False)}')
    if "tags" in book:
        tags_json = ",".join(json.dumps(t, ensure_ascii=False) for t in book["tags"])
        parts.append(f'"tags": [{tags_json}]')
    if "note" in book:
        parts.append(f'"note":{json.dumps(book["note"], ensure_ascii=False)}')
    return indent + "{" + ",".join(parts) + "}"


def load_descriptions():
    """从 JSON 文件加载描述,返回 {key: description} 映射。"""
    if not JSON_FILE.exists():
        return {}
    with open(JSON_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    return {make_key(item["author"], item["title"]): item.get("description", "") for item in data}


def extract_skeleton():
    """从 js 文件抽取所有 book 的 author+title,生成空描述的 JSON 骨架。"""
    items = []
    seen = set()
    for js_path in JS_FILES:
        if not js_path.exists():
            print(f"[跳过] {js_path.name} 不存在")
            continue
        lines = js_path.read_text(encoding="utf-8").splitlines()
        for line in lines:
            parsed = parse_book_line(line)
            if parsed is None:
                continue
            _, book, _ = parsed
            key = make_key(book["author"], book["title"])
            if key not in seen:
                seen.add(key)
                items.append({"author": book["author"], "title": book["title"], "description": ""})
    with open(JSON_FILE, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"[抽取] 已生成 {JSON_FILE.name},共 {len(items)} 本(描述为空,待填充)")


def process_js(js_path, desc_map, allow_missing=False, dry_run=False, check_only=False):
    """处理单个 js 文件,同步描述。返回 (success, matched_count, missing_list)。"""
    lines = js_path.read_text(encoding="utf-8").splitlines(keepends=True)
    new_lines = []
    matched = 0
    missing = []
    changes = []
    for lineno, line in enumerate(lines, 1):
        parsed = parse_book_line(line)
        if parsed is None:
            new_lines.append(line)
            continue
        indent, book, trailing = parsed
        key = make_key(book["author"], book["title"])
        if key not in desc_map:
            missing.append((lineno, book["author"], book["title"]))
            new_lines.append(line)
            continue
        matched += 1
        book["description"] = desc_map[key]
        new_line = serialize_book(book, indent) + trailing + "\n"
        if dry_run and line.rstrip("\n") != new_line.rstrip("\n"):
            changes.append((lineno, line.rstrip("\n"), new_line.rstrip("\n")))
        if check_only or dry_run:
            new_lines.append(line)
        else:
            new_lines.append(new_line)

    mode = "校验" if check_only else ("预演" if dry_run else "同步")
    print(f"[{mode}] {js_path.name}: 匹配 {matched} 本", end="")
    if missing:
        print(f",缺失 {len(missing)} 本")
        for lineno, author, title in missing[:10]:
            print(f"  L{lineno}: {author}《{title}》")
        if len(missing) > 10:
            print(f"  ...还有 {len(missing) - 10} 本")
        if not allow_missing:
            print(f"错误:{js_path.name} 有 {len(missing)} 本书在 JSON 中缺失,请先补全或使用 --allow-missing")
            return False, matched, missing
    else:
        print()

    if dry_run and changes:
        print(f"  变更样例(前 5 条):")
        for lineno, old, new in changes[:5]:
            print(f"  L{lineno}:")
            print(f"    旧: {old[:120]}")
            print(f"    新: {new[:120]}")

    if not check_only and not dry_run:
        js_path.write_text("".join(new_lines), encoding="utf-8")
        print(f"[写入] {js_path.name} 已更新")
    return True, matched, missing


def check_extra(desc_map):
    """检查 JSON 中是否有 js 中不存在的条目(多余条目)。"""
    js_keys = set()
    for js_path in JS_FILES:
        if not js_path.exists():
            continue
        lines = js_path.read_text(encoding="utf-8").splitlines()
        for line in lines:
            parsed = parse_book_line(line)
            if parsed is None:
                continue
            _, book, _ = parsed
            js_keys.add(make_key(book["author"], book["title"]))
    extra = [k for k in desc_map if k not in js_keys]
    if extra:
        print(f"[警告] JSON 中有 {len(extra)} 条在 js 中找不到:")
        for k in extra[:10]:
            author, title = k.split("\u0000")
            print(f"  {author}《{title}》")
        if len(extra) > 10:
            print(f"  ...还有 {len(extra) - 10} 条")
    return len(extra)


def main():
    parser = argparse.ArgumentParser(description="同步书籍描述到 js 数据文件")
    parser.add_argument("--check", action="store_true", help="只校验不写入")
    parser.add_argument("--dry-run", action="store_true", help="打印变更不写入")
    parser.add_argument("--allow-missing", action="store_true", help="缺失描述只警告不退出")
    parser.add_argument("--extract", action="store_true", help="从 js 抽取骨架生成空 JSON")
    parser.add_argument("--file", type=str, help="只处理指定 js 文件")
    args = parser.parse_args()

    if args.extract:
        extract_skeleton()
        return

    desc_map = load_descriptions()
    if not desc_map:
        print(f"错误:{JSON_FILE.name} 不存在或为空,请先运行 --extract 生成骨架")
        sys.exit(1)

    print(f"已加载 {len(desc_map)} 条描述 from {JSON_FILE.name}")
    print()

    files = [Path(args.file)] if args.file else JS_FILES
    all_ok = True
    total_matched = 0
    total_missing = 0
    for js_path in files:
        if not js_path.exists():
            print(f"[跳过] {js_path.name} 不存在")
            continue
        ok, matched, missing = process_js(
            js_path, desc_map,
            allow_missing=args.allow_missing,
            dry_run=args.dry_run,
            check_only=args.check,
        )
        if not ok:
            all_ok = False
        total_matched += matched
        total_missing += len(missing)
        print()

    check_extra(desc_map)

    print(f"汇总:匹配 {total_matched},缺失 {total_missing}")
    if not all_ok:
        sys.exit(1)


if __name__ == "__main__":
    main()
