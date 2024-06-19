import { Airport, AirportMap } from "../../type";

// data from
// https://echarts.apache.org/examples/data-gl/asset/data/flights.json

const AIRPORTS: Airport[] = [
    {
        code: 'HGH',
        name: 'Hangzhou Xiaoshan International Airport',
        nameLocal: '杭州萧山国际机场',
        city: 'Hangzhou',
        country: 'China',
        longitude: 120.434453,
        latitude: 30.229503,
    }, {
        code: 'NKG',
        name: 'Nanjing Lukou International Airport',
        nameLocal: '南京禄口国际机场',
        city: 'Nanjing',
        country: 'China',
        longitude: 118.862025,
        latitude: 31.742042
    }, {
        code: 'SHA',
        name: 'Shanghai Hongqiao International Airport',
        nameLocal: '上海虹桥国际机场',
        city: 'Shanghai',
        country: 'China',
        longitude: 121.336319,
        latitude: 31.197875
    }, {
        code: 'PVG',
        name: 'Shanghai Pudong International Airport',
        nameLocal: '上海浦东国际机场',
        city: 'Shanghai',
        country: 'China',
        longitude: 121.805214,
        latitude: 31.143378
    }, {
        code: 'CGQ',
        name: 'Changchun Longjia International Airport',
        nameLocal: '长春龙嘉国际机场',
        city: 'Changchun',
        country: 'China',
        longitude: 125.1201,
        latitude: 43.5412
    }, {
        code: 'SHE',
        name: 'Shenyang Taoxian International Airport',
        nameLocal: '沈阳桃仙国际机场',
        city: 'Shenyang',
        country: 'China',
        longitude: 123.2901,
        latitude: 41.3824
    }, {
        code: 'CTU',
        name: 'Chengdu Shuangliu International Airport',
        nameLocal: '成都双流国际机场',
        city: 'Chengdu',
        country: 'China',
        longitude: 103.947086,
        latitude: 30.578528
    }, {
        code: 'DLC',
        name: 'Dalian Zhoushuizi International Airport',
        nameLocal: '大连周水子国际机场',
        city: 'Dalian',
        country: 'China',
        longitude: 121.5386,
        latitude: 38.965667
    }, {
        code: 'CAN',
        name: 'Guangzhou Baiyun International Airport',
        nameLocal: '广州白云国际机场',
        city: 'Guangzhou',
        country: 'China',
        longitude: 113.298786,
        latitude: 23.392436
    }, {
        code: 'ZUH',
        name: 'Zhuhai Jinwan Airport',
        nameLocal: '珠海金湾机场',
        city: 'Zhuhai',
        country: 'China',
        longitude: 113.376,
        latitude: 22.0064
    }, {
        code: 'NNY',
        name: 'Nanyang Jiangying Airport',
        nameLocal: '南阳姜营机场',
        city: 'Nanyang',
        country: 'China',
        longitude: 112.615,
        latitude: 32.9808
    }, {
        code: 'XIY',
        name: "Xi'an Xianyang International Airport",
        nameLocal: '西安咸阳国际机场',
        city: "Xi'an",
        country: 'China',
        longitude: 108.751592,
        latitude: 34.447119
    }, {
        code: 'KWE',
        name: 'Guiyang Longdongbao International Airport',
        nameLocal: '贵阳龙洞堡国际机场',
        city: 'Guiyang',
        country: 'China',
        longitude: 106.800703,
        latitude: 26.538522
    }, {
        code: 'KMG',
        name: 'Kunming Changshui International Airport',
        nameLocal: '昆明长水国际机场',
        city: 'Kunming',
        country: 'China',
        longitude: 102.743536,
        latitude: 24.992364
    }, {
        code: 'XMN',
        name: 'Xiamen Gaoqi International Airport',
        nameLocal: '厦门高崎国际机场',
        city: 'Xiamen',
        country: 'China',
        longitude: 118.127739,
        latitude: 24.544036
    }, {
        code: 'KHN',
        name: 'Nanchang Changbei International Airport',
        nameLocal: '南昌昌北国际机场',
        city: 'Nanchang',
        country: 'China',
        longitude: 115.9,
        latitude: 28.865
    }, {
        code: 'FOC',
        name: 'Fuzhou Changle International Airport',
        nameLocal: '福州长乐国际机场',
        city: 'Fuzhou',
        country: 'China',
        longitude: 119.663272,
        latitude: 25.935064
    }, {
        code: 'NGB',
        name: 'Ningbo Lishe International Airport',
        nameLocal: '宁波栎社国际机场',
        city: 'Ningbo',
        country: 'China',
        longitude: 121.461906,
        latitude: 29.826683
    }, {
        code: 'PEK',
        name: 'Beijing Capital International Airport',
        nameLocal: '北京首都国际机场',
        city: 'Beijing',
        country: 'China',
        longitude: 116.584556,
        latitude: 40.080111
    }, {
        code: 'CGO',
        name: 'Zhengzhou Xinzheng International Airport',
        nameLocal: '郑州新郑国际机场',
        city: 'Zhengzhou',
        country: 'China',
        longitude: 113.840889,
        latitude: 34.519672
    }, {
        code: 'CKG',
        name: 'Chongqing Jiangbei International Airport',
        nameLocal: '重庆江北国际机场',
        city: 'Chongqing',
        country: 'China',
        longitude: 106.641678,
        latitude: 29.719217
    }, {
        code: 'KHG',
        name: 'Kashi Laining International Airport',
        nameLocal: '喀什徕宁国际机场',
        city: 'Kashi',
        country: 'China',
        longitude: 76.019956,
        latitude: 39.542922
    }, {
        code: 'URC',
        name: 'Urumqi Diwopu International Airport',
        nameLocal: '乌鲁木齐地窝堡国际机场',
        city: 'Urumqi',
        country: 'China',
        longitude: 87.474244,
        latitude: 43.907106
    }, {
        code: 'HRB',
        name: 'Harbin Taiping International Airport',
        nameLocal: '哈尔滨太平国际机场',
        city: 'Harbin',
        country: 'China',
        longitude: 126.250328,
        latitude: 45.623403
    }, {
        code: 'MDG',
        name: 'Mudanjiang Hailang International Airport',
        nameLocal: '牡丹江海浪国际机场',
        city: 'Mudanjiang',
        country: 'China',
        longitude: 129.568972,
        latitude: 44.524072
    }, {
        code: 'DLU',
        name: 'Dali Fengyi Airport',
        nameLocal: '大理凤仪机场',
        city: 'Dali',
        country: 'China',
        longitude: 100.319444,
        latitude: 25.649444
    }, {
        code: 'KWL',
        name: 'Guilin Liangjiang International Airport',
        nameLocal: '桂林两江国际机场',
        city: 'Guilin',
        country: 'China',
        longitude: 110.039197,
        latitude: 25.218106
    }, {
        code: 'LZH',
        name: 'Liuzhou Bailian Airport',
        nameLocal: '柳州白莲机场',
        city: 'Liuzhou',
        country: 'China',
        longitude: 109.391,
        latitude: 24.2075
    }, {
        code: 'NNG',
        name: 'Nanning Wuxu International Airport',
        nameLocal: '南宁吴圩国际机场',
        city: 'Nanning',
        country: 'China',
        longitude: 108.172442,
        latitude: 22.608267
    }, {
        code: 'CSX',
        name: 'Changsha Huanghua International Airport',
        nameLocal: '长沙黄花国际机场',
        city: 'Changcha',
        country: 'China',
        longitude: 113.219633,
        latitude: 28.189158
    }, {
        code: 'SZX',
        name: "Shenzhen Bao'an International Airport",
        nameLocal: '深圳宝安国际机场',
        city: 'Shenzhen',
        country: 'China',
        longitude: 113.810664,
        latitude: 22.639258
    }, {
        code: 'WUH',
        name: 'Wuhan Tianhe International Airport',
        nameLocal: '武汉天河国际机场',
        city: 'Wuhan',
        country: 'China',
        longitude: 114.2081,
        latitude: 30.783758
    }, {
        code: 'LHW',
        name: 'Lanzhou Zhongchuan International Airport',
        nameLocal: '兰州中川国际机场',
        city: 'Lanzhou',
        country: 'China',
        longitude: 103.620775,
        latitude: 36.515242
    }, {
        code: 'JHG',
        name: 'Xishuangbanna Gasa International Airport',
        nameLocal: '西双版纳嘎洒国际机场',
        city: 'Jinghong',
        country: 'China',
        longitude: 100.759611,
        latitude: 21.973914
    }, {
        code: 'SYX',
        name: 'Sanya Phoenix International Airport',
        nameLocal: '三亚凤凰国际机场',
        city: 'Sanya',
        country: 'China',
        longitude: 109.412272,
        latitude: 18.302897
    }, {
        code: 'HAK',
        name: 'Haikou Meilan International Airport',
        nameLocal: '海口美兰国际机场',
        city: 'Haikou',
        country: 'China',
        longitude: 110.458961,
        latitude: 19.934856
    }, {
        code: '',
        name: '',
        nameLocal: '',
        city: '',
        country: 'China',
        longitude: 0,
        latitude: 0
    }, {
        code: 'NRT',
        name: 'Narita International Airport',
        nameLocal: '',
        city: 'Tokyo',
        country: 'Japan',
        longitude: 140.386389,
        latitude: 35.764722
    }, {
        code: 'HND',
        name: 'Haneda Airport',
        nameLocal: '羽田空港',
        city: 'Tokyo',
        country: 'Japan',
        longitude: 139.781113,
        latitude: 35.553333
    }, {
        code: 'KIX',
        name: 'Kansai International Airport',
        nameLocal: '関西国際空港',
        city: 'Osaka',
        country: 'Japan',
        longitude: 135.244167,
        latitude: 34.4347222
    }
];

export const mapAirports: AirportMap = AIRPORTS.reduce((obj, item) => {
    const key = item.code;
    if (key) {
        obj[key] = item;
    }
    return obj;
}, {});
