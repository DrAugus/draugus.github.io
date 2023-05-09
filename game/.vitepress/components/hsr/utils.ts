export const Element = {
  Quantum: { id: "Quantum", name: "量子" },
  Physical: { id: "Physical", name: "物理" },
  Ice: { id: "Ice", name: "冰" },
  Lightning: { id: "Lightning", name: "雷" },
  Fire: { id: "Fire", name: "火" },
  Wind: { id: "Wind", name: "风" },
  Imaginary: { id: "Imaginary", name: "虚数" }
}

export const City = {
  HertaSpaceStation: { id: "Herta Space Station", name: "空间站「黑塔」" },
  JariloVI: { id: "Jarilo-VI", name: "雅利洛-VI" },
  TheXianzhouLuofu: { id: "The Xianzhou Luofu", name: "仙舟「罗浮」" }
}

export const Weapon = {
  Hunt: { id: "The Hunt", name: "巡猎" },
  Preservation: { id: "The Preservation", name: "存护" },
  Harmony: { id: "The Harmony", name: "同谐" },
  Destruction: { id: "The Destruction", name: "毁灭" },
  Erudition: { id: "The Erudition", name: "智识" },
  Abundance: { id: "The Abundance", name: "丰饶" },
  Nihility: { id: "The Nihility", name: "虚无" }
}

export enum Artifacts {
  flower, plume, sands, goblet, circlet
}

export const composeSrc = (name: string) =>
  '/image/genshin/characters/' + name + '.png'

