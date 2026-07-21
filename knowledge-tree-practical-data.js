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
                {"author":"Page","title":"The Model Thinker","tags": ["high-context"]},
                {"author":"Klein","title":"Sources of Power: How People Make Decisions","tags": ["high-context","practice-required"]}
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
                {"author":"Polanyi","title":"The Tacit Dimension","tags": ["hidden-rules"]},
                {"author":"Dalkir","title":"Knowledge Management in Theory and Practice","tags": ["practice-required"]}
              ]
            },
            {
              "name": "情境学习与学徒制",
              "tags": ["practice-required","hidden-rules"],
              "books": [
                {"author":"Lave & Wenger","title":"Situated Learning: Legitimate Peripheral Participation","tags": ["high-context"]},
                {"author":"Wenger","title":"Communities of Practice","tags": ["practice-required"]}
              ]
            },
            {
              "name": "刻意练习与技能形成",
              "tags": ["practice-required"],
              "books": [
                {"author":"Ericsson & Pool","title":"Peak","tags": ["practice-required"]},
                {"author":"Ericsson et al.","title":"The Cambridge Handbook of Expertise and Expert Performance","tags": ["practice-required"]}
              ]
            },
            {
              "name": "反馈、复盘与纠错",
              "tags": ["practice-required","reputation-conflict"],
              "books": [
                {"author":"Stone & Heen","title":"Thanks for the Feedback","tags": ["practice-required","high-context"]},
                {"author":"Argyris","title":"On Organizational Learning","tags": ["hidden-rules","reputation-conflict"]}
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
                {"author":"Zinsser","title":"On Writing Well: The Classic Guide to Writing Nonfiction","tags": ["practice-required"]},
                {"author":"Williams & Bizup","title":"Style: Lessons in Clarity and Grace","tags": ["practice-required"]}
              ]
            },
            {
              "name": "公开演讲与现场表达",
              "tags": ["practice-required"],
              "books": [
                {"author":"Lucas & Stob","title":"The Art of Public Speaking","tags": ["practice-required","time-sensitive"]}
              ]
            },
            {
              "name": "演示设计与视觉叙事",
              "tags": ["practice-required"],
              "books": [
                {"author":"Duarte","title":"Resonate: Present Visual Stories that Transform Audiences","tags": ["dual-use","practice-required"]}
              ]
            },
            {
              "name": "说服性表达与信息设计",
              "tags": ["dual-use","practice-required"],
              "books": [
                {"author":"Heath & Heath","title":"Made to Stick","tags": ["dual-use","practice-required"]},
                {"author":"Cialdini","title":"Influence","tags": ["dual-use","manipulation"]}
              ]
            },
            {
              "name": "计划、优先级与深度工作",
              "tags": ["practice-required"],
              "books": [
                {"author":"Allen","title":"Getting Things Done: The Art of Stress-Free Productivity","tags": ["practice-required"]},
                {"author":"Newport","title":"Deep Work: Rules for Focused Success in a Distracted World","tags": ["practice-required","high-context"]}
              ]
            },
            {
              "name": "精力、休息与可持续产出",
              "tags": ["practice-required","high-context"],
              "books": [
                {"author":"Pang","title":"Rest: Why You Get More Done When You Work Less","tags": ["high-context"]},
                {"author":"Loehr & Schwartz","title":"The Power of Full Engagement","tags": ["practice-required","high-context"]}
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
                {"author":"Crane et al.","title":"Business Ethics","tags": ["conflict-of-interest","value-contested"]}
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
                {"author":"Housel","title":"The Psychology of Money","tags": ["high-context"]},
                {"author":"CFPB","title":"Your Money, Your Goals","tags": ["practice-required","jurisdiction-sensitive","time-sensitive"],"note":"美国消费者金融保护局工具包，方法可借鉴但制度细节须本地化"}
              ]
            },
            {
              "name": "债务、信用与消费金融",
              "tags": ["defensive","conflict-of-interest","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Manning","title":"Credit Card Nation","tags": ["conflict-of-interest","reputation-conflict","jurisdiction-sensitive","time-sensitive"],"note":"2000年出版，聚焦美国信用卡产业；适合理解历史与制度演变，现实规则须核对最新本地资料"},
                {"author":"Loftsgordon & O'Neill","title":"Solve Your Money Troubles: Strategies to Get Out of Debt and Stay That Way","tags": ["defensive","jurisdiction-sensitive","time-sensitive"]}
              ]
            },
            {
              "name": "保险、养老金与风险转移",
              "tags": ["conflict-of-interest","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Rejda & McNamara","title":"Principles of Risk Management and Insurance","tags": ["conflict-of-interest","time-sensitive"]},
                {"author":"OECD","title":"Pensions at a Glance","tags": ["jurisdiction-sensitive","time-sensitive"]}
              ]
            },
            {
              "name": "个人合同、租赁与劳动关系",
              "tags": ["defensive","practice-required","jurisdiction-sensitive"],
              "books": [
                {"author":"Burnham","title":"A Short & Happy Guide to Contracts","tags": ["jurisdiction-sensitive"]},
                {"author":"Stim","title":"Contracts: The Essential Business Desk Reference","tags": ["practice-required","jurisdiction-sensitive","time-sensitive"],"note":"以美国商业合同为主，实际使用前需核对当地法律"}
              ]
            },
            {
              "name": "消费维权与诈骗处置",
              "tags": ["defensive","manipulation","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Konnikova","title":"The Confidence Game","tags": ["defensive","manipulation"]},
                {"author":"Whitty & Buchanan","title":"The Psychology of the Online Dating Romance Scam","tags": ["defensive","trauma-sensitive"],"note":"2012年University of Leicester发布、ESRC项目支持的研究报告"}
              ]
            },
            {
              "name": "长期投资、指数化与复利",
              "tags": ["practice-required","conflict-of-interest","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Bogle","title":"The Little Book of Common Sense Investing","tags": ["conflict-of-interest","jurisdiction-sensitive","time-sensitive"]},
                {"author":"Malkiel","title":"A Random Walk Down Wall Street","tags": ["jurisdiction-sensitive","time-sensitive"]}
              ]
            },
            {
              "name": "资产配置、风险承受与再平衡",
              "tags": ["practice-required","high-context","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Bernstein","title":"The Four Pillars of Investing","tags": ["high-context","jurisdiction-sensitive","time-sensitive"]},
                {"author":"Swensen","title":"Unconventional Success: A Fundamental Approach to Personal Investment","tags": ["conflict-of-interest","jurisdiction-sensitive","time-sensitive"]}
              ]
            },
            {
              "name": "投资行为、市场噪声与判断偏差",
              "tags": ["defensive","high-context","time-sensitive"],
              "books": [
                {"author":"Montier","title":"Behavioural Investing: A Practitioner's Guide to Applying Behavioural Finance","tags": ["defensive","high-context","time-sensitive"]},
                {"author":"Kahneman","title":"Thinking, Fast and Slow","tags": ["high-context","value-contested","time-sensitive"],"note":"部分社会心理学案例已受到重复性研究的修正，宜与较新综述对读"}
              ]
            },
            {
              "name": "财务报表、估值与资产质量",
              "tags": ["practice-required","conflict-of-interest","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"Damodaran","title":"The Little Book of Valuation","tags": ["practice-required","time-sensitive"]},
                {"author":"Fridson & Alvarez","title":"Financial Statement Analysis: A Practitioner's Guide","tags": ["practice-required","conflict-of-interest","jurisdiction-sensitive","time-sensitive"]}
              ]
            },
            {
              "name": "住房购买、按揭与总持有成本",
              "tags": ["defensive","practice-required","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"O'Connell","title":"Nolo's Essential Guide to Buying Your First Home","tags": ["defensive","jurisdiction-sensitive","time-sensitive"],"note":"以美国购房和按揭制度为主；流程可借鉴，合同、税费和融资规则须本地化"}
              ]
            },
            {
              "name": "个人税务、记录与税后决策",
              "tags": ["defensive","practice-required","jurisdiction-sensitive","time-sensitive"],
              "books": [
                {"author":"IRS","title":"Publication 17: Your Federal Income Tax","tags": ["jurisdiction-sensitive","time-sensitive"],"note":"按纳税年度更新的美国联邦个人所得税指南；非美国税务不适用"}
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
                {"author":"Fitzpatrick","title":"The Mom Test","tags": ["practice-required","high-context"]},
                {"author":"Blank & Dorf","title":"The Startup Owner's Manual","tags": ["practice-required","time-sensitive"]}
              ]
            },
            {
              "name": "产品策略与商业模式",
              "tags": ["practice-required","high-context"],
              "books": [
                {"author":"Osterwalder & Pigneur","title":"Business Model Generation","tags": ["practice-required"]},
                {"author":"Cagan","title":"Inspired: How to Create Tech Products Customers Love","tags": ["practice-required","time-sensitive"],"note":"以科技产品组织为主，需结合行业与团队规模判断"}
              ]
            },
            {
              "name": "单位经济、定价与现金流",
              "tags": ["practice-required","conflict-of-interest"],
              "books": [
                {"author":"Nagle et al.","title":"The Strategy and Tactics of Pricing","tags": ["practice-required","conflict-of-interest"]},
                {"author":"Berman et al.","title":"Financial Intelligence for Entrepreneurs","tags": ["practice-required"]}
              ]
            },
            {
              "name": "启动资金、融资与控制权",
              "tags": ["conflict-of-interest","hidden-rules","jurisdiction-sensitive"],
              "books": [
                {"author":"Feld & Mendelson","title":"Venture Deals: Be Smarter Than Your Lawyer and Venture Capitalist","tags": ["conflict-of-interest","hidden-rules","jurisdiction-sensitive","time-sensitive"],"note":"以美国风险投资条款与惯例为主"}
              ]
            },
            {
              "name": "创业流程、运营与规模化",
              "tags": ["practice-required","high-context"],
              "books": [
                {"author":"Aulet","title":"Disciplined Entrepreneurship: 24 Steps to a Successful Startup","tags": ["practice-required"]},
                {"author":"Sutton & Rao","title":"Scaling Up Excellence","tags": ["practice-required","high-context"]}
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
                {"author":"Dunford","title":"Obviously Awesome: How to Nail Product Positioning so Customers Get It, Buy It, Love It","tags": ["practice-required","high-context"]},
                {"author":"Ries & Trout","title":"Positioning: The Battle for Your Mind","tags": ["dual-use","time-sensitive"],"note":"经典定位框架，案例和媒介环境已过时，需结合当代市场验证"}
              ]
            },
            {
              "name": "营销渠道、流量与增长实验",
              "tags": ["practice-required","time-sensitive","dual-use"],
              "books": [
                {"author":"Weinberg & Mares","title":"Traction: How Any Startup Can Achieve Explosive Customer Growth","tags": ["practice-required","time-sensitive"]},
                {"author":"Ellis & Brown","title":"Hacking Growth","tags": ["practice-required","time-sensitive","dual-use"]}
              ]
            },
            {
              "name": "文案、直接反应与转化",
              "tags": ["dual-use","manipulation"],
              "books": [
                {"author":"Schwartz","title":"Breakthrough Advertising","tags": ["dual-use","manipulation","time-sensitive"],"note":"1966年初版的直接反应文案经典；用于分析需求与说服机制，不应用于欺骗或隐瞒"},
                {"author":"Bly","title":"The Copywriter's Handbook","tags": ["dual-use","manipulation","time-sensitive"]}
              ]
            },
            {
              "name": "内容创作、编辑与发布体系",
              "tags": ["practice-required"],
              "books": [
                {"author":"Handley","title":"Everybody Writes: Your New and Improved Go-To Guide to Creating Ridiculously Good Content","tags": ["practice-required","time-sensitive"]},
                {"author":"Fitzpatrick","title":"Write Useful Books","tags": ["practice-required"]}
              ]
            },
            {
              "name": "口碑传播、受众与社会影响",
              "tags": ["dual-use","manipulation"],
              "books": [
                {"author":"Berger","title":"Contagious: Why Things Catch On","tags": ["dual-use","manipulation"]},
                {"author":"Cialdini","title":"Influence","tags": ["dual-use","manipulation"]}
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
                {"author":"Bolles","title":"What Color Is Your Parachute?","tags": ["practice-required","time-sensitive"]},
                {"author":"Rivera","title":"Pedigree: How Elite Students Get Elite Jobs","tags": ["hidden-rules","reputation-conflict"]}
              ]
            },
            {
              "name": "薪酬与条件谈判",
              "tags": ["practice-required","hidden-rules","high-context"],
              "books": [
                {"author":"Malhotra","title":"Negotiating the Impossible","tags": ["practice-required","high-context"]},
                {"author":"Babcock & Laschever","title":"Ask for It","tags": ["practice-required","hidden-rules"]}
              ]
            },
            {
              "name": "销售、定价与客户沟通",
              "tags": ["practice-required","dual-use","manipulation"],
              "books": [
                {"author":"Rackham","title":"SPIN Selling","tags": ["practice-required","dual-use"]},
                {"author":"Nagle et al.","title":"The Strategy and Tactics of Pricing","tags": ["conflict-of-interest","practice-required"]}
              ]
            },
            {
              "name": "导师、网络与职业资本",
              "tags": ["hidden-rules","practice-required","high-context"],
              "books": [
                {"author":"Ibarra","title":"Working Identity","tags": ["practice-required","high-context"]},
                {"author":"Burt","title":"Brokerage and Closure","tags": ["hidden-rules","dual-use"]}
              ]
            },
            {
              "name": "裁员、转行与安全退出",
              "tags": ["defensive","practice-required","high-context"],
              "books": [
                {"author":"Bridges","title":"Transitions","tags": ["high-context"]},
                {"author":"Ibarra","title":"Working Identity","tags": ["practice-required"]}
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
                {"author":"Freeman","title":"Strategic Management: A Stakeholder Approach","tags": ["conflict-of-interest"]},
                {"author":"Allison & Zelikow","title":"Essence of Decision","tags": ["hidden-rules","high-context"]}
              ]
            },
            {
              "name": "非正式权力与组织政治",
              "tags": ["hidden-rules","dual-use","reputation-conflict"],
              "books": [
                {"author":"Pfeffer","title":"Power: Why Some People Have It—and Others Don't","tags": ["dual-use","hidden-rules"]},
                {"author":"Crozier","title":"The Bureaucratic Phenomenon","tags": ["hidden-rules"]}
              ]
            },
            {
              "name": "联盟、地位与守门机制",
              "tags": ["hidden-rules","dual-use","high-context"],
              "books": [
                {"author":"Bourdieu","title":"Homo Academicus","tags": ["reputation-conflict","hidden-rules"]},
                {"author":"Kanter","title":"Men and Women of the Corporation","tags": ["hidden-rules","conflict-of-interest"]}
              ]
            },
            {
              "name": "官僚系统、会议与指标博弈",
              "tags": ["hidden-rules","conflict-of-interest","dual-use"],
              "books": [
                {"author":"Scott","title":"Seeing Like a State","tags": ["value-contested","reputation-conflict"]},
                {"author":"Muller","title":"The Tyranny of Metrics","tags": ["conflict-of-interest","hidden-rules"]}
              ]
            },
            {
              "name": "吹哨、记录与报复风险",
              "tags": ["defensive","reputation-conflict","jurisdiction-sensitive","trauma-sensitive"],
              "books": [
                {"author":"Miceli et al.","title":"Whistle-Blowing in Organizations","tags": ["defensive","reputation-conflict"]},
                {"author":"Brown et al.","title":"International Handbook on Whistleblowing Research","tags": ["jurisdiction-sensitive","high-context"]}
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
                {"author":"Grusky","title":"Social Stratification","tags": ["hidden-rules"]}
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
                {"author":"Gable","title":"The Hidden Curriculum","tags": ["hidden-rules"]},
                {"author":"Bourdieu","title":"Distinction","tags": ["hidden-rules","value-contested"]}
              ]
            },
            {
              "name": "印象管理与身份切换",
              "tags": ["practice-required","dual-use","high-context"],
              "books": [
                {"author":"Goffman","title":"The Presentation of Self in Everyday Life","tags": ["dual-use","hidden-rules"]},
                {"author":"Alim et al.","title":"Raciolinguistics","tags": ["high-context","value-contested"]}
              ]
            },
            {
              "name": "弱关系、引荐与社会网络",
              "tags": ["hidden-rules","dual-use","practice-required"],
              "books": [
                {"author":"Granovetter","title":"Getting a Job","tags": ["hidden-rules"]},
                {"author":"Burt","title":"Brokerage and Closure","tags": ["dual-use"]}
              ]
            },
            {
              "name": "精英再生产与社会流动",
              "tags": ["hidden-rules","reputation-conflict","value-contested"],
              "books": [
                {"author":"Khan","title":"Privilege","tags": ["hidden-rules","reputation-conflict"]},
                {"author":"Markovits","title":"The Meritocracy Trap","tags": ["value-contested","reputation-conflict"]}
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
                {"author":"Jowett & O'Donnell","title":"Propaganda & Persuasion","tags": ["dual-use","manipulation"]},
                {"author":"Ellul","title":"Propaganda","tags": ["manipulation","value-contested"]}
              ]
            },
            {
              "name": "说服、服从与行为影响",
              "tags": ["defensive","manipulation","dual-use"],
              "books": [
                {"author":"Cialdini","title":"Influence","tags": ["dual-use","manipulation"]},
                {"author":"Milgram","title":"Obedience to Authority","tags": ["trauma-sensitive","value-contested"]}
              ]
            },
            {
              "name": "骗局、信任利用与社会工程",
              "tags": ["defensive","manipulation","time-sensitive"],
              "books": [
                {"author":"Konnikova","title":"The Confidence Game","tags": ["defensive","manipulation"]},
                {"author":"Hadnagy","title":"Social Engineering: The Science of Human Hacking","tags": ["dual-use","time-sensitive"]}
              ]
            },
            {
              "name": "邪教、极端化与群体控制",
              "tags": ["defensive","manipulation","trauma-sensitive","value-contested"],
              "books": [
                {"author":"Lalich","title":"Bounded Choice","tags": ["defensive","manipulation"]},
                {"author":"Horgan","title":"The Psychology of Terrorism","tags": ["high-context","value-contested"]}
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
                {"author":"Taylor","title":"Health Psychology","tags": ["high-context"]}
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
                {"author":"Wood","title":"Good Habits, Bad Habits","tags": ["practice-required"]},
                {"author":"Gollwitzer & Bargh","title":"The Psychology of Action","tags": ["high-context"]}
              ]
            },
            {
              "name": "情绪识别与调节",
              "tags": ["practice-required","trauma-sensitive"],
              "books": [
                {"author":"Gross","title":"Handbook of Emotion Regulation","tags": ["practice-required","high-context"]},
                {"author":"Greenberger & Padesky","title":"Mind Over Mood","tags": ["practice-required"]}
              ]
            },
            {
              "name": "压力、倦怠与恢复",
              "tags": ["practice-required","conflict-of-interest","reputation-conflict"],
              "books": [
                {"author":"Maslach & Leiter","title":"The Truth About Burnout","tags": ["conflict-of-interest","reputation-conflict"]},
                {"author":"Nagoski & Nagoski","title":"Burnout","tags": ["practice-required"]}
              ]
            },
            {
              "name": "成瘾、复发与寻求帮助",
              "tags": ["practice-required","trauma-sensitive","high-context"],
              "books": [
                {"author":"Miller & Rollnick","title":"Motivational Interviewing","tags": ["practice-required","dual-use"]},
                {"author":"Szalavitz","title":"Unbroken Brain","tags": ["trauma-sensitive","value-contested"]}
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
                {"author":"Groopman","title":"How Doctors Think","tags": ["defensive","reputation-conflict"]},
                {"author":"Gigerenzer","title":"Risk Savvy","tags": ["defensive","practice-required"]}
              ]
            },
            {
              "name": "慢性病、残障与疾病经验",
              "tags": ["high-context","trauma-sensitive","value-contested"],
              "books": [
                {"author":"Carel","title":"Illness: The Cry of the Flesh","tags": ["high-context","value-contested"]},
                {"author":"Frank","title":"The Wounded Storyteller","tags": ["trauma-sensitive"]}
              ]
            },
            {
              "name": "家庭照护与照护者负担",
              "tags": ["practice-required","trauma-sensitive","high-context"],
              "books": [
                {"author":"Mace & Rabins","title":"The 36-Hour Day","tags": ["practice-required","time-sensitive"]},
                {"author":"Kleinman","title":"The Soul of Care","tags": ["high-context","trauma-sensitive"]}
              ]
            },
            {
              "name": "临终决定、死亡与哀伤",
              "tags": ["practice-required","trauma-sensitive","jurisdiction-sensitive","value-contested"],
              "books": [
                {"author":"Gawande","title":"Being Mortal","tags": ["trauma-sensitive","value-contested"]},
                {"author":"Worden","title":"Grief Counseling and Grief Therapy","tags": ["practice-required","trauma-sensitive"]}
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
                {"author":"Fisher, Ury & Patton","title":"Getting to Yes","tags": ["practice-required","dual-use"]},
                {"author":"Lax & Sebenius","title":"3-D Negotiation","tags": ["dual-use","hidden-rules"]}
              ]
            },
            {
              "name": "困难谈话与关系修复",
              "tags": ["practice-required","high-context","trauma-sensitive"],
              "books": [
                {"author":"Stone, Patton & Heen","title":"Difficult Conversations","tags": ["practice-required","high-context"]},
                {"author":"Rosenberg","title":"Nonviolent Communication","tags": ["practice-required","value-contested"]}
              ]
            },
            {
              "name": "冲突降级、调解与安全退出",
              "tags": ["defensive","practice-required","high-context"],
              "books": [
                {"author":"Mayer","title":"The Dynamics of Conflict: A Guide to Engagement and Intervention","tags": ["practice-required","high-context"]},
                {"author":"Ury","title":"The Third Side","tags": ["defensive","value-contested"]}
              ]
            },
            {
              "name": "同意、拒绝与个人边界",
              "tags": ["defensive","practice-required","trauma-sensitive","value-contested"],
              "books": [
                {"author":"Archard","title":"Sexual Consent","tags": ["value-contested","high-context","trauma-sensitive"]},
                {"author":"Cloud & Townsend","title":"Boundaries","tags": ["practice-required","value-contested"]}
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
                {"author":"Mikulincer & Shaver","title":"Attachment in Adulthood","tags": ["high-context"]},
                {"author":"Gottman & Silver","title":"The Seven Principles for Making Marriage Work","tags": ["practice-required"]}
              ]
            },
            {
              "name": "性沟通、欲望与亲密",
              "tags": ["practice-required","trauma-sensitive","value-contested"],
              "books": [
                {"author":"Nagoski","title":"Come as You Are","tags": ["practice-required","high-context"]},
                {"author":"Lehmiller","title":"The Psychology of Human Sexuality","tags": ["value-contested"]}
              ]
            },
            {
              "name": "分手、离婚与家庭重组",
              "tags": ["practice-required","jurisdiction-sensitive","trauma-sensitive"],
              "books": [
                {"author":"Emery","title":"The Truth About Children and Divorce","tags": ["trauma-sensitive","high-context"]},
                {"author":"Lebow et al.","title":"Treating the Difficult Divorce","tags": ["practice-required","jurisdiction-sensitive"]}
              ]
            },
            {
              "name": "育儿、家庭分工与代际关系",
              "tags": ["practice-required","high-context","value-contested"],
              "books": [
                {"author":"Bornstein","title":"Handbook of Parenting","tags": ["high-context","time-sensitive"]},
                {"author":"Lareau","title":"Unequal Childhoods","tags": ["hidden-rules","value-contested"]}
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
                {"author":"Mitnick","title":"The Art of Invisibility","tags": ["defensive","dual-use","time-sensitive"]},
                {"author":"CISA","title":"Secure Our World","tags": ["defensive","practice-required","time-sensitive"],"note":"持续更新的个人网络安全指南"}
              ]
            },
            {
              "name": "急救、灾害与家庭应急",
              "tags": ["defensive","practice-required","time-sensitive"],
              "books": [
                {"author":"American Red Cross","title":"First Aid/CPR/AED Participant's Manual","tags": ["defensive","practice-required","time-sensitive"]},
                {"author":"FEMA","title":"Are You Ready? An In-Depth Guide to Citizen Preparedness","tags": ["defensive","jurisdiction-sensitive","time-sensitive"]}
              ]
            },
            {
              "name": "胁迫控制、家暴与跟踪识别",
              "tags": ["defensive","manipulation","trauma-sensitive","jurisdiction-sensitive"],
              "books": [
                {"author":"Stark","title":"Coercive Control","tags": ["defensive","manipulation","trauma-sensitive"]},
                {"author":"Logan et al.","title":"Partner Stalking: How Women Respond, Cope, and Survive","tags": ["defensive","jurisdiction-sensitive","time-sensitive","trauma-sensitive"],"note":"2006年的美国研究；风险识别可借鉴，法律与服务信息须核对当地最新资料"}
              ]
            },
            {
              "name": "家庭维修、工具与维护判断",
              "tags": ["practice-required","defensive"],
              "books": [
                {"author":"Reader's Digest","title":"New Complete Do-It-Yourself Manual","tags": ["practice-required"]},
                {"author":"Black & Decker","title":"The Complete Photo Guide to Home Repair","tags": ["practice-required","time-sensitive"]}
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
                {"author":"Arendt","title":"Eichmann in Jerusalem","tags": ["value-contested","trauma-sensitive"]},
                {"author":"Kidder","title":"Moral Courage","tags": ["practice-required","reputation-conflict"]}
              ]
            },
            {
              "name": "共谋、责任与职业良知",
              "tags": ["conflict-of-interest","reputation-conflict","value-contested"],
              "books": [
                {"author":"Bovens","title":"The Quest for Responsibility","tags": ["conflict-of-interest","value-contested"]},
                {"author":"Bazerman & Tenbrunsel","title":"Blind Spots","tags": ["conflict-of-interest","reputation-conflict"]}
              ]
            },
            {
              "name": "死亡意识与人生意义",
              "tags": ["trauma-sensitive","value-contested","high-context"],
              "books": [
                {"author":"Frankl","title":"Man's Search for Meaning","tags": ["trauma-sensitive","value-contested"]},
                {"author":"Yalom","title":"Staring at the Sun","tags": ["trauma-sensitive","high-context"]}
              ]
            },
            {
              "name": "社区互助、照料与共同体",
              "tags": ["practice-required","high-context","value-contested"],
              "books": [
                {"author":"Ostrom","title":"Governing the Commons","tags": ["practice-required","high-context"]},
                {"author":"Putnam","title":"Bowling Alone","tags": ["hidden-rules","value-contested"]}
              ]
            }
          ]
        }
      ]
    }
  ]
};
