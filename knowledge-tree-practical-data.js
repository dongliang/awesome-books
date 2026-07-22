window.PRACTICAL_KNOWLEDGE_TREE_DATA = {
  "schemaVersion": 2,
  "title": "隐性知识、现实能力与人生实践",
  "updatedAt": "2026-07-22",
  "tagDefinitions": [
    {"id":"defensive","label":"主要帮助个人自保","description":"主要帮助个人识别、避免或应对现实伤害，因缺少明确的传统院系归属而较少进入标准课程。","tone":"green"},
    {"id":"conflict-of-interest","label":"触及机构利益","description":"公开教授这些知识可能与机构、行业或专业角色的利益发生冲突。","tone":"amber"},
    {"id":"reputation-conflict","label":"可能损害组织声誉","description":"内容可能暴露组织失误、侵害或制度问题，公开讨论会带来声誉压力。","tone":"pink"},
    {"id":"practice-required","label":"必须通过实践掌握","description":"仅靠课堂讲授不足，需要反馈、复盘、情境训练或长期练习。","tone":"blue"},
    {"id":"manipulation","label":"涉及操纵与控制","description":"直接研究操纵、胁迫、宣传或行为控制，教学需要额外的伦理约束。","tone":"red"},
    {"id":"dual-use","label":"容易被用于伤害","description":"同一知识既可用于保护和建设，也可能被用于控制、欺骗或伤害。","tone":"purple"},
    {"id":"hidden-rules","label":"规则通常不会明说","description":"依赖默会惯例、非正式权力，或参与者不愿公开的实际运行规则。","tone":"slate"},
    {"id":"high-context","label":"高度依赖具体情境","description":"结论随关系、文化、权力差异和具体环境变化，难以形成统一答案。","tone":"olive"},
    {"id":"jurisdiction-sensitive","label":"规则因地区而异","description":"法律、合同、税务、制度和权利义务会随国家或地区变化。","tone":"amber"},
    {"id":"time-sensitive","label":"内容变化太快","description":"制度、技术、平台、市场或最佳实践容易过时，需要持续核对最新资料。","tone":"blue"},
    {"id":"trauma-sensitive","label":"涉及创伤与敏感经历","description":"教学可能触及暴力、虐待、疾病、死亡或其他创伤经历，需要谨慎处理。","tone":"pink"},
    {"id":"value-contested","label":"价值立场争议较大","description":"不同伦理、政治、宗教或文化传统对目标、责任和正当性缺少稳定共识。","tone":"purple"}
  ],
  "branches": [
    {
      "name": "元知识、研究方法与通用能力",
      "children": [
        {
          "name": "知识论与科学方法",
          "children": [
            {
              "name": "复杂性思维",
              "tags": ["high-context"],
              "books": [
                {"author":"Page","title":"The Model Thinker","chinese-title":"模型思维","description":"用二十多种数学模型搭建一套思考工具,帮助面对复杂现实时选择合适的模型看问题","tags": ["high-context"]},
                {"author":"Klein","title":"Sources of Power: How People Make Decisions","chinese-title":"力量的来源：人们如何做决策","description":"以自然决策研究讲清专家在高压下如何用直觉与模式匹配决策","tags": ["high-context","practice-required"]}
              ]
            }
          ]
        },
        {
          "name": "实践学习与隐性知识",
          "tags": ["practice-required","hidden-rules"],
          "children": [
            {
              "name": "默会知识与专业判断",
              "tags": ["practice-required","high-context"],
              "books": [
                {"author":"Polanyi","title":"The Tacit Dimension","chinese-title":"默会维度","description":"论证人类知识中存在不可言说的默会维度,科学发现与技能均依赖于此","tags": ["hidden-rules"]},
                {"author":"Dalkir","title":"Knowledge Management in Theory and Practice","chinese-title":"知识管理：理论与实践","description":"讲清知识管理:获取、组织、共享、应用与评估","tags": ["practice-required"]}
              ]
            },
            {
              "name": "情境学习与学徒制",
              "tags": ["practice-required","hidden-rules"],
              "books": [
                {"author":"Lave & Wenger","title":"Situated Learning: Legitimate Peripheral Participation","chinese-title":"情境学习：合法的边缘性参与","description":"论证学习是参与实践社区的过程,知识在情境中被建构","tags": ["high-context"]},
                {"author":"Wenger","title":"Communities of Practice","chinese-title":"实践社区","description":"构建实践社区理论:意义、学习、身份与归属","tags": ["practice-required"]}
              ]
            },
            {
              "name": "刻意练习与技能形成",
              "tags": ["practice-required"],
              "books": [
                {"author":"Ericsson & Pool","title":"Peak","chinese-title":"峰值","description":"论证专家表现来自刻意练习而非天赋,讲清如何通过反馈与挑战突破","tags": ["practice-required"]},
                {"author":"Ericsson et al.","title":"The Cambridge Handbook of Expertise and Expert Performance","chinese-title":"剑桥专长与专家表现手册","description":"汇集专长研究各领域:机制、训练、测量与迁移","tags": ["practice-required"]}
              ]
            },
            {
              "name": "反馈、复盘与纠错",
              "tags": ["practice-required","reputation-conflict"],
              "books": [
                {"author":"Stone & Heen","title":"Thanks for the Feedback","chinese-title":"感谢反馈","description":"讲清如何接受反馈:触发器、情绪、框架与对话","tags": ["practice-required","high-context"]},
                {"author":"Argyris","title":"On Organizational Learning","chinese-title":"组织学习","description":"讲清组织学习:单双环学习、防御性推理与揭示隐性假设","tags": ["hidden-rules","reputation-conflict"]}
              ]
            }
          ]
        },
        {
          "name": "公开表达与个人效能",
          "tags": ["practice-required"],
          "children": [
            {
              "name": "实务写作与编辑",
              "tags": ["practice-required"],
              "books": [
                {"author":"Zinsser","title":"On Writing Well: The Classic Guide to Writing Nonfiction","chinese-title":"写作法宝：非虚构写作指南","description":"讲清非虚构写作:简洁、清晰、结构与改稿","tags": ["practice-required"]},
                {"author":"Williams & Bizup","title":"Style: Lessons in Clarity and Grace","chinese-title":"风格：清晰与优雅的写作课","description":"讲清写作风格:简洁、连贯、强调、语气与读者意识","tags": ["practice-required"]}
              ]
            },
            {
              "name": "公开演讲与现场表达",
              "tags": ["practice-required"],
              "books": [
                {"author":"Lucas & Stob","title":"The Art of Public Speaking","chinese-title":"演讲的艺术","description":"讲清演讲:选题、组织、语言、发声与视觉辅助","tags": ["practice-required","time-sensitive"]}
              ]
            },
            {
              "name": "演示设计与视觉叙事",
              "tags": ["practice-required"],
              "books": [
                {"author":"Duarte","title":"Resonate: Present Visual Stories that Transform Audiences","chinese-title":"共鸣：呈现打动观众的视觉故事","description":"讲清演示如何打动观众:叙事弧、冲突、视觉与共鸣","tags": ["dual-use","practice-required"]}
              ]
            },
            {
              "name": "说服性表达与信息设计",
              "tags": ["dual-use","practice-required"],
              "books": [
                {"author":"Heath & Heath","title":"Made to Stick","chinese-title":"让创意更有黏性","description":"拆解创意为何被记住:简单、意外、具体、可信、情感、故事","tags": ["dual-use","practice-required"]},
                {"author":"Cialdini","title":"Influence","chinese-title":"影响力","description":"拆解无需强迫即可改变他人行为的六类心理机制,说明顺从是如何被设计的","tags": ["dual-use","manipulation"]}
              ]
            },
            {
              "name": "计划、优先级与深度工作",
              "tags": ["practice-required"],
              "books": [
                {"author":"Allen","title":"Getting Things Done: The Art of Stress-Free Productivity","chinese-title":"搞定：无压工作的艺术","description":"构建个人事务管理系统:收集、处理、组织、回顾与执行","tags": ["practice-required"]},
                {"author":"Newport","title":"Deep Work: Rules for Focused Success in a Distracted World","chinese-title":"深度工作","description":"论证深度专注是稀缺能力,讲清如何在干扰中训练并保护它","tags": ["practice-required","high-context"]}
              ]
            },
            {
              "name": "精力、休息与可持续产出",
              "tags": ["practice-required","high-context"],
              "books": [
                {"author":"Pang","title":"Rest: Why You Get More Done When You Work Less","chinese-title":"休息：为什么少工作反而做得更多","description":"论证休息是创造力的基础设施,讲清各类型恢复与节奏","tags": ["high-context"]},
                {"author":"Loehr & Schwartz","title":"The Power of Full Engagement","chinese-title":"全力以赴","description":"论证精力管理比时间管理更根本,讲清体能、情感、心智与精神的恢复","tags": ["practice-required","high-context"]}
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "法律、公共安全与商业管理",
      "children": [
        {
          "name": "企业管理",
          "children": [
            {
              "name": "商业伦理",
              "tags": ["conflict-of-interest","reputation-conflict","value-contested"],
              "books": [
                {"author":"Crane et al.","title":"Business Ethics","chinese-title":"商业伦理","description":"讲清商业伦理:利益相关者、公司责任、可持续与治理","tags": ["conflict-of-interest","value-contested"]}
              ]
            }
          ]
        },
        {
          "name": "个人财务与制度导航",
          "children": [
            {
              "name": "现金流与财务韧性",
              "tags": ["practice-required","time-sensitive"],
              "books": [
                {"author":"Housel","title":"The Psychology of Money","chinese-title":"金钱心理学","description":"论证长期财务结果更多取决于行为与情绪模式,而非知识与技术分析","tags": ["high-context"]},
                {"author":"CFPB","title":"Your Money, Your Goals","chinese-title":"你的钱，你的目标","description":"提供消费者金融保护局工具包:预算、信用、债务与权益","tags": ["practice-required","jurisdiction-sensitive","time-sensitive"],"note":"美国消费者金融保护局工具包，方法可借鉴但制度细节须本地化"}
              ]
            },
            {
              "name": "债务、信用与消费金融",
              "tags": ["defensive","conflict-of-interest","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Manning","title":"Credit Card Nation","chinese-title":"信用卡国度","description":"以历史与制度视角讲清美国信用卡产业如何驱动消费债务","tags": ["conflict-of-interest","reputation-conflict","jurisdiction-sensitive","time-sensitive"],"note":"2000年出版，聚焦美国信用卡产业；适合理解历史与制度演变，现实规则须核对最新本地资料"},
                {"author":"Loftsgordon & O'Neill","title":"Solve Your Money Troubles: Strategies to Get Out of Debt and Stay That Way","chinese-title":"解决你的财务困境","description":"讲清摆脱债务的步骤:评估、谈判、还款计划与法律保护","tags": ["defensive","jurisdiction-sensitive","time-sensitive"]}
              ]
            },
            {
              "name": "保险、养老金与风险转移",
              "tags": ["conflict-of-interest","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Rejda & McNamara","title":"Principles of Risk Management and Insurance","chinese-title":"风险管理与保险原理","description":"讲清风险管理与保险:需求、类型、定价、监管与市场","tags": ["conflict-of-interest","time-sensitive"]},
                {"author":"OECD","title":"Pensions at a Glance","chinese-title":"养老金概览","description":"比较OECD各国养老金制度:覆盖、替代率、可持续与改革","tags": ["jurisdiction-sensitive","time-sensitive"]}
              ]
            },
            {
              "name": "个人合同、租赁与劳动关系",
              "tags": ["defensive","practice-required","jurisdiction-sensitive"],
              "books": [
                {"author":"Burnham","title":"A Short & Happy Guide to Contracts","chinese-title":"合同的简明快乐指南","description":"以简明方式讲清合同法核心:成立、履行、违约与救济","tags": ["jurisdiction-sensitive"]},
                {"author":"Stim","title":"Contracts: The Essential Business Desk Reference","chinese-title":"合同：商业必备参考","description":"提供商业合同参考:类型、条款、风险、终止与纠纷","tags": ["practice-required","jurisdiction-sensitive","time-sensitive"],"note":"以美国商业合同为主，实际使用前需核对当地法律"}
              ]
            },
            {
              "name": "消费维权与诈骗处置",
              "tags": ["defensive","manipulation","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Konnikova","title":"The Confidence Game","chinese-title":"信心游戏","description":"拆解骗局的心理机制:信任、叙事、投射与盲点","tags": ["defensive","manipulation"]},
                {"author":"Whitty & Buchanan","title":"The Psychology of the Online Dating Romance Scam","chinese-title":"网络约会浪漫诈骗的心理学","description":"以研究报告讲清网络约会诈骗的心理机制与受害者应对","tags": ["defensive","trauma-sensitive"],"note":"2012年University of Leicester发布、ESRC项目支持的研究报告"}
              ]
            },
            {
              "name": "长期投资、指数化与复利",
              "tags": ["practice-required","conflict-of-interest","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Bogle","title":"The Little Book of Common Sense Investing","chinese-title":"长赢投资","description":"论证长期低成本指数投资优于主动选股,讲清复利与成本效应","tags": ["conflict-of-interest","jurisdiction-sensitive","time-sensitive"]},
                {"author":"Malkiel","title":"A Random Walk Down Wall Street","chinese-title":"漫步华尔街","description":"论证股价接近随机游走,讲清各分析方法与资产配置建议","tags": ["jurisdiction-sensitive","time-sensitive"]}
              ]
            },
            {
              "name": "资产配置、风险承受与再平衡",
              "tags": ["practice-required","high-context","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Bernstein","title":"The Four Pillars of Investing","chinese-title":"投资的四大支柱","description":"讲清投资的四大支柱:理论、历史、心理与商业,构建稳健组合","tags": ["high-context","jurisdiction-sensitive","time-sensitive"]},
                {"author":"Swensen","title":"Unconventional Success: A Fundamental Approach to Personal Investment","chinese-title":"不寻常的成功：个人投资的基本方法","description":"论证个人投资者应采用耶鲁模式:多元化、偏重权益、长期","tags": ["conflict-of-interest","jurisdiction-sensitive","time-sensitive"]}
              ]
            },
            {
              "name": "投资行为、市场噪声与判断偏差",
              "tags": ["defensive","high-context","time-sensitive"],
              "books": [
                {"author":"Montier","title":"Behavioural Investing: A Practitioner's Guide to Applying Behavioural Finance","chinese-title":"行为投资：应用行为金融学的实践指南","description":"以行为金融学指导投资实践:偏差、泡沫、价值与纪律","tags": ["defensive","high-context","time-sensitive"]},
                {"author":"Kahneman","title":"Thinking, Fast and Slow","chinese-title":"思考，快与慢","description":"揭示人脑存在快速直觉与缓慢推理两套决策系统,并界定各自的适用范围与系统性偏差","tags": ["high-context","value-contested","time-sensitive"],"note":"部分社会心理学案例已受到重复性研究的修正，宜与较新综述对读"}
              ]
            },
            {
              "name": "财务报表、估值与资产质量",
              "tags": ["practice-required","conflict-of-interest","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Damodaran","title":"The Little Book of Valuation","chinese-title":"估值小册子","description":"讲清估值方法:DCF、相对估值、乘数与各行业适配","tags": ["practice-required","time-sensitive"]},
                {"author":"Fridson & Alvarez","title":"Financial Statement Analysis: A Practitioner's Guide","chinese-title":"财务报表分析：实践者指南","description":"以实践者视角讲清财务报表分析:比率、现金流、质量与欺诈","tags": ["practice-required","conflict-of-interest","jurisdiction-sensitive","time-sensitive"]}
              ]
            },
            {
              "name": "住房购买、按揭与总持有成本",
              "tags": ["defensive","practice-required","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"O'Connell","title":"Nolo's Essential Guide to Buying Your First Home","chinese-title":"Nolo 购房必读指南","description":"讲清首次购房流程:资金、找房、报价、验检与过户","tags": ["defensive","jurisdiction-sensitive","time-sensitive"],"note":"以美国购房和按揭制度为主；流程可借鉴，合同、税费和融资规则须本地化"}
              ]
            },
            {
              "name": "个人税务、记录与税后决策",
              "tags": ["defensive","practice-required","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"IRS","title":"Publication 17: Your Federal Income Tax","chinese-title":"第 17 号出版物：联邦所得税指南","description":"提供美国联邦个人所得税官方指南:收入、扣除、抵免与申报","tags": ["jurisdiction-sensitive","time-sensitive"],"note":"按纳税年度更新的美国联邦个人所得税指南；非美国税务不适用"}
              ]
            }
          ]
        },
        {
          "name": "创业与商业建立",
          "tags": ["practice-required","high-context"],
          "children": [
            {
              "name": "客户发现与需求验证",
              "tags": ["practice-required","high-context"],
              "books": [
                {"author":"Fitzpatrick","title":"The Mom Test","chinese-title":"妈妈测试","description":"讲清如何向用户提问才能得到真实信息而非客气话","tags": ["practice-required","high-context"]},
                {"author":"Blank & Dorf","title":"The Startup Owner's Manual","chinese-title":"创业起步手册","description":"讲清创业流程:客户开发、最简可行产品、迭代与规模化","tags": ["practice-required","time-sensitive"]}
              ]
            },
            {
              "name": "产品策略与商业模式",
              "tags": ["practice-required","high-context"],
              "books": [
                {"author":"Osterwalder & Pigneur","title":"Business Model Generation","chinese-title":"商业模式新生代","description":"以画布讲清商业模式设计:九个模块与价值主张","tags": ["practice-required"]},
                {"author":"Cagan","title":"Inspired: How to Create Tech Products Customers Love","chinese-title":"启示录：打造用户喜爱的产品","description":"讲清科技公司如何打造用户喜爱的产品:团队、发现、设计与文化","tags": ["practice-required","time-sensitive"],"note":"以科技产品组织为主，需结合行业与团队规模判断"}
              ]
            },
            {
              "name": "单位经济、定价与现金流",
              "tags": ["practice-required","conflict-of-interest"],
              "books": [
                {"author":"Nagle et al.","title":"The Strategy and Tactics of Pricing","chinese-title":"定价战略与战术","description":"讲清定价战略与战术:价值、成本、竞争、细分与执行","tags": ["practice-required","conflict-of-interest"]},
                {"author":"Berman et al.","title":"Financial Intelligence for Entrepreneurs","chinese-title":"创业者的财务智慧","description":"为创业者讲清财务报表与比率背后的业务含义","tags": ["practice-required"]}
              ]
            },
            {
              "name": "启动资金、融资与控制权",
              "tags": ["conflict-of-interest","hidden-rules","jurisdiction-sensitive"],
              "books": [
                {"author":"Feld & Mendelson","title":"Venture Deals: Be Smarter Than Your Lawyer and Venture Capitalist","chinese-title":"风险投资交易","description":"讲清风险投资交易:条款、估值、谈判与退出","tags": ["conflict-of-interest","hidden-rules","jurisdiction-sensitive","time-sensitive"],"note":"以美国风险投资条款与惯例为主"}
              ]
            },
            {
              "name": "创业流程、运营与规模化",
              "tags": ["practice-required","high-context"],
              "books": [
                {"author":"Aulet","title":"Disciplined Entrepreneurship: 24 Steps to a Successful Startup","chinese-title":"创业的纪律：24 步成就成功创业","description":"以24步讲清创业:市场、细分、价值主张、商业模式与渠道","tags": ["practice-required"]},
                {"author":"Sutton & Rao","title":"Scaling Up Excellence","chinese-title":"卓越的扩张","description":"讲清如何将优秀实践规模化:复制、本地化、信仰与瓶颈","tags": ["practice-required","high-context"]}
              ]
            }
          ]
        },
        {
          "name": "营销、内容与影响力",
          "tags": ["dual-use"],
          "children": [
            {
              "name": "定位、客户选择与品类认知",
              "tags": ["practice-required","high-context"],
              "books": [
                {"author":"Dunford","title":"Obviously Awesome: How to Nail Product Positioning so Customers Get It, Buy It, Love It","chinese-title":"显而易见：搞定产品定位","description":"讲清产品定位:语境、竞争、叙事与客户认知","tags": ["practice-required","high-context"]},
                {"author":"Ries & Trout","title":"Positioning: The Battle for Your Mind","chinese-title":"定位","description":"论证定位是在顾客心智中占据一个位置,讲清各策略","tags": ["dual-use","time-sensitive"],"note":"经典定位框架，案例和媒介环境已过时，需结合当代市场验证"}
              ]
            },
            {
              "name": "营销渠道、流量与增长实验",
              "tags": ["practice-required","time-sensitive","dual-use"],
              "books": [
                {"author":"Weinberg & Mares","title":"Traction: How Any Startup Can Achieve Explosive Customer Growth","chinese-title":"引力","description":"讲清初创公司获客:十九渠道测试与筛选","tags": ["practice-required","time-sensitive"]},
                {"author":"Ellis & Brown","title":"Hacking Growth","chinese-title":"增长黑客","description":"讲清增长黑客方法:北极星指标、漏斗、实验与跨职能团队","tags": ["practice-required","time-sensitive","dual-use"]}
              ]
            },
            {
              "name": "文案、直接反应与转化",
              "tags": ["dual-use","manipulation"],
              "books": [
                {"author":"Schwartz","title":"Breakthrough Advertising","chinese-title":"突破性广告","description":"以直接反应文案讲清需求与说服机制:市场成熟度、意识层级与文案结构","tags": ["dual-use","manipulation","time-sensitive"],"note":"1966年初版的直接反应文案经典；用于分析需求与说服机制，不应用于欺骗或隐瞒"},
                {"author":"Bly","title":"The Copywriter's Handbook","chinese-title":"文案手册","description":"讲清文案写作:标题、结构、说服、各媒体与数字","tags": ["dual-use","manipulation","time-sensitive"]}
              ]
            },
            {
              "name": "内容创作、编辑与发布体系",
              "tags": ["practice-required"],
              "books": [
                {"author":"Handley","title":"Everybody Writes: Your New and Improved Go-To Guide to Creating Ridiculously Good Content","chinese-title":"人人都会写：写出好内容的全新指南","description":"讲清内容写作:规则、语法、故事、品牌与习惯","tags": ["practice-required","time-sensitive"]},
                {"author":"Fitzpatrick","title":"Write Useful Books","chinese-title":"写出有用的书","description":"讲清如何写出对读者真正有用的书:选题、结构、迭代与反馈","tags": ["practice-required"]}
              ]
            },
            {
              "name": "口碑传播、受众与社会影响",
              "tags": ["dual-use","manipulation"],
              "books": [
                {"author":"Berger","title":"Contagious: Why Things Catch On","chinese-title":"疯传","description":"拆解内容传播的六个驱动力:社交货币、触发、情绪、公共、实用、故事","tags": ["dual-use","manipulation"]},
                {"author":"Cialdini","title":"Influence","chinese-title":"影响力","description":"拆解无需强迫即可改变他人行为的六类心理机制,说明顺从是如何被设计的","tags": ["dual-use","manipulation"]}
              ]
            }
          ]
        },
        {
          "name": "职业市场与个人议价",
          "children": [
            {
              "name": "求职、信号与岗位判断",
              "tags": ["practice-required","hidden-rules","high-context"],
              "books": [
                {"author":"Bolles","title":"What Color Is Your Parachute?","chinese-title":"你的降落伞是什么颜色","description":"讲清求职与职业转型:自我盘点、目标、渠道与面试","tags": ["practice-required","time-sensitive"]},
                {"author":"Rivera","title":"Pedigree: How Elite Students Get Elite Jobs","chinese-title":"血统：精英学生如何获得精英工作","description":"以社会学访谈讲清精英招聘如何复制社会不平等","tags": ["hidden-rules","reputation-conflict"]}
              ]
            },
            {
              "name": "薪酬与条件谈判",
              "tags": ["practice-required","hidden-rules","high-context"],
              "books": [
                {"author":"Malhotra","title":"Negotiating the Impossible","chinese-title":"谈判不可能之事","description":"讲清如何打破谈判僵局:框架、利益、创造力与第三方","tags": ["practice-required","high-context"]},
                {"author":"Babcock & Laschever","title":"Ask for It","chinese-title":"大胆去要","description":"讲清女性如何通过谈判争取应得:启动、准备、策略与规范","tags": ["practice-required","hidden-rules"]}
              ]
            },
            {
              "name": "销售、定价与客户沟通",
              "tags": ["practice-required","dual-use","manipulation"],
              "books": [
                {"author":"Rackham","title":"SPIN Selling","chinese-title":"SPIN 销售","description":"以情境、问题、暗示、需求收益四类提问讲清大单销售方法论","tags": ["practice-required","dual-use"]},
                {"author":"Nagle et al.","title":"The Strategy and Tactics of Pricing","chinese-title":"定价战略与战术","description":"讲清定价战略与战术:价值、成本、竞争、细分与执行","tags": ["conflict-of-interest","practice-required"]}
              ]
            },
            {
              "name": "导师、网络与职业资本",
              "tags": ["hidden-rules","practice-required","high-context"],
              "books": [
                {"author":"Ibarra","title":"Working Identity","chinese-title":"工作身份","description":"论证职业转型是迭代试错而非先规划后执行,讲清如何重构身份","tags": ["practice-required","high-context"]},
                {"author":"Burt","title":"Brokerage and Closure","chinese-title":"中介与封闭","description":"以网络结构讲清社会资本:桥接如何创造机会、闭合如何形成信任","tags": ["hidden-rules","dual-use"]}
              ]
            },
            {
              "name": "裁员、转行与安全退出",
              "tags": ["defensive","practice-required","high-context"],
              "books": [
                {"author":"Bridges","title":"Transitions","chinese-title":"转变","description":"讲清人生过渡的心理过程:结束、中立区与新开始","tags": ["high-context"]},
                {"author":"Ibarra","title":"Working Identity","chinese-title":"工作身份","description":"论证职业转型是迭代试错而非先规划后执行,讲清如何重构身份","tags": ["practice-required"]}
              ]
            }
          ]
        },
        {
          "name": "组织权力与真实运行",
          "tags": ["hidden-rules","conflict-of-interest","reputation-conflict"],
          "children": [
            {
              "name": "利益相关者与激励地图",
              "tags": ["hidden-rules","conflict-of-interest"],
              "books": [
                {"author":"Freeman","title":"Strategic Management: A Stakeholder Approach","chinese-title":"战略管理：利益相关者方法","description":"构建利益相关者理论:识别、归因、契约与战略管理","tags": ["conflict-of-interest"]},
                {"author":"Allison & Zelikow","title":"Essence of Decision","chinese-title":"决策的本质","description":"以古巴导弹危机讲清三种决策模型:理性、组织、政治","tags": ["hidden-rules","high-context"]}
              ]
            },
            {
              "name": "非正式权力与组织政治",
              "tags": ["hidden-rules","dual-use","reputation-conflict"],
              "books": [
                {"author":"Pfeffer","title":"Power: Why Some People Have It—and Others Don't","chinese-title":"权力：为什么只有少数人拥有","description":"讲清组织权力的获取与运用:资源、位置、关系与政治","tags": ["dual-use","hidden-rules"]},
                {"author":"Crozier","title":"The Bureaucratic Phenomenon","chinese-title":"官僚现象","description":"以法国官僚系统讲清组织中的权力游戏与僵化机制","tags": ["hidden-rules"]}
              ]
            },
            {
              "name": "联盟、地位与守门机制",
              "tags": ["hidden-rules","dual-use","high-context"],
              "books": [
                {"author":"Bourdieu","title":"Homo Academicus","chinese-title":"学术人","description":"以社会学分析法国学术界:资本、场域、惯习与权力","tags": ["reputation-conflict","hidden-rules"]},
                {"author":"Kanter","title":"Men and Women of the Corporation","chinese-title":"公司的男人与女人","description":"讲清大型组织中性别、权力与机会结构如何塑造个人命运","tags": ["hidden-rules","conflict-of-interest"]}
              ]
            },
            {
              "name": "官僚系统、会议与指标博弈",
              "tags": ["hidden-rules","conflict-of-interest","dual-use"],
              "books": [
                {"author":"Scott","title":"Seeing Like a State","chinese-title":"国家的视角","description":"论证现代国家通过简化、清晰化、标准化来使社会可治理,并揭示其失败","tags": ["value-contested","reputation-conflict"]},
                {"author":"Muller","title":"The Tyranny of Metrics","chinese-title":"指标的暴政","description":"论证指标管理的系统性陷阱:博弈、替代、目标位移与去语境","tags": ["conflict-of-interest","hidden-rules"]}
              ]
            },
            {
              "name": "吹哨、记录与报复风险",
              "tags": ["defensive","reputation-conflict","jurisdiction-sensitive","trauma-sensitive"],
              "books": [
                {"author":"Miceli et al.","title":"Whistle-Blowing in Organizations","chinese-title":"组织中的吹哨行为","description":"以心理学讲清吹哨的决策机制:判断、合理化、反应与后果","tags": ["defensive","reputation-conflict"]},
                {"author":"Brown et al.","title":"International Handbook on Whistleblowing Research","chinese-title":"国际吹哨研究手册","description":"汇集吹哨研究:理论、案例、法律、文化与跨学科","tags": ["jurisdiction-sensitive","high-context"]}
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "社会、经济与政治科学",
      "children": [
        {
          "name": "社会学与人口",
          "children": [
            {
              "name": "社会分层",
              "tags": ["hidden-rules","reputation-conflict"],
              "books": [
                {"author":"Grusky","title":"Social Stratification","chinese-title":"社会分层","description":"讲清社会分层:阶级、种族、性别与流动","tags": ["hidden-rules"]}
              ]
            }
          ]
        },
        {
          "name": "阶层、社会资本与隐藏课程",
          "tags": ["hidden-rules","reputation-conflict"],
          "children": [
            {
              "name": "文化资本与隐藏课程",
              "tags": ["hidden-rules","reputation-conflict"],
              "books": [
                {"author":"Gable","title":"The Hidden Curriculum","chinese-title":"隐藏课程","description":"讲清学校中未被明教的隐性课程:价值观、阶级再生产与身份","tags": ["hidden-rules"]},
                {"author":"Bourdieu","title":"Distinction","chinese-title":"区分","description":"以大量调查数据论证文化消费是社会阶级区隔与再生产的工具","tags": ["hidden-rules","value-contested"]}
              ]
            },
            {
              "name": "印象管理与身份切换",
              "tags": ["practice-required","dual-use","high-context"],
              "books": [
                {"author":"Goffman","title":"The Presentation of Self in Everyday Life","chinese-title":"日常生活中的自我呈现","description":"以戏剧为隐喻讲清日常自我呈现:前台、后台、印象管理与面子","tags": ["dual-use","hidden-rules"]},
                {"author":"Alim et al.","title":"Raciolinguistics","chinese-title":"种族语言学","description":"以语言与种族的交织讲清语言如何再生产种族不平等","tags": ["high-context","value-contested"]}
              ]
            },
            {
              "name": "弱关系、引荐与社会网络",
              "tags": ["hidden-rules","dual-use","practice-required"],
              "books": [
                {"author":"Granovetter","title":"Getting a Job","chinese-title":"找工作","description":"以弱关系的力量讲清求职中信息传播与社会网络的作用","tags": ["hidden-rules"]},
                {"author":"Burt","title":"Brokerage and Closure","chinese-title":"中介与封闭","description":"以网络结构讲清社会资本:桥接如何创造机会、闭合如何形成信任","tags": ["dual-use"]}
              ]
            },
            {
              "name": "精英再生产与社会流动",
              "tags": ["hidden-rules","reputation-conflict","value-contested"],
              "books": [
                {"author":"Khan","title":"Privilege","chinese-title":"特权","description":"以寄宿学校民族志讲清精英教育如何制造特权与自信","tags": ["hidden-rules","reputation-conflict"]},
                {"author":"Markovits","title":"The Meritocracy Trap","chinese-title":"精英主义的陷阱","description":"论证优绩主义制造了新的不平等,赢者与输者都被困其中","tags": ["value-contested","reputation-conflict"]}
              ]
            }
          ]
        },
        {
          "name": "宣传、操纵与信息防御",
          "tags": ["defensive","manipulation","dual-use"],
          "children": [
            {
              "name": "宣传、议程与叙事控制",
              "tags": ["defensive","manipulation","dual-use","value-contested"],
              "books": [
                {"author":"Jowett & O'Donnell","title":"Propaganda & Persuasion","chinese-title":"宣传与说服","description":"梳理宣传与说服:定义、历史、技术、伦理与反制","tags": ["dual-use","manipulation"]},
                {"author":"Ellul","title":"Propaganda","chinese-title":"宣传","description":"论证宣传是技术社会的必然产物,讲清其类型、条件与人的异化","tags": ["manipulation","value-contested"]}
              ]
            },
            {
              "name": "说服、服从与行为影响",
              "tags": ["defensive","manipulation","dual-use"],
              "books": [
                {"author":"Cialdini","title":"Influence","chinese-title":"影响力","description":"拆解无需强迫即可改变他人行为的六类心理机制,说明顺从是如何被设计的","tags": ["dual-use","manipulation"]},
                {"author":"Milgram","title":"Obedience to Authority","chinese-title":"对权威的服从","description":"以电击实验讲清普通人在权威指令下如何做出伤害他人的行为","tags": ["trauma-sensitive","value-contested"]}
              ]
            },
            {
              "name": "骗局、信任利用与社会工程",
              "tags": ["defensive","manipulation","time-sensitive"],
              "books": [
                {"author":"Konnikova","title":"The Confidence Game","chinese-title":"信心游戏","description":"拆解骗局的心理机制:信任、叙事、投射与盲点","tags": ["defensive","manipulation"]},
                {"author":"Hadnagy","title":"Social Engineering: The Science of Human Hacking","chinese-title":"社会工程：人类黑客的科学","description":"讲清社会工程学:信任、诱导、 pretext与心理操控","tags": ["dual-use","time-sensitive"]}
              ]
            },
            {
              "name": "邪教、极端化与群体控制",
              "tags": ["defensive","manipulation","trauma-sensitive","value-contested"],
              "books": [
                {"author":"Lalich","title":"Bounded Choice","chinese-title":"有限选择","description":"讲清邪教成员如何在极端控制下做出被限制的选择","tags": ["defensive","manipulation"]},
                {"author":"Horgan","title":"The Psychology of Terrorism","chinese-title":"恐怖主义心理学","description":"以心理学讲清恐怖分子的特征、动机、组织与去激化","tags": ["high-context","value-contested"]}
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "医学、健康与心理科学",
      "children": [
        {
          "name": "心理与行为科学",
          "children": [
            {
              "name": "健康心理学",
              "tags": ["practice-required","high-context"],
              "books": [
                {"author":"Taylor","title":"Health Psychology","chinese-title":"健康心理学","description":"讲清健康心理学:压力、应对、行为改变与慢性病管理","tags": ["high-context"]}
              ]
            }
          ]
        },
        {
          "name": "自我治理与心理生存",
          "children": [
            {
              "name": "注意力、习惯与行为改变",
              "tags": ["practice-required","high-context"],
              "books": [
                {"author":"Wood","title":"Good Habits, Bad Habits","chinese-title":"好习惯，坏习惯","description":"以行为科学讲清习惯的形成、维持与改变的机制","tags": ["practice-required"]},
                {"author":"Gollwitzer & Bargh","title":"The Psychology of Action","chinese-title":"行动的心理学","description":"汇集行动心理学:目标、计划、意志、自动与执行","tags": ["high-context"]}
              ]
            },
            {
              "name": "情绪识别与调节",
              "tags": ["practice-required","trauma-sensitive"],
              "books": [
                {"author":"Gross","title":"Handbook of Emotion Regulation","chinese-title":"情绪调节手册","description":"汇集情绪调节研究:策略、过程、发展、临床与测量","tags": ["practice-required","high-context"]},
                {"author":"Greenberger & Padesky","title":"Mind Over Mood","chinese-title":"驾驭情绪","description":"以CBT工作手册讲清如何通过改变思维来调节情绪","tags": ["practice-required"]}
              ]
            },
            {
              "name": "压力、倦怠与恢复",
              "tags": ["practice-required","conflict-of-interest","reputation-conflict"],
              "books": [
                {"author":"Maslach & Leiter","title":"The Truth About Burnout","chinese-title":"倦怠的真相","description":"论证倦怠源于工作与人的六方面失配,讲清如何应对","tags": ["conflict-of-interest","reputation-conflict"]},
                {"author":"Nagoski & Nagoski","title":"Burnout","chinese-title":"倦怠","description":"以女性视角讲清倦怠与压力完成反应的机制与恢复","tags": ["practice-required"]}
              ]
            },
            {
              "name": "成瘾、复发与寻求帮助",
              "tags": ["practice-required","trauma-sensitive","high-context"],
              "books": [
                {"author":"Miller & Rollnick","title":"Motivational Interviewing","chinese-title":"动机式访谈","description":"讲清动机访谈:合作、激发、倾听与改变语言","tags": ["practice-required","dual-use"]},
                {"author":"Szalavitz","title":"Unbroken Brain","chinese-title":"未断裂的大脑","description":"论证成瘾是学习与发展障碍,而非道德或慢性病","tags": ["trauma-sensitive","value-contested"]}
              ]
            }
          ]
        },
        {
          "name": "照护、临终与哀伤",
          "tags": ["practice-required","trauma-sensitive","high-context"],
          "children": [
            {
              "name": "医疗系统导航与共同决策",
              "tags": ["defensive","practice-required","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Groopman","title":"How Doctors Think","chinese-title":"医生如何思考","description":"以临床案例讲清医生认知偏差如何影响诊断与治疗","tags": ["defensive","reputation-conflict"]},
                {"author":"Gigerenzer","title":"Risk Savvy","chinese-title":"风险与好的决策","description":"讲清如何在不确定中做决策:风险素养、启发式与视觉化","tags": ["defensive","practice-required"]}
              ]
            },
            {
              "name": "慢性病、残障与疾病经验",
              "tags": ["high-context","trauma-sensitive","value-contested"],
              "books": [
                {"author":"Carel","title":"Illness: The Cry of the Flesh","chinese-title":"疾病：肉体的呼喊","description":"以哲学与第一人称讲清疾病对身体、时间与意义的改变","tags": ["high-context","value-contested"]},
                {"author":"Frank","title":"The Wounded Storyteller","chinese-title":"受伤的讲述者","description":"以叙事医学讲清患者如何通过故事重构疾病意义与身份","tags": ["trauma-sensitive"]}
              ]
            },
            {
              "name": "家庭照护与照护者负担",
              "tags": ["practice-required","trauma-sensitive","high-context"],
              "books": [
                {"author":"Mace & Rabins","title":"The 36-Hour Day","chinese-title":"36 小时的一天","description":"讲清阿尔茨海默病与失智照护:行为、情绪、安全与照护者","tags": ["practice-required","time-sensitive"]},
                {"author":"Kleinman","title":"The Soul of Care","chinese-title":"照护的灵魂","description":"以医生与照护者双重身份讲清照护如何维系人性与意义","tags": ["high-context","trauma-sensitive"]}
              ]
            },
            {
              "name": "临终决定、死亡与哀伤",
              "tags": ["practice-required","trauma-sensitive","jurisdiction-sensitive","value-contested"],
              "books": [
                {"author":"Gawande","title":"Being Mortal","chinese-title":"最好的告别","description":"讲清临终医学如何面对衰老与死亡,以自主与意义为核心","tags": ["trauma-sensitive","value-contested"]},
                {"author":"Worden","title":"Grief Counseling and Grief Therapy","chinese-title":"哀伤辅导与哀伤治疗","description":"讲清哀伤辅导与治疗:任务模型、类型、干预与复杂哀伤","tags": ["practice-required","trauma-sensitive"]}
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "现实生活、关系与实践智慧",
      "tags": ["practice-required","high-context"],
      "children": [
        {
          "name": "谈判、冲突与边界",
          "children": [
            {
              "name": "原则性谈判与利益识别",
              "tags": ["practice-required","dual-use","high-context"],
              "books": [
                {"author":"Fisher, Ury & Patton","title":"Getting to Yes","chinese-title":"谈判力","description":"构建原则谈判:分离人与事、聚焦利益、寻找方案、客观标准","tags": ["practice-required","dual-use"]},
                {"author":"Lax & Sebenius","title":"3-D Negotiation","chinese-title":"三维谈判","description":"讲清三维谈判:-setup、design、tactics与表外价值","tags": ["dual-use","hidden-rules"]}
              ]
            },
            {
              "name": "困难谈话与关系修复",
              "tags": ["practice-required","high-context","trauma-sensitive"],
              "books": [
                {"author":"Stone, Patton & Heen","title":"Difficult Conversations","chinese-title":"高难度谈话","description":"讲清困难对话的三层:事实、情绪、身份与学习型框架","tags": ["practice-required","high-context"]},
                {"author":"Rosenberg","title":"Nonviolent Communication","chinese-title":"非暴力沟通","description":"讲清非暴力沟通:观察、感受、需要、请求与同理","tags": ["practice-required","value-contested"]}
              ]
            },
            {
              "name": "冲突降级、调解与安全退出",
              "tags": ["defensive","practice-required","high-context"],
              "books": [
                {"author":"Mayer","title":"The Dynamics of Conflict: A Guide to Engagement and Intervention","chinese-title":"冲突动力学：介入与干预指南","description":"讲清冲突动力学:动因、升级、介入、调解与系统设计","tags": ["practice-required","high-context"]},
                {"author":"Ury","title":"The Third Side","chinese-title":"第三种力量","description":"论证第三方如何在冲突中扮演屏障、教育、仲裁与见证","tags": ["defensive","value-contested"]}
              ]
            },
            {
              "name": "同意、拒绝与个人边界",
              "tags": ["defensive","practice-required","trauma-sensitive","value-contested"],
              "books": [
                {"author":"Archard","title":"Sexual Consent","chinese-title":"性同意","description":"以哲学分析性同意:概念、能力、权力、法律与伦理","tags": ["value-contested","high-context","trauma-sensitive"]},
                {"author":"Cloud & Townsend","title":"Boundaries","chinese-title":"界线","description":"讲清人际界限:定义、类型、冲突与如何建立","tags": ["practice-required","value-contested"]}
              ]
            }
          ]
        },
        {
          "name": "亲密关系与家庭生活",
          "children": [
            {
              "name": "依恋、择偶与关系维护",
              "tags": ["practice-required","high-context"],
              "books": [
                {"author":"Mikulincer & Shaver","title":"Attachment in Adulthood","chinese-title":"成人依恋","description":"以依恋理论讲清成人关系:安全、焦虑、回避与治疗","tags": ["high-context"]},
                {"author":"Gottman & Silver","title":"The Seven Principles for Making Marriage Work","chinese-title":"幸福的婚姻","description":"以实证研究讲清婚姻维系七原则:友谊、冲突、意义","tags": ["practice-required"]}
              ]
            },
            {
              "name": "性沟通、欲望与亲密",
              "tags": ["practice-required","trauma-sensitive","value-contested"],
              "books": [
                {"author":"Nagoski","title":"Come as You Are","chinese-title":"性本就该如此","description":"以性科学讲清女性性反应的个体差异与压力如何抑制","tags": ["practice-required","high-context"]},
                {"author":"Lehmiller","title":"The Psychology of Human Sexuality","chinese-title":"人类性心理学","description":"讲清人类性心理学:生理、认同、行为、关系与文化","tags": ["value-contested"]}
              ]
            },
            {
              "name": "分手、离婚与家庭重组",
              "tags": ["practice-required","jurisdiction-sensitive","trauma-sensitive"],
              "books": [
                {"author":"Emery","title":"The Truth About Children and Divorce","chinese-title":"孩子与离婚的真相","description":"讲清离婚对孩子的心理影响与父母如何减少伤害","tags": ["trauma-sensitive","high-context"]},
                {"author":"Lebow et al.","title":"Treating the Difficult Divorce","chinese-title":"治疗困难的离婚","description":"讲清高冲突离婚的心理干预:评估、策略、系统与伦理","tags": ["practice-required","jurisdiction-sensitive"]}
              ]
            },
            {
              "name": "育儿、家庭分工与代际关系",
              "tags": ["practice-required","high-context","value-contested"],
              "books": [
                {"author":"Bornstein","title":"Handbook of Parenting","chinese-title":"育儿手册","description":"汇集育儿研究:理论、发展、实践、文化与政策","tags": ["high-context","time-sensitive"]},
                {"author":"Lareau","title":"Unequal Childhoods","chinese-title":"不平等的童年","description":"以民族志讲清阶级差异如何通过育儿方式再生产不平等","tags": ["hidden-rules","value-contested"]}
              ]
            }
          ]
        },
        {
          "name": "风险防御与物质自主",
          "children": [
            {
              "name": "数字自卫、隐私与账户安全",
              "tags": ["defensive","practice-required","dual-use","time-sensitive"],
              "books": [
                {"author":"Mitnick","title":"The Art of Invisibility","chinese-title":"隐身的艺术","description":"讲清数字时代的隐私保护:加密、匿名、反监控与风险","tags": ["defensive","dual-use","time-sensitive"]},
                {"author":"CISA","title":"Secure Our World","chinese-title":"守护我们的世界","description":"提供美国网络安全与基础设施安全局的个人防护指南","tags": ["defensive","practice-required","time-sensitive"],"note":"持续更新的个人网络安全指南"}
              ]
            },
            {
              "name": "急救、灾害与家庭应急",
              "tags": ["defensive","practice-required","time-sensitive"],
              "books": [
                {"author":"American Red Cross","title":"First Aid/CPR/AED Participant's Manual","chinese-title":"急救/CPR/AED 学员手册","description":"讲清急救、心肺复苏与AED操作的标准流程","tags": ["defensive","practice-required","time-sensitive"]},
                {"author":"FEMA","title":"Are You Ready? An In-Depth Guide to Citizen Preparedness","chinese-title":"你准备好了吗？公民应急深度指南","description":"讲清家庭灾害准备:风险、应急包、疏散、庇护与恢复","tags": ["defensive","jurisdiction-sensitive","time-sensitive"]}
              ]
            },
            {
              "name": "胁迫控制、家暴与跟踪识别",
              "tags": ["defensive","manipulation","trauma-sensitive","jurisdiction-sensitive"],
              "books": [
                {"author":"Stark","title":"Coercive Control","chinese-title":"强制控制","description":"论证家庭暴力多为持续性强制控制而非孤立暴力,讲清其机制","tags": ["defensive","manipulation","trauma-sensitive"]},
                {"author":"Logan et al.","title":"Partner Stalking: How Women Respond, Cope, and Survive","chinese-title":"伴侣跟踪：女性如何应对、自处与幸存","description":"以研究讲清伴侣跟踪的女性应对、应对与生存","tags": ["defensive","jurisdiction-sensitive","time-sensitive","trauma-sensitive"],"note":"2006年的美国研究；风险识别可借鉴，法律与服务信息须核对当地最新资料"}
              ]
            },
            {
              "name": "家庭维修、工具与维护判断",
              "tags": ["practice-required","defensive"],
              "books": [
                {"author":"Reader's Digest","title":"New Complete Do-It-Yourself Manual","chinese-title":"新编完全自己动手手册","description":"汇集家居DIY:维修、改造、装修、工具与材料","tags": ["practice-required"]},
                {"author":"Black & Decker","title":"The Complete Photo Guide to Home Repair","chinese-title":"家居维修完全图解指南","description":"以图文讲清家居维修:管线、电路、墙面、地板与屋顶","tags": ["practice-required","time-sensitive"]}
              ]
            }
          ]
        },
        {
          "name": "道德勇气、责任与意义",
          "children": [
            {
              "name": "服从、拒绝与道德勇气",
              "tags": ["practice-required","reputation-conflict","value-contested"],
              "books": [
                {"author":"Arendt","title":"Eichmann in Jerusalem","chinese-title":"艾希曼在耶路撒冷","description":"以庭审报道讲清平庸之恶如何让普通人成为体制暴行的执行者","tags": ["value-contested","trauma-sensitive"]},
                {"author":"Kidder","title":"Moral Courage","chinese-title":"道德勇气","description":"以人物案例讲清道德勇气:何时发声、代价与选择","tags": ["practice-required","reputation-conflict"]}
              ]
            },
            {
              "name": "共谋、责任与职业良知",
              "tags": ["conflict-of-interest","reputation-conflict","value-contested"],
              "books": [
                {"author":"Bovens","title":"The Quest for Responsibility","chinese-title":"责任的追寻","description":"以哲学与公共行政讲清责任:因果、角色、集体与问责","tags": ["conflict-of-interest","value-contested"]},
                {"author":"Bazerman & Tenbrunsel","title":"Blind Spots","chinese-title":"盲点","description":"讲清为何好人会做坏决策:伦理偏差、动机盲区与组织设计","tags": ["conflict-of-interest","reputation-conflict"]}
              ]
            },
            {
              "name": "死亡意识与人生意义",
              "tags": ["trauma-sensitive","value-contested","high-context"],
              "books": [
                {"author":"Frankl","title":"Man's Search for Meaning","chinese-title":"活出生命的意义","description":"以集中营经历论证意义是人在极端苦难中生存的核心动力","tags": ["trauma-sensitive","value-contested"]},
                {"author":"Yalom","title":"Staring at the Sun","chinese-title":"直视骄阳","description":"以存在主义心理治疗讲清死亡恐惧与如何活出有意义生命","tags": ["trauma-sensitive","high-context"]}
              ]
            },
            {
              "name": "社区互助、照料与共同体",
              "tags": ["practice-required","high-context","value-contested"],
              "books": [
                {"author":"Ostrom","title":"Governing the Commons","chinese-title":"公共事物的治理之道","description":"论证公地悲剧可通过社区自治制度而非私有化或国有化解决","tags": ["practice-required","high-context"]},
                {"author":"Putnam","title":"Bowling Alone","chinese-title":"独自打保龄","description":"论证美国社会资本在衰退,讲清公民参与、信任与网络的影响","tags": ["hidden-rules","value-contested"]}
              ]
            }
          ]
        }
      ]
    }
  ]
};
