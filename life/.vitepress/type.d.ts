export interface LinkName {
  text: string,
  link: string,
}

export interface CalTimes {
  text: string,
  times: number,
}

type Platform = 'Windows' | 'Linux' | 'Mac';

export interface OfficialInfo {
  id: string,
  name: string,
  intro?: string,
  repo?: string,
  homepage?: string,
  platform?: Platform | Platform[],
}

export interface LibsInfo {
  intro?: string,
  repo?: string,
  homepage?: string,
  guide?: string,
  others?: LinkName[],
}

export interface CardLink {
  /** 图标 */
  icon?: string | { svg: string, },
  /** 名称 */
  title: string,
  /** 日期 */
  date?: string,
  /** 描述 */
  desc?: string | LibsInfo,
  /** 链接 */
  link: string,
  /** 链接 target */
  target?: string,
  /** 背景 */
  bgColor?: string,
}

export interface CardData {
  title: string,
  items: CardLink[],
}

interface DateRange {
  start: Date,
  // 无 end 则只有一天
  end?: Date,
}

export interface CatLitter {
  brand: string;
  specification: string;
  pricePerKg: {
    min: number;
    max?: number;
  };
  commonSpecification?: string;
  advantages?: string;
  disadvantages?: string;
}

interface ExploreInfo {
  date?: DateRange,
  intro?: string,
  link?: string,
}

export interface ExploreRecordItem {
  // 市区拼音
  id: string,
  info: ExploreInfo[],
  resident?: boolean,
}

export interface ExploreRecord {
  // 省区/直辖市拼音
  id: string,
  info?: ExploreInfo[],
  resident?: boolean,
  items?: ExploreRecordItem[],
}

export interface EatDishes {
  name: string,
  info: string,
  judge: string,
  price: number,
  lv: number,
}

export interface EatRestaurant {
  name: string,
  type: {},
  // 0 可以吃 1推荐吃
  lv: number,
  item: EatDishes[],
}

export interface AirfareInfo {
  date: Date,
  dateModify: string,
  costBelow800km: number,
  costAbove800km: number,
  taxAirport: number,
  details: string,
}

export interface TravelogueInfo {
  title: string,
  date: Date,
  city: string | string[],
}

export interface Journey {
  title?: string,
  date: Date,
  info?: string,
}

export interface Drive {
  title?: string,
  date: DateRange,
}

export interface TravelBillIntroItem {
  tips: string,
  // 酒店
  hotels: string,
  // 交通
  transportation: string,
  // 吃喝
  dining: string,
  // 玩乐
  entertainment: string,
  others: string,
}

export interface TravelBill {
  name: string,
  start: Date,
  end: Date,
  sum: number,
  city: string,
  intro: TravelBillIntroItem,
}

export interface LargeTravelPackage {
  name: string,
  sum: number,
  year: number,
  intro: string,
}

export interface Certificate {
  // 证书名
  title: string,
  // 证书具体项目
  details?: string,
  // 简单介绍
  intro?: string,
  // 先修知识
  pre?: string,
  // 学习周期
  cycle?: string,
  link: string,
}
export interface AppleModels {
  generation: number,
  model: string | string[],
  announced: Date,
}
export interface Province {
  name: string, // 省份名  
  fullName: string,
  abbreviation: string, // 简称  
  pinyin: string,
  capital: string, // 省会  
}

interface EntertainmentContent {
  title: string,
  description: string,
  contentType: 'movie' | 'series',
  releaseYear: number,
  watchedStatus: boolean,
  link?: string,
}

export interface Airport {
  code: string,
  name: string,
  nameLocal: string,
  abbrZH: string,
  city: string,
  region: string,
  longitude: number,
  latitude: number,
}

export interface AirportMap {
  [path: string]: Airport,
}

export interface Airplane {
  model: string, // 飞机的型号，如 "波音737-800(WL)"  
  number: string, // 飞机的编号，如 "B1405"
}

export interface Airline {
  chineseName: string;            // 航空公司(中文)
  chineseAbbr: string;            // 航司中文名缩写
  englishName: string;            // 航空公司(英文)
  iataCode: string;               // IATA代码
  icaoCode: string;               // 三字代码
  region: string;                 // 地区
}

interface CoBrandedCardBenefit {
  cardLevel: string;                                    // 卡等级
  redemptionRatio: string | string[];                   // 兑换比例
  redemptionCap: string;                                // 兑换上限
  annualFeeReduction: string;                           // 年费减免
}

export interface MileageRedemption {
  bank: string;                                         // 银行名称
  coBrandedCardName: string;                            // 联名卡名字
  coBrandedCardBenefits: CoBrandedCardBenefit[];
}

interface FlightTicket {
  ticketPrice: number,
  airportConstructionFee: number,
  fuelSurcharge: number,
}

interface FlightAirport {
  plannedTime: Date,
  actualTime: Date,
  airport: string,
  terminal?: number,    // 真的有机场没有航站楼
}

export interface Flight {
  date: Date,                 // 飞行日期
  number: string,             // 航班号
  airplane: Airplane,         // 飞机信息
  airlineCode: string,        // CZ8902
  seatClass: string,          // 公务舱(O)
  distance: number,           // 飞行里程 km
  departure: FlightAirport,
  arrival: FlightAirport,
  price: FlightTicket | null, // 票价 (null 为价格丢失)
}

export interface FlightRank {
  title: string,
  abstract?: CalTimes[],
  details: CalTimes[],
  progressColor?: string,
}

export interface Suixinfei {
  date: Date,
  departure: string,
  arrival: string,
  price: number,
}

type PurchasePlatform = '淘宝' | '京东' | '官网' | '天猫官方' | '线下官方店' | string

export interface ApplePurchased {
  device: string,
  deviceType: 'Mac' | 'iPad' | 'iPhone' | 'AirPods' | 'Watch' | 'Vision' | 'TV & Home' | 'Accessories',
  priceSale?: number,
  pricePurchase: number,
  platform: PurchasePlatform,
  date: Date,
}

export interface AppleSubscribe {
  name: string,
  price: number,
  start: Date,
  end?: Date,
  info?: string,
}

export interface AirPods {
  device: string,
  model: string[],
  yearIntroduced: number, /* 推出年份 */
}

export interface CityRestaurant {
  [city: string]: Restaurant[],
}

interface Restaurant {
  name: string,                       // 饭店名字  
  address: string,                    // 地址  
  review: string,                     // 简要评价  
  reviewTime: Date,                   // 评价时间
  averagePricePerPerson: number,      // 人均价格  
  cuisineTypes: string[],             // 菜品种类，假设有多种类型，所以使用数组  
  specialDishes: string[],            // 特色菜品，也可以视为推荐菜的一种  
  recommendedDishes: string[],        // 明确标注为推荐的菜品  
  notRecommendedDishes: string[],     // 明确标注为不推荐的菜品 
}

interface TimeComplexity {
  best: string,
  average: string,
  worst: string,
}

export interface Complexity {
  type: string,
  method: string,
  time: TimeComplexity,
  space: string,
  stable: boolean,
}

export type Mapping = {
  [key: string]: number;
};

export interface Lottery {
  'welfare': Mapping;
  'sports': Mapping;
}

export interface AttractionInfo {
  /** 景点的名称 */
  name: string;

  /** 景点的详细信息或描述 */
  description?: string;

  /** 景点相关的交通信息 */
  transportation: string;

  /** 建议游玩时长 */
  playDuration: string;

  /** 开放时间，可以是字符串格式的时间段或数组 */
  openingHours: string | string[]; // 例如 "9:00-17:00" 或 ["9:00-12:00", "13:00-17:00"]

  /** 是否需要预约，布尔值 */
  needReservation: boolean;

  /** 票价信息，可以是字符串或更复杂的对象 */
  ticketPrice: string | {
    adult: number; // 成人票价
    child?: number; // 儿童票价（可选）
    senior?: number; // 老人票价（可选）
    // 可以添加更多票价类型
  };

  /** 售票平台或渠道 */
  platform: string | string[]; // 例如 "官网" 或 ["美团", "携程"]

  /** 是否推荐，布尔值或带有理由的对象 */
  recommendation: boolean | {
    isRecommended: boolean;
    reason?: string; // 推荐理由（可选）
  };
}

export interface FoodRecord {
  name: string;               // 名字
  description?: string;       // 描述（可选）
  city: string;               // 城市
  location: string;           // 位置
  businessHours: string;      // 营业时间
  pricePerPerson: number;     // 人均消费
  restaurantType: string | string[];     // 餐厅类型
  recommendation: boolean | {
    isRecommended: boolean;
    reason?: string; // 推荐理由（可选）
  };
}

export interface Flag {
  id: string,
  name: string,
  svg: string,
}

export interface FlagMap {
  [path: string]: Flag,
}

export interface Point {
  x: number,
  y: number,
}

export interface Question {
  id: number,
  question: string,
  date: Date,
}