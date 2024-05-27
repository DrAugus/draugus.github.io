import { LargeTravelPackage, TravelBill } from "../../type"


export const TRAVEL_BILLS: TravelBill[] = [
    {
        name: "武汉",
        start: new Date("2024/05/08"),
        end: new Date("2024/05/13"),
        sum: 1789,
        city: "武汉,桂林,南宁",
        intro: {
            tips: "总计抹零进一",
            hotels: "总计 428。298+130",
            transportation: "总计 833。机票 140+110。高铁 351+142+25。打车27+15+23",
            dining: "总计 258。30+16+12+23+17+25+96+39",
            entertainment: "总计 270。黄鹤楼纪念币30博物馆纪念币30+40博物馆编钟表演50夜上黄鹤楼120",
            others: "桂林吃喝支出未计入，小额公交/地铁未计入"
        }
    }, {
        name: "贵阳",
        start: new Date("2024/04/26"),
        end: new Date("2024/05/01"),
        sum: 1760,
        city: "桂林,贵阳",
        intro: {
            tips: "总计抹零进一",
            hotels: "总计429。246+183",
            transportation: "总计729.5。机票140*2。高铁131+6+155+8+45+46.5+8。大巴/打车22*2+6",
            dining: "总计281。37+24+6+23+20+94+50+22+5",
            entertainment: "总计320。博物馆纪念币30+20，黄果树门票260，索道10",
            others: "桂林吃喝支出未计入，Apple Pay 小额公交卡未计入"
        }
    }, {
        name: "海口",
        start: new Date("2024/04/15"),
        end: new Date("2024/04/22"),
        sum: 1948,
        city: "海口,桂林,贵阳",
        intro: {
            tips: "",
            hotels: "总计321。122+95+104",
            transportation: "总计1124。飞机520，高铁70+165+10+175，打车24+43+24+33，机场大巴30，公交30",
            dining: "总计408。45+9+9+36+6+36+190+49+28",
            entertainment: "门票48+47",
            others: "桂林吃喝支出未计入，Apple Pay 小额公交卡未计入"
        }
    }, {
        name: "潮汕地区",
        start: new Date("2024/04/04"),
        end: new Date("2024/04/10"),
        sum: 2099,
        city: "广州,香港,潮州,汕头",
        intro: {
            tips: "",
            hotels: "总计753。101+173+116+109+127+127",
            transportation: "总计851.5。飞机280，高铁74.5+75+75+148，打车45+22+22，机场大巴40，公交卡70",
            dining: "总计494。80+40+35+30+11+14+15+30+16+13+12+198",
            entertainment: "",
            others: "八通道消费了公交加吃饭70HKD 未计入"
        }
    }, {
        name: "柳州",
        start: new Date("2023/10/20"),
        end: new Date("2023/10/22"),
        sum: 1385,
        city: "柳州",
        intro: {
            tips: "",
            hotels: "",
            transportation: "总计1273。高铁592，48*2，48，515，打车22",
            dining: "吃喝97，高铁饭15",
            entertainment: "",
            others: ""
        }
    }, {
        name: "桂林",
        start: new Date("2023/09/02"),
        end: new Date("2023/09/06"),
        sum: 3101,
        city: "桂林",
        intro: {
            tips: "",
            hotels: "总计496。124*4",
            transportation: "总计915。飞机 825，打车10，机场大巴20*2+20+20",
            dining: "1123",
            entertainment: "景区索道55，龙脊摄影30，",
            others: "过路费33，租车2天3h322，汽车充电20+20+35+54"
        }
    }, {
        name: "南京",
        start: new Date("2023/08/09"),
        end: new Date("2023/08/09"),
        sum: 604,
        city: "南京",
        intro: {
            tips: "",
            hotels: "",
            transportation: "总计325。高铁 117*2，91",
            dining: "吃喝194，火车饭15",
            entertainment: "总统府35*2",
            others: ""
        }
    }, {
        name: "青岛淄博济宁",
        start: new Date("2023/08/03"),
        end: new Date("2023/08/06"),
        sum: 3929,
        city: "青岛,淄博,济宁",
        intro: {
            tips: "均为双人",
            hotels: "总计632。316+203+113",
            transportation: "共计：2477。高铁581*2，26*2，125*2，82*2，27*2，374*2，打车17",
            dining: "吃喝657，高铁饭15",
            entertainment: "教堂10*2",
            others: "租车1天158"
        }
    }, {
        name: "日本",
        start: new Date("2023/07/20"),
        end: new Date("2023/07/27"),
        sum: 8862,
        city: "东京,京都,大版,奈良,香港",
        intro: {
            tips: "其中日元汇率按照5.24:100，即55592/100*5.24=2913",
            hotels: "酒店6晚共计消耗 2485",
            transportation: "机票中转4段行程共计消耗 3464",
            dining: "",
            entertainment: "",
            others: "此部分单位均为日元 <br/>suica+cash 总计消耗 55592 结余4408 <br/>suica 充值 40000，余额1995<br/>现金 20000，消耗 17587，余额2413"
        }
    }, {
        name: "南京",
        start: new Date("2023/02/25"),
        end: new Date("2023/02/26"),
        sum: 885,
        city: "南京",
        intro: {
            tips: "",
            hotels: "酒店一晚243",
            transportation: "高铁来回235，公交地铁24",
            dining: "",
            entertainment: "",
            others: ""
        }
    }, {
        name: "上海",
        start: new Date("2023/03/11"),
        end: new Date("2023/03/12"),
        sum: 606,
        city: "上海",
        intro: {
            tips: "",
            hotels: "酒店一晚204",
            transportation: "高铁73，回程积分兑换，地铁公交等微小支出不计入",
            dining: "饮食330",
            entertainment: "",
            others: ""
        }
    }, {
        name: "舟山",
        start: new Date("2023/04/15"),
        end: new Date("2023/04/15"),
        sum: 950,
        city: "舟山",
        intro: {
            tips: "均为双人",
            hotels: "",
            transportation: "来回高铁车票284，大巴144去程，，打车200",
            dining: "吃饭84+198",
            entertainment: "门票40",
            others: ""
        }
    }, {
        name: "绍兴",
        start: new Date("2023/04/22"),
        end: new Date("2023/04/22"),
        sum: 456,
        city: "绍兴",
        intro: {
            tips: "均为双人",
            hotels: "",
            transportation: "来回高铁78，船票90，公交20",
            dining: "148",
            entertainment: "各种门票80，玩40",
            others: ""
        }
    }, {
        name: "港珠澳广深",
        start: new Date("2023/04/29"),
        end: new Date("2023/05/03"),
        sum: 3176,
        city: "香港,澳门,深圳,广州,珠海",
        intro: {
            tips: "",
            hotels: "共计981。广州148，珠海336，深圳199+167+131=497",
            transportation: "机票320，机票因退改两次航班扣除20*2，来回机票150+130(150因为买的早，130燃油费降了20，退票也是20)。<br/>高铁754，高铁珠海-深圳北(双人)144.5+169.5(一等座)，广州南-珠海(双人)70*2，深圳北-香港西九龙来回(双人)150*2<br/>不包含高铁飞机，总计消费为广[401]珠[404]澳[249]港[257]深[695]",
            dining: "共计834。广州吃喝83+17+23+32+56=211，珠海吃喝66，澳门吃喝186，深圳吃喝20+34+21+64+25=164，香港吃喝78+22+30+43+34=207",
            entertainment: "共计191。深圳出行10+12+4*3(2打车3次地铁)=34 珠海出行2(2次公交) 广州出行42(全是地铁) 香港出行50(公交地铁) 澳门出行63(打车用人民币支付) ",
            others: "港澳流量包(双人)24*2*2=96。"
        }
    }, {
        name: "长春",
        start: new Date("2023/05/27"),
        end: new Date("2023/05/28"),
        sum: 751,
        city: "长春",
        intro: {
            tips: "",
            hotels: "酒店158",
            transportation: "机票260 高铁26 打车52",
            dining: "吃喝115。机场零食12，小吃30+5，烧烤68(就吃了这一顿饭)",
            entertainment: "<b>博物馆文创140</b>",
            others: ""
        }
    }, {
        name: "南宁",
        start: new Date("2023/06/10"),
        end: new Date("2023/06/11"),
        sum: 994,
        city: "南宁",
        intro: {
            tips: "",
            hotels: "145+158",
            transportation: "机票130*2，升头等舱159，打车55，机场大巴20*2",
            dining: "177",
            entertainment: "",
            others: ""
        }
    }, {
        name: "深港珠 柳州",
        start: new Date("2023/06/28"),
        end: new Date("2023/07/02"),
        sum: 2717,
        city: "深圳,香港,珠海,柳州",
        intro: {
            tips: "HKD按200计，汇率按87，2543+174",
            hotels: "合计573。珠海177+120 柳州 138*2",
            transportation: "合计1406。珠海单车6 深圳-旺角巴士120 港珠澳大桥58*2 珠海-香港港澳码头轮渡180 珠海打车 72-60=12（60广发返利20*3）柳州打车 27 机票120 火车288+537",
            dining: "合计499。香港麦当劳39 珠海炒粉22 珠海早饭7.5 珠海晚饭17 柳州吃喝 413",
            entertainment: "",
            others: "<br/>现金消耗记录：合计35，HKD48。牛肉粉18 柳州早餐 17 香港午饭 38HKD 香港天文馆10HKD <br/>签证：续签两次30<br/>八达通消费：合计151.8HKD。公交地铁 95.8HKD 天象厅 56HKD"
        }
    }
]

export const LARGE_TRAVEL_PACKAGE: LargeTravelPackage[] = [
    {
        name: "“畅游中国”全国版",
        sum: 4258,
        year: 2023,
        intro: ""
    },
    {
        name: "“畅游中国”全国版",
        sum: 4418,
        year: 2024,
        intro: ""
    }
]

export const TRAVEL_BUDGET = {
    2023: 50000,
    2024: 30000,
}

