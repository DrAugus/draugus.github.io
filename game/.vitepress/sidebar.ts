interface LinkName {
    text: string;
    link: string;
}

const listLinkName: LinkName[] = [
    { text: '近期wish', link: "/wish-recent" },
    { text: 'wish时间轴', link: "/timeline" },
    { text: '角色列表', link: "/character" },
    { text: '复刻wish', link: "/fork" },
    { text: 'up 次数统计', link: "/uptimes" },
    { text: 'up 次数表格统计', link: "/uptable" },
    { text: '多少天可以满级', link: "/level" },
    { text: '队伍推荐', link: "/party" },
    { text: '有趣的台词', link: "/dialog" },
    { text: '怪物语音', link: "/monster" },
];

const wishLink: LinkName[] = [
    { text: '展示一', link: "/wish-info" },
    { text: '展示二', link: "/wish-info1" },
    { text: '展示三', link: "/wish-info2" },
];

const combineLinkName = (linkName: LinkName[], gameName: string): LinkName[] => {
    let linkPrefix: string = '/' + gameName;
    let replaceName: string = '';
    if (gameName == 'genshin') replaceName = '祈愿';
    if (gameName == 'hsr') replaceName = '跃迁';
    let res: LinkName[] = [];
    linkName.forEach((item, index) => {
        res[index] = {
            text: item.text.replace('wish', replaceName),
            link: linkPrefix + item.link
        };
    });
    return res;
};


export const sidebar_zh = {

    'mhy': [
        { text: '米哈游 cookie', link: "/mhy/cookie" },
    ],

    '/genshin/': [
        ...combineLinkName(listLinkName, 'genshin'),
        { text: '提瓦特通用文字', link: "/genshin/language" },
        { text: '圣遗物', link: "/genshin/artifacts" },
        {
            text: '祈愿信息', collapsed: false, items: [
                ...combineLinkName(wishLink, 'genshin'),
            ]
        },
    ],

    '/hsr/': [
        ...combineLinkName(listLinkName, 'hsr'),
        { text: '模拟宇宙', link: "/hsr/simulated-universe" },
        { text: '每日', link: "/hsr/daily" },
        { text: '锄地', link: "/hsr/hoeing" },
        { text: '遗器', link: "/hsr/relics" },
        {
            text: '跃迁信息', collapsed: false, items: [
                ...combineLinkName(wishLink, 'hsr'),
            ]
        },
    ],
};