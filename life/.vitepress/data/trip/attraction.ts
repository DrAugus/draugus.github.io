import { AttractionInfo } from "../../type";

export const TableHead = ["景点", "交通", "游玩", "开放", "预约", "票价", "平台", "推荐"]

// 上海
export const attractionsSH: AttractionInfo[] = [
  {
    name: "甜爱路",
    transportation: "地铁3/8号线虹口足球场站1号口步行约800米",
    playDuration: "1h",
    openingHours: "24h",
    needReservation: false,
    ticketPrice: "免费",
    platform: "",
    recommendation: true
  },
  {
    name: "武康路",
    transportation: "地铁10号线上海图书馆站3号口步行约500米",
    playDuration: "1h",
    openingHours: "24h",
    needReservation: false,
    ticketPrice: "免费",
    platform: "",
    recommendation: true
  },
  {
    name: "愚园路",
    transportation: "地铁2/7号线静安寺站1号口步行约300米",
    playDuration: "1h",
    openingHours: "24h",
    needReservation: false,
    ticketPrice: "免费",
    platform: "",
    recommendation: true
  },
  {
    name: "上海迪士尼乐园",
    transportation: "地铁11号线迪士尼站1号口步行约700米 建议打车或开车",
    playDuration: "2d",
    openingHours: "8:30-20:30",
    needReservation: true,
    ticketPrice: "¥329起",
    platform: "",
    recommendation: true
  },
  {
    name: "1933老场坊",
    transportation: "地铁4/10号线海伦路站2号口步行约700米",
    playDuration: "3h",
    openingHours: "9:00-21:00 21:00停止入场",
    needReservation: false,
    ticketPrice: "免费",
    platform: "",
    recommendation: true
  },
  {
    name: "静安寺",
    transportation: "地铁2/7号线静安寺站1号口步行约400米",
    playDuration: "2h",
    openingHours: "7:30-17:00",
    needReservation: false,
    ticketPrice: "¥50",
    platform: "",
    recommendation: false
  },
  {
    name: "上海奇迹花园",
    transportation: "地铁下来后步行近2公里 建议驾车或打车前往",
    playDuration: "4h",
    openingHours: "8:30-17:30 17:00停止入场",
    needReservation: false,
    ticketPrice: "¥50",
    platform: "",
    recommendation: false
  },
  {
    name: "上海之巅观光厅",
    transportation: "地铁2号线陆家嘴站6号口步行约600米",
    playDuration: "3h",
    openingHours: "08:30-22:00 21:30停止入场",
    needReservation: false,
    ticketPrice: "¥180",
    platform: "",
    recommendation: { isRecommended: true, reason: "可以尝鲜 登高望远而已" }
  },
  {
    name: "外滩",
    transportation: "地铁10号线豫园站1号口步行约800米",
    playDuration: "",
    openingHours: "24h",
    needReservation: false,
    ticketPrice: "免费",
    platform: "",
    recommendation: true
  },
  {
    name: "豫园",
    transportation: "地铁10号线豫园站3号口步行约700米",
    playDuration: "2h",
    openingHours: "9:00-16:30 16:00停止入园",
    needReservation: false,
    ticketPrice: "¥40",
    platform: "",
    recommendation: true
  },
  {
    name: "新天地",
    transportation: "地铁1号线黄陂南路站2号口步行约500米",
    playDuration: "3h",
    openingHours: "24h",
    needReservation: false,
    ticketPrice: "免费",
    platform: "",
    recommendation: false
  },
  {
    name: "上海自然博物馆",
    transportation: "地铁13号线自然博物馆站1号口步行约100米",
    playDuration: "5h",
    openingHours: "9:00-17:00 最晚16:00入园 周一不开放",
    needReservation: false,
    ticketPrice: "¥30",
    platform: "",
    recommendation: true
  },
  {
    name: "中国证券博物馆",
    transportation: "地铁10/12号线天潼路站3号口步行约800米",
    playDuration: "3h",
    openingHours: "周二-周五 10:00-11:30,14:00-15:30 周六 9:30-11:30,13:30-16:00 周一周日不开放 国家法定节假日闭馆",
    needReservation: true,
    ticketPrice: "免费",
    platform: "",
    recommendation: false
  },
  {
    name: "同济大学博物馆",
    transportation: "",
    playDuration: "",
    openingHours: "",
    needReservation: false,
    ticketPrice: "",
    platform: "",
    recommendation: false
  },
  {
    name: "上海玻璃博物馆",
    transportation: "",
    playDuration: "",
    openingHours: "",
    needReservation: false,
    ticketPrice: "",
    platform: "",
    recommendation: false
  },
  {
    name: "广富林文化遗址",
    transportation: "",
    playDuration: "",
    openingHours: "",
    needReservation: false,
    ticketPrice: "",
    platform: "",
    recommendation: false
  },
  {
    name: "上海植物园",
    transportation: "地铁不方便 公交56路区间,770路,824路比较近 或开车/打车前往",
    playDuration: "5h",
    openingHours: "7:00-17:00 16:00停止入场",
    needReservation: false,
    ticketPrice: "¥15 联票¥40",
    platform: "",
    recommendation: false
  }
]; 