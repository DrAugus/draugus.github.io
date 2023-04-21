import type { ChinaExploreRecord } from '../../type'

export const LinkChinaPrefix = '/trip/china'

export const CHINA_DATA: ChinaExploreRecord[] = [
    { id: 'beijing' },
    { id: 'chongqing' },
    { id: 'hongkong' },
    { id: 'macao' },
    { id: 'shanghai' },
    { id: 'tianjin' },
    {
        id: 'fujian',
        items: [
            { id: 'fuzhou' },
            { id: 'xiamen' },
        ]
    },
    { id: 'gansu' },
    {
        id: 'guangdong',
        items: [
            { id: 'guangzhou' },
            { id: 'shenzhen' },
        ]
    },
    {
        id: 'guangxi',
        items: [
            { id: 'liuzhou' },
            { id: 'nanning' },
        ]
    },
    {
        id: 'guizhou',
        items: [
            { id: 'guiyang' },
        ]
    },
    {
        id: 'hainan',
        items: [
            { id: 'haikou' },
            { id: 'sanya' },
        ]
    },
    {
        id: 'henan',
        items: [
            { id: 'kaifeng' },
            { id: 'luoyang' },
            { id: 'zhengzhou' }
        ]
    },
    {
        id: 'hubei',
        items: [
            { id: 'wuhan' },
        ]
    },
    {
        id: 'jiangsu',
        items: [
            { id: 'nanjing' },
            { id: 'suzhou' },
            { id: 'wuxi' },
            { id: 'yangzhou' },
        ]
    },
    {
        id: 'sichuan',
        items: [
            { id: 'chengdu' },
        ]
    },
    {
        id: 'yunnan',
        items: [
            { id: 'dali' },
            { id: 'kunming' },
            { id: 'lijiang' },
            { id: 'xishuangbanna' },
        ]
    },
    {
        id: 'sichuan',
        items: [
            { id: 'hangzhou' },
            { id: 'jinhua' },
            { id: 'shaoxing' },
            { id: 'taizhou' },
            { id: 'wenzhou' },
            { id: 'zhoushan' },
        ]
    },
]
