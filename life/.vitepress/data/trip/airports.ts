import { Airport, AirportMap } from "../../type";


// data from
// https://echarts.apache.org/examples/data-gl/asset/data/flights.json
const AIRPORTS: Airport[] = [
    {
        code: 'HGH',
        name: 'Hangzhou Xiaoshan International Airport',
        nameLocal: '杭州萧山国际机场',
        abbrZH: '杭州萧山',
        city: '杭州',
        region: '中国',
        longitude: 120.434453,
        latitude: 30.229503,
    }, {
        code: 'NKG',
        name: 'Nanjing Lukou International Airport',
        nameLocal: '南京禄口国际机场',
        abbrZH: '南京禄口',
        city: '南京',
        region: '中国',
        longitude: 118.862025,
        latitude: 31.742042
    }, {
        code: 'SHA',
        name: 'Shanghai Hongqiao International Airport',
        nameLocal: '上海虹桥国际机场',
        abbrZH: '上海虹桥',
        city: '上海',
        region: '中国',
        longitude: 121.336319,
        latitude: 31.197875
    }, {
        code: 'PVG',
        name: 'Shanghai Pudong International Airport',
        nameLocal: '上海浦东国际机场',
        abbrZH: '上海浦东',
        city: '上海',
        region: '中国',
        longitude: 121.805214,
        latitude: 31.143378
    }, {
        code: 'CGQ',
        name: 'Changchun Longjia International Airport',
        nameLocal: '长春龙嘉国际机场',
        abbrZH: '长春龙嘉',
        city: '长春',
        region: '中国',
        longitude: 125.1201,
        latitude: 43.5412
    }, {
        code: 'SHE',
        name: 'Shenyang Taoxian International Airport',
        nameLocal: '沈阳桃仙国际机场',
        abbrZH: '沈阳桃仙',
        city: '沈阳',
        region: '中国',
        longitude: 123.2901,
        latitude: 41.3824
    }, {
        code: 'CTU',
        name: 'Chengdu Shuangliu International Airport',
        nameLocal: '成都双流国际机场',
        abbrZH: '成都双流',
        city: '成都',
        region: '中国',
        longitude: 103.947086,
        latitude: 30.578528
    }, {
        code: 'DLC',
        name: 'Dalian Zhoushuizi International Airport',
        nameLocal: '大连周水子国际机场',
        abbrZH: '大连周水子',
        city: '大连',
        region: '中国',
        longitude: 121.5386,
        latitude: 38.965667
    }, {
        code: 'CAN',
        name: 'Guangzhou Baiyun International Airport',
        nameLocal: '广州白云国际机场',
        abbrZH: '广州白云',
        city: '广州',
        region: '中国',
        longitude: 113.298786,
        latitude: 23.392436
    }, {
        code: 'ZUH',
        name: 'Zhuhai Jinwan Airport',
        nameLocal: '珠海金湾机场',
        abbrZH: '珠海金湾',
        city: '珠海',
        region: '中国',
        longitude: 113.376,
        latitude: 22.0064
    }, {
        code: 'SWA',
        name: 'Jieyang Chaoshan International Airport',
        nameLocal: '揭阳潮汕国际机场',
        abbrZH: '揭阳潮汕',
        city: '揭阳',
        region: '中国',
        longitude: 116.512436,
        latitude: 23.542034
    }, {
        code: 'NNY',
        name: 'Nanyang Jiangying Airport',
        nameLocal: '南阳姜营机场',
        abbrZH: '南阳姜营',
        city: '南阳',
        region: '中国',
        longitude: 112.615,
        latitude: 32.9808
    }, {
        code: 'XIY',
        name: "Xi'an Xianyang International Airport",
        nameLocal: '西安咸阳国际机场',
        abbrZH: '西安咸阳',
        city: "西安",
        region: '中国',
        longitude: 108.751592,
        latitude: 34.447119
    }, {
        code: 'KWE',
        name: 'Guiyang Longdongbao International Airport',
        nameLocal: '贵阳龙洞堡国际机场',
        abbrZH: '贵阳龙洞堡',
        city: '贵阳',
        region: '中国',
        longitude: 106.800703,
        latitude: 26.538522
    }, {
        code: 'KMG',
        name: 'Kunming Changshui International Airport',
        nameLocal: '昆明长水国际机场',
        abbrZH: '昆明长水',
        city: '昆明',
        region: '中国',
        longitude: 102.743536,
        latitude: 24.992364
    }, {
        code: 'XMN',
        name: 'Xiamen Gaoqi International Airport',
        nameLocal: '厦门高崎国际机场',
        abbrZH: '厦门高崎',
        city: '厦门',
        region: '中国',
        longitude: 118.127739,
        latitude: 24.544036
    }, {
        code: 'KHN',
        name: 'Nanchang Changbei International Airport',
        nameLocal: '南昌昌北国际机场',
        abbrZH: '南昌昌北',
        city: '南昌',
        region: '中国',
        longitude: 115.9,
        latitude: 28.865
    }, {
        code: 'FOC',
        name: 'Fuzhou Changle International Airport',
        nameLocal: '福州长乐国际机场',
        abbrZH: '福州长乐',
        city: '福州',
        region: '中国',
        longitude: 119.663272,
        latitude: 25.935064
    }, {
        code: 'NGB',
        name: 'Ningbo Lishe International Airport',
        nameLocal: '宁波栎社国际机场',
        abbrZH: '宁波栎社',
        city: '宁波',
        region: '中国',
        longitude: 121.461906,
        latitude: 29.826683
    }, {
        code: 'PEK',
        name: 'Beijing Capital International Airport',
        nameLocal: '北京首都国际机场',
        abbrZH: '北京首都',
        city: '北京',
        region: '中国',
        longitude: 116.584556,
        latitude: 40.080111
    }, {
        code: 'PKX',
        name: 'Beijing Daxing International Airport',
        nameLocal: '北京大兴国际机场',
        abbrZH: '大兴机场',
        city: '北京',
        region: '中国',
        longitude: 116.420523,
        latitude: 39.542600
    }, {
        code: 'CGO',
        name: 'Zhengzhou Xinzheng International Airport',
        nameLocal: '郑州新郑国际机场',
        abbrZH: '郑州新郑',
        city: '郑州',
        region: '中国',
        longitude: 113.840889,
        latitude: 34.519672
    }, {
        code: 'CKG',
        name: 'Chongqing Jiangbei International Airport',
        nameLocal: '重庆江北国际机场',
        abbrZH: '重庆江北',
        city: '重庆',
        region: '中国',
        longitude: 106.641678,
        latitude: 29.719217
    }, {
        code: 'KHG',
        name: 'Kashi Laining International Airport',
        nameLocal: '喀什徕宁国际机场',
        abbrZH: '喀什徕宁',
        city: '喀什',
        region: '中国',
        longitude: 76.019956,
        latitude: 39.542922
    }, {
        code: 'URC',
        name: 'Urumqi Diwopu International Airport',
        nameLocal: '乌鲁木齐地窝堡国际机场',
        abbrZH: '乌鲁木齐地窝堡',
        city: '乌鲁木齐',
        region: '中国',
        longitude: 87.474244,
        latitude: 43.907106
    }, {
        code: 'HRB',
        name: 'Harbin Taiping International Airport',
        nameLocal: '哈尔滨太平国际机场',
        abbrZH: '哈尔滨太平',
        city: '哈尔滨',
        region: '中国',
        longitude: 126.250328,
        latitude: 45.623403
    }, {
        code: 'MDG',
        name: 'Mudanjiang Hailang International Airport',
        nameLocal: '牡丹江海浪国际机场',
        abbrZH: '牡丹江海浪',
        city: '牡丹江',
        region: '中国',
        longitude: 129.568972,
        latitude: 44.524072
    }, {
        code: 'DLU',
        name: 'Dali Fengyi Airport',
        nameLocal: '大理凤仪机场',
        abbrZH: '大理凤仪',
        city: '大理',
        region: '中国',
        longitude: 100.319444,
        latitude: 25.649444
    }, {
        code: 'KWL',
        name: 'Guilin Liangjiang International Airport',
        nameLocal: '桂林两江国际机场',
        abbrZH: '桂林两江',
        city: '桂林',
        region: '中国',
        longitude: 110.039197,
        latitude: 25.218106
    }, {
        code: 'LZH',
        name: 'Liuzhou Bailian Airport',
        nameLocal: '柳州白莲机场',
        abbrZH: '柳州白莲',
        city: '柳州',
        region: '中国',
        longitude: 109.391,
        latitude: 24.2075
    }, {
        code: 'NNG',
        name: 'Nanning Wuxu International Airport',
        nameLocal: '南宁吴圩国际机场',
        abbrZH: '南宁吴圩',
        city: '南宁',
        region: '中国',
        longitude: 108.172442,
        latitude: 22.608267
    }, {
        code: 'CSX',
        name: 'Changsha Huanghua International Airport',
        nameLocal: '长沙黄花国际机场',
        abbrZH: '长沙黄花',
        city: '长沙',
        region: '中国',
        longitude: 113.219633,
        latitude: 28.189158
    }, {
        code: 'SZX',
        name: "Shenzhen Bao'an International Airport",
        nameLocal: '深圳宝安国际机场',
        abbrZH: '深圳宝安',
        city: '深圳',
        region: '中国',
        longitude: 113.810664,
        latitude: 22.639258
    }, {
        code: 'WUH',
        name: 'Wuhan Tianhe International Airport',
        nameLocal: '武汉天河国际机场',
        abbrZH: '武汉天河',
        city: '武汉',
        region: '中国',
        longitude: 114.2081,
        latitude: 30.783758
    }, {
        code: 'LHW',
        name: 'Lanzhou Zhongchuan International Airport',
        nameLocal: '兰州中川国际机场',
        abbrZH: '兰州中川',
        city: '兰州',
        region: '中国',
        longitude: 103.620775,
        latitude: 36.515242
    }, {
        code: 'JHG',
        name: 'Xishuangbanna Gasa International Airport',
        nameLocal: '西双版纳嘎洒国际机场',
        abbrZH: '西双版纳嘎洒',
        city: '景洪',
        region: '中国',
        longitude: 100.759611,
        latitude: 21.973914
    }, {
        code: 'SYX',
        name: 'Sanya Phoenix International Airport',
        nameLocal: '三亚凤凰国际机场',
        abbrZH: '三亚凤凰',
        city: '三亚',
        region: '中国',
        longitude: 109.412272,
        latitude: 18.302897
    }, {
        code: 'HAK',
        name: 'Haikou Meilan International Airport',
        nameLocal: '海口美兰国际机场',
        abbrZH: '海口美兰',
        city: '海口',
        region: '中国',
        longitude: 110.458961,
        latitude: 19.934856
    }, {
        code: '',
        name: '',
        nameLocal: '',
        abbrZH: '',
        city: '',
        region: '中国',
        longitude: 0,
        latitude: 0
    }, {
        code: 'HKG',
        name: 'Hong Kong International Airport',
        nameLocal: '香港國際機場',
        abbrZH: '香港国际',
        city: '香港',
        region: '香港',
        longitude: 113.922901,
        latitude: 22.303733
    }, {
        code: 'NRT',
        name: 'Narita International Airport',
        nameLocal: '成田国際空港',
        abbrZH: '东京成田',
        city: '东京',
        region: '日本',
        longitude: 140.386389,
        latitude: 35.764722
    }, {
        code: 'HND',
        name: 'Haneda Airport',
        nameLocal: '羽田空港',
        abbrZH: '东京羽田',
        city: '东京',
        region: '日本',
        longitude: 139.781113,
        latitude: 35.553333
    }, {
        code: 'KIX',
        name: 'Kansai International Airport',
        nameLocal: '関西国際空港',
        abbrZH: '大阪关西',
        city: '大阪',
        region: '日本',
        longitude: 135.244167,
        latitude: 34.4347222
    }
];

export const mapAirportsByCode: AirportMap = AIRPORTS.reduce((obj, item) => {
    const key = item.code;
    if (key) {
        obj[key] = item;
    }
    return obj;
}, {});

export const mapAirportsByAbbrZH: AirportMap = AIRPORTS.reduce((obj, item) => {
    const key = item.abbrZH;
    if (key) {
        obj[key] = item;
    }
    return obj;
}, {});