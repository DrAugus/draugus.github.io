export const sidebar = {
    '/eat/': [
        { text: '吃饭了', link: '/eat/' },
        { text: '零食', link: '/eat/snack' },
        { text: '做点什么吧', link: '/eat/cookbook' },
        { text: '真的不能吃', link: '/eat/block' },
    ],
    '/daily/': [
        { text: '日常', link: '/daily/' },
        { text: '小猫', link: '/daily/cat' },
        { text: '日用价格', link: '/daily/goods-price' },
        { text: '房', link: '/daily/house' },
        { text: '买车吗', link: '/daily/car' },
        { text: '户口', link: '/daily/hukou' },
        { text: '月亮', link: '/daily/moon' },
        { text: '通勤', link: '/daily/commuting' },
        {
            text: '记录 Apple 使用体验', collapsed: true, items: [
                { text: 'Apple官方日历订阅', link: '/daily/apple/calendar' },
                { text: '价格波动', link: '/daily/apple/price' },
                { text: '苹果究竟怎么了', link: '/daily/apple/reflect' },
                { text: '技术规格', link: '/daily/apple/specs' },
                { text: '设备价格', link: '/daily/apple/apple_price' },
            ]
        },
    ],
    '/trip/': [
        { text: '规划指南', link: '/trip/' },
        {text: '预算', link: '/trip/budget'},
        { text: '探索', link: '/trip/explore' },
        { text: '护照和签证的区别', link: '/trip/passport-vs-visa' },
        { text: '境外卡办理指南', link: '/trip/card' },
        { text: '签证', link: '/trip/visa' },
        { text: '护照', link: '/trip/passport' },
        { text: '飞机', link: '/trip/airfare-price' },
    ],

    '/trip/travelogue/': [
        { text: '游记', link: '/trip/travelogue/' },
        { text: '港珠澳广深', link: '/trip/travelogue/20230429' },
    ],


    '/trip/china/': [
        { text: '上海', link: '/trip/china/shanghai' },
        { text: '澳门', link: '/trip/china/macao' },
        { text: '北京', link: '/trip/china/beijing' },
        { text: '香港', link: '/trip/china/hongkong' },
        { text: '天津', link: '/trip/china/tianjin' },
        { text: '重庆', link: '/trip/china/chongqing' },
        {
            text: '河南', collapsed: true, items: [
                { text: '开封', link: '/trip/china/henan/kaifeng' },
                { text: '郑州', link: '/trip/china/henan/zhengzhou' },
                { text: '洛阳', link: '/trip/china/henan/luoyang' },
            ],
        },


        {
            text: '黑龙江', collapsed: true, items: [
                { text: '哈尔滨', link: '/trip/china/heilongjiang/haerbing' },
            ],
        },
        {
            text: '福建', collapsed: true, items: [
                { text: '福州', link: '/trip/china/fujian/fuzhou' },
                { text: '厦门', link: '/trip/china/fujian/xiamen' },
            ],
        },
        {
            text: '云南', collapsed: true, items: [
                { text: '大理', link: '/trip/china/yunnan/dali' },
                { text: '西双版纳', link: '/trip/china/yunnan/xishuangbanna' },
                { text: '昆明', link: '/trip/china/yunnan/kunming' },
                { text: '丽江', link: '/trip/china/yunnan/lijiang' },
            ],
        },
        {
            text: '湖北', collapsed: true, items: [
                { text: '武汉', link: '/trip/china/hubei/wuhan' },
            ],
        },
        {
            text: '广西', collapsed: true, items: [
                { text: '柳州', link: '/trip/china/guangxi/liuzhou' },
                { text: '南宁', link: '/trip/china/guangxi/nanning' },
            ],
        },
        {
            text: '四川', collapsed: true, items: [
                { text: '成都', link: '/trip/china/sichuan/chengdu' },
            ],
        },
        {
            text: '贵州', collapsed: true, items: [
                { text: '贵阳', link: '/trip/china/guizhou/guiyang' },
            ],
        },
        {
            text: '广东', collapsed: true, items: [
                {text: '广东', link: '/trip/china/guangdong/'},
                {text: '深圳', link: '/trip/china/guangdong/shenzhen'},
                {text: '广州', link: '/trip/china/guangdong/guangzhou'},
                {text: '珠海', link: '/trip/china/guangdong/zhuhai'},
            ],
        },
        {
            text: '海南', collapsed: true, items: [
                { text: '海口', link: '/trip/china/hainan/haikou' },
                { text: '三亚', link: '/trip/china/hainan/sanya' },
            ],
        },
        {
            text: '湖南', collapsed: true, items: [
                { text: '长沙', link: '/trip/china/hunan/changsha' },
            ],
        },
        {
            text: '江苏', collapsed: true, items: [
                { text: '苏州', link: '/trip/china/jiangsu/suzhou' },
                { text: '扬州', link: '/trip/china/jiangsu/yangzhou' },
                { text: '南京', link: '/trip/china/jiangsu/nanjing' },
                { text: '无锡', link: '/trip/china/jiangsu/wuxi' },
            ],
        },
        {
            text: '浙江', collapsed: true,
            link: "/trip/china/zhejiang/",
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
            text: '甘肃',
            link: "/trip/china/gansu/",
        },

    ],
    '/trip/abroad/': [
        { text: '世界', link: '/trip/abroad/' },
        {
            text: '欧洲',
            collapsed: true,
            items: [
                { text: '英国', link: '/trip/abroad/europe/england' },
            ],
        },
        {
            text: '亚洲',
            collapsed: true,
            items: [
                { text: '韩国', link: '/trip/abroad/asia/korean' },
                { text: '日本', link: '/trip/abroad/asia/japan' },
            ],
        },
    ],

    // arts
    '/arts/article/': [
        { text: '猫', link: '/arts/article/猫' },
        { text: '庄子·秋水', link: '/arts/article/庄子·秋水' },
        { text: '道德经', link: '/arts/article/道德经' },
        { text: '逍遥游·北冥有鱼', link: '/arts/article/逍遥游·北冥有鱼' },
        { text: '聪明人和傻子和奴才', link: '/arts/article/聪明人和傻子和奴才' },
    ],
    '/arts/economics/': [
        { text: '微观经济学', link: '/arts/economics/microeconomics' },
    ],
    '/arts/history/': [
        { text: '中国历史', link: '/arts/history/china' },
        {
            text: '皇室',
            collapsed: true,
            items: [
                { text: '温莎', link: '/arts/history/royal/windsor' },
            ],
        },
    ],
    '/arts/music/': [
        { text: '乐理', link: '/arts/music/music_theory' },
        { text: '连音', link: '/arts/music/tuplet' },
    ],
    '/arts/language/': [
        { text: '中文', link: '/arts/language/chinese' },
        { text: '英语单词', link: '/arts/language/english-words' },
        { text: '英语简单句', link: '/arts/language/english' },
        { text: '法语', link: '/arts/language/french' },
        { text: '德语', link: '/arts/language/german' },
        { text: '意大利语', link: '/arts/language/italian' },
        { text: '人名汇总', link: '/arts/language/name' },
        { text: '发音体系', link: '/arts/language/pronunciation' },
        { text: '相似', link: '/arts/language/similar' },
    ],
    '/arts/xiwen/': [
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
    ],

    //

    '/code/code-notes/': [
        { text: 'Compile', link: '/code/code-notes/compile' },
        { text: 'gcc', link: '/code/code-notes/gcc' },
        { text: 'Markdown', link: '/code/code-notes/markdown' },
        { text: 'vim', link: '/code/code-notes/vim' },
        { text: 'Makefile', link: '/code/code-notes/Makefile' },
        { text: 'GitHub', link: '/code/code-notes/github' },
        { text: 'Docus', link: '/code/code-notes/docus' },
        { text: 'xcode', link: '/code/code-notes/xcode' },
        { text: 'svn', link: '/code/code-notes/svn' },
        { text: 'CMakeLists', link: '/code/code-notes/CMakeLists' },
        { text: '指南', link: '/code/code-notes/' },
        { text: 'RBAC', link: '/code/code-notes/rbac' },
        { text: 'Excel', link: '/code/code-notes/excel' },
        { text: 'JetBrains', link: '/code/code-notes/jetbrains' },
        { text: 'Gitlab', link: '/code/code-notes/gitlab' },
        {
            text: 'tools', collapsed: true, items: [
                { text: 'Jenkins', link: '/code/code-notes/tools/Jenkins' },
                { text: 'Algolia', link: '/code/code-notes/tools/algolia' },
                { text: 'TMDB', link: '/code/code-notes/tools/tmdb' },
                { text: 'Mergify', link: '/code/code-notes/tools/mergify' },
                { text: 'Vercel', link: '/code/code-notes/tools/vercel' },
                { text: 'gitalk', link: '/code/code-notes/tools/gitalk' },
            ]
        },
        {
            text: 'macos', collapsed: true, items: [
                { text: 'mac primary', link: '/code/code-notes/macos/base' },
                { text: 'solution', link: '/code/code-notes/macos/sol' },
            ]
        },
        {
            text: 'software', collapsed: true, items: [
                { text: 'web tools', link: '/code/code-notes/software/webtools' },
                { text: '推荐软件安装', link: '/code/code-notes/software/1.install' },
                { text: 'fish cmd', link: '/code/code-notes/software/fish' },
                { text: 'Tabby', link: '/code/code-notes/software/tabby' },
                { text: 'Git', link: '/code/code-notes/software/git' },
                { text: 'Docker', link: '/code/code-notes/software/docker' },
                { text: 'VS Code', link: '/code/code-notes/software/vscode' },
                { text: 'XShell', link: '/code/code-notes/software/xshell' },
            ]
        },
        {
            text: 'linux', collapsed: true, items: [
                { text: 'gdb', link: '/code/code-notes/linux/gdb' },
                { text: 'linux系统分类', link: '/code/code-notes/linux/sys_category' },
                { text: '查看Linux的基本信息', link: '/code/code-notes/linux/sys_base_info' },
                { text: 'Linux 问题收集', link: '/code/code-notes/linux/qa' },
                { text: 'install', link: '/code/code-notes/linux/install' },
                { text: 'linux记录  ', link: '/code/code-notes/linux/README' },
                { text: 'cmd', link: '/code/code-notes/linux/command' },
                { text: '指南', link: '/code/code-notes/linux/guide' },
            ]
        },
        {
            text: 'windows', collapsed: true, items: [
                { text: 'chocolatey', link: '/code/code-notes/windows/chocolatey' },
                { text: '虚拟机记录    ', link: '/code/code-notes/windows/VirtualBox' },
                { text: 'cmd指南', link: '/code/code-notes/windows/cmd' },
                { text: 'windows11更新纪要', link: '/code/code-notes/windows/windows11-update' },
                { text: '壁纸', link: '/code/code-notes/windows/wallpaper' },
            ]
        },
        {
            text: 'openai', collapsed: true, items: [
                { text: 'ChatGPT', link: '/code/code-notes/openai/chatgpt' },
                { text: 'OpenAI', link: '/code/code-notes/openai/' },
            ]
        },
    ],


    '/code/dsa/': [
        { text: 'QA', link: '/code/dsa/qa' },
        { text: 'Recursion', link: '/code/dsa/recursion' },
        { text: '算法与数据结构', link: '/code/dsa/' },
        { text: '复杂度', link: '/code/dsa/complexity' },
        {
            text: 'leetcode', collapsed: true, items: [
                { text: 'LeetCode', link: '/code/dsa/leetcode/' },
                { text: 'LC1114 解题方案', link: '/code/dsa/leetcode/lc-1114' },
            ]
        },
        {
            text: 'linear', collapsed: true, items: [
                { text: 'stack', link: '/code/dsa/linear/stack' },
                { text: 'QA', link: '/code/dsa/linear/qa' },
                { text: 'array', link: '/code/dsa/linear/array' },
                { text: 'heap', link: '/code/dsa/linear/heap' },
                { text: '线性结构', link: '/code/dsa/linear/' },
                { text: 'Linked list', link: '/code/dsa/linear/linked-list' },
                { text: 'queue', link: '/code/dsa/linear/queue' },]
        },
        {
            text: 'collection', collapsed: true, items: [
                { text: 'Hash Table', link: '/code/dsa/collection/hash' },
                { text: 'QA', link: '/code/dsa/collection/qa' },
                { text: '集合结构', link: '/code/dsa/collection/' },]
        },
        {
            text: 'tree', collapsed: true, items: [
                { text: 'Union-find', link: '/code/dsa/tree/union-find' },
                { text: 'QA', link: '/code/dsa/tree/qa' },
                { text: 'Rb tree', link: '/code/dsa/tree/rb-tree' },
                { text: 'Trie', link: '/code/dsa/tree/trie' },
                { text: 'B tree', link: '/code/dsa/tree/b-tree' },
                { text: '树形结构', link: '/code/dsa/tree/' },
                { text: 'Balanced Tree', link: '/code/dsa/tree/balanced-tree' },
            ]
        },
        {
            text: 'graph', collapsed: true, items: [
                { text: 'QA', link: '/code/dsa/graph/qa' },
                { text: '图形结构', link: '/code/dsa/graph/' },
            ]
        },
    ],

    '/code/interview/': [
        { text: '算法与数据结构', link: '/code/interview/dsa' },
        { text: '编译', link: '/code/interview/compile' },
        { text: '程序设计', link: '/code/interview/program' },
        { text: '基础知识', link: '/code/interview/basin' },
        { text: '差不多得了', link: '/code/interview/' },
        { text: '数据库', link: '/code/interview/db' },
    ],
    '/code/cpp/': [
        { text: '特性', link: '/code/cpp/' },
        { text: '代码风格', link: '/code/cpp/style' },
        { text: '复杂声明', link: '/code/cpp/complex-declaration' },
        { text: 'printf', link: '/code/cpp/printf' },
        { text: '程序题', link: '/code/cpp/code' },
        { text: 'C 与 C++', link: '/code/cpp/c-cpp-diff' },
        {
            text: 'concept', collapsed: true, items: [
                { text: '类', link: '/code/cpp/concept/class' },
                { text: '引用', link: '/code/cpp/concept/reference' },
                { text: 'STL', link: '/code/cpp/concept/stl' },
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
            text: 'tips', collapsed: true, items: [
                { text: 'check OS with a preprocessor directive', link: '/code/cpp/tips/check-os' },
                { text: '遇到的问题速查', link: '/code/cpp/tips/qa' },
                { text: 'base', link: '/code/cpp/tips/base' },
                { text: '一些要点', link: '/code/cpp/tips/tip' },
            ]
        }, {
            text: 'lib', collapsed: true, items: [
                { text: '内存检测', link: '/code/cpp/lib/asan' },
                { text: 'RapidJSON', link: '/code/cpp/lib/RapidJSON' },
                { text: 'actor', link: '/code/cpp/lib/actor' },
                { text: 'BERT', link: '/code/cpp/lib/bert' },
                { text: 'Reactor', link: '/code/cpp/lib/reactor' },
                { text: 'epoll', link: '/code/cpp/lib/epoll' },
            ]
        }, {
            text: 'thread-mutex', collapsed: true, items: [
                { text: 'Threads and Mutexes', link: '/code/cpp/thread-mutex/threads-and-mutexes' },
                { text: '各种锁', link: '/code/cpp/thread-mutex/mutex' },
                { text: 'Thread', link: '/code/cpp/thread-mutex/thread' },
                { text: '线程 锁', link: '/code/cpp/thread-mutex/' },
                { text: '4 Easy Tips for Using Threads and Mutexes in C++', link: '/code/cpp/thread-mutex/4-easy-tips-on-using-threads-and-mutexes-in-cpp' },
            ]
        },
    ],

    '/code/other-code/': [
        { text: '非技术问题', link: '/code/other-code/non-tech' },
        { text: 'Python', link: '/code/other-code/python' },
        { text: '配环境', link: '/code/other-code/config-env' },
        { text: '疑难排查', link: '/code/other-code/problems' },
        { text: '正则表达式', link: '/code/other-code/regex' },
        { text: 'Rust', link: '/code/other-code/rust' },
        { text: '瞎玩', link: '/code/other-code/stroll' },
        { text: '一些有的没的', link: '/code/other-code/others' },
        { text: '编码习惯', link: '/code/other-code/habit' },
        { text: 'Shell', link: '/code/other-code/shell' },
        {
            text: 'sys-design', collapsed: true, items: [
                { text: '设计模式', link: '/code/other-code/sys-design/design-pattern' },
                { text: 'QA', link: '/code/other-code/sys-design/qa' },
            ]
        }, {
            text: 'distributed', collapsed: true, items: [
                { text: 'Raft论文', link: '/code/other-code/distributed/raft' },
                { text: 'PAXOS', link: '/code/other-code/distributed/paxos' },
                { text: 'refer', link: '/code/other-code/distributed/kafka/refer' },
            ]
        }, {
            text: 'network', collapsed: true, items: [
                { text: 'QA', link: '/code/other-code/network/qa' },
            ]
        }, {
            text: 'lua', collapsed: true, items: [
                { text: 'lua深入', link: '/code/other-code/lua/2022-07-22-lua-深入' },
                { text: 'lua自动化测试指南', link: '/code/other-code/lua/2021-11-24-lua-auto-test' },
                { text: 'lua学习记录', link: '/code/other-code/lua/2021-11-01-lua学习记录' },
            ],
        }, {
            text: 'db', collapsed: true, items: [
                { text: 'ODPS', link: '/code/other-code/db/odps' },
                { text: 'DB2', link: '/code/other-code/db/db2' },
                { text: 'SQL', link: '/code/other-code/db/sql' },
                { text: '达梦', link: '/code/other-code/db/dameng' },
                { text: 'mongoDB使用记录', link: '/code/other-code/db/mongoDB' },
                { text: '数据库', link: '/code/other-code/db/database' },
            ]
        }, {
            text: 'future', collapsed: true, items: [
                { text: 'Prepare', link: '/code/other-code/future/prepare' },
                { text: 'Future and Goal', link: '/code/other-code/future/future' },
                { text: '题库每日', link: '/code/other-code/future/practice' },
            ]
        }, {
            text: 'front-end', collapsed: true, items: [
                { text: 'React Native', link: '/code/other-code/front-end/react-native' },
                { text: 'css', link: '/code/other-code/front-end/css' },
                { text: '前端', link: '/code/other-code/front-end/qa' },
                { text: 'Vue', link: '/code/other-code/front-end/vue' },
                { text: 'Javascript', link: '/code/other-code/front-end/javascript' },
                { text: 'Sol', link: '/code/other-code/front-end/sol' },
                { text: 'VuePress', link: '/code/other-code/front-end/vuepress' },
                { text: 'Nuxt', link: '/code/other-code/front-end/nuxt' },
            ]
        }, {
            text: 'os', collapsed: true, items: [
                { text: 'QA', link: '/code/other-code/os/qa' },
            ]
        },
    ],

    //
    //
    '/study/': [
        { text: '各种考试', link: '/study/' },
        { text: '高考', link: '/study/gaokao' },
        { text: '散篇1', link: '/study/temp1' },
        { text: '散篇2', link: '/study/temp2' },
        {
            text: '杂谈', collapsed: true, items: [
                { text: '痛经', link: '/study/rambling/dysmenorrhoea' },
                { text: '电网', link: '/study/rambling/state-grid' },
                { text: '锻炼', link: '/study/rambling/exercise' },
                { text: '梅花 vs 桃花 vs 樱花', link: '/study/rambling/flower' },
                { text: '学位服', link: '/study/rambling/academic-dress' },
                { text: '女人相亲惯用套路', link: '/study/rambling/blind-date-routine-skill' },
                { text: '中国有14亿人 而我还是单身', link: '/study/rambling/bachelor' },
                { text: '南阳——沈阳  ', link: '/study/rambling/nanyang2shenyang' },
                { text: '身份证', link: '/study/rambling/id_card' },
            ]
        },
        {
            text: '演讲文稿', collapsed: true, items: [
                { text: 'Questionable Advice from One Very Lucky Berkeley Engineer', link: '/study/speech/craig-federighi' },
            ]
        },
    ],

    '/career/': [
        { text: '简历', link: '/career/cv' },
        { text: '软考高级系统架构', link: '/career/ruankao-high-lv' },
        { text: '公务员区别', link: '/career/gwy-diff' },
        { text: '职场人', link: '/career/' },
        { text: '年度报税', link: '/career/tax' },
        { text: '互联网工作记录', link: '/career/record-net-work' },
        {
            text: 'amazon', collapsed: true, items: [
                { text: '领导力准则 Leadership Principles', link: '/career/amazon/leadership-principles' },
            ]
        },
        {
            text: 'google', collapsed: true, items: [
                { text: 'Google GCA interviews (what to expect & how to prepare)', link: '/career/google/gca' },
            ]
        },
    ],

    '/thought/': [
        { text: '这又是什么呢', link: '/thought/temp' },
        { text: '活得像一个机器人', link: '/thought/life-bot' },
        { text: '怜悯', link: '/thought/pity' },
        { text: '结婚', link: '/thought/marry' },
        { text: '命运的织机', link: '/thought/portended-fate' },
        { text: '想法', link: '/thought/' },
        { text: '血腥暴力影视被和谐的感想  ', link: '/thought/restricted-film' },
    ],

    '/grumbling/': [
        { text: '一次淘宝经历', link: '/grumbling/1' },
        { text: '牢骚', link: '/grumbling/' },
        { text: '喷子', link: '/grumbling/2' },
    ],


    // 待定

    '/accident/': [
        { text: '2018年重庆万州公交车坠江事故', link: '/accident/2018-Chongqing-bus-crash' },
        { text: '2022年中国东方航空5735号班机空难', link: '/accident/2022-China-Eastern-Airlines-Flight-5735' },
        { text: '事故', link: '/accident/' },
        { text: '2020年贵州公交坠湖事故', link: '/accident/2020-Anshun-bus-crash' },
    ],
    '/funny/': [
        { text: '有生之年系列', link: '/funny/lifetime_series' },
        { text: '西方文明为什么在近代会超越东方文明', link: '/funny/1' },
        { text: '禁放烟花爆竹', link: '/funny/no-fireworks' },
        { text: '三年疫情创造的246个名词', link: '/funny/covid-in-cn' },
        { text: '调休', link: '/funny/tiaoxiu' },
    ],

    '/disease/': [
        { text: '病痛', link: '/disease/' },
        { text: '中暑', link: '/disease/2022-06-14-disease' },
        { text: '胃镜', link: '/disease/gastroscopy' },
        { text: '眼睛变化', link: '/disease/eyes' },
        { text: '发烧', link: '/disease/2022-12-21-disease' },
        { text: '扁桃体炎', link: '/disease/2022-06-24-disease' },
        { text: '发烧', link: '/disease/2022-12-22-disease' },
        { text: '感冒', link: '/disease/2022-11-28-disease' },
        { text: '牙', link: '/disease/tooth' },
    ],

}