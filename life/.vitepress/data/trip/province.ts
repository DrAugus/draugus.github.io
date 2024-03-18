
export const PROVINCE_CHINA = {
    11: {
        name: "北京",
        fullName: "北京市",
        abbreviation: "京",
        pinyin: "beijing",
        capital: "北京"
    },
    12: {
        name: "天津",
        fullName: "天津市",
        abbreviation: "津",
        pinyin: "tianjin",
        capital: "天津"
    },
    13: {
        name: "河北",
        fullName: "河北省",
        abbreviation: "冀",
        pinyin: "hebei",
        capital: "石家庄"
    },
    14: {
        name: "山西",
        fullName: "山西省",
        abbreviation: "晋",
        pinyin: "shanxi",
        capital: "太原"
    },
    15: {
        name: "内蒙古",
        fullName: "内蒙古自治区",
        abbreviation: "蒙",
        pinyin: "neimenggu",
        capital: "呼和浩特"
    },
    21: {
        name: "辽宁",
        fullName: "辽宁省",
        abbreviation: "辽",
        pinyin: "liaoning",
        capital: "沈阳"
    },
    22: {
        name: "吉林",
        fullName: "吉林省",
        abbreviation: "吉",
        pinyin: "jilin",
        capital: "长春"
    },
    23: {
        name: "黑龙江",
        fullName: "黑龙江省",
        abbreviation: "黑",
        pinyin: "heilongjiang",
        capital: "哈尔滨"
    },
    31: {
        name: "上海",
        fullName: "上海市",
        abbreviation: "沪",
        pinyin: "shanghai",
        capital: "上海"
    },
    32: {
        name: "江苏",
        fullName: "江苏省",
        abbreviation: "苏",
        pinyin: "jiangsu",
        capital: "南京"
    },
    33: {
        name: "浙江",
        fullName: "浙江省",
        abbreviation: "浙",
        pinyin: "zhejiang",
        capital: "杭州"
    },
    34: {
        name: "安徽",
        fullName: "安徽省",
        abbreviation: "皖",
        pinyin: "anhui",
        capital: "合肥"
    },
    35: {
        name: "福建",
        fullName: "福建省",
        abbreviation: "闽",
        pinyin: "fujian",
        capital: "福州"
    },
    36: {
        name: "江西",
        fullName: "江西省",
        abbreviation: "赣",
        pinyin: "jiangxi",
        capital: "南昌"
    },
    37: {
        name: "山东",
        fullName: "山东省",
        abbreviation: "鲁",
        pinyin: "shandong",
        capital: "济南"
    },
    41: {
        name: "河南",
        fullName: "河南省",
        abbreviation: "豫",
        pinyin: "henan",
        capital: "郑州"
    },
    42: {
        name: "湖北",
        fullName: "湖北省",
        abbreviation: "鄂",
        pinyin: "hubei",
        capital: "武汉"
    },
    43: {
        name: "湖南",
        fullName: "湖南省",
        abbreviation: "湘",
        pinyin: "hunan",
        capital: "长沙"
    },
    44: {
        name: "广东",
        fullName: "广东省",
        abbreviation: "粤",
        pinyin: "guangdong",
        capital: "广州"
    },
    45: {
        name: "广西",
        fullName: "广西壮族自治区",
        abbreviation: "桂",
        pinyin: "guangxi",
        capital: "南宁"
    },
    46: {
        name: "海南",
        fullName: "海南省",
        abbreviation: "琼",
        pinyin: "hainan",
        capital: "海口"
    },
    50: {
        name: "重庆",
        fullName: "重庆市",
        abbreviation: "渝",
        pinyin: "chongqing",
        capital: "重庆"
    },
    51: {
        name: "四川",
        fullName: "四川省",
        abbreviation: "川",
        pinyin: "sichuan",
        capital: "成都"
    },
    52: {
        name: "贵州",
        fullName: "贵州省",
        abbreviation: "贵",
        pinyin: "guizhou",
        capital: "贵阳"
    },
    53: {
        name: "云南",
        fullName: "云南省",
        abbreviation: "云",
        pinyin: "yunnan",
        capital: "昆明"
    },
    54: {
        name: "西藏",
        fullName: "西藏自治区",
        abbreviation: "藏",
        pinyin: "xizang",
        capital: "拉萨"
    },
    61: {
        name: "陕西",
        fullName: "陕西省",
        abbreviation: "陕",
        pinyin: "shaanxi",
        capital: "西安"
    },
    62: {
        name: "甘肃",
        fullName: "甘肃省",
        abbreviation: "甘",
        pinyin: "gansu",
        capital: "兰州"
    },
    63: {
        name: "青海",
        fullName: "青海省",
        abbreviation: "青",
        pinyin: "qinghai",
        capital: "西宁"
    },
    64: {
        name: "宁夏",
        fullName: "宁夏回族自治区",
        abbreviation: "宁",
        pinyin: "ningxia",
        capital: "银川"
    },
    65: {
        name: "新疆",
        fullName: "新疆维吾尔自治区",
        abbreviation: "新",
        pinyin: "xinjiang",
        capital: "乌鲁木齐"
    }
};

export const getProvinceName = (id: number | string) => PROVINCE_CHINA[id]?.name;
export const getProvinceFullName = (id: number | string) => PROVINCE_CHINA[id]?.fullName;
export const getProvinceAbbreviation = (id: number | string) => PROVINCE_CHINA[id]?.abbreviation;
export const getProvincePinyin = (id: number | string) => PROVINCE_CHINA[id]?.pinyin;
export const getProvinceCapital = (id: number | string) => PROVINCE_CHINA[id]?.capital;

export const sortProvince = [32, 33, 31, 11, 44, 12, 41, 45, 43, 42, 46, 52, 51, 50, 53, 34, 35, 36, 21, 22, 23, 62, 61, 14];