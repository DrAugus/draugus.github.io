export interface NameList {
  // english
  id: string,
  // chinese
  name: string,
}

export interface Cultivate {
  weapons: string,
  talent: string,
  artifacts: string[],
  main: {},
  sub: string[],
  tips: string,
}

export interface Characters {
  id: string,
  name: string,
  prefix: string,
  star: number,
  event_exclusive: boolean,
  intro: string,
  city: NameList,
  ele: Element,
  weapon: NameList,
  cultivate: Cultivate,
}

export interface EventHandleWish {
  name: string[],
  image: number[],
  shortName: string[],
  start: string,
  end: string,
  version: string,
  wish5star: string[],
  wish4star: string[],
  wishName: string[],
  wish_2?: boolean,
  url: string[],
  index: number,
  index2: number,
  duration: number,
  offset: number,
}

export interface WishInfoObj {
  name: string[],
  date: string,
  ver: string,
  image: number[],
  src: string[],
  wish5star: string[],
  wish4star: string[],
}

export interface WishInfo {
  index: number[],
  able: boolean,
  obj: WishInfoObj[],
}

export interface HeroAction {
  theme?: 'brand' | 'alt',
  text: string,
  link: string,
}

export interface TimelineHomeHero {
  name: string,
  text: string,
  actions: HeroAction[],
  tagline: string,
  style?: Object,
}

export interface WishAll {
  characters: Wish[],
  weapons: Wish[],
  chronicled?: Wish[];
}

export interface Wish {
  name: string[] | string,
  image: number[] | number,
  shortName?: string[] | string,
  start: string,
  end: string,
  version?: string,
  wish5star?: string[] | WishMixed,
  wish4star?: string[] | WishMixed,
  wishName?: string[],
  url?: string[] | string,
}

export interface WishMixed {
  characters: string[],
  weapons: string[],
}
