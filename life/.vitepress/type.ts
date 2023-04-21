export interface CardLink {
  /** 图标 */
  icon?: string | { svg: string }
  /** 名称 */
  title: string
  /** 名称 */
  date?: string
  /** 描述 */
  desc?: string
  /** 链接 */
  link: string
}

export interface CardData {
  title: string
  items: CardLink[]
}

export interface ChinaExploreRecordItem {
  // 市区拼音
  id: string
}

export interface ChinaExploreRecord {
  // 省区/直辖市拼音
  id: string
  items?: ChinaExploreRecordItem[]
}
