export const sidebar = {
    '/eat/': [
        { text: '真的不能吃', link: '/eat/block' },
        { text: '做点什么吧', link: '/eat/cookbook' },
        { text: '吃饭了', link: '/eat/choose' },
    ],
    '/trip/': [
        { text: '规划指南', link: '/trip/' },
        { text: '探索', link: '/trip/explore' },
        { text: '护照和签证的区别', link: '/trip/passport-vs-visa' },
        { text: '境外卡办理指南', link: '/trip/card' },
        { text: '签证', link: '/trip/visa' },
        { text: '护照', link: '/trip/passport' },
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
                { text: '广州', link: '/trip/china/guangdong/guangzhou' },
                { text: '深圳', link: '/trip/china/guangdong/shenzhen' },
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
}