export interface LinkName {
  text: string,
  link: string,
}

interface LibsInfo {
  intro?: string,
  repo?: LinkName,
  homepage?: LinkName,
  guide?: LinkName,
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
}

export interface CardData {
  title: string,
  items: CardLink[],
}

export interface ChinaExploreRecordItem {
  // 市区拼音
  id: string,
}

export interface ChinaExploreRecord {
  // 省区/直辖市拼音
  id: string,
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
