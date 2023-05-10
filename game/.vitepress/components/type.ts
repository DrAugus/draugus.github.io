export interface NameList {
  // english
  id: string
  // chinese
  name: string
}

export interface EventHandleWish {
  name: string
  image: number
  shortName: string
  start: string
  end: string
  version: string
  wish5star: string
  wish4star: string[]
  wishName: string
  wish_2?: boolean
  url: string
  index: number
  index2: Number
  duration: number
  offset: number
}

export interface WishInfoObj {
  name: string,
  date: string,
  ver: string,
  src: string,
  wish5star: string,
  wish4star: string[]
}

export interface WishInfo {
  index: number[],
  able: boolean
  obj: WishInfoObj[]
}

export interface HeroAction {
  theme?: 'brand' | 'alt'
  text: string
  link: string
}

export interface TimelineHomeHero {
  name: string
  text: string
  actions: HeroAction[]
  tagline: string
  style?: Object
}
