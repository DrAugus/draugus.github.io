export enum GameName {
  Genshin,    //原神
  HSR,        //星穹铁道
  ZZZ,        //绝区零
  WW,         //鸣潮 Wuthering Waves
  IN,         //无限暖暖 infinity nikki
}

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
  wish5star: string[] | WishMixed,
  wish4star: string[] | WishMixed,
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
  wish5star: string[] | WishMixed,
  wish4star: string[] | WishMixed,
}

export interface WishInfo {
  index: number[],
  able: boolean,
  obj: WishInfoObj[],
}

export interface WishIndex {
  wishIndex: number[],    // 索引集 一个为当前祈愿或者即将开放的祈愿 两个为双复刻池
  comingIndex: number[],  // 即将到来的未开放的
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

export interface Event {
  name: string,
  description?: string,
  image?: string,
  start: string,
  end: string,
  reward?: number,
  game: GameName,
  completed?: boolean,
}

export interface PermanentEvent {
  name: string,
  description?: string,
  image?: string,
  first: string,        // 首次开始时间，其实并不是首次开始时间，而是标记一下
  // 持续时间
  duration: {
    value: number,
    unit: 'day' | 'month',
  },
  backspace: number, // 消减 以秒计
  reward?: number,
  game: GameName,
  deprecated?: boolean,
  completedDate?: Date[],
}
