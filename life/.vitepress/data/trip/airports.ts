import { Airport, AirportMap } from "../../type";


// data from
// https://echarts.apache.org/examples/data-gl/asset/data/flights.json
export const AIRPORTS: Airport[] = [
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
        name: 'Urumqi Tianshan International Airport',
        nameLocal: '乌鲁木齐天山国际机场',
        abbrZH: '乌鲁木齐天山',
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
    }, {
        code: 'YIW',
        name: 'Yiwu Airport',
        nameLocal: '义乌机场',
        abbrZH: '义乌机场',
        city: '义乌',
        region: '中国',
        longitude: 120.039144,
        latitude: 29.342956,
    }, {
        code: 'WUX',
        name: 'Wuxi Shuofang Airport',
        nameLocal: '无锡硕放机场',
        abbrZH: '无锡硕放',
        city: '无锡',
        region: '中国',
        longitude: 120.429056,
        latitude: 31.494222,
    }, {
        code: 'HFE',
        name: 'Hefei Xinqiao International Airport',
        nameLocal: '合肥新桥国际机场',
        abbrZH: '合肥新桥',
        city: '合肥',
        region: '中国',
        longitude: 117.197322,
        latitude: 31.780111,
    },
    {
        code: 'TXN',
        name: 'Huangshan Tunxi International Airport',
        nameLocal: '黄山屯溪国际机场',
        abbrZH: '黄山屯溪',
        city: '黄山',
        region: '中国',
        longitude: 118.180028,
        latitude: 29.733361,
    }, {
        code: 'JDZ',
        name: 'Jingdezhen Luojia Airport',
        nameLocal: '景德镇罗家机场',
        abbrZH: '景德镇罗家',
        city: '景德镇',
        region: '中国',
        longitude: 117.215056,
        latitude: 29.3385,
    }, {
        code: 'AKA',
        name: 'Ankang Fuqiang Airport',
        nameLocal: '安康富强机场',
        abbrZH: '安康富强',
        city: '安康',
        region: '中国',
        longitude: 108.88216,
        latitude: 32.75114,
    }, {
        code: 'SJW',
        name: 'Shijiazhuang Zhengding International Airport',
        nameLocal: '石家庄正定国际机场',
        abbrZH: '石家庄正定',
        city: '石家庄',
        region: '中国',
        longitude: 114.695111,
        latitude: 38.28065,
    }, {
        code: 'TNA',
        name: 'Jinan Yaoqiang International Airport',
        nameLocal: '济南遥墙国际机场',
        abbrZH: '济南遥墙',
        city: '济南',
        region: '中国',
        longitude: 117.216094,
        latitude: 36.857297,
    },
    {
        code: 'TAO',
        name: 'Qingdao Jiaodong International Airport',
        nameLocal: '青岛胶东国际机场',
        abbrZH: '青岛胶东',
        city: '青岛',
        region: '中国',
        longitude: 120.072692,
        latitude: 36.387083,
    },
    {
        code: 'HDG',
        name: 'Handan Airport',
        nameLocal: '邯郸机场',
        abbrZH: '邯郸机场',
        city: '邯郸',
        region: '中国',
        longitude: 114.425444,
        latitude: 36.525528,
    }, {
        code: 'TSN',
        name: 'Tianjin Binhai International Airport',
        nameLocal: '天津滨海国际机场',
        abbrZH: '天津滨海',
        city: '天津',
        region: '中国',
        longitude: 117.390222,
        latitude: 39.124444,
    }, {
        code: 'TYN',
        name: 'Taiyuan Wusu International Airport',
        nameLocal: '太原武宿国际机场',
        abbrZH: '太原武宿',
        city: '太原',
        region: '中国',
        longitude: 112.597594,
        latitude: 37.746897,
    }, {
        code: 'DAT',
        name: 'Datong Yungang International Airport',
        nameLocal: '大同云冈国际机场',
        abbrZH: '大同云冈',
        city: '大同',
        region: '中国',
        longitude: 113.486417,
        latitude: 40.060389,
    },
    // 从其他数据集导入
    {
        code: "KNH",
        name: "Kinmen Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Shang-I",
        region: "TW",
        longitude: 118.3590011597,
        latitude: 24.4279003143
    },
    {
        code: "PIF",
        name: "Pingtung South Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Pingtung",
        region: "TW",
        longitude: 120.4619979858,
        latitude: 22.6723995209
    },
    {
        code: "LZN",
        name: "Matsu Nangan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Nangang Island",
        region: "TW",
        longitude: 119.9580001831,
        latitude: 26.1597995758
    },
    {
        code: "TTT",
        name: "Taitung Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Taitung City",
        region: "TW",
        longitude: 121.1019973755,
        latitude: 22.7549991608
    },
    {
        code: "GNI",
        name: "Lyudao Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Lyudao",
        region: "TW",
        longitude: 121.466003418,
        latitude: 22.6739006042
    },
    {
        code: "KHH",
        name: "Kaohsiung International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Kaohsiung City",
        region: "TW",
        longitude: 120.3499984741,
        latitude: 22.5771007538
    },
    {
        code: "CYI",
        name: "Chiayi Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Chiayi City",
        region: "TW",
        longitude: 120.3929977417,
        latitude: 23.4617996216
    },
    {
        code: "HCN",
        name: "Hengchun Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Hengchung",
        region: "TW",
        longitude: 120.7300033569,
        latitude: 22.0410995483
    },
    {
        code: "TXG",
        name: "Taichung Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Taichung City",
        region: "TW",
        longitude: 120.6539993286,
        latitude: 24.1863002777
    },
    {
        code: "KYD",
        name: "Lanyu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Orchid Island",
        region: "TW",
        longitude: 121.5350036621,
        latitude: 22.0270004272
    },
    {
        code: "RMQ",
        name: "Taichung Ching Chuang Kang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Taichung City",
        region: "TW",
        longitude: 120.6210021973,
        latitude: 24.2646999359
    },
    {
        code: "MFK",
        name: "Matsu Beigan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Beigan Island",
        region: "TW",
        longitude: 120.0029983521,
        latitude: 26.224199295
    },
    {
        code: "TNN",
        name: "Tainan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tainan City",
        region: "TW",
        longitude: 120.2060012817,
        latitude: 22.9503993988
    },
    {
        code: "HSZ",
        name: "Hsinchu Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "Hsinchu City",
        region: "TW",
        longitude: 120.9390029907,
        latitude: 24.8180007935
    },
    {
        code: "MZG",
        name: "Makung Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Makung City",
        region: "TW",
        longitude: 119.6279983521,
        latitude: 23.5687007904
    },
    {
        code: "PIF",
        name: "Pingtung North Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Pingtung",
        region: "TW",
        longitude: 120.4820022583,
        latitude: 22.7001991272
    },
    {
        code: "TSA",
        name: "Taipei Songshan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Taipei City",
        region: "TW",
        longitude: 121.5520019531,
        latitude: 25.0694007874
    },
    {
        code: "TPE",
        name: "Taiwan Taoyuan International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Taipei",
        region: "TW",
        longitude: 121.233001709,
        latitude: 25.0776996613
    },
    {
        code: "WOT",
        name: "Wang-an Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Wang-an",
        region: "TW",
        longitude: 119.5027770996,
        latitude: 23.3673725128
    },
    {
        code: "HUN",
        name: "Hualien Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Hualien City",
        region: "TW",
        longitude: 121.6179962158,
        latitude: 24.0230998993
    },
    {
        code: "MMJ",
        name: "Matsumoto Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Matsumoto",
        region: "JP",
        longitude: 137.9230041504,
        latitude: 36.1668014526
    },
    {
        code: "IBR",
        name: "Hyakuri Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Omitama",
        region: "JP",
        longitude: 140.414993286,
        latitude: 36.181098938
    },
    {
        code: "MUS",
        name: "Minami Torishima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 153.979003906,
        latitude: 24.2896995544
    },
    {
        code: "IWO",
        name: "Iwo Jima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 141.3229980469,
        latitude: 24.7840003967
    },
    {
        code: "SHM",
        name: "Nanki Shirahama Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Shirahama",
        region: "JP",
        longitude: 135.363998413,
        latitude: 33.6622009277
    },
    {
        code: "UKB",
        name: "Kobe Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Kobe",
        region: "JP",
        longitude: 135.2239990234,
        latitude: 34.6328010559
    },
    {
        code: "HIW",
        name: "Hiroshimanishi Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 132.4140014648,
        latitude: 34.3669013977
    },
    {
        code: "TJH",
        name: "Tajima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tajima",
        region: "JP",
        longitude: 134.7870025635,
        latitude: 35.5127983093
    },
    {
        code: "OBO",
        name: "Tokachi-Obihiro Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Obihiro",
        region: "JP",
        longitude: 143.216995239,
        latitude: 42.7332992554
    },
    {
        code: "CTS",
        name: "New Chitose Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Chitose / Tomakomai",
        region: "JP",
        longitude: 141.6920013428,
        latitude: 42.7751998901
    },
    {
        code: "HKD",
        name: "Hakodate Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Hakodate",
        region: "JP",
        longitude: 140.822006226,
        latitude: 41.7700004578
    },
    {
        code: "KUH",
        name: "Kushiro Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Kushiro",
        region: "JP",
        longitude: 144.192993164,
        latitude: 43.0410003662
    },
    {
        code: "MMB",
        name: "Memanbetsu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Ozora",
        region: "JP",
        longitude: 144.164001465,
        latitude: 43.8805999756
    },
    {
        code: "SHB",
        name: "Nakashibetsu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Nakashibetsu",
        region: "JP",
        longitude: 144.960006714,
        latitude: 43.5774993896
    },
    {
        code: "OKD",
        name: "Okadama Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Sapporo",
        region: "JP",
        longitude: 141.3800048828,
        latitude: 43.1161003113
    },
    {
        code: "RBJ",
        name: "Rebun Airport Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 141.0390014648,
        latitude: 45.4550018311
    },
    {
        code: "WKJ",
        name: "Wakkanai Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Wakkanai",
        region: "JP",
        longitude: 141.800994873,
        latitude: 45.4042015076
    },
    {
        code: "AXJ",
        name: "Amakusa Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 130.158996582,
        latitude: 32.4824981689
    },
    {
        code: "IKI",
        name: "Iki Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Iki",
        region: "JP",
        longitude: 129.785003662,
        latitude: 33.7490005493
    },
    {
        code: "UBJ",
        name: "Yamaguchi Ube Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Ube",
        region: "JP",
        longitude: 131.279006958,
        latitude: 33.9300003052
    },
    {
        code: "TSJ",
        name: "Tsushima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tsushima",
        region: "JP",
        longitude: 129.330993652,
        latitude: 34.2849006653
    },
    {
        code: "MBE",
        name: "Monbetsu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Monbetsu",
        region: "JP",
        longitude: 143.404006958,
        latitude: 44.3039016724
    },
    {
        code: "AKJ",
        name: "Asahikawa Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Asahikawa",
        region: "JP",
        longitude: 142.4470062256,
        latitude: 43.6707992554
    },
    {
        code: "OIR",
        name: "Okushiri Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 139.4329986572,
        latitude: 42.0717010498
    },
    {
        code: "RIS",
        name: "Rishiri Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Rishiri",
        region: "JP",
        longitude: 141.186004639,
        latitude: 45.2420005798
    },
    {
        code: "KUM",
        name: "Yakushima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 130.658996582,
        latitude: 30.3855991364
    },
    {
        code: "FUJ",
        name: "Fukue Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Goto",
        region: "JP",
        longitude: 128.8329925537,
        latitude: 32.6663017273
    },
    {
        code: "FUK",
        name: "Fukuoka Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Fukuoka",
        region: "JP",
        longitude: 130.4510040283,
        latitude: 33.585899353
    },
    {
        code: "TNE",
        name: "New Tanegashima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 130.9909973145,
        latitude: 30.6051006317
    },
    {
        code: "KOJ",
        name: "Kagoshima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Kagoshima",
        region: "JP",
        longitude: 130.7189941406,
        latitude: 31.8034000397
    },
    {
        code: "KMI",
        name: "Miyazaki Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Miyazaki",
        region: "JP",
        longitude: 131.449005127,
        latitude: 31.877199173
    },
    {
        code: "OIT",
        name: "Oita Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Oita",
        region: "JP",
        longitude: 131.736999512,
        latitude: 33.4794006348
    },
    {
        code: "KKJ",
        name: "Kitakyushu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Kitakyushu",
        region: "JP",
        longitude: 131.035003662,
        latitude: 33.8459014893
    },
    {
        code: "HSG",
        name: "Saga Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Saga",
        region: "JP",
        longitude: 130.302001953,
        latitude: 33.1497001648
    },
    {
        code: "KMJ",
        name: "Kumamoto Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Kumamoto",
        region: "JP",
        longitude: 130.8549957275,
        latitude: 32.8372993469
    },
    {
        code: "NGS",
        name: "Nagasaki Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Nagasaki",
        region: "JP",
        longitude: 129.914001465,
        latitude: 32.9169006348
    },
    {
        code: "NGO",
        name: "Chubu Centrair International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tokoname",
        region: "JP",
        longitude: 136.8049926758,
        latitude: 34.8583984375
    },
    {
        code: "ASJ",
        name: "Amami Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Amami",
        region: "JP",
        longitude: 129.7129974365,
        latitude: 28.4305992126
    },
    {
        code: "OKE",
        name: "Okierabu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 128.7010040283,
        latitude: 27.4255008698
    },
    {
        code: "KKX",
        name: "Kikai Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 129.9279937744,
        latitude: 28.3213005066
    },
    {
        code: "TKN",
        name: "Tokunoshima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tokunoshima",
        region: "JP",
        longitude: 128.8809967041,
        latitude: 27.8363990784
    },
    {
        code: "NKM",
        name: "Nagoya Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Nagoya",
        region: "JP",
        longitude: 136.9239959717,
        latitude: 35.2550010681
    },
    {
        code: "FKJ",
        name: "Fukui Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 136.2239990234,
        latitude: 36.1427993774
    },
    {
        code: "QGU",
        name: "Gifu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Gifu",
        region: "JP",
        longitude: 136.8699951172,
        latitude: 35.3941001892
    },
    {
        code: "KMQ",
        name: "Komatsu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Kanazawa",
        region: "JP",
        longitude: 136.4069976807,
        latitude: 36.3945999146
    },
    {
        code: "OKI",
        name: "Oki Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Okinoshima",
        region: "JP",
        longitude: 133.3249969482,
        latitude: 36.181098938
    },
    {
        code: "FSZ",
        name: "Mt. Fuji Shizuoka Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 138.18775177,
        latitude: 34.7960434679
    },
    {
        code: "TOY",
        name: "Toyama Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Toyama",
        region: "JP",
        longitude: 137.18800354,
        latitude: 36.6483001709
    },
    {
        code: "NTQ",
        name: "Noto Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Wajima",
        region: "JP",
        longitude: 136.962005615,
        latitude: 37.2930984497
    },
    {
        code: "HIJ",
        name: "Hiroshima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Hiroshima",
        region: "JP",
        longitude: 132.919006348,
        latitude: 34.4361000061
    },
    {
        code: "OKJ",
        name: "Okayama Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Okayama City",
        region: "JP",
        longitude: 133.854995728,
        latitude: 34.7569007874
    },
    {
        code: "IZO",
        name: "Izumo Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Izumo",
        region: "JP",
        longitude: 132.88999939,
        latitude: 35.4136009216
    },
    {
        code: "YGJ",
        name: "Miho Yonago Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yonago",
        region: "JP",
        longitude: 133.2359924316,
        latitude: 35.4921989441
    },
    {
        code: "IWK",
        name: "Iwakuni Marine Corps Air Station",
        nameLocal: "",
        abbrZH: "",
        city: "Iwakuni",
        region: "JP",
        longitude: 132.2359924316,
        latitude: 34.143901825
    },
    {
        code: "KCZ",
        name: "Kochi Ryoma Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Nankoku",
        region: "JP",
        longitude: 133.669006348,
        latitude: 33.5461006165
    },
    {
        code: "MYJ",
        name: "Matsuyama Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Matsuyama",
        region: "JP",
        longitude: 132.6999969482,
        latitude: 33.8272018433
    },
    {
        code: "ITM",
        name: "Osaka International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Osaka",
        region: "JP",
        longitude: 135.43800354,
        latitude: 34.7854995728
    },
    {
        code: "TTJ",
        name: "Tottori Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tottori",
        region: "JP",
        longitude: 134.167007446,
        latitude: 35.5301017761
    },
    {
        code: "TKS",
        name: "Tokushima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tokushima",
        region: "JP",
        longitude: 134.606994629,
        latitude: 34.1328010559
    },
    {
        code: "TAK",
        name: "Takamatsu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Takamatsu",
        region: "JP",
        longitude: 134.01600647,
        latitude: 34.2141990662
    },
    {
        code: "IWJ",
        name: "Iwami Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Masuda",
        region: "JP",
        longitude: 131.789993286,
        latitude: 34.676399231
    },
    {
        code: "AOJ",
        name: "Aomori Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Aomori",
        region: "JP",
        longitude: 140.6909942627,
        latitude: 40.7346992493
    },
    {
        code: "GAJ",
        name: "Yamagata Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yamagata",
        region: "JP",
        longitude: 140.371002197,
        latitude: 38.4118995667
    },
    {
        code: "SDS",
        name: "Sado Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 138.4140014648,
        latitude: 38.0601997375
    },
    {
        code: "FKS",
        name: "Fukushima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Sukagawa",
        region: "JP",
        longitude: 140.4309997559,
        latitude: 37.2274017334
    },
    {
        code: "HHE",
        name: "Hachinohe Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 141.466003418,
        latitude: 40.5564002991
    },
    {
        code: "HNA",
        name: "Hanamaki Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 141.1349945068,
        latitude: 39.4286003113
    },
    {
        code: "AXT",
        name: "Akita Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Akita",
        region: "JP",
        longitude: 140.2189941406,
        latitude: 39.6156005859
    },
    {
        code: "MSJ",
        name: "Misawa Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "Misawa",
        region: "JP",
        longitude: 141.367996216,
        latitude: 40.7032012939
    },
    {
        code: "KIJ",
        name: "Niigata Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Niigata",
        region: "JP",
        longitude: 139.121002197,
        latitude: 37.9558982849
    },
    {
        code: "ONJ",
        name: "Odate Noshiro Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Odate",
        region: "JP",
        longitude: 140.371002197,
        latitude: 40.1918983459
    },
    {
        code: "SDJ",
        name: "Sendai Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Sendai",
        region: "JP",
        longitude: 140.917007446,
        latitude: 38.1397018433
    },
    {
        code: "SYO",
        name: "Shonai Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Shonai",
        region: "JP",
        longitude: 139.787002563,
        latitude: 38.8121986389
    },
    {
        code: "NJA",
        name: "Atsugi Naval Air Facility",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 139.4499969482,
        latitude: 35.4546012878
    },
    {
        code: "HAC",
        name: "Hachijojima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Hachijojima",
        region: "JP",
        longitude: 139.785995483,
        latitude: 33.1150016785
    },
    {
        code: "OIM",
        name: "Oshima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Izu Oshima",
        region: "JP",
        longitude: 139.36000061,
        latitude: 34.7820014954
    },
    {
        code: "MYE",
        name: "Miyakejima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Miyakejima",
        region: "JP",
        longitude: 139.559997559,
        latitude: 34.073600769
    },
    {
        code: "QUT",
        name: "Utsunomiya Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 139.8710021973,
        latitude: 36.5144996643
    },
    {
        code: "OKO",
        name: "Yokota Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "Fussa",
        region: "JP",
        longitude: 139.3480072021,
        latitude: 35.748500824
    },
    {
        code: "MWX",
        name: "Muan International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "KR",
        longitude: 126.382814,
        latitude: 34.991406
    },
    {
        code: "KWJ",
        name: "Gwangju Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Gwangju",
        region: "KR",
        longitude: 126.808998108,
        latitude: 35.1263999939
    },
    {
        code: "KUV",
        name: "Kunsan Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "Kunsan",
        region: "KR",
        longitude: 126.6159973145,
        latitude: 35.9038009644
    },
    {
        code: "CHN",
        name: "Jeon Ju Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Jeon Ju",
        region: "KR",
        longitude: 127.1200027466,
        latitude: 35.8783988953
    },
    {
        code: "RSU",
        name: "Yeosu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yeosu",
        region: "KR",
        longitude: 127.6169967651,
        latitude: 34.842300415
    },
    {
        code: "QUN",
        name: "A-306 Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Chun Chon City",
        region: "KR",
        longitude: 127.7180023193,
        latitude: 37.8838005066
    },
    {
        code: "SHO",
        name: "Sokcho Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "KR",
        longitude: 128.5989990234,
        latitude: 38.1426010132
    },
    {
        code: "KAG",
        name: "Gangneung Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "KR",
        longitude: 128.9440002441,
        latitude: 37.7536010742
    },
    {
        code: "WJU",
        name: "Wonju Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Wonju",
        region: "KR",
        longitude: 127.959999084,
        latitude: 37.4380989075
    },
    {
        code: "YNY",
        name: "Yangyang International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Sokcho / Gangneung",
        region: "KR",
        longitude: 128.6690063477,
        latitude: 38.0612983704
    },
    {
        code: "CJU",
        name: "Jeju International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Jeju City",
        region: "KR",
        longitude: 126.4929962158,
        latitude: 33.5112991333
    },
    {
        code: "JDG",
        name: "Jeongseok Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "KR",
        longitude: 126.7119979858,
        latitude: 33.3996009827
    },
    {
        code: "CHF",
        name: "Jinhae Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Jinhae",
        region: "KR",
        longitude: 128.6959991455,
        latitude: 35.1412010193
    },
    {
        code: "PUS",
        name: "Gimhae International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Busan",
        region: "KR",
        longitude: 128.93800354,
        latitude: 35.1795005798
    },
    {
        code: "HIN",
        name: "Sacheon Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "Sacheon",
        region: "KR",
        longitude: 128.0700073242,
        latitude: 35.0885009766
    },
    {
        code: "USN",
        name: "Ulsan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Ulsan",
        region: "KR",
        longitude: 129.352005005,
        latitude: 35.59349823
    },
    {
        code: "ICN",
        name: "Incheon International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Seoul",
        region: "KR",
        longitude: 126.4509963989,
        latitude: 37.4691009521
    },
    {
        code: "SSN",
        name: "Seoul Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "KR",
        longitude: 127.1139984131,
        latitude: 37.4458007813
    },
    {
        code: "OSN",
        name: "Osan Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "KR",
        longitude: 127.0299987793,
        latitude: 37.0905990601
    },
    {
        code: "GMP",
        name: "Gimpo International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Seoul",
        region: "KR",
        longitude: 126.791000366,
        latitude: 37.5583000183
    },
    {
        code: "SWU",
        name: "Suwon Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "KR",
        longitude: 127.0070037842,
        latitude: 37.2393989563
    },
    {
        code: "KPO",
        name: "Pohang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Pohang",
        region: "KR",
        longitude: 129.419998169,
        latitude: 35.9878997803
    },
    {
        code: "JWO",
        name: "Jungwon Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "KR",
        longitude: 127.8850021362,
        latitude: 37.0299987793
    },
    {
        code: "TAE",
        name: "Daegu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Daegu",
        region: "KR",
        longitude: 128.658996582,
        latitude: 35.8941001892
    },
    {
        code: "HMY",
        name: "Seosan Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "Seosan",
        region: "KR",
        longitude: 126.486000061,
        latitude: 36.7039985657
    },
    {
        code: "CJJ",
        name: "Cheongju International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Cheongju",
        region: "KR",
        longitude: 127.499000549,
        latitude: 36.7165985107
    },
    {
        code: "YEC",
        name: "Yecheon Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "KR",
        longitude: 128.3549957275,
        latitude: 36.6319007874
    },
    {
        code: "OKA",
        name: "Naha Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Naha",
        region: "JP",
        longitude: 127.646003723,
        latitude: 26.1958007812
    },
    {
        code: "DNA",
        name: "Kadena Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 127.7679977417,
        latitude: 26.3556003571
    },
    {
        code: "ISG",
        name: "Ishigaki Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Ishigaki",
        region: "JP",
        longitude: 124.18699646,
        latitude: 24.344499588
    },
    {
        code: "UEO",
        name: "Kumejima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 126.7139968872,
        latitude: 26.3635005951
    },
    {
        code: "KJP",
        name: "Kerama Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Kerama",
        region: "JP",
        longitude: 127.2929992676,
        latitude: 26.1683006287
    },
    {
        code: "MMD",
        name: "Minami Daito Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 131.2630004883,
        latitude: 25.8465003967
    },
    {
        code: "MMY",
        name: "Miyako Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Miyako City",
        region: "JP",
        longitude: 125.294998169,
        latitude: 24.7828006744
    },
    {
        code: "AGJ",
        name: "Aguni Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Aguni",
        region: "JP",
        longitude: 127.2409973145,
        latitude: 26.5925006866
    },
    {
        code: "IEJ",
        name: "Ie Jima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 127.7850036621,
        latitude: 26.7220001221
    },
    {
        code: "HTR",
        name: "Hateruma Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Hateruma",
        region: "JP",
        longitude: 123.8059997559,
        latitude: 24.0589008331
    },
    {
        code: "KTD",
        name: "Kitadaito Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 131.3269958496,
        latitude: 25.9447002411
    },
    {
        code: "SHI",
        name: "Shimojishima Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 125.1449966431,
        latitude: 24.8267002106
    },
    {
        code: "TRA",
        name: "Tarama Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 124.6750030518,
        latitude: 24.6539001465
    },
    {
        code: "RNJ",
        name: "Yoron Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 128.4019927979,
        latitude: 27.0440006256
    },
    {
        code: "OGN",
        name: "Yonaguni Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "JP",
        longitude: 122.9779968262,
        latitude: 24.4668998718
    },
    {
        code: "AXF",
        name: "Alxa Left Banner Bayanhot Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Bayanhot",
        region: "CN",
        longitude: 105.58858,
        latitude: 38.74831
    },
    {
        code: "RHT",
        name: "Alxa Right Banner Badanjilin Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Badanjilin",
        region: "CN",
        longitude: 101.546,
        latitude: 39.225
    },
    {
        code: "CIF",
        name: "Chifeng Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Chifeng",
        region: "CN",
        longitude: 118.9079971313,
        latitude: 42.2350006104
    },
    {
        code: "CIH",
        name: "Changzhi Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Changzhi",
        region: "CN",
        longitude: 113.1259994507,
        latitude: 36.2475013733
    },
    {
        code: "DSN",
        name: "Ordos Ejin Horo Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Ordos",
        region: "CN",
        longitude: 109.861388889,
        latitude: 39.49
    },
    {
        code: "EJN",
        name: "Ejina Banner Taolai Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "CN",
        longitude: 101.000556,
        latitude: 42.015556
    },
    {
        code: "ERL",
        name: "Erenhot Saiwusu International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Erenhot",
        region: "CN",
        longitude: 112.096666667,
        latitude: 43.4225
    },
    {
        code: "YIE",
        name: "Aershan Yiershi Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Arxan",
        region: "CN",
        longitude: 119.911944,
        latitude: 47.310556
    },
    {
        code: "AEB",
        name: "Tian Yang Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "Baise",
        region: "CN",
        longitude: 106.959999084,
        latitude: 23.7206001282
    },
    {
        code: "HET",
        name: "Baita International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Hohhot",
        region: "CN",
        longitude: 111.823997498,
        latitude: 40.851398468
    },
    {
        code: "HUO",
        name: "Huolinguole Huolinhe Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Holingol",
        region: "CN",
        longitude: 119.407222,
        latitude: 45.487222
    },
    {
        code: "HLD",
        name: "Dongshan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Hailar",
        region: "CN",
        longitude: 119.824996948,
        latitude: 49.2050018311
    },
    {
        code: "NZH",
        name: "Manzhouli Xijiao Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Manzhouli",
        region: "CN",
        longitude: 117.33,
        latitude: 49.566667
    },
    {
        code: "NAY",
        name: "Beijing Nanyuan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Beijing",
        region: "CN",
        longitude: 116.3880004883,
        latitude: 39.7827987671
    },
    {
        code: "BAV",
        name: "Baotou Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Baotou",
        region: "CN",
        longitude: 109.9970016479,
        latitude: 40.5600013733
    },
    {
        code: "SHP",
        name: "Shanhaiguan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Qinhuangdao",
        region: "CN",
        longitude: 119.731002808,
        latitude: 39.9681015015
    },
    {
        code: "TGO",
        name: "Tongliao Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tongliao",
        region: "CN",
        longitude: 122.1999969482,
        latitude: 43.5567016602
    },
    {
        code: "UCB",
        name: "Ulanqab Jining Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Ulanqab",
        region: "CN",
        longitude: 113.108056,
        latitude: 41.129722
    },
    {
        code: "WUA",
        name: "Wuhai Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Wuhai",
        region: "CN",
        longitude: 106.803333,
        latitude: 39.791944
    },
    {
        code: "HLH",
        name: "Ulanhot Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Ulanhot",
        region: "CN",
        longitude: 122.008333,
        latitude: 46.195333
    },
    {
        code: "XIL",
        name: "Xilinhot Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Xilinhot",
        region: "CN",
        longitude: 115.9639968872,
        latitude: 43.915599823
    },
    {
        code: "YCU",
        name: "Yuncheng Guangong Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yuncheng",
        region: "CN",
        longitude: 111.031388889,
        latitude: 35.116391
    },
    {
        code: "RLK",
        name: "Bayannaoer Tianjitai Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Bayannur",
        region: "CN",
        longitude: 107.738889,
        latitude: 40.926389
    },
    {
        code: "NZL",
        name: "Zhalantun Chengjisihan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Zalantun",
        region: "CN",
        longitude: 122.7675,
        latitude: 47.865833
    },
    {
        code: "BHY",
        name: "Beihai Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Beihai",
        region: "CN",
        longitude: 109.2939987183,
        latitude: 21.5394001007
    },
    {
        code: "CGD",
        name: "Changde Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Changde",
        region: "CN",
        longitude: 111.63999939,
        latitude: 28.9188995361
    },
    {
        code: "HJJ",
        name: "Zhijiang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Huaihua",
        region: "CN",
        longitude: 109.7,
        latitude: 27.4411111111
    },
    {
        code: "HCZ",
        name: "Chenzhou Beihu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Chenzhou",
        region: "CN",
        longitude: 112.8449630582255,
        latitude: 25.75321388063848
    },
    {
        code: "DYG",
        name: "Dayong Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Dayong",
        region: "CN",
        longitude: 110.4430007935,
        latitude: 29.1028003693
    },
    {
        code: "FUO",
        name: "Foshan Shadi Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Foshan",
        region: "CN",
        longitude: 113.069999695,
        latitude: 23.0832996368
    },
    {
        code: "HNY",
        name: "Hengyang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Hengyang",
        region: "CN",
        longitude: 112.6279983521,
        latitude: 26.9053001404
    },
    {
        code: "HUZ",
        name: "Huizhou Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Huizhou",
        region: "CN",
        longitude: 114.599998474,
        latitude: 23.0499992371
    },
    {
        code: "LLF",
        name: "Lingling Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yongzhou",
        region: "CN",
        longitude: 111.610043,
        latitude: 26.338661
    },
    {
        code: "MXZ",
        name: "Meixian Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Meixian",
        region: "CN",
        longitude: 116.1330032349,
        latitude: 24.3500003815
    },
    {
        code: "WUZ",
        name: "Wuzhou Xijiang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Wuzhou",
        region: "CN",
        longitude: 111.098611,
        latitude: 23.401389
    },
    {
        code: "XIN",
        name: "Xingning Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Xingning",
        region: "CN",
        longitude: 115.7580032349,
        latitude: 24.1492004395
    },
    {
        code: "YLX",
        name: "Yulin Fumian Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yulin",
        region: "CN",
        longitude: 110.120833,
        latitude: 22.438056
    },
    {
        code: "YYA",
        name: "Yueyang Sanhe Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yueyang",
        region: "CN",
        longitude: 113.278,
        latitude: 29.314
    },
    {
        code: "ZHA",
        name: "Zhanjiang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Zhanjiang",
        region: "CN",
        longitude: 110.358001709,
        latitude: 21.2143993378
    },
    {
        code: "AYN",
        name: "Anyang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Anyang",
        region: "CN",
        longitude: 114.34400177,
        latitude: 36.1338996887
    },
    {
        code: "EHU",
        name: "Ezhou Huahu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Ezhou",
        region: "CN",
        longitude: 115.029611,
        latitude: 30.342856
    },
    {
        code: "ENH",
        name: "Enshi Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Enshi",
        region: "CN",
        longitude: 109.48500061,
        latitude: 30.3202991486
    },
    {
        code: "LHK",
        name: "Guangzhou MR Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "Guanghua",
        region: "CN",
        longitude: 111.6949996948,
        latitude: 32.3894004822
    },
    {
        code: "LYA",
        name: "Luoyang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Luoyang",
        region: "CN",
        longitude: 112.388000488,
        latitude: 34.7411003113
    },
    {
        code: "SHS",
        name: "Shashi Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Shashi",
        region: "CN",
        longitude: 112.28099823,
        latitude: 30.3243999481
    },
    {
        code: "XFN",
        name: "Xiangfan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Xiangfan",
        region: "CN",
        longitude: 112.2910003662,
        latitude: 32.1506004333
    },
    {
        code: "XAI",
        name: "Xinyang Minggang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Xinyang",
        region: "CN",
        longitude: 114.077778,
        latitude: 32.541389
    },
    {
        code: "YIH",
        name: "Yichang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yichang",
        region: "CN",
        longitude: 111.479988333,
        latitude: 30.556549722
    },
    {
        code: "BAR",
        name: "Qionghai Boao Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Qionghai",
        region: "CN",
        longitude: 110.458889,
        latitude: 19.140556
    },
    {
        code: "AKA",
        name: "Ankang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Ankang",
        region: "CN",
        longitude: 108.9309997559,
        latitude: 32.7080993652
    },
    {
        code: "DNH",
        name: "Dunhuang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Dunhuang",
        region: "CN",
        longitude: 94.8091964722,
        latitude: 40.1610984802
    },
    {
        code: "GOQ",
        name: "Golmud Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Golmud",
        region: "CN",
        longitude: 94.7861022949,
        latitude: 36.4006004333
    },
    {
        code: "GYU",
        name: "Guyuan Liupanshan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Guyuan",
        region: "CN",
        longitude: 106.216944444,
        latitude: 36.0788888889
    },
    {
        code: "HBQ",
        name: "Haibei Qilian Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Haibei",
        region: "CN",
        longitude: 100.644,
        latitude: 38.012
    },
    {
        code: "HZG",
        name: "Hanzhong Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Hanzhong",
        region: "CN",
        longitude: 107.0080032349,
        latitude: 33.0635986328
    },
    {
        code: "INC",
        name: "Yinchuan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yinchuan",
        region: "CN",
        longitude: 106.0090026855,
        latitude: 38.4818992615
    },
    {
        code: "JIC",
        name: "Jinchuan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Jinchang",
        region: "CN",
        longitude: 102.348333333,
        latitude: 38.5422222222
    },
    {
        code: "JNG",
        name: "Jining Qufu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Jining",
        region: "CN",
        longitude: 116.346666667,
        latitude: 35.2927777778
    },
    {
        code: "JGN",
        name: "Jiayuguan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Jiayuguan",
        region: "CN",
        longitude: 98.3414001465,
        latitude: 39.8568992615
    },
    {
        code: "LNL",
        name: "Longnan Chengxian Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Longnan",
        region: "CN",
        longitude: 105.797,
        latitude: 33.788
    },
    {
        code: "IQN",
        name: "Qingyang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Qingyang",
        region: "CN",
        longitude: 107.6029968262,
        latitude: 35.7997016907
    },
    {
        code: "SIA",
        name: "Xiguan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Xi'an",
        region: "CN",
        longitude: 109.1200027466,
        latitude: 34.376701355
    },
    {
        code: "THQ",
        name: "Tianshui Maijishan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tianshui",
        region: "CN",
        longitude: 105.86000061,
        latitude: 34.5593986511
    },
    {
        code: "XNN",
        name: "Xining Caojiabu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Xining",
        region: "CN",
        longitude: 102.0429992676,
        latitude: 36.5275001526
    },
    {
        code: "UYN",
        name: "Yulin Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yulin",
        region: "CN",
        longitude: 109.7310028076,
        latitude: 38.2691993713
    },
    {
        code: "ZHY",
        name: "Zhongwei Shapotou Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Zhongwei",
        region: "CN",
        longitude: 105.154444,
        latitude: 37.572778
    },
    {
        code: "BSD",
        name: "Baoshan Yunduan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "CN",
        longitude: 99.168296814,
        latitude: 25.0533008575
    },
    {
        code: "DIG",
        name: "Diqing Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Shangri-La",
        region: "CN",
        longitude: 99.6772003174,
        latitude: 27.7936000824
    },
    {
        code: "LNJ",
        name: "Lincang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Lincang",
        region: "CN",
        longitude: 100.025,
        latitude: 23.738333
    },
    {
        code: "LJG",
        name: "Lijiang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Lijiang",
        region: "CN",
        longitude: 100.246002197,
        latitude: 26.6800003052
    },
    {
        code: "LUM",
        name: "Mangshi Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Luxi",
        region: "CN",
        longitude: 98.5317001343,
        latitude: 24.4011001587
    },
    {
        code: "SYM",
        name: "Simao Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Simao",
        region: "CN",
        longitude: 100.9589996338,
        latitude: 22.7933006287
    },
    {
        code: "ZAT",
        name: "Zhaotong Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Zhaotong",
        region: "CN",
        longitude: 103.7549972534,
        latitude: 27.3255996704
    },
    {
        code: "AQG",
        name: "Anqing Tianzhushan Airport",
        nameLocal: "安庆天柱山机场",
        abbrZH: "安庆天柱山",
        city: "安庆",
        region: "中国",
        longitude: 117.0500030518,
        latitude: 30.5821990967
    }, {
        code: "CZX",
        name: "Changzhou Benniu International Airport",
        nameLocal: "常州奔牛国际机场",
        abbrZH: "常州奔牛",
        city: "常州",
        region: "中国",
        longitude: 119.7789993286,
        latitude: 31.9197006226
    },
    {
        code: "DOY",
        name: "Dongying Shengli Airport",
        nameLocal: "东营胜利机场",
        abbrZH: "东营机场",
        city: "东营",
        region: "中国",
        longitude: 118.788002014,
        latitude: 37.5085983276
    }, {
        code: "FUG",
        name: "Fuyang Airport",
        nameLocal: "阜阳机场",
        abbrZH: "阜阳机场",
        city: "阜阳",
        region: "中国",
        longitude: 115.734364,
        latitude: 32.882157
    },
    {
        code: "JGS",
        name: "Ji'an Jinggangshan Airport",
        nameLocal: "吉安井冈山机场",
        abbrZH: "井冈山机场",
        city: "吉安",
        region: "中国",
        longitude: 114.736999512,
        latitude: 26.8568992615
    },
    {
        code: "KOW",
        name: "Ganzhou Huangjin Airport",
        nameLocal: "赣州黄金机场",
        abbrZH: "赣州机场",
        city: "赣州",
        region: "CN",
        longitude: 114.912002563,
        latitude: 25.825799942
    },
    {
        code: "JNG",
        name: "Jining Qufu Airport",
        nameLocal: "济宁曲阜机场",
        abbrZH: "济宁机场",
        city: "济宁",
        region: "中国",
        longitude: 116.74408951599126,
        latitude: 35.64745649849834
    },
    {
        code: "JIU",
        name: "Jiujiang Lushan Airport",
        nameLocal: "九江庐山机场",
        abbrZH: "九江机场",
        city: "九江",
        region: "中国",
        longitude: 115.801111,
        latitude: 29.476944
    },
    {
        code: "JUZ",
        name: "Quzhou Airport",
        nameLocal: "衢州机场",
        abbrZH: "衢州机场",
        city: "衢州",
        region: "中国",
        longitude: 118.8990020752,
        latitude: 28.9657993317
    },
    {
        code: "LCX",
        name: "Liancheng Guanzhishan Airport",
        nameLocal: "连城冠豸山机场",
        abbrZH: "连城冠豸山机场",
        city: "龙岩",
        region: "中国",
        longitude: 116.747001648,
        latitude: 25.6746997833
    },
    {
        code: "LYG",
        name: "Lianyungang Huaguoshan International Airport",
        nameLocal: "连云港花果山国际机场",
        abbrZH: "连云港花果山",
        city: "连云港",
        region: "中国",
        longitude: 118.873611,
        latitude: 34.571667
    },
    {
        code: "HYN",
        name: "Taizhou Luqiao Airport",
        nameLocal: "台州路桥机场",
        abbrZH: "台州路桥",
        city: "台州",
        region: "中国",
        longitude: 121.4290008545,
        latitude: 28.5622005463
    }, {
        code: "LIJ",
        name: "Lishui Airport",
        nameLocal: "丽水机场",
        abbrZH: "丽水机场",
        city: "丽水",
        region: "中国",
        longitude: 119.944327,
        latitude: 28.466378
    },
    {
        code: "LYI",
        name: "Linyi Qiyang International Airport",
        nameLocal: "临沂启阳国际机场",
        abbrZH: "临沂机场",
        city: "临沂",
        region: "CN",
        longitude: 118.415974,
        latitude: 35.051229
    },
    {
        code: "NTG",
        name: "Nantong Xingdong International Airport",
        nameLocal: "南通兴东国际机场",
        abbrZH: "南通兴东",
        city: "南通",
        region: "中国",
        longitude: 120.975997925,
        latitude: 32.0708007812
    }, {
        code: "YTY",
        name: "Yangzhou Taizhou International Airport",
        nameLocal: "扬州泰州国际机场",
        abbrZH: "扬州泰州机场",
        city: "扬州",
        region: "中国",
        longitude: 119.723197,
        latitude: 32.560471
    }, {
        code: "BFY",
        name: "Bengbu Tenghu Airport",
        nameLocal: "蚌埠滕湖机场",
        abbrZH: "蚌埠滕湖机场",
        city: "蚌埠",
        region: "中国",
        longitude: 117.064965,
        latitude: 33.163441
    },
    {
        code: "JJN",
        name: "Quanzhou Jinjiang International Airport",
        nameLocal: "泉州晋江国际机场",
        abbrZH: "泉州机场",
        city: "泉州",
        region: "中国",
        longitude: 118.5899963379,
        latitude: 24.7964000702
    }, {
        code: "HIA",
        name: "Huaian Lianshui International Airport",
        nameLocal: "淮安涟水国际机场",
        abbrZH: "淮安涟水",
        city: "淮安",
        region: "中国",
        longitude: 119.125,
        latitude: 33.7908333333
    },
    {
        code: "SQJ",
        name: "Sanming Shaxian Airport",
        nameLocal: "三明沙县机场",
        abbrZH: "三明沙县机场",
        city: "三明",
        region: "中国",
        longitude: 117.845,
        latitude: 26.428056
    }, {
        code: "WHA",
        name: "Wuhu Xuanzhou Airport",
        nameLocal: "芜湖宣州机场",
        abbrZH: "芜湖宣州",
        city: "芜湖",
        region: "中国",
        longitude: 118.667222,
        latitude: 31.104444
    },
    {
        code: "WEF",
        name: "Weifang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Weifang",
        region: "CN",
        longitude: 119.1190032959,
        latitude: 36.6467018127
    },
    {
        code: "WEH",
        name: "Weihai Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Weihai",
        region: "CN",
        longitude: 122.2289962769,
        latitude: 37.1870994568
    },
    {
        code: "WUS",
        name: "Nanping Wuyishan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Wuyishan",
        region: "CN",
        longitude: 118.0009994507,
        latitude: 27.7019004822
    },
    {
        code: "WNZ",
        name: "Wenzhou Longwan International Airport",
        nameLocal: "温州龙湾国际机场",
        abbrZH: "温州龙湾",
        city: "温州",
        region: "中国",
        longitude: 120.8519973755,
        latitude: 27.9122009277
    }, {
        code: "BZJ",
        name: "Bozhou Airport",
        nameLocal: "亳州机场",
        abbrZH: "亳州机场",
        city: "亳州",
        region: "中国",
        longitude: 115.914905,
        latitude: 33.559313
    },
    {
        code: "XUZ",
        name: "Xuzhou Guanyin International Airport",
        nameLocal: "徐州观音国际机场",
        abbrZH: "徐州观音",
        city: "徐州",
        region: "中国",
        longitude: 117.555278,
        latitude: 34.059056
    }, {
        code: "YNZ",
        name: "Yancheng Nanyang International Airport",
        nameLocal: "盐城南洋国际机场",
        abbrZH: "盐城南洋",
        city: "盐城",
        region: "中国",
        longitude: 120.203056,
        latitude: 33.425833
    },
    {
        code: "YNT",
        name: "Yantai Laishan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yantai",
        region: "CN",
        longitude: 121.3720016479,
        latitude: 37.4016990662
    },
    {
        code: "HSN",
        name: "Zhoushan Putuoshan International Airport",
        nameLocal: "舟山普陀山国际机场",
        abbrZH: "舟山普陀",
        city: "舟山",
        region: "中国",
        longitude: 122.361999512,
        latitude: 29.9342002869
    }, {
        code: "",
        name: "Jiaxing Nanhu Airport",
        nameLocal: "嘉兴南湖机场",
        abbrZH: "嘉兴南湖",
        city: "嘉兴",
        region: "中国",
        longitude: 120.685331,
        latitude: 30.702523
    }, {
        code: "JUH",
        name: "Chizhou Jiuhuashan Airport",
        nameLocal: "池州九华山机场",
        abbrZH: "池州九华山",
        city: "池州",
        region: "中国",
        longitude: 117.690862,
        latitude: 30.73819
    },
    {
        code: "NGQ",
        name: "Ngari Gunsa Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Shiquanhe",
        region: "CN",
        longitude: 80.0530555556,
        latitude: 32.1
    },
    {
        code: "AVA",
        name: "Anshun Huangguoshu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Anshun",
        region: "CN",
        longitude: 105.873333333,
        latitude: 26.2605555556
    },
    {
        code: "BPX",
        name: "Qamdo Bangda Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Bangda",
        region: "CN",
        longitude: 97.1082992554,
        latitude: 30.5536003113
    },
    {
        code: "BFJ",
        name: "Bijie Feixiong Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Bijie",
        region: "CN",
        longitude: 105.479167,
        latitude: 27.266667
    },
    {
        code: "BZX",
        name: "Bazhong Enyang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Bazhong",
        region: "CN",
        longitude: 106.645,
        latitude: 31.738
    },
    {
        code: "DCY",
        name: "Daocheng Yading Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Daocheng County",
        region: "CN",
        longitude: 100.053333,
        latitude: 29.323056
    },
    {
        code: "DDR",
        name: "Rikaze Dingri Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "CN",
        longitude: 86.8103,
        latitude: 28.6025
    },
    {
        code: "DAX",
        name: "Dachuan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Dazhou",
        region: "CN",
        longitude: 107.4295,
        latitude: 31.1302
    },
    {
        code: "GYS",
        name: "Guangyuan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Guangyuan",
        region: "CN",
        longitude: 105.702003479,
        latitude: 32.3911018372
    },
    {
        code: "GZG",
        name: "Garze Gesar Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Garze",
        region: "CN",
        longitude: 99.554167,
        latitude: 31.7575
    },
    {
        code: "JZH",
        name: "Jiuzhai Huanglong Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Jiuzhaigou",
        region: "CN",
        longitude: 103.682222222,
        latitude: 32.8533333333
    },
    {
        code: "KJH",
        name: "Kaili Huangping Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Kaili",
        region: "CN",
        longitude: 107.98695,
        latitude: 26.97482
    },
    {
        code: "LZG",
        name: "Langzhong Gucheng Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Langzhong",
        region: "CN",
        longitude: 106.03535,
        latitude: 31.50366
    },
    {
        code: "LLB",
        name: "Qiannan Libo Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "CN",
        longitude: 107.961667,
        latitude: 25.4525
    },
    {
        code: "LIA",
        name: "Liangping Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Liangping",
        region: "CN",
        longitude: 107.7860031128,
        latitude: 30.6793994904
    },
    {
        code: "LXA",
        name: "Lhasa Gonggar Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Lhasa",
        region: "CN",
        longitude: 90.9119033813,
        latitude: 29.2978000641
    },
    {
        code: "LZO",
        name: "Luzhou Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Luzhou",
        region: "CN",
        longitude: 105.3929977417,
        latitude: 28.8521995544
    },
    {
        code: "WMT",
        name: "Zunyi Maotai Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Zunyi",
        region: "CN",
        longitude: 106.438889,
        latitude: 27.968056
    },
    {
        code: "MIG",
        name: "Mianyang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Mianyang",
        region: "CN",
        longitude: 104.7409973145,
        latitude: 31.4281005859
    },
    {
        code: "NAO",
        name: "Nanchong Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Nanchong",
        region: "CN",
        longitude: 106.1626,
        latitude: 30.79545
    },
    {
        code: "HZH",
        name: "Qiandongnan Liping Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "CN",
        longitude: 109.151667,
        latitude: 26.322778
    },
    {
        code: "LZY",
        name: "Nyingchi Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Nyingchi",
        region: "CN",
        longitude: 94.3352966309,
        latitude: 29.3033008575
    },
    {
        code: "LPF",
        name: "Liupanshui Yuezhao Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Liupanshui",
        region: "CN",
        longitude: 104.979,
        latitude: 26.609417
    },
    {
        code: "JIQ",
        name: "Qianjiang Wulingshan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Chongqing",
        region: "CN",
        longitude: 108.83371499999998,
        latitude: 29.514559
    },
    {
        code: "TCZ",
        name: "Tengchong Tuofeng Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tengchong",
        region: "CN",
        longitude: 98.4858333333,
        latitude: 24.9380555556
    },
    {
        code: "TFU",
        name: "Chengdu Tianfu International Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Chengdu",
        region: "CN",
        longitude: 104.445,
        latitude: 30.319
    },
    {
        code: "TEN",
        name: "Tongren Fenghuang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "CN",
        longitude: 109.308889,
        latitude: 27.883333
    },
    {
        code: "CQW",
        name: "Wulong Chongqing Xiannvshan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Wulong",
        region: "CN",
        longitude: 107.692222,
        latitude: 29.465833
    },
    {
        code: "WSK",
        name: "Wushan Chongqing Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Wushan",
        region: "CN",
        longitude: 109.706,
        latitude: 31.064
    },
    {
        code: "WXN",
        name: "Wanxian Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Wanxian",
        region: "CN",
        longitude: 108.433,
        latitude: 30.8017
    },
    {
        code: "XIC",
        name: "Xichang Qingshan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Xichang",
        region: "CN",
        longitude: 102.1839981079,
        latitude: 27.9890995026
    },
    {
        code: "YBP",
        name: "Yibin Wuliangye Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yibin",
        region: "CN",
        longitude: 104.525,
        latitude: 28.858
    },
    {
        code: "ACX",
        name: "Xingyi Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Xingyi",
        region: "CN",
        longitude: 104.959444444,
        latitude: 25.0863888889
    },
    {
        code: "ZYI",
        name: "Zunyi Xinzhou Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Zunyi",
        region: "CN",
        longitude: 107.0007,
        latitude: 27.5895
    },
    {
        code: "AKU",
        name: "Aksu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Aksu",
        region: "CN",
        longitude: 80.2917022705,
        latitude: 41.2625007629
    },
    {
        code: "ACF",
        name: "Aral Talim Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Aral",
        region: "CN",
        longitude: 81.26411705534605,
        latitude: 40.43579916378331
    },
    {
        code: "AAT",
        name: "Altay Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "Altay",
        region: "CN",
        longitude: 88.0858078003,
        latitude: 47.7498855591
    },
    {
        code: "BPL",
        name: "Alashankou Bole (Bortala) airport",
        nameLocal: "",
        abbrZH: "",
        city: "Bole",
        region: "CN",
        longitude: 82.3,
        latitude: 44.895
    },
    {
        code: "IQM",
        name: "Qiemo Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Qiemo",
        region: "CN",
        longitude: 85.5327987671,
        latitude: 38.1493988037
    },
    {
        code: "HMI",
        name: "Hami Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Hami",
        region: "CN",
        longitude: 93.6691970825,
        latitude: 42.8414001465
    },
    {
        code: "KCA",
        name: "Kuqa Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Kuqa",
        region: "CN",
        longitude: 82.9869003296,
        latitude: 41.7181015015
    },
    {
        code: "KRL",
        name: "Korla Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Korla",
        region: "CN",
        longitude: 86.1288986206,
        latitude: 41.6977996826
    },
    {
        code: "KRY",
        name: "Karamay Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Karamay",
        region: "CN",
        longitude: 84.9527,
        latitude: 45.46655
    },
    {
        code: "RQA",
        name: "Ruoqiang Loulan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Ruoqiang",
        region: "CN",
        longitude: 88.008333,
        latitude: 38.974722
    },
    {
        code: "SXJ",
        name: "Shanshan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Shanshan",
        region: "CN",
        longitude: 90.2474975586,
        latitude: 42.9117012024
    },
    {
        code: "TCG",
        name: "Tacheng Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tacheng",
        region: "CN",
        longitude: 83.3407974243,
        latitude: 46.6725006104
    },
    {
        code: "HQL",
        name: "Tashkurgan Khunjerab Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tashkurgan",
        region: "CN",
        longitude: 75.29227,
        latitude: 37.66271
    },
    {
        code: "HTN",
        name: "Hotan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Hotan",
        region: "CN",
        longitude: 79.8648986816,
        latitude: 37.0385017395
    },
    {
        code: "TWC",
        name: "Tumxuk Tangwangcheng Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tumxuk",
        region: "CN",
        longitude: 79.231911,
        latitude: 39.888139
    },
    {
        code: "YIN",
        name: "Yining Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yining",
        region: "CN",
        longitude: 81.3302993774,
        latitude: 43.9557991028
    },
    {
        code: "YTW",
        name: "Yutian Wanfang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yutian",
        region: "CN",
        longitude: 81.780833,
        latitude: 36.810833
    },
    {
        code: "AOG",
        name: "Anshan Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "Anshan",
        region: "CN",
        longitude: 122.8539962769,
        latitude: 41.1053009033
    },
    {
        code: "NBS",
        name: "Baishan Changbaishan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Baishan",
        region: "CN",
        longitude: 127.606667,
        latitude: 42.066389
    },
    {
        code: "CNI",
        name: "Changhai Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Changhai",
        region: "CN",
        longitude: 122.666944444,
        latitude: 39.2666666667
    },
    {
        code: "CHG",
        name: "Chaoyang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Chaoyang",
        region: "CN",
        longitude: 120.4349975586,
        latitude: 41.5381011963
    },
    {
        code: "DDG",
        name: "Dandong Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Dandong",
        region: "CN",
        longitude: 124.286003113,
        latitude: 40.0247001648
    },
    {
        code: "DQA",
        name: "Saertu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Daqing Shi",
        region: "CN",
        longitude: 125.140555556,
        latitude: 46.7463888889
    },
    {
        code: "HEK",
        name: "Heihe Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Heihe",
        region: "CN",
        longitude: 127.308883667,
        latitude: 50.1716209371
    },
    {
        code: "JIL",
        name: "Jilin Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Jilin",
        region: "CN",
        longitude: 126.3960037231,
        latitude: 44.0022010803
    },
    {
        code: "JMU",
        name: "Jiamusi Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Jiamusi",
        region: "CN",
        longitude: 130.464996338,
        latitude: 46.8433990479
    },
    {
        code: "JNZ",
        name: "Jinzhou Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Jinzhou",
        region: "CN",
        longitude: 121.06199646,
        latitude: 41.101398468
    },
    {
        code: "LDS",
        name: "Lindu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yichun",
        region: "CN",
        longitude: 129.019125,
        latitude: 47.7520555556
    },
    {
        code: "YUS",
        name: "Yushu Batang Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yushu",
        region: "CN",
        longitude: 97.0363888889,
        latitude: 32.8363888889
    },
    {
        code: "OHE",
        name: "Gu-Lian Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Mohe",
        region: "CN",
        longitude: 122.43,
        latitude: 52.9127777778
    },
    {
        code: "NDG",
        name: "Qiqihar Sanjiazi Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Qiqihar",
        region: "CN",
        longitude: 123.9179992676,
        latitude: 47.2396011353
    },
    {
        code: "YSQ",
        name: "Songyuan Chaganhu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Songyuan",
        region: "CN",
        longitude: 124.550178,
        latitude: 44.938114
    },
    {
        code: "TNH",
        name: "Tonghua Sanyuanpu Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Tonghua",
        region: "CN",
        longitude: 125.703333333,
        latitude: 42.2538888889
    },
    {
        code: "XEN",
        name: "Xingcheng Air Base",
        nameLocal: "",
        abbrZH: "",
        city: "",
        region: "CN",
        longitude: 120.697998047,
        latitude: 40.5802993774
    },
    {
        code: "YNJ",
        name: "Yanji Chaoyangchuan Airport",
        nameLocal: "",
        abbrZH: "",
        city: "Yanji",
        region: "CN",
        longitude: 129.451004028,
        latitude: 42.8828010559
    }, {
        code: "YZY",
        name: "Zhangye Ganzhou Airport",
        nameLocal: "张掖甘州机场",
        abbrZH: "张掖机场",
        city: "张掖",
        region: "中国",
        longitude: 100.671853,
        latitude: 38.80508
    }

]

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