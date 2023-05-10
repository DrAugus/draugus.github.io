import { City, Element, Weapon, Artifacts } from "./utils";
import { NameList } from "../type";

export interface Cultivate {
  weapons: string
  talent: string
  artifacts: string[]
  main: {}
  sub: string[]
  tips: string
}

export interface Characters {
  id: string,
  name: string
  prefix: string,
  star: number
  event_exclusive: boolean
  intro: string
  city: NameList
  ele: Element
  weapon: NameList
  cultivate: Cultivate
}

export const modifyChar = (id: string) => !id ? '' : CHARACTER[id]?.name

export const CHARACTER = {
  seele: {
    id: "Seele",
    name: "希儿",
    prefix: Weapon.Hunt.name,
    star: 5,
    event_exclusive: true,
    intro: "",
    city: City.JariloVI,
    ele: Element.Quantum,
    weapon: Weapon.Hunt.id
  },
  hook: {
    id: "Hook",
    name: "虎克",
    prefix: Weapon.Destruction.name,
    star: 4,
    event_exclusive: false,
    intro: "",
    city: City.JariloVI,
    ele: Element.Fire,
    weapon: Weapon.Destruction.id
  },
  pela: {
    id: "Pela",
    name: "佩拉",
    prefix: Weapon.Nihility.name,
    star: 4,
    event_exclusive: false,
    intro: "",
    city: City.JariloVI,
    ele: Element.Ice,
    weapon: Weapon.Nihility.id
  },
  natasha: {
    id: "Natasha",
    name: "娜塔莎",
    prefix: Weapon.Abundance.name,
    star: 4,
    event_exclusive: false,
    intro: "",
    city: City.JariloVI,
    ele: Element.Physical,
    weapon: Weapon.Abundance.id
  },
  yukong: {
    id: 'Yukong',
    name: 'Yukong',
    prefix: Weapon.Harmony,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Imaginary,
    weapon: Weapon.Harmony
  },
  luocha: {
    id: 'Luocha',
    name: 'Luocha',
    prefix: Weapon.Abundance,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Imaginary,
    weapon: Weapon.Abundance
  },
  silver_wolf: {
    id: 'Silver Wolf',
    name: 'Silver Wolf',
    prefix: Weapon.Nihility,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.StellaronHunters,
    ele: Element.Quantum,
    weapon: Weapon.Nihility
  },
  bailu: {
    id: 'Bailu',
    name: 'Bailu',
    prefix: Weapon.Abundance,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Lightning,
    weapon: Weapon.Abundance
  },
  yanqing: {
    id: 'Yanqing',
    name: 'Yanqing',
    prefix: Weapon.Hunt,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Ice,
    weapon: Weapon.Hunt
  },
  sushang: {
    id: 'Sushang',
    name: 'Sushang',
    prefix: Weapon.Hunt,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Physical,
    weapon: Weapon.Hunt
  },
  jing_yuan: {
    id: 'Jing Yuan',
    name: 'Jing Yuan',
    prefix: Weapon.Erudition,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Lightning,
    weapon: Weapon.Erudition
  },
  tingyun: {
    id: 'Tingyun',
    name: 'Tingyun',
    prefix: Weapon.Harmony,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Lightning,
    weapon: Weapon.Harmony
  },
  qingque: {
    id: 'Qingque',
    name: 'Qingque',
    prefix: Weapon.Erudition,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.TheXianzhouLuofu,
    ele: Element.Quantum,
    weapon: Weapon.Erudition
  },
  sampo: {
    id: 'Sampo',
    name: 'Sampo',
    prefix: Weapon.Nihility,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.JariloVI,
    ele: Element.Wind,
    weapon: Weapon.Nihility
  },
  clara: {
    id: 'Clara',
    name: 'Clara',
    prefix: Weapon.Destruction,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.JariloVI,
    ele: Element.Physical,
    weapon: Weapon.Destruction
  },
  gepard: {
    id: 'Gepard',
    name: 'Gepard',
    prefix: Weapon.Preservation,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.JariloVI,
    ele: Element.Ice,
    weapon: Weapon.Preservation
  },
  serval: {
    id: 'Serval',
    name: 'Serval',
    prefix: Weapon.Erudition,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.JariloVI,
    ele: Element.Lightning,
    weapon: Weapon.Erudition
  },
  bronya: {
    id: 'Bronya',
    name: 'Bronya',
    prefix: Weapon.Harmony,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.JariloVI,
    ele: Element.Wind,
    weapon: Weapon.Harmony
  },
  herta: {
    id: 'Herta',
    name: 'Herta',
    prefix: Weapon.Erudition,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.HertaSpaceStation,
    ele: Element.Ice,
    weapon: Weapon.Erudition
  },
  asta: {
    id: 'Asta',
    name: 'Asta',
    prefix: Weapon.Harmony,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.HertaSpaceStation,
    ele: Element.Fire,
    weapon: Weapon.Harmony
  },
  arlan: {
    id: 'Arlan',
    name: 'Arlan',
    prefix: Weapon.Destruction,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.HertaSpaceStation,
    ele: Element.Lightning,
    weapon: Weapon.Destruction
  },
  welt: {
    id: 'Welt',
    name: 'Welt',
    prefix: Weapon.Nihility,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.AstralExpress,
    ele: Element.Imaginary,
    weapon: Weapon.Nihility
  },
  himeko: {
    id: 'Himeko',
    name: 'Himeko',
    prefix: Weapon.Erudition,
    star: 5,
    event_exclusive: false,
    intro: '',
    city: City.AstralExpress,
    ele: Element.Fire,
    weapon: Weapon.Erudition
  },
  dan_heng: {
    id: 'Dan Heng',
    name: 'Dan Heng',
    prefix: Weapon.Hunt,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.AstralExpress,
    ele: Element.Wind,
    weapon: Weapon.Hunt
  },
  march_7th: {
    id: 'March 7th',
    name: 'March 7th',
    prefix: Weapon.Preservation,
    star: 4,
    event_exclusive: false,
    intro: '',
    city: City.AstralExpress,
    ele: Element.Ice,
    weapon: Weapon.Preservation
  },
}
