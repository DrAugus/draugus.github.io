import type { CardData, CardLink, EntertainmentContent } from '../type';

const prefixLink = '/daily/entertainment/';

export const ENTERTAINMENT_CONTENT: EntertainmentContent[] = [
    {
        title: '过把瘾',
        description: '该剧讲述了主人公方言与杜梅从相识、相爱、相斥、相离、相信，以至到最后再次相聚的故事。',
        contentType: 'series',
        releaseYear: 1993,
        watchedStatus: false,
    },
    {
        title: '婚后事',
        description: '讲述了爱情关系的诸种纠结情状：暴烈与温柔、丑陋与美丽、虐心与疗愈、现实与浪漫，不一而足，具体在《婚后事》。',
        contentType: 'series',
        releaseYear: 2024,
        watchedStatus: true,
    },
    {
        title: 'Patrick Melrose',
        description: '该剧讲述梅尔罗斯从小遭受家人虐待，长大开始吸毒，最终克服困境，恢复到健康人生的故事。',
        contentType: 'series',
        releaseYear: 2018,
        watchedStatus: true,
    },
    {
        title: 'The Crown',
        description: '该剧讲述了伊丽莎白二世自1952年登基以来，作为英国女王所取得的个人、政治和社会上的成就，以及英国王室不断去适应日新月异却又动荡不安的世界的故事。',
        contentType: 'series',
        releaseYear: 2016,
        watchedStatus: false,
    },
    {
        title: 'Dune',
        description: '该片改编自弗兰克·赫伯特的同名小说，讲述了控制着珍贵资源的厄崔迪家族在遭遇背叛后，家族的继承人保罗决定接受命运的指引，去保卫自己的家族和人民的故事。',
        contentType: 'movie',
        releaseYear: 2021,
        watchedStatus: false,
    },
    {
        title: '周處除三害',
        description: '该片化用《晋书·周处传》和《世说新语》中“周处除三害”的典故，讲述了通缉犯陈桂林以为自己生命将尽，于是决心除掉通缉榜上排在自己前面的两大罪犯并借此扬名的故事',
        contentType: 'movie',
        releaseYear: 2023,
        watchedStatus: true,
    },
    {
        title: 'The Avengers',
        description: '该系列电影主要讲述的是“复仇者联盟”应运而生以及后续的超级英雄集结的故事。他们各显神通，团结一心，终于打倒邪恶势力，保证了地球的安全',
        contentType: 'movie',
        releaseYear: 2012,
        watchedStatus: true,
        link: prefixLink + 'marvel'
    },
    {
        title: 'TBBT(The Big Bang Theory)',
        description: '该剧讲述了谢尔顿和莱昂纳德等科学家和他们的朋友的故事',
        contentType: 'series',
        releaseYear: 2007,
        watchedStatus: true,
    },
    {
        title: 'Friends',
        description: '该剧讲述了居住在纽约的莫妮卡、钱德勒、瑞秋、菲比、乔伊和罗斯三男三女作为彼此最好的朋友，在同一屋檐下生活的日常故事',
        contentType: 'series',
        releaseYear: 1994,
        watchedStatus: false,
    },
    {
        title: 'Sherlock',
        description: '该剧改编自阿瑟·柯南·道尔创作的侦探小说《福尔摩斯探案集》，将原著的时间背景从19世纪搬到了21世纪，讲述在繁华热闹的伦敦大都市中，时尚的大侦探夏洛克·福尔摩斯和他的朋友约翰·H·华生经受的一系列危险的、不同寻常的历险',
        contentType: 'series',
        releaseYear: 2010,
        watchedStatus: true,
    },
    {
        title: '응답하라 1988',
        description: '以1988年汉城（今首尔）奥运会为背景，讲述在首尔市道峰区双门洞居住的五户人家之间温暖的亲情和邻里情的故事',
        contentType: 'series',
        releaseYear: 2015,
        watchedStatus: false,
    },
    {
        title: 'Interstellar',
        description: '该片在物理学家基普·索恩的黑洞理论之上进行改编，主要讲述了一组宇航员通过穿越虫洞来为人类寻找新家园的冒险故事',
        contentType: 'movie',
        releaseYear: 2014,
        watchedStatus: true,
    },
    {
        title: 'The Irishman',
        description: '该片根据查尔斯·布兰特小说《听说你刷房子了》改编，影片聚焦于黑帮杀手“爱尔兰人”的人生，通过二战老兵弗兰克·谢兰的视角，讲述了战后美国有组织犯罪的故事',
        contentType: 'movie',
        releaseYear: 2019,
        watchedStatus: false,
    },
    {
        title: 'Wołyń',
        description: '该片讲述了波兰一个女孩爱上了一个乌克兰男孩，父母却决定让她嫁给一个波兰鳏夫，此时二战正要爆发，她不得不在死神面前末路狂奔的故事',
        contentType: 'movie',
        releaseYear: 2016,
        watchedStatus: false,
    },
    {
        title: '想見你',
        description: '该剧讲述了分别在1998年和2019年的男女主人公们，通过一盘磁带穿梭时空，找寻彼此的爱情故事',
        contentType: 'series',
        releaseYear: 2019,
        watchedStatus: false,
    },
    {
        title: '거침없이 하이킥',
        description: '该剧讲述了住在韩国首都首尔黑石洞的李顺财一家搞笑的日常生活。',
        contentType: 'series',
        releaseYear: 2006,
        watchedStatus: false,
    },
    {
        title: '铁齿铜牙纪晓岚',
        description: '该剧讲述了两个大学士（纪晓岚与和珅）、一个大将军（福康安）和乾隆皇帝之间，为公为私，斗智斗勇的故事，以嬉笑怒骂的手法，歌颂正义与善良。',
        contentType: 'series',
        releaseYear: 2000,
        watchedStatus: true,
    },
    {
        title: '庆余年',
        description: '该剧改编自猫腻的同名小说，讲述了一个有着神秘身世的少年范闲，自海边小城初出茅庐，历经家族、江湖、庙堂的种种考验、锤炼的故事',
        contentType: 'series',
        releaseYear: 2019,
        watchedStatus: true,
    },
    {
        title: '神探狄仁杰',
        description: '主要讲述了唐朝武周年间大臣狄仁杰屡破命案的故事',
        contentType: 'series',
        releaseYear: 2004,
        watchedStatus: true,
    },
    {
        title: '武林外传',
        description: '该剧的故事围绕着一个在虚拟的明代（约在万历年间）的关中地区小镇七侠镇中同福客栈里的女掌柜佟湘玉和她的几个伙计展开。这群年轻人在同一屋檐下演绎了一幕幕经典的搞笑场面，在欢笑与眼泪中陪伴观众们一起渐渐成长。',
        contentType: 'series',
        releaseYear: 2006,
        watchedStatus: true,
    },
    {
        title: '디어 마이 프렌즈',
        description: '该剧主要讲述人生还没有结束，我们还活着的黄昏青春的人生礼赞，走向人生尽头的朋友们之间的故事',
        contentType: 'series',
        releaseYear: 2016,
        watchedStatus: false,
    },
    {
        title: '',
        description: '',
        contentType: 'series',
        releaseYear: 0,
        watchedStatus: false,
    },
    {
        title: '',
        description: '',
        contentType: 'series',
        releaseYear: 0,
        watchedStatus: false,
    },
];

export const change2card = (): CardData[] => {
    let res: CardData[] = [
        {
            title: '电视剧',
            items: []
        },
        {
            title: '电影',
            items: []
        }
    ];
    let movie = res[1].items;
    let series = res[0].items;

    const sorted = ENTERTAINMENT_CONTENT.sort((a, b) => b.releaseYear - a.releaseYear);
    sorted.forEach(v => {
        if (!v.title) {
            return;
        }
        let card: CardLink = {
            title: v.title,
            date: `${v.releaseYear}年`,
            desc: v.description,
            bgColor: v.watchedStatus ? '#8BC34A' : '#B0BEC5',
            link: v.link ? v.link : ''
        };

        if (v.contentType === 'movie') {
            movie.push(card);
        } else if (v.contentType === 'series') {
            series.push(card);
        }
    });
    // console.log(res);
    return res;
};
