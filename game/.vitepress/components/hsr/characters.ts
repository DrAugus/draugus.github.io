import { City, Element, ElementZH, Weapon, Artifacts } from "./utils";

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
  city: Object
  ele: Element
  weapon: Weapon
  cultivate: Cultivate
}

export const modifyChar = (id: string) => !id ? '' : CHARACTER[id]?.name

export const CHARACTER = {
  seele: {
    id: "Seele",
    name: "希儿",
    prefix: Weapon.bow,
    star: 5,
    event_exclusive: true,
    intro: "稻妻出身的浪人武士。为人谦和，个性温顺。年轻潇洒的外表下埋藏着许多往事。看似随性，心中却有独属于自己的行事准则。",
    city: City.JariloVI,
    ele: Element.anemo,
    weapon: Weapon.sword
  },
}
