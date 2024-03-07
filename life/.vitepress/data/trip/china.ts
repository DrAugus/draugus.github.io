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
    { id: '上海' },
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
            { id: '广州', info: [] },
            { id: '深圳', info: [] },
        ]
    },
    {
        id: '广西',
        items: [
            { id: '柳州', info: [] },
            { id: '南宁', info: [] },
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
            { id: '南京', info: [] },
            { id: 'suzhou', info: [] },
            { id: 'wuxi', info: [] },
            { id: 'yangzhou', info: [] },
        ]
    },
    {
        id: 'sichuan',
        items: [
            { id: 'chengdu', info: [] },
        ]
    },
    {
        id: 'yunnan',
        items: [
            { id: 'dali', info: [] },
            { id: 'kunming', info: [] },
            { id: 'lijiang', info: [] },
            { id: 'xishuangbanna', info: [] },
        ]
    },
    {
        id: 'sichuan',
        items: [
            { id: 'hangzhou', info: [] },
            { id: 'jinhua', info: [] },
            { id: 'shaoxing', info: [] },
            { id: 'taizhou', info: [] },
            { id: 'wenzhou', info: [] },
            { id: 'zhoushan', info: [] },
        ]
    },
];
