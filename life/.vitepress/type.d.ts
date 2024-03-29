export interface LinkName {
  text: string,
  link: string,
}

interface LibsInfo {
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
  /** 名称 */
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

interface ExploreInfo {
  date?: DateRange,
  intro?: string,
}

export interface ChinaExploreRecordItem {
  // 市区拼音
  id: string,
  info: ExploreInfo[],
  resident?: boolean,
}

export interface ChinaExploreRecord {
  // 省区/直辖市拼音
  id: string,
  info?: ExploreInfo[],
  resident?: boolean,
  items?: ChinaExploreRecordItem[],
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
