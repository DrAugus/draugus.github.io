import { COURSE_NOTES, COURSE_STRUCTURE, COURSES } from "./data/course";
import { setJourneySidebar } from "./data/trip/journey";
import { setTripPlaceSidebar } from "./data/trip/place";
import { setTravelogueSidebar } from "./data/trip/travelogue";

const prefixArticle = '/article';
const prefixHistory = '/history';
const prefixLang = '/language';
const prefixXiwen = '/xiwen';
const prefixDiseaseRecord = '/disease/record';
const prefixCommandTools = '/tools/cmd-line-tools';
const sidebarEat = [
    { text: '吃饭了', link: '/eat/' },
    { text: '零食', link: '/eat/snack' },
    { text: '做点什么吧', link: '/eat/cookbook' },
    { text: '真的不能吃', link: '/eat/block' },
];
const sidebarDaily = [
    // { text: '日常', link: '/daily/' },
    { text: '小猫', link: '/daily/cat' },
    {
        text: '日用消费', collapsed: false, items: [
            { text: '日用价格', link: '/daily/goods-price' },
            { text: '踩雷商品', link: '/daily/bad-product' },
            { text: '穿着尺寸', link: '/daily/cloth' },
        ]
    }, {
        text: '居住房产', collapsed: false, items: [
            { text: '户口', link: '/daily/hukou' },
            { text: '买房吗', link: '/daily/house' },
            { text: '租房', link: '/daily/rent' },
        ]
    }, {
        text: '出行交通', collapsed: false, items: [
            { text: '买车吗', link: '/daily/car' },
            { text: '通勤', link: '/daily/commuting' },
        ]
    }, {
        text: '娱乐休闲', collapsed: false, items: [
            { text: '办卡吗', link: '/daily/card' },
            { text: '看剧', link: '/daily/entertainment' },
            { text: '月亮', link: '/daily/moon' },
        ]
    }, {
        text: 'Apple', collapsed: false, items: [
            { text: '已购设备价格', link: '/daily/apple/price' },
            { text: '官方日历订阅', link: '/daily/apple/calendar' },
            { text: 'iPhone', link: '/daily/apple/iphone' },
            { text: '评测', link: '/daily/apple/review' },
            // { text: '价格波动', link: '/daily/apple/price' },
            { text: '苹果究竟怎么了', link: '/daily/apple/reflect' },
            { text: '技术规格', link: '/daily/apple/specs' },
            { text: '天才吧', link: '/daily/apple/genius-bar' },
            { text: 'iCloud', link: '/daily/apple/iCloud' },
            { text: 'Apple ID', link: '/daily/apple/id' },
        ]
    }, {
        text: '电器使用', collapsed: false, items: [
            { text: '电视', link: '/daily/appliance/tv' },
            { text: '冰箱', link: '/daily/appliance/fridge' },
        ]
    }
];
const sidebarTrip = [
    { text: '规划指南', link: '/trip/' },
    { text: '出门检查', link: '/trip/check' },
    { text: '旅行账单', link: '/trip/bill' },
    { text: '探索', link: '/trip/explore' },
    { text: '常住地', link: '/trip/permanent-residence' },

    {
        text: '出行', collapsed: false, items: [
            { text: '飞机', link: '/trip/airplane' },
            { text: '随心飞', link: '/trip/suixinfei' },
            { text: '飞行行程', link: '/trip/flights' },
            { text: '里程兑换', link: '/trip/miles-exchange' },
            { text: '机场', link: '/trip/airport' },
            { text: '火车站', link: '/trip/railway' },
            { text: '酒店', link: '/trip/hotel' },
            { text: '公共交通', link: '/trip/public-transport' },
        ]
    },

    {
        text: '出境', collapsed: false, items: [

            { text: '护照', link: '/trip/passport' },
            { text: '签证', link: '/trip/visa' },
            { text: '往来港澳通行证', link: '/trip/eep' },
            { text: '护照和签证的区别', link: '/trip/passport-vs-visa' },
            { text: '境外银行卡', link: '/trip/overseas-bank-card' },
            { text: '境外手机卡', link: '/trip/overseas-sim-card' },

        ]
    },

];

const sidebarTripPlace = [
    { text: '去哪', link: '/trip/where' }
].concat(...setTripPlaceSidebar());

const sidebarTripTravelogue = [
    { text: '游记', link: '/trip/travelogue/' },
]
    .concat(...setTravelogueSidebar());

const sidebarTripJourney = [
    { text: '赶路', link: '/trip/journey/' },
]
    .concat(...setJourneySidebar());

const sidebarTripDrive = [
    { text: '自驾', link: '/trip/drive/' },
]

const sidebarSpeech = [
    { text: 'Questionable Advice from One Very Lucky Berkeley Engineer', link: '/speech/craig-federighi' },
];


const sidebarXiwen = [
    { text: '汤誓', link: prefixXiwen + '/汤誓' },
    { text: '牧誓', link: prefixXiwen + '/牧誓' },
    { text: '甘誓', link: prefixXiwen + '/甘誓' },
    { text: '费誓', link: prefixXiwen + '/费誓' },
    { text: '檄蜀文', link: prefixXiwen + '/檄蜀文' },
    { text: '兴师檄文', link: prefixXiwen + '/兴师檄文' },
    { text: '吕相绝秦', link: prefixXiwen + '/吕相绝秦' },
    { text: '檄告楚相', link: prefixXiwen + '/檄告楚相' },
    { text: '白朗告示', link: prefixXiwen + '/白朗告示' },
    { text: '讨王莽檄', link: prefixXiwen + '/讨王莽檄' },
    { text: '讨粤匪檄', link: prefixXiwen + '/讨粤匪檄' },
    { text: '谕巴蜀檄', link: prefixXiwen + '/谕巴蜀檄' },
    { text: '剿兵安民檄', link: prefixXiwen + '/剿兵安民檄' },
    { text: '奉天讨胡檄', link: prefixXiwen + '/奉天讨胡檄' },
    { text: '张献忠之檄', link: prefixXiwen + '/张献忠之檄' },
    { text: '管仲檄楚使', link: prefixXiwen + '/管仲檄楚使' },
    { text: '为袁绍檄豫州', link: prefixXiwen + '/为袁绍檄豫州' },
    { text: '延平民人告白', link: prefixXiwen + '/延平民人告白' },
    { text: '普告同胞檄稿', link: prefixXiwen + '/普告同胞檄稿' },
    { text: '檄吴将校部曲', link: prefixXiwen + '/檄吴将校部曲' },
    { text: '谕黑旗将士檄', link: prefixXiwen + '/谕黑旗将士檄' },
    { text: '钦赐督辅手敕', link: prefixXiwen + '/钦赐督辅手敕' },
    { text: '隋文帝伐陈檄', link: prefixXiwen + '/隋文帝伐陈檄' },
    { text: '为李密檄洛州文', link: prefixXiwen + '/为李密檄洛州文' },
    { text: '宁波众义民公启', link: prefixXiwen + '/宁波众义民公启' },
    { text: '朱元璋北伐檄文', link: prefixXiwen + '/朱元璋北伐檄文' },
    { text: '第二次讨袁宣言', link: prefixXiwen + '/第二次讨袁宣言' },
    { text: '郑畋传檄天下文', link: prefixXiwen + '/郑畋传檄天下文' },
    { text: '为徐敬业讨武曌檄', link: prefixXiwen + '/为徐敬业讨武曌檄' },
    { text: '为窦建德檄秦王文', link: prefixXiwen + '/为窦建德檄秦王文' },
    { text: '台湾人民抗战檄文', link: prefixXiwen + '/台湾人民抗战檄文' },
    { text: '吴王刘濞遗诸侯书', link: prefixXiwen + '/吴王刘濞遗诸侯书' },
    { text: '扑灭异端邪教公启', link: prefixXiwen + '/扑灭异端邪教公启' },
    { text: '李自成檄明臣庶文', link: prefixXiwen + '/李自成檄明臣庶文' },
    { text: '杨复光露布献捷文', link: prefixXiwen + '/杨复光露布献捷文' },
    { text: '中华民国军起义檄文', link: prefixXiwen + '/中华民国军起义檄文' },
    { text: '中国革命军大元帅檄', link: prefixXiwen + '/中国革命军大元帅檄' },
    { text: '移河南郡县讨刘豫檄', link: prefixXiwen + '/移河南郡县讨刘豫檄' },
    { text: '三元里等乡痛骂鬼子词', link: prefixXiwen + '/三元里等乡痛骂鬼子词' },
    { text: '大顺军传牌山西各郡县', link: prefixXiwen + '/大顺军传牌山西各郡县' },
    { text: '就陆海军大元帅职宣言', link: prefixXiwen + '/就陆海军大元帅职宣言' },
    { text: '捻军盟主张乐行的布告', link: prefixXiwen + '/捻军盟主张乐行的布告' },
    { text: '中华民国讨逆军檄告天下', link: prefixXiwen + '/中华民国讨逆军檄告天下' },
    { text: '为李密檄荥阳守郇王庆文', link: prefixXiwen + '/为李密檄荥阳守郇王庆文' },
    { text: '杨玄感敦促樊子盖归义书', link: prefixXiwen + '/杨玄感敦促樊子盖归义书' },
    { text: '大清国摄政王多尔衮南下告示', link: prefixXiwen + '/大清国摄政王多尔衮南下告示' },
    { text: '宣谕云、贵文武官员军民人等诏', link: prefixXiwen + '/宣谕云、贵文武官员军民人等诏' },
    { text: '尽忠报国全粤义民申谕英夷告示', link: prefixXiwen + '/尽忠报国全粤义民申谕英夷告示' },
    { text: '谕南京等处文武官员军民人等告示', link: prefixXiwen + '/谕南京等处文武官员军民人等告示' },
];
const sidebarHistory = [
    // { text: '历史学', link: '/course/history/' },
    { text: '中国历史', link: prefixHistory + '/china' },
    { text: '社会主义主要矛盾', link: prefixHistory + '/tmc' },
    { text: '战争', link: prefixHistory + '/war' },
    { text: '古人说话也用文言文吗', link: prefixHistory + '/wenyan' },
    {
        text: '皇室',
        collapsed: true,
        items: [
            { text: '温莎', link: prefixHistory + '/royal/windsor' },
        ],
    },
    {
        text: '正史', collapsed: false,
        items: [
            { text: '介绍', link: prefixHistory + '/orthodox/' },
        ],
    },
];
const sidebarArticle = [
    { text: '猫', link: prefixArticle + '/猫' },
    { text: '庄子·秋水', link: prefixArticle + '/庄子·秋水' },
    { text: '归去来兮辞', link: prefixArticle + '/归去来兮辞' },
    { text: '道德经', link: prefixArticle + '/道德经' },
    { text: '逍遥游·北冥有鱼', link: prefixArticle + '/逍遥游·北冥有鱼' },
    { text: '聪明人和傻子和奴才', link: prefixArticle + '/聪明人和傻子和奴才' },
    { text: 'A Cup of Tea', link: prefixArticle + '/a-cup-of-tea' },
]
const sidebarLanguage = [
    { text: '中文', link: prefixLang + '/chinese' },
    { text: '英语单词', link: prefixLang + '/english-words' },
    { text: '英语简单句', link: prefixLang + '/english' },
    { text: '法语', link: prefixLang + '/french' },
    { text: '德语', link: prefixLang + '/german' },
    { text: '日语', link: prefixLang + '/japanese' },
    { text: '意大利语', link: prefixLang + '/italian' },
    {
        text: '英语专辑',
        collapsed: false,
        items: [
            { text: '常用电话提示音', link: prefixLang + '/english/dial-number' },
            { text: '词组 俚语', link: prefixLang + '/english/phrase' },
        ],
    },
    { text: '人名汇总', link: prefixLang + '/name' },
    { text: '发音体系', link: prefixLang + '/pronunciation' },
    { text: '相似', link: prefixLang + '/similar' },
];

const sidebarMedicine = [

]
const sidebarMedicineLearn = [
    { text: '医学', link: '/medicine/learn/branch' },
    { text: '从医', link: '/medicine/learn/path' },
]

const sidebarCourse = [
    {
        text: '培养方案', collapsed: false, items: [
            ...COURSE_STRUCTURE
        ]
    }, {
        text: '课程', collapsed: false, items: [
            ...COURSES
        ]
    }, {
        text: '笔记', collapsed: false, items: [
            ...COURSE_NOTES
        ]
    },
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
            { text: 'Linux 记录  ', link: '/code/os/linux/' },
            { text: 'Linux 系统分类', link: '/code/os/linux/sys_category' },
            { text: '查看 Linux 的基本信息', link: '/code/os/linux/sys_base_info' },
            { text: 'Install', link: '/code/os/linux/install' },
            { text: 'CMD', link: '/code/os/linux/command' },
            { text: 'GDB', link: '/code/os/linux/gdb' },
            { text: 'Linux 问题收集', link: '/code/os/linux/qa' },
        ]
    },
    {
        text: 'Windows', collapsed: false, items: [
            { text: '使用提示', link: '/code/os/windows/tips' },
            { text: '隐私', link: '/code/os/windows/private' },
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
const sidebarTools = [
    { text: '指南', link: '/tools/' },
    { text: '配环境', link: '/tools/nipeima' },
    { text: '瞎玩', link: '/tools/stroll' },
    {
        text: '命令行工具', collapsed: false, items: [
            { text: '工具介绍', link: prefixCommandTools + '/' },
            { text: 'fish cmd', link: prefixCommandTools + '/fish' },
            { text: 'iTerm2', link: prefixCommandTools + '/iterm2' },
            { text: 'MobaXterm', link: prefixCommandTools + '/mobaxterm' },
            { text: 'Tabby', link: prefixCommandTools + '/tabby' },
            { text: 'Warp', link: prefixCommandTools + '/warp' },
            { text: 'XShell', link: prefixCommandTools + '/xshell' },
        ],
    }, {
        text: '文本编辑', collapsed: false, items: [
            { text: 'Markdown', link: '/tools/text-edit/markdown' },
            { text: 'vim', link: '/tools/text-edit/vim' },
        ],
    }, {
        text: 'AI', collapsed: false, items: [
            { text: 'OpenAI', link: '/tools/ai/openai' },
        ],
    }, {
        text: '杂项', collapsed: false, items: [
            { text: 'RBAC', link: '/tools/others/rbac' },
            { text: 'Excel', link: '/tools/others/excel' },
            { text: 'Word', link: '/tools/others/word' },
        ]
    },
    {
        text: '一些工具', collapsed: false, items: [
            { text: 'Algolia', link: '/tools/tools/algolia' },
            { text: 'The Movie Database(TMDB)', link: '/tools/tools/tmdb' },
            { text: 'gitalk 评论接入教程', link: '/tools/tools/gitalk' },
        ],
    },
];
const prefixCodeLearn = '/code/learn';
const sidebarCodeLearn = [
    { text: 'C++', link: '/code/learn/cpp' },
    { text: '算法', link: '/code/learn/dsa' },
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
    { text: '算法与数据结构', link: '/code/interview/dsa' },
    { text: '数据库', link: '/code/interview/db' },
    { text: '操作系统', link: '/code/interview/os' },
    { text: '计算机网络', link: '/code/interview/network' },
    { text: '系统设计', link: '/code/interview/sys-design' },
    { text: '非技术问题', link: '/code/interview/non-tech' },
];
const prefixCodeCpp = '/code/cpp';
const prefixCodeCppFeature = `${prefixCodeCpp}/feature`;
const sidebarCodeCpp = [
    { text: '代码风格', link: '/code/cpp/style' },
    { text: '复杂声明', link: '/code/cpp/complex-declaration' },
    { text: 'printf', link: '/code/cpp/printf' },
    { text: '程序题', link: '/code/cpp/code' },
    { text: 'C 与 C++', link: '/code/cpp/c-cpp-diff' },
    {
        text: '特性', collapsed: false, items: [
            { text: '介绍', link: `${prefixCodeCppFeature}/` },
            { text: 'C++11', link: `${prefixCodeCppFeature}/11` },
            { text: 'C++14', link: `${prefixCodeCppFeature}/14` },
            { text: 'C++17', link: `${prefixCodeCppFeature}/17` },
            { text: 'C++20', link: `${prefixCodeCppFeature}/20` },
            { text: 'C++23', link: `${prefixCodeCppFeature}/23` },
        ]
    }, {
        text: '基本概念', collapsed: false, items: [
            { text: '概念辨析', link: '/code/cpp/concept/' },
            { text: '类', link: '/code/cpp/concept/class' },
            { text: '引用', link: '/code/cpp/concept/reference' },
            { text: '堆栈 内存', link: '/code/cpp/concept/stack_memory' },
            { text: 'const', link: '/code/cpp/concept/const' },
            { text: '指针', link: '/code/cpp/concept/pointer' },
            { text: '原子', link: '/code/cpp/concept/atomic' },
            { text: '虚函数', link: '/code/cpp/concept/virtual' },
            { text: '并发', link: '/code/cpp/concept/concurrent' },
            { text: '异常', link: '/code/cpp/concept/exception' },
            { text: '运算符', link: '/code/cpp/concept/operator' },
            { text: 'Lambda', link: '/code/cpp/concept/lambda' },
        ]
    }, {
        text: '编译', collapsed: false, items: [
            { text: 'Compile', link: '/code/cpp/compile/' },
            { text: 'gcc', link: '/code/cpp/compile/gcc' },
            { text: 'Makefile', link: '/code/cpp/compile/Makefile' },
            { text: 'CMakeLists', link: '/code/cpp/compile/CMakeLists' },
        ],
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
const sidebarCodeFramework = [
    { text: 'Actor', link: '/code/framework/actor' },
    { text: 'FDBus', link: '/code/framework/fdbus' },
    { text: 'FFmpeg', link: '/code/framework/ffmpeg' },
    { text: 'GStreamer', link: '/code/framework/gstreamer' },
];
const sidebarCodeProtocol = [
    { text: 'CAN FD', link: '/code/protocol/canfd' },
    { text: 'Fast DDS', link: '/code/protocol/fastdds' },
];
const sidebarCodeLibs = [
    { text: 'all libs', link: '/code/libs/' },
    { text: 'Abseil', link: '/code/libs/abseil' },
    { text: 'asan 内存检测', link: '/code/libs/asan' },
    { text: 'Boost', link: '/code/libs/boost' },
    { text: 'cppzmq', link: '/code/libs/cppzmq' },
    { text: 'libevent', link: '/code/libs/libevent' },
    { text: 'libuv', link: '/code/libs/libuv' },
    { text: 'LuaJIT', link: '/code/libs/luajit' },
    { text: 'OpenCV', link: '/code/libs/opencv' },
    { text: 'OpenGL', link: '/code/libs/opengl' },
    { text: 'protobuf', link: '/code/libs/protobuf' },
    { text: 'RapidJSON', link: '/code/libs/rapidjson' },
    { text: 'STL', link: '/code/libs/stl' },
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
    { text: '疑难排查', link: '/code/program/problems' },
    { text: '一些有的没的', link: '/code/program/others' },
    { text: '代码练习', link: '/code/program/practice/' },
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
    { text: 'BERT', link: '/code/protocol/bert' }
];
const sidebarDevEnv = [
    { text: 'VSCode', link: '/code/dev-env/vscode' },
    { text: 'Xcode', link: '/code/dev-env/xcode' },
    { text: 'JetBrains', link: '/code/dev-env/jetbrains' },
    { text: 'Cocos', link: '/code/dev-env/cocos' },
];
const sidebarDevOps = [
    { text: 'Docker', link: '/code/devops/docker' },
    { text: 'Jenkins', link: '/code/devops/Jenkins' },
    { text: 'Mergify', link: '/code/devops/mergify' },
    { text: 'Vercel', link: '/code/devops/vercel' },
    { text: 'Jira', link: '/code/devops/jira' },
];
const sidebarVersionCtrl = [
    { text: 'Git', link: '/code/version-ctrl/git' },
    { text: 'GitHub', link: '/code/version-ctrl/github' },
    { text: 'Gitlab', link: '/code/version-ctrl/gitlab' },
    { text: 'svn', link: '/code/version-ctrl/svn' },
];

const sidebarPursuingEducation = [
    { text: '高考', link: '/pursuing-education/gaokao' },
];
const sidebarRandomNotes = [
    { text: '什么是 xx', link: '/random-notes/what-is' },
    { text: '一言', link: '/random-notes/one-word' },
    { text: '散篇', link: '/random-notes/temp2' },
    { text: '电网', link: '/random-notes/state-grid' },
    { text: '锻炼', link: '/random-notes/exercise' },
    { text: '梅桃樱', link: '/random-notes/flower' },
    { text: '学位服', link: '/random-notes/academic-dress' },
    { text: '中国有14亿人 而我还是单身', link: '/random-notes/bachelor' },
    { text: '身份证', link: '/random-notes/id-card' },
    { text: '日本行政区划', link: '/random-notes/divisions-jp' },
    { text: '中国面', link: '/random-notes/chinese-noodles' },
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
const sidebarDev = [
    { text: '地图数据集', link: '/dev/map-data' },
    { text: 'Tauri', link: '/dev/tauri' },
];
const sidebarExam = [
    { text: '高考', link: '/exam/gaokao' },
    {
        text: '证书', collapsed: false, items: [
            { text: '考证', link: '/exam/certificate/' },
            { text: '软考高级系统架构', link: '/exam/certificate/ruankao-high-lv' },
            { text: '教师资格证', link: '/exam/certificate/ntce' },
            { text: '注册会计师', link: '/exam/certificate/cpa' },
            { text: '全国会计专业技术资格', link: '/exam/certificate/kzp' },
            { text: '公务员考试', link: '/exam/certificate/gwy' },
        ]
    },
];

const prefixWoman = '/thought/woman';
const sidebarThought = [
    // { text: '想法', link: '/thought/' },
    { text: '未来', link: '/thought/future' },
    { text: '90 后都经历了什么', link: '/thought/90s' },
    { text: '这又是什么呢', link: '/thought/temp' },
    { text: '活得像一个机器人', link: '/thought/life-bot' },
    { text: '怜悯', link: '/thought/pity' },
    { text: '结婚', link: '/thought/marry' },
    { text: '男女关系', link: '/thought/relationship-m-w' },
    { text: '命运的织机', link: '/thought/portended-fate' },
    { text: '血腥暴力影视被和谐的感想  ', link: '/thought/restricted-film' },
    {
        text: '女人', items: [
            { text: '唉', link: prefixWoman + '/' },
            { text: '痛经', link: prefixWoman + '/dysmenorrhoea' },
            { text: '女人相亲惯用套路', link: prefixWoman + '/blind-date-routine-skill' },
        ]
    },
];

const sidebarGrumbling = [
    // { text: '牢骚', link: '/grumbling/' },
    { text: '一次淘宝经历', link: '/grumbling/1' },
    { text: '喷子', link: '/grumbling/2' },
];


const sidebarAccident = [
    // { text: '事故', link: '/accident/' },
    { text: '2018年重庆万州公交车坠江事故', link: '/accident/2018-Chongqing-bus-crash' },
    { text: '2022年中国东方航空5735号班机空难', link: '/accident/2022-China-Eastern-Airlines-Flight-5735' },
    { text: '2020年贵州公交坠湖事故', link: '/accident/2020-Anshun-bus-crash' },
];

const sidebarFunny = [
    { text: '有生之年系列', link: '/funny/lifetime_series' },
    { text: '西方文明为什么在近代会超越东方文明', link: '/funny/1' },
    { text: '禁放烟花爆竹', link: '/funny/no-fireworks' },
    { text: '三年疫情创造的246个名词', link: '/funny/covid-in-cn' },
    { text: '调休', link: '/funny/tiaoxiu' },
];


const sidebarDisease = [
    { text: '病痛', link: '/disease/' },
    { text: '胃镜', link: '/disease/gastroscopy' },
    { text: '眼睛变化', link: '/disease/eyes' },
    { text: '痤疮', link: '/disease/acne-vulgaris' },
    { text: '牙', link: '/disease/tooth' },
    { text: '过敏症状', link: '/disease/igg' },
    {
        text: '记录-自己的', collapsed: false, items: [
            { text: '2025/01/28 感冒', link: `${prefixDiseaseRecord}/self/20250128` },
            { text: '2024/10/24 感冒', link: `${prefixDiseaseRecord}/self/20241024` },
            { text: '2024/02/23 发烧', link: `${prefixDiseaseRecord}/self/20240223` },
            { text: '2024/01/25 感冒', link: `${prefixDiseaseRecord}/self/20240125` },
            { text: '2022/12/21 发烧', link: `${prefixDiseaseRecord}/self/20221221` },
            { text: '2022/11/28 感冒', link: `${prefixDiseaseRecord}/self/20221128` },
            { text: '2022/06/14 中暑', link: `${prefixDiseaseRecord}/self/20220614` },
        ]
    }, {
        text: '记录-别人的', collapsed: false, items: [
            { text: '2022/12/22 发烧', link: `${prefixDiseaseRecord}/others/20221222` },
            { text: '2022/06/24 扁桃体炎', link: `${prefixDiseaseRecord}/others/20220624` },
        ]
    },
];


export const sidebar = {
    '/eat/': sidebarEat,
    '/daily/': sidebarDaily,
    // 
    '/trip/': sidebarTrip,
    '/trip/china/': sidebarTripPlace,
    '/trip/abroad/': sidebarTripPlace,
    '/trip/travelogue/': sidebarTripTravelogue,
    '/trip/journey/': sidebarTripJourney,
    '/trip/drive/': sidebarTripDrive,
    // 
    '/speech/': sidebarSpeech,
    '/history/': sidebarHistory,
    '/article/': sidebarArticle,
    '/language/': sidebarLanguage,
    //
    '/xiwen/': sidebarXiwen,
    //
    '/medicine/': sidebarMedicine,
    '/medicine/learn/': sidebarMedicineLearn,
    //
    '/course/': sidebarCourse,
    //
    '/tools/': sidebarTools,
    //
    '/code/learn/': sidebarCodeLearn,
    '/code/os/': sidebarCodeOS,
    '/code/api/': sidebarCodeAPI,
    '/code/dsa/': sidebarCodeDSA,
    '/code/interview/': sidebarCodeInterview,
    '/code/cpp/': sidebarCodeCpp,
    '/code/db/': sidebarCodeDB,
    '/code/framework/': sidebarCodeFramework,
    '/code/protocol/': sidebarCodeProtocol,
    '/code/libs/': sidebarCodeLibs,
    '/code/front-end/': sidebarCodeFrontEnd,
    '/code/program/': sidebarCodeProgram,
    '/code/shock/': sidebarCodeShock,
    '/code/sys-design/': sidebarCodeSysDesign,
    '/code/kernel/': sidebarCodeKernel,
    '/code/ml/': sidebarCodeML,
    '/code/dev-env/': sidebarDevEnv,
    '/code/devops/': sidebarDevOps,
    '/code/version-ctrl/': sidebarVersionCtrl,
    //
    '/pursuing-education/': sidebarPursuingEducation,
    '/random-notes/': sidebarRandomNotes,
    '/career/': sidebarCareer,
    '/dev/': sidebarDev,
    '/exam/': sidebarExam,
    '/thought/': sidebarThought,
    '/grumbling/': sidebarGrumbling,
    // 待定
    '/accident/': sidebarAccident,
    '/funny/': sidebarFunny,
    '/disease/': sidebarDisease,

};
