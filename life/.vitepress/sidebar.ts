export const sidebar = {
    '/eat/': [
        {
            text: '吃点儿',
            collapsed: true,
            items: [
                { text: '真的不能吃', link: '/eat/block' },
                { text: '做点什么吧', link: '/eat/cookbook' },
                { text: '吃饭了', link: '/eat/choose' },
            ],
        }
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
            text: '浙江', collapsed: true, items: [
                { text: '绍兴', link: '/trip/china/zhejiang/shaoxing' },
                { text: '温州', link: '/trip/china/zhejiang/wenzhou' },
                { text: '杭州', link: '/trip/china/zhejiang/hangzhou' },
            ],
        },

    ],
    '/trip/abroad': [
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
}