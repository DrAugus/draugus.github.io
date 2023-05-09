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
    prefix: Weapon.Hunt,
    star: 5,
    event_exclusive: true,
    intro: "",
    city: City.JariloVI,
    ele: Element.Quantum,
    weapon: Weapon.Hunt
  },
  hook: {
    id: "Hook",
    name: "虎克",
    prefix: Weapon.Destruction,
    star: 4,
    event_exclusive: false,
    intro: "",
    city: City.JariloVI,
    ele: Element.Fire,
    weapon: Weapon.Destruction
  },
  pela: {
    id: "Pela",
    name: "佩拉",
    prefix: Weapon.Nihility,
    star: 4,
    event_exclusive: false,
    intro: "",
    city: City.JariloVI,
    ele: Element.Ice,
    weapon: Weapon.Nihility
  },
  natasha: {
    id: "Natasha",
    name: "娜塔莎",
    prefix: Weapon.Abundance,
    star: 4,
    event_exclusive: false,
    intro: "",
    city: City.JariloVI,
    ele: Element.Physical,
    weapon: Weapon.Abundance
  },
}
