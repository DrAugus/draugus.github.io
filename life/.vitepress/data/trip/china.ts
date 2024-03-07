import type { ChinaExploreRecord } from '../../type';

export const LinkChinaPrefix = '/trip/china';

export const CHINA_VISITED_DATA: ChinaExploreRecord[] = [
    {
        id: '北京', info: [
            {
                date: {
                    start: new Date('2019/02/10'),
                    end: new Date('2019/02/27')
                },
                intro: "求职"
            },
            {
                date: {
                    start: new Date('2019/03/08'),
                    end: new Date('2019/03/09'),
                },
                intro: "游玩"
            },
            {
                date: {
                    start: new Date('2020/02/15'),
                },
                intro: "北京西站-北京站转车"
            }
        ]
    },
    { id: '重庆' },
    {
        id: '香港', info: [
            {
                date: {
                    start: new Date('2023/05/02'),
                },
                intro: "游玩"
            },
            {
                date: {
                    start: new Date('2023/06/28'),
                    end: new Date('2023/06/29'),
                },
                intro: "游玩"
            },
            {
                date: {
                    start: new Date('2023/07/20'),
                },
                intro: "转机"
            },
            {
                date: {
                    start: new Date('2023/07/27'),
                },
                intro: "转机"
            }
        ]
    },
    {
        id: '澳门', info: [
            {
                date: {
                    start: new Date('2023/05/01'),
                },
                intro: "游玩"
            },
            {
                date: {
                    start: new Date('2023/06/29'),
                },
                intro: "坐船/巴士往返香港"
            },
        ]
    },
    {
        id: '上海', info: [
            {
                date: {
                    start: new Date('2021/10/02'),
                },
                intro: "游玩"
            },
            {
                date: {
                    start: new Date('2022/09/07'),
                },
                intro: "高铁转车，苏州-杭州"
            }, {
                date: {
                    start: new Date('2023/03/11'),
                    end: new Date('2023/03/12'),
                },
                intro: "游玩"
            }, {
                date: {
                    start: new Date('2023/06/22'),
                },
                intro: "浦东坐飞机"
            }, {
                date: {
                    start: new Date('2023/06/26'),
                },
                intro: "浦东坐飞机"
            }, {
                date: {
                    start: new Date('2023/10/06'),
                },
                intro: "高铁转车"
            },
        ]
    },
    { id: '天津' },
    {
        id: '福建',
        items: [
            {
                id: '福州', info: [
                    {
                        date: {
                            start: new Date('2022/03/18'),
                            end: new Date('2022/03/20'),
                        },
                        intro: "游玩"
                    }
                ]
            },
            {
                id: '厦门', info: [
                    {
                        date: {
                            start: new Date('2022/06/02'),
                            end: new Date('2022/06/05'),
                        },
                        intro: "游玩"
                    }
                ]
            },
        ]
    },
    { id: '甘肃' },
    {
        id: '广东',
        items: [
            {
                id: '广州', info: [
                    {
                        date: {
                            start: new Date('2023/04/29'),
                            end: new Date('2023/05/01'),
                        },
                        intro: "游玩"
                    }, {
                        date: {
                            start: new Date('2023/06/30'),
                        },
                        intro: "高铁转车"
                    }
                ]
            },
            {
                id: '深圳', info: [{
                    date: {
                        start: new Date('2023/05/01'),
                        end: new Date('2023/05/03'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2023/06/28'),
                    },
                    intro: "转车去香港"
                }]
            },
        ]
    },
    {
        id: '广西',
        items: [
            {
                id: '柳州', info: [{
                    date: {
                        start: new Date('2023/06/30'),
                        end: new Date('2023/07/02'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2023/10/20'),
                        end: new Date('2023/10/22'),
                    },
                    intro: "游玩"
                },]
            },
            {
                id: '南宁', info: [{
                    date: {
                        start: new Date('2022/05/27'),
                        end: new Date('2022/05/29'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2023/06/10'),
                        end: new Date('2023/06/12'),
                    },
                    intro: "游玩"
                },]
            },
        ]
    },
    {
        id: '贵州',
        items: [
            { id: '贵阳', info: [] },
        ]
    },
    {
        id: '江苏',
        items: [
            {
                id: '南京', info: [{
                    date: {
                        start: new Date('2023/02/25'),
                        end: new Date('2023/02/26'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2023/08/09'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2024/01/01'),
                    },
                    intro: "送机"
                },]
            },
            {
                id: '苏州', info: [{
                    date: {
                        start: new Date('2016/08/02'),
                        end: new Date('2016/08/05'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2022/09/06'),
                        end: new Date('2022/09/07'),
                    },
                    intro: "游玩"
                },]
            },
            { id: '无锡', info: [] },
            { id: '扬州', info: [] },
        ]
    },
    {
        id: '四川',
        items: [
            {
                id: '成都',
                info: [{
                    date: {
                        start: new Date('2020/07/28'),
                        end: new Date('2021/04/28'),
                    },
                    intro: "工作"
                },],
                resident: true
            },
        ]
    },
    {
        id: '辽宁',
        items: [
            {
                id: '沈阳',
                info: [{
                    date: {
                        start: new Date('2014/09/01'),
                        end: new Date('2020/07/28'),
                    },
                    intro: "学习，工作"
                },],
                resident: true
            },
        ]
    },
    {
        id: '云南',
        items: [
            {
                id: '大理白族自治州', info: [{
                    date: {
                        start: new Date('2022/08/14'),
                        end: new Date('2022/08/15'),
                    },
                    intro: "游玩"
                },]
            },
            {
                id: '昆明', info: [{
                    date: {
                        start: new Date('2022/08/13'),
                        end: new Date('2022/08/15'),
                    },
                    intro: "游玩"
                },]
            },
            { id: '丽江', info: [] },
            {
                id: '西双版纳傣族自治州', info: [{
                    date: {
                        start: new Date('2022/08/12'),
                        end: new Date('2022/08/13'),
                    },
                    intro: "游玩"
                },]
            },
        ]
    },
    {
        id: '浙江',
        items: [
            {
                id: '杭州',
                resident: true,
                info: [{
                    date: {
                        start: new Date('2021/04/03'),
                        end: new Date('2021/04/05'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2021/04/28'),
                    },
                    intro: "工作"
                },]
            },
            {
                id: '绍兴', info: [{
                    date: {
                        start: new Date('2021/10/03'),
                    },
                    intro: "游玩"
                }, {
                    date: {
                        start: new Date('2023/04/22'),
                    },
                    intro: "游玩"
                },]
            },
            {
                id: '舟山', info: [{
                    date: {
                        start: new Date('2023/04/15'),
                    },
                    intro: "游玩"
                },]
            },
        ]
    },
];
