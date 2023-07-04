import type { CardData } from '../../type'

const prefixTrip = '/trip'
const prefixTripChina = '/trip/china'
const prefixTripAbroad = '/trip/abroad'

export const TRIP_DATA: CardData[] = [
    {
        title: '中国',
        items: [
            {
                icon: '',
                title: '江苏',
                desc: '',
                link: prefixTripChina + '/jiangsu/'
            },
            {
                icon: '',
                title: '浙江',
                desc: '',
                link: prefixTripChina + '/zhejiang/'
            },
            {
                icon: '',
                title: '广东',
                desc: '',
                link: prefixTripChina + '/guangdong/'
            },
            {
                icon: '',
                title: '河南',
                desc: '',
                link: prefixTripChina + '/henan/'
            },
            {
                icon: '',
                title: '广西',
                desc: '',
                link: prefixTripChina + '/guangxi/'
            },
            {
                icon: '',
                title: '湖南',
                desc: '',
                link: prefixTripChina + '/hunan/'
            },
            {
                icon: '',
                title: '湖北',
                desc: '',
                link: prefixTripChina + '/hubei/'
            },
            {
                icon: '',
                title: '海南',
                desc: '',
                link: prefixTripChina + '/hainan/'
            },
            {
                icon: '',
                title: '贵州',
                desc: '',
                link: prefixTripChina + '/guizhou/'
            },
            {
                icon: '',
                title: '四川',
                desc: '',
                link: prefixTripChina + '/sichuan/'
            },
            {
                icon: '',
                title: '云南',
                desc: '',
                link: prefixTripChina + '/yunnan/'
            },
            {
                icon: '',
                title: '福建',
                desc: '',
                link: prefixTripChina + '/fujian/'
            },
            {
                icon: '',
                title: '辽宁',
                desc: '',
                link: prefixTripChina + '/liaoning/'
            },
            {
                icon: '',
                title: '吉林',
                desc: '',
                link: prefixTripChina + '/jilin/'
            },
            {
                icon: '',
                title: '黑龙江',
                desc: '',
                link: prefixTripChina + '/heilongjiang/'
            },
            {
                icon: '',
                title: '甘肃',
                desc: '',
                link: prefixTripChina + '/gansu/'
            },
            {
                icon: '',
                title: '陕西',
                desc: '',
                link: prefixTripChina + '/shaanxi/'
            },
            {
                icon: '',
                title: '山西',
                desc: '',
                link: prefixTripChina + '/shanxi/'
            },
        ]
    },
    {
        title: '国外',
        items: [
            {
                icon: '',
                title: '亚洲',
                desc: '',
                link: prefixTripAbroad + '/asia/'
            },
            {
                icon: '',
                title: '欧洲',
                desc: '',
                link: prefixTripAbroad + '/europe/'
            },
        ]
    }
]
