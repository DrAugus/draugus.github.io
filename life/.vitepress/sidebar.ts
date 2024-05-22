import { modifyTravelogue } from "./data/trip/travelogueToSidebar";
import { LinkName } from "./type";

const sidebarEat = [
    { text: '吃饭了', link: '/eat/' },
    { text: '零食', link: '/eat/snack' },
    { text: '做点什么吧', link: '/eat/cookbook' },
    { text: '真的不能吃', link: '/eat/block' },
];
const sidebarDaily = [
    // { text: '日常', link: '/daily/' },
    { text: '小猫', link: '/daily/cat' },
    { text: '日用价格', link: '/daily/goods-price' },
    { text: '买房吗', link: '/daily/house' },
    { text: '买车吗', link: '/daily/car' },
    { text: '办卡吗', link: '/daily/card' },
    { text: '户口', link: '/daily/hukou' },
    { text: '租房', link: '/daily/rent' },
    { text: '看剧', link: '/daily/entertainment' },
    { text: '通勤', link: '/daily/commuting' },
    { text: '月亮', link: '/daily/moon' },
    { text: '踩雷商品', link: '/daily/bad-product' },
    {
        text: 'Apple', collapsed: false, items: [
            { text: 'Apple官方日历订阅', link: '/daily/apple/calendar' },
            { text: 'iPhone', link: '/daily/apple/iphone' },
            { text: '评测', link: '/daily/apple/review' },
            // { text: '价格波动', link: '/daily/apple/price' },
            { text: '苹果究竟怎么了', link: '/daily/apple/reflect' },
            { text: '技术规格', link: '/daily/apple/specs' },
            { text: '设备价格', link: '/daily/apple/apple-price' },
            { text: '天才吧', link: '/daily/apple/genius-bar' },
            { text: 'iCloud', link: '/daily/apple/iCloud' },
            { text: 'Apple ID', link: '/daily/apple/id' },
        ]
    },
];
const sidebarTrip = [
    { text: '规划指南', link: '/trip/' },
    { text: '出门检查', link: '/trip/check' },
    { text: '旅行账单', link: '/trip/bill' },
    { text: '探索', link: '/trip/explore' },
    { text: '常住地', link: '/trip/permanent-residence' },

    {
        text: '出行', collapsed: false, items: [
            { text: '赶路日记', link: '/trip/rush-diary' },
            { text: '飞机', link: '/trip/airplane' },
            { text: '机场', link: '/trip/airport' },
            { text: '火车站', link: '/trip/railway' },   
            { text: '自驾游', link: '/trip/self-drive' },          
            { text: '随心飞', link: '/trip/suixinfei' },
            { text: '酒店', link: '/trip/hotel' },
        ]
    },

    {
        text: '出境', collapsed: false, items: [

            { text: '护照', link: '/trip/passport' },
            { text: '签证', link: '/trip/visa' },
            { text: '往来港澳通行证', link: '/trip/eep' },
            { text: '护照和签证的区别', link: '/trip/passport-vs-visa' },
            { text: '境外银行卡办理指南', link: '/trip/card' },
            { text: '境外手机卡', link: '/trip/phone-number' },

        ]
    },

];

const sidebarTripTravelogue = [
    { text: '游记', link: '/trip/travelogue/' },
]
    .concat(...modifyTravelogue());
const sidebarTripChina = [
    { text: '上海', link: '/trip/china/shanghai' },
    { text: '澳门', link: '/trip/china/macao' },
    { text: '北京', link: '/trip/china/beijing' },
    { text: '香港', link: '/trip/china/hongkong' },
    { text: '天津', link: '/trip/china/tianjin' },
    { text: '重庆', link: '/trip/china/chongqing' },

    {
        text: '江苏', collapsed: false, items: [
            { text: '苏州', link: '/trip/china/jiangsu/suzhou' },
            { text: '扬州', link: '/trip/china/jiangsu/yangzhou' },
            { text: '南京', link: '/trip/china/jiangsu/nanjing' },
            { text: '无锡', link: '/trip/china/jiangsu/wuxi' },
        ],
    },
    {
        text: '浙江', collapsed: false,
        items: [
            { text: '绍兴', link: '/trip/china/zhejiang/shaoxing' },
            { text: '温州', link: '/trip/china/zhejiang/wenzhou' },
            { text: '杭州', link: '/trip/china/zhejiang/hangzhou' },
            { text: '舟山', link: '/trip/china/zhejiang/zhoushan' },
            { text: '金华', link: '/trip/china/zhejiang/jinhua' },
            { text: '台州', link: '/trip/china/zhejiang/taizhou' },
        ],
    },

    {
        text: '广东', collapsed: false, items: [
            { text: '广东', link: '/trip/china/guangdong/' },
            { text: '深圳', link: '/trip/china/guangdong/shenzhen' },
            { text: '广州', link: '/trip/china/guangdong/guangzhou' },
            { text: '珠海', link: '/trip/china/guangdong/zhuhai' },
        ],
    },

    {
        text: '河南', collapsed: false, items: [
            { text: '开封', link: '/trip/china/henan/kaifeng' },
            { text: '郑州', link: '/trip/china/henan/zhengzhou' },
            { text: '洛阳', link: '/trip/china/henan/luoyang' },
        ],
    },
    {
        text: '陕西', collapsed: false, items: [
            { text: '西安', link: '/trip/china/shaanxi/xian' },
        ],
    },
    {
        text: '山西', collapsed: false, items: [
            { text: '太原', link: '/trip/china/shanxi/taiyuan' },
        ],
    },
    {
        text: '甘肃', collapsed: false, items: [
            { text: '甘肃', link: '/trip/china/gansu/' },
            { text: '兰州', link: '/trip/china/gansu/lanzhou' },
        ],
    },


    {
        text: '黑龙江', collapsed: false, items: [
            { text: '哈尔滨', link: '/trip/china/heilongjiang/haerbing' },
        ],
    },
    {
        text: '吉林', collapsed: false, items: [
            { text: '长春', link: '/trip/china/jilin/changchun' },
        ],
    },
    {
        text: '辽宁', collapsed: false, items: [
            { text: '大连', link: '/trip/china/liaoning/dalian' },
            { text: '沈阳', link: '/trip/china/liaoning/shenyang' },
        ],
    },


    {
        text: '福建', collapsed: false, items: [
            { text: '福州', link: '/trip/china/fujian/fuzhou' },
            { text: '厦门', link: '/trip/china/fujian/xiamen' },
        ],
    },
    {
        text: '湖北', collapsed: false, items: [
            { text: '武汉', link: '/trip/china/hubei/wuhan' },
        ],
    },
    {
        text: '湖南', collapsed: false, items: [
            { text: '长沙', link: '/trip/china/hunan/changsha' },
        ],
    },

    {
        text: '云南', collapsed: false, items: [
            { text: '大理', link: '/trip/china/yunnan/dali' },
            { text: '西双版纳', link: '/trip/china/yunnan/xishuangbanna' },
            { text: '昆明', link: '/trip/china/yunnan/kunming' },
            { text: '丽江', link: '/trip/china/yunnan/lijiang' },
        ],
    },
    {
        text: '广西', collapsed: false, items: [
            { text: '柳州', link: '/trip/china/guangxi/liuzhou' },
            { text: '南宁', link: '/trip/china/guangxi/nanning' },
        ],
    },
    {
        text: '四川', collapsed: false, items: [
            { text: '四川', link: '/trip/china/sichuan/' },
            { text: '成都', link: '/trip/china/sichuan/chengdu' },
        ],
    },
    {
        text: '贵州', collapsed: false, items: [
            { text: '贵阳', link: '/trip/china/guizhou/guiyang' },
        ],
    },

    {
        text: '海南', collapsed: false, items: [
            { text: '海口', link: '/trip/china/hainan/haikou' },
            { text: '三亚', link: '/trip/china/hainan/sanya' },
        ],
    },

];
const sidebarTripAboard = [
    { text: '世界', link: '/trip/abroad/' },
    {
        text: '欧洲',
        collapsed: false,
        items: [
            { text: '英国', link: '/trip/abroad/europe/england' },
        ],
    },
    {
        text: '亚洲',
        collapsed: false,
        items: [
            { text: '韩国', link: '/trip/abroad/asia/korean' },
            { text: '日本', link: '/trip/abroad/asia/japan' },
        ],
    },
];
const sidebarArtsArticle = [
    { text: '猫', link: '/arts/article/猫' },
    { text: '庄子·秋水', link: '/arts/article/庄子·秋水' },
    { text: '归去来兮辞', link: '/arts/article/归去来兮辞' },
    { text: '道德经', link: '/arts/article/道德经' },
    { text: '逍遥游·北冥有鱼', link: '/arts/article/逍遥游·北冥有鱼' },
    { text: '聪明人和傻子和奴才', link: '/arts/article/聪明人和傻子和奴才' },
    { text: 'A Cup of Tea', link: '/arts/article/a-cup-of-tea' },
];
const sidebarArtsSociety = [
    { text: '中国人口', link: '/arts/society/population-cn' },
];
const sidebarArtsHistory = [
    { text: '中国历史', link: '/arts/history/china' },
    { text: '社会主义主要矛盾', link: '/arts/history/tmc' },
    { text: '战争', link: '/arts/history/war' },
    { text: '古人说话也用文言文吗', link: '/arts/history/wenyan' },
    {
        text: '皇室',
        collapsed: true,
        items: [
            { text: '温莎', link: '/arts/history/royal/windsor' },
        ],
    },
    {
        text: '正史', collapsed: false,
        items: [
            { text: '介绍', link: '/arts/history/orthodox/' },
        ],
    },
];
const sidebarArtsSpeech = [
    { text: 'Questionable Advice from One Very Lucky Berkeley Engineer', link: '/arts/speech/craig-federighi' },
];
const sidebarArtsLang = [
    { text: '中文', link: '/arts/language/chinese' },
    { text: '英语单词', link: '/arts/language/english-words' },
    { text: '英语简单句', link: '/arts/language/english' },
    { text: '法语', link: '/arts/language/french' },
    { text: '德语', link: '/arts/language/german' },
    { text: '日语', link: '/arts/language/japanese' },
    { text: '意大利语', link: '/arts/language/italian' },
    {
        text: '英语专辑',
        collapsed: false,
        items: [
            { text: '常用电话提示音', link: '/arts/language/english/dial-number' },
            { text: '词组 俚语', link: '/arts/language/english/phrase' },
        ],
    },
    { text: '人名汇总', link: '/arts/language/name' },
    { text: '发音体系', link: '/arts/language/pronunciation' },
    { text: '相似', link: '/arts/language/similar' },
];
const sidebarArtsXiwen = [
    { text: '汤誓', link: '/arts/xiwen/汤誓' },
    { text: '牧誓', link: '/arts/xiwen/牧誓' },
    { text: '甘誓', link: '/arts/xiwen/甘誓' },
    { text: '费誓', link: '/arts/xiwen/费誓' },
    { text: '檄蜀文', link: '/arts/xiwen/檄蜀文' },
    { text: '兴师檄文', link: '/arts/xiwen/兴师檄文' },
    { text: '吕相绝秦', link: '/arts/xiwen/吕相绝秦' },
    { text: '檄告楚相', link: '/arts/xiwen/檄告楚相' },
    { text: '白朗告示', link: '/arts/xiwen/白朗告示' },
    { text: '讨王莽檄', link: '/arts/xiwen/讨王莽檄' },
    { text: '讨粤匪檄', link: '/arts/xiwen/讨粤匪檄' },
    { text: '谕巴蜀檄', link: '/arts/xiwen/谕巴蜀檄' },
    { text: '剿兵安民檄', link: '/arts/xiwen/剿兵安民檄' },
    { text: '奉天讨胡檄', link: '/arts/xiwen/奉天讨胡檄' },
    { text: '张献忠之檄', link: '/arts/xiwen/张献忠之檄' },
    { text: '管仲檄楚使', link: '/arts/xiwen/管仲檄楚使' },
    { text: '为袁绍檄豫州', link: '/arts/xiwen/为袁绍檄豫州' },
    { text: '延平民人告白', link: '/arts/xiwen/延平民人告白' },
    { text: '普告同胞檄稿', link: '/arts/xiwen/普告同胞檄稿' },
    { text: '檄吴将校部曲', link: '/arts/xiwen/檄吴将校部曲' },
    { text: '谕黑旗将士檄', link: '/arts/xiwen/谕黑旗将士檄' },
    { text: '钦赐督辅手敕', link: '/arts/xiwen/钦赐督辅手敕' },
    { text: '隋文帝伐陈檄', link: '/arts/xiwen/隋文帝伐陈檄' },
    { text: '为李密檄洛州文', link: '/arts/xiwen/为李密檄洛州文' },
    { text: '宁波众义民公启', link: '/arts/xiwen/宁波众义民公启' },
    { text: '朱元璋北伐檄文', link: '/arts/xiwen/朱元璋北伐檄文' },
    { text: '第二次讨袁宣言', link: '/arts/xiwen/第二次讨袁宣言' },
    { text: '郑畋传檄天下文', link: '/arts/xiwen/郑畋传檄天下文' },
    { text: '为徐敬业讨武曌檄', link: '/arts/xiwen/为徐敬业讨武曌檄' },
    { text: '为窦建德檄秦王文', link: '/arts/xiwen/为窦建德檄秦王文' },
    { text: '台湾人民抗战檄文', link: '/arts/xiwen/台湾人民抗战檄文' },
    { text: '吴王刘濞遗诸侯书', link: '/arts/xiwen/吴王刘濞遗诸侯书' },
    { text: '扑灭异端邪教公启', link: '/arts/xiwen/扑灭异端邪教公启' },
    { text: '李自成檄明臣庶文', link: '/arts/xiwen/李自成檄明臣庶文' },
    { text: '杨复光露布献捷文', link: '/arts/xiwen/杨复光露布献捷文' },
    { text: '中华民国军起义檄文', link: '/arts/xiwen/中华民国军起义檄文' },
    { text: '中国革命军大元帅檄', link: '/arts/xiwen/中国革命军大元帅檄' },
    { text: '移河南郡县讨刘豫檄', link: '/arts/xiwen/移河南郡县讨刘豫檄' },
    { text: '三元里等乡痛骂鬼子词', link: '/arts/xiwen/三元里等乡痛骂鬼子词' },
    { text: '大顺军传牌山西各郡县', link: '/arts/xiwen/大顺军传牌山西各郡县' },
    { text: '就陆海军大元帅职宣言', link: '/arts/xiwen/就陆海军大元帅职宣言' },
    { text: '捻军盟主张乐行的布告', link: '/arts/xiwen/捻军盟主张乐行的布告' },
    { text: '中华民国讨逆军檄告天下', link: '/arts/xiwen/中华民国讨逆军檄告天下' },
    { text: '为李密檄荥阳守郇王庆文', link: '/arts/xiwen/为李密檄荥阳守郇王庆文' },
    { text: '杨玄感敦促樊子盖归义书', link: '/arts/xiwen/杨玄感敦促樊子盖归义书' },
    { text: '大清国摄政王多尔衮南下告示', link: '/arts/xiwen/大清国摄政王多尔衮南下告示' },
    { text: '宣谕云、贵文武官员军民人等诏', link: '/arts/xiwen/宣谕云、贵文武官员军民人等诏' },
    { text: '尽忠报国全粤义民申谕英夷告示', link: '/arts/xiwen/尽忠报国全粤义民申谕英夷告示' },
    { text: '谕南京等处文武官员军民人等告示', link: '/arts/xiwen/谕南京等处文武官员军民人等告示' },
];
const sidebarCourse = [
    {  
        text: '哲学', collapsed: false, items: [  
            { text: '哲学', link: '/course/philosophy/' },  
        ]  
    },  {
        text: '经济学', collapsed: false, items: [
            { text: '微观经济学', link: '/course/economics/microeconomics' },
        ]
    },{  
        text: '法学', collapsed: false, items: [  
            { text: '法学', link: '/course/law/' },  
        ]  
    },  {  
        text: '教育学', collapsed: false, items: [  
            { text: '教育学', link: '/course/education/' },  
        ]  
    },   {  
        text: '文学', collapsed: false, items: [  
            { text: '文学', link: '/course/literature/' },  
        ]  
    },  {  
        text: '历史学', collapsed: false, items: [  
            { text: '历史学', link: '/course/history/' },  
        ]  
    },   {
        text: '理学', collapsed: false, items: [
            { text: '离散数学', link: '/course/science/discrete-math' },
            { text: '概率论', link: '/course/science/probability-theory' },
            { text: '线性代数', link: '/course/science/linear-algebra' },
            { text: '微积分', link: '/course/science/calculus' },
        ]
    }, {
        text: '工学', collapsed: false, items: [
            { text: '数据结构与算法', link: '/course/engineering/dsa' },
        ]
    },{  
        text: '农学', collapsed: false, items: [  
            { text: '农学', link: '/course/agronomy/' },  
        ]  
    },   
    {  
        text: '医学', collapsed: false, items: [  
            { text: '医学', link: '/course/medicine/' },  
        ]  
    },    
    {  
        text: '军事学', collapsed: false, items: [  
            { text: '军事学', link: '/course/military-science/' },  
        ]  
    },   
    {  
        text: '管理学', collapsed: false, items: [  
            { text: '管理学', link: '/course/management/' },  
        ]  
    },   {
        text: '艺术学', collapsed: false, items: [
            { text: '乐理', link: '/course/art/music_theory' },
            { text: '连音', link: '/course/art/tuplet' },]
    }
];
const sidebarCodeOS = [
    {
        text: 'MacOS', collapsed: false, items: [
            { text: 'Mac Primary', link: '/code/os/macos/base' },
            { text: 'Solution', link: '/code/os/macos/sol' },
        ]
    },
    {
        text: 'Linux', collapsed: false, items: [
            { text: 'Install', link: '/code/os/linux/install' },
            { text: 'GDB', link: '/code/os/linux/gdb' },
            { text: 'Linux 系统分类', link: '/code/os/linux/sys_category' },
            { text: '查看 Linux 的基本信息', link: '/code/os/linux/sys_base_info' },
            { text: 'Linux 问题收集', link: '/code/os/linux/qa' },
            { text: 'Linux 记录  ', link: '/code/os/linux/README' },
            { text: 'CMD', link: '/code/os/linux/command' },
            { text: '指南', link: '/code/os/linux/guide' },
        ]
    },
    {
        text: 'Windows', collapsed: false, items: [
            { text: 'Chocolatey', link: '/code/os/windows/chocolatey' },
            { text: 'WSL', link: '/code/os/windows/wsl' },
            { text: 'VirtualBox', link: '/code/os/windows/VirtualBox' },
            { text: 'CMD 指南', link: '/code/os/windows/cmd' },
            { text: 'Windows11 更新纪要', link: '/code/os/windows/windows11-update' },
            { text: '壁纸', link: '/code/os/windows/wallpaper' },
        ]
    },
];
const sidebarCodeAPI = [
    { text: 'API', link: '/code/api/' },
    { text: 'Wikipedia', link: '/code/api/wikipedia' },
    { text: 'mihoyo', link: '/code/api/mihoyo' },
    { text: '高德地图', link: '/code/api/amap' },
];
const sidebarCodeNotes = [
    { text: '指南', link: '/code-notes/' },
    { text: '配环境', link: '/code-notes/nipeima' },
    {
        text: '编辑器/开发环境', collapsed: false, items: [
            { text: 'VSCode', link: '/code-notes/dev-env/vscode' },
            { text: 'Xcode', link: '/code-notes/dev-env/xcode' },
            { text: 'JetBrains', link: '/code-notes/dev-env/jetbrains' },
            { text: 'Cocos', link: '/code-notes/dev-env/cocos' },
        ],
    }, {
        text: '编译', collapsed: false, items: [
            { text: 'Compile', link: '/code-notes/compile/' },
            { text: 'gcc', link: '/code-notes/compile/gcc' },
            { text: 'Makefile', link: '/code-notes/compile/Makefile' },
            { text: 'CMakeLists', link: '/code-notes/compile/CMakeLists' },
        ],
    }, {
        text: '构建/持续集成', collapsed: false, items: [
            { text: 'Docker', link: '/code-notes/build/docker' },
            { text: 'Jenkins', link: '/code-notes/build/Jenkins' },
            { text: 'Mergify', link: '/code-notes/build/mergify' },
            { text: 'Vercel', link: '/code-notes/build/vercel' },
        ],
    }, {
        text: '版本控制', collapsed: false, items: [
            { text: 'Git', link: '/code-notes/version-ctrl/git' },
            { text: 'GitHub', link: '/code-notes/version-ctrl/github' },
            { text: 'Gitlab', link: '/code-notes/version-ctrl/gitlab' },
            { text: 'svn', link: '/code-notes/version-ctrl/svn' },
        ],
    }, {
        text: '命令行工具', collapsed: false, items: [
            { text: 'fish cmd', link: '/code-notes/cmd-line-tools/fish' },
            { text: 'Tabby', link: '/code-notes/cmd-line-tools/tabby' },
            { text: 'XShell', link: '/code-notes/cmd-line-tools/xshell' },
        ],
    }, {
        text: '文本编辑', collapsed: false, items: [
            { text: 'Markdown', link: '/code-notes/text-edit/markdown' },
            { text: 'vim', link: '/code-notes/text-edit/vim' },
        ],
    }, {
        text: 'OpenAI', collapsed: false, items: [
            { text: 'OpenAI', link: '/code-notes/openai/' },
            { text: 'ChatGPT', link: '/code-notes/openai/chatgpt' },
        ],
    }, {
        text: '杂项', collapsed: false, items: [
            { text: 'RBAC', link: '/code-notes/others/rbac' },
            { text: 'Excel', link: '/code-notes/others/excel' },]
    },
    {
        text: '一些工具', collapsed: false, items: [
            { text: 'Algolia', link: '/code-notes/tools/algolia' },
            { text: 'The Movie Database(TMDB)', link: '/code-notes/tools/tmdb' },
            { text: 'gitalk 评论接入教程', link: '/code-notes/tools/gitalk' },
            { text: 'ffmpeg', link: '/code-notes/tools/ffmpeg' },
        ],
    },
];
const sidebarCodeDSA = [
    { text: 'QA', link: '/code/dsa/qa' },
    { text: '递归', link: '/code/dsa/recursion' },
    { text: '算法与数据结构', link: '/code/dsa/' },
    { text: '复杂度', link: '/code/dsa/complexity' },
    {
        text: 'Leetcode', collapsed: false, items: [
            { text: 'LeetCode', link: '/code/dsa/leetcode/' },
            { text: 'LC1114 解题方案', link: '/code/dsa/leetcode/lc-1114' },
        ]
    },
    {
        text: '例子', collapsed: false, items: [
            { text: '基于权重的随机选择算法', link: '/code/dsa/eg/weighted-random-choice' },
        ]
    },
    {
        text: 'Linear', collapsed: false, items: [
            { text: '线性结构', link: '/code/dsa/linear/' },
            { text: 'QA', link: '/code/dsa/linear/qa' },
            { text: 'Stack', link: '/code/dsa/linear/stack' },
            { text: 'Array', link: '/code/dsa/linear/array' },
            { text: 'Heap', link: '/code/dsa/linear/heap' },
            { text: 'Linked list', link: '/code/dsa/linear/linked-list' },
            { text: 'Queue', link: '/code/dsa/linear/queue' },
        ]
    },
    {
        text: 'Collection', collapsed: false, items: [
            { text: '集合结构', link: '/code/dsa/collection/' },
            { text: 'QA', link: '/code/dsa/collection/qa' },
            { text: 'Hash Table', link: '/code/dsa/collection/hash' },
        ]
    },
    {
        text: 'Tree', collapsed: false, items: [
            { text: '树形结构', link: '/code/dsa/tree/' },
            { text: 'QA', link: '/code/dsa/tree/qa' },
            { text: 'Rb tree', link: '/code/dsa/tree/rb-tree' },
            { text: 'Trie', link: '/code/dsa/tree/trie' },
            { text: 'B tree', link: '/code/dsa/tree/b-tree' },
            { text: 'Union-find', link: '/code/dsa/tree/union-find' },
            { text: 'Balanced Tree', link: '/code/dsa/tree/balanced-tree' },
        ]
    },
    {
        text: 'Graph', collapsed: false, items: [
            { text: '图形结构', link: '/code/dsa/graph/' },
            { text: 'QA', link: '/code/dsa/graph/qa' },
        ]
    },
];
const sidebarCodeInterview = [
    { text: '基础知识', link: '/code/interview/basin' },
    { text: '程序设计', link: '/code/interview/program' },
    { text: '编译', link: '/code/interview/compile' },
    { text: '算法与数据结构', link: '/code/interview/dsa' },
    { text: '数据库', link: '/code/interview/db' },
    { text: '操作系统', link: '/code/interview/os' },
    { text: '计算机网络', link: '/code/interview/network' },
    { text: '系统设计', link: '/code/interview/sys-design' },
    { text: '非技术问题', link: '/code/interview/non-tech' },
];
const sidebarCodeCpp = [
    { text: '特性', link: '/code/cpp/' },
    { text: '代码风格', link: '/code/cpp/style' },
    { text: '复杂声明', link: '/code/cpp/complex-declaration' },
    { text: 'printf', link: '/code/cpp/printf' },
    { text: '程序题', link: '/code/cpp/code' },
    { text: 'C 与 C++', link: '/code/cpp/c-cpp-diff' },
    {
        text: 'concept', collapsed: false, items: [
            { text: '类', link: '/code/cpp/concept/class' },
            { text: '引用', link: '/code/cpp/concept/reference' },
            { text: '堆栈 内存', link: '/code/cpp/concept/stack_memory' },
            { text: 'const', link: '/code/cpp/concept/const' },
            { text: '指针', link: '/code/cpp/concept/pointer' },
            { text: '原子', link: '/code/cpp/concept/atomic' },
            { text: '虚函数', link: '/code/cpp/concept/virtual' },
            { text: '概念辨析', link: '/code/cpp/concept/' },
            { text: '并发', link: '/code/cpp/concept/concurrent' },
            { text: '异常', link: '/code/cpp/concept/exception' },
            { text: '运算符', link: '/code/cpp/concept/operator' },
            { text: 'lambda', link: '/code/cpp/concept/lambda' },
        ]
    }, {
        text: 'tips', collapsed: false, items: [
            { text: 'check OS with a preprocessor directive', link: '/code/cpp/tips/check-os' },
            { text: '遇到的问题速查', link: '/code/cpp/tips/qa' },
            { text: 'base', link: '/code/cpp/tips/base' },
            { text: '一些要点', link: '/code/cpp/tips/tip' },
        ]
    }, {
        text: 'thread-mutex', collapsed: false, items: [
            { text: 'Threads and Mutexes', link: '/code/cpp/thread-mutex/threads-and-mutexes' },
            { text: '各种锁', link: '/code/cpp/thread-mutex/mutex' },
            { text: 'Thread', link: '/code/cpp/thread-mutex/thread' },
            { text: '线程 锁', link: '/code/cpp/thread-mutex/' },
            { text: '4 Easy Tips for Using Threads and Mutexes in C++', link: '/code/cpp/thread-mutex/4-easy-tips-on-using-threads-and-mutexes-in-cpp' },
        ]
    },
];
const sidebarCodeDB = [
    { text: 'SQL', link: '/code/db/sql' },
    { text: 'ODPS', link: '/code/db/odps' },
    { text: 'DB2', link: '/code/db/db2' },
    { text: '达梦8', link: '/code/db/dameng8' },
    { text: 'mongoDB', link: '/code/db/mongoDB' },
];
const sidebarCodeProtocol = [
    { text: 'CAN FD', link: '/code/protocol/can-fd' },  
];
const sidebarCodeLibs = [
    { text: 'all libs', link: '/code/libs/' },
    { text: 'STL', link: '/code/libs/stl' },
    { text: 'Boost', link: '/code/libs/boost' },
    { text: 'LuaJIT', link: '/code/libs/luajit' },
    { text: 'protobuf', link: '/code/libs/protobuf' },
    { text: 'cppzmq', link: '/code/libs/cppzmq' },
    { text: 'libevent', link: '/code/libs/libevent' },
    { text: 'libuv', link: '/code/libs/libuv' },
    { text: 'RapidJSON', link: '/code/libs/rapidjson' },
    { text: 'actor', link: '/code/libs/actor' },
    { text: '内存检测', link: '/code/libs/asan' },
    { text: 'OpenGL', link: '/code/libs/opengl' },  
];
const sidebarCodeFrontEnd = [
    { text: 'Sol', link: '/code/front-end/sol' },
    { text: 'web tools', link: '/code/front-end/webtools' },
    { text: '公共知识', link: '/code/front-end/public' },
    { text: 'React Native', link: '/code/front-end/react-native' },
    { text: 'css', link: '/code/front-end/css' },
    { text: '前端', link: '/code/front-end/qa' },
    { text: 'vite', link: '/code/front-end/vite' },
    { text: 'Vue', link: '/code/front-end/vue' },
    { text: 'VuePress', link: '/code/front-end/vuepress' },
    { text: 'Vitepress', link: '/code/front-end/vitepress' },
    { text: 'Typescript', link: '/code/front-end/typescript' },
    { text: 'Javascript', link: '/code/front-end/javascript' },
    { text: 'Next.js', link: '/code/front-end/nextjs' },
    { text: 'Nuxt', link: '/code/front-end/nuxt' },
];
const sidebarCodeProgram = [
    {
        text: '未来', collapsed: false, items: [
            { text: 'Prepare', link: '/code/program/future/prepare' },
            { text: 'Future and Goal', link: '/code/program/future/future' },
            { text: '题库每日', link: '/code/program/future/practice' },
        ]
    },
    {
        text: '编程语言', collapsed: false, items: [
            { text: '编码习惯', link: '/code/program/lang/habit' },
            { text: 'Python', link: '/code/program/lang/python' },
            { text: 'Rust', link: '/code/program/lang/rust' },
            { text: 'Lua', link: '/code/program/lang/lua' },
            { text: 'Shell', link: '/code/program/lang/shell' },
            { text: '正则表达式', link: '/code/program/lang/regex' },
        ]
    },
    { text: '配环境', link: '/code/program/config-env' },
    { text: '疑难排查', link: '/code/program/problems' },
    { text: '瞎玩', link: '/code/program/stroll' },
    { text: '一些有的没的', link: '/code/program/others' },
    {
        text: '分布式', collapsed: false, items: [
            { text: 'Raft论文', link: '/code/program/distributed/raft' },
            { text: 'PAXOS', link: '/code/program/distributed/paxos' },
            { text: 'refer', link: '/code/program/distributed/kafka/refer' },
        ]
    },
];
const sidebarCodeShock = [
    { text: '小妙招', link: '/code/shock/clue' },
    { text: '小外包', link: '/code/shock/outsourcing-co' },
];
const sidebarCodeSysDesign = [  
    { text: '设计模式', link: '/code/sys-design/design-pattern' },
    { text: 'Reactor', link: '/code/sys-design/reactor' },
];
const sidebarCodeKernel = [
    { text: 'epoll', link: '/code/kernel/epoll' },
];
const sidebarCodeML = [
    { text: 'BERT', link: '/code/protocol/bert' }];

const sidebarPursuingEducation = [
    { text: '高考', link: '/pursuing-education/gaokao' },
];
const sidebarStudy = [
    { text: '随便学学', link: '/study/' },
    { text: '散篇1', link: '/study/temp1' },
    { text: '散篇2', link: '/study/temp2' },
    { text: '痛经', link: '/study/rambling/dysmenorrhoea' },
    { text: '电网', link: '/study/rambling/state-grid' },
    { text: '锻炼', link: '/study/rambling/exercise' },
    { text: '梅花 vs 桃花 vs 樱花', link: '/study/rambling/flower' },
    { text: '学位服', link: '/study/rambling/academic-dress' },
    { text: '女人相亲惯用套路', link: '/study/rambling/blind-date-routine-skill' },
    { text: '中国有14亿人 而我还是单身', link: '/study/rambling/bachelor' },
    { text: '身份证', link: '/study/rambling/id_card' },
];
const sidebarCareer = [
    { text: '简历', link: '/career/cv' },
    { text: '年度报税', link: '/career/tax' },
    { text: '互联网工作记录', link: '/career/record-net-work' },
    { text: '小小互联网震撼', link: '/career/net' },
    { text: '养老金', link: '/career/pension' },
    { text: '社保', link: '/career/social-security' },
    { text: '个人档案 ', link: '/career/personal-profile' },
    { text: '人社部', link: '/career/mohrss' },
    { text: '其他职业', link: '/career/others' },
    {
        text: '证书', collapsed: false, items: [
            { text: '软考高级系统架构', link: '/career/certificate/ruankao-high-lv' },
            { text: '教师资格证', link: '/career/certificate/ntce' },
            { text: '全国会计专业技术资格', link: '/career/certificate/cpa' },
            { text: '公务员考试', link: '/career/certificate/gwy' },
        ]
    },
    {
        text: '亚马逊', collapsed: false, items: [
            { text: '领导力准则 Leadership Principles', link: '/career/amazon/leadership-principles' },
        ]
    },
    {
        text: '谷歌', collapsed: false, items: [
            { text: 'Google GCA interviews (what to expect & how to prepare)', link: '/career/google/gca' },
        ]
    },
];


const sidebarThought = [
    { text: '想法', link: '/thought/' },
    { text: '未来', link: '/thought/future' },
    { text: '90 后都经历了什么', link: '/thought/90s' },
    { text: '这又是什么呢', link: '/thought/temp' },
    { text: '活得像一个机器人', link: '/thought/life-bot' },
    { text: '怜悯', link: '/thought/pity' },
    { text: '结婚', link: '/thought/marry' },
    { text: '男女关系', link: '/thought/relationship-m-w' },
    { text: '女人', link: '/thought/woman' },
    { text: '命运的织机', link: '/thought/portended-fate' },
    { text: '血腥暴力影视被和谐的感想  ', link: '/thought/restricted-film' },
];

const sidebarGrumbling = [
    { text: '一次淘宝经历', link: '/grumbling/1' },
    { text: '牢骚', link: '/grumbling/' },
    { text: '喷子', link: '/grumbling/2' },
];


const sidebarAccident = [
    { text: '2018年重庆万州公交车坠江事故', link: '/accident/2018-Chongqing-bus-crash' },
    { text: '2022年中国东方航空5735号班机空难', link: '/accident/2022-China-Eastern-Airlines-Flight-5735' },
    { text: '事故', link: '/accident/' },
    { text: '2020年贵州公交坠湖事故', link: '/accident/2020-Anshun-bus-crash' },
];

const sidebarFunny = [
    { text: '有生之年系列', link: '/funny/lifetime_series' },
    { text: '西方文明为什么在近代会超越东方文明', link: '/funny/1' },
    { text: '禁放烟花爆竹', link: '/funny/no-fireworks' },
    { text: '三年疫情创造的246个名词', link: '/funny/covid-in-cn' },
    { text: '调休', link: '/funny/tiaoxiu' },
];

const recordPrefix = '/disease/record/';
const sidebarDisease = [
    { text: '病痛', link: '/disease/' },
    { text: '胃镜', link: '/disease/gastroscopy' },
    { text: '眼睛变化', link: '/disease/eyes' },
    { text: '牙', link: '/disease/tooth' },
    {
        text: '记录-自己的', collapsed: false, items: [
            { text: '2024/02/23 发烧', link: `${recordPrefix}/self/2024-02-23` },
            { text: '2024/01/25 感冒', link: `${recordPrefix}/self/2024-01-25` },
            { text: '2022/12/21 发烧', link: `${recordPrefix}/self/2022-12-21` },
            { text: '2022/11/28 感冒', link: `${recordPrefix}/self/2022-11-28` },
            { text: '2022/06/14 中暑', link: `${recordPrefix}/self/2022-06-14` },
        ]
    },
    {
        text: '记录-别人的', collapsed: false, items: [
            { text: '2022/12/22 发烧', link: `${recordPrefix}/others/2022-12-22` },
            { text: '2022/06/24 扁桃体炎', link: `${recordPrefix}/others/2022-06-24` },
        ]
    },
];


export const sidebar = {
    '/eat/': sidebarEat,
    '/daily/': sidebarDaily,
    // 
    '/trip/': sidebarTrip,
    '/trip/travelogue/': sidebarTripTravelogue,
    // '/trip/china/': sidebarTripChina,
    // '/trip/abroad/': sidebarTripAboard,
    // arts
    '/arts/article/': sidebarArtsArticle,
    '/arts/society/': sidebarArtsSociety,
    '/arts/history/': sidebarArtsHistory,
    '/arts/language/': sidebarArtsLang,
    '/arts/speech/': sidebarArtsSpeech,
    '/arts/xiwen/': sidebarArtsXiwen,
    //
    '/course/': sidebarCourse,
    //
    '/code/os/': sidebarCodeOS,
    '/code/api/': sidebarCodeAPI,
    '/code-notes/': sidebarCodeNotes,
    '/code/dsa/': sidebarCodeDSA,
    '/code/interview/': sidebarCodeInterview,
    '/code/cpp/': sidebarCodeCpp,
    '/code/db/': sidebarCodeDB,
    '/code/protocol/': sidebarCodeProtocol,
    '/code/libs/': sidebarCodeLibs,
    '/code/front-end/': sidebarCodeFrontEnd,
    '/code/program/': sidebarCodeProgram,
    '/code/shock/': sidebarCodeShock,
    '/code/sys-design/': sidebarCodeSysDesign,
    '/code/kernel/': sidebarCodeKernel,  
    '/code/ml/': sidebarCodeML,  
    //
    '/pursuing-education/': sidebarPursuingEducation,
    '/study/': sidebarStudy,
    '/career/': sidebarCareer,
    '/thought/': sidebarThought,
    '/grumbling/': sidebarGrumbling,
    // 待定
    '/accident/': sidebarAccident,
    '/funny/': sidebarFunny,
    '/disease/': sidebarDisease,

};
