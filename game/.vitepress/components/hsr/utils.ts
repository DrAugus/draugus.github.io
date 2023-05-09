export enum Element {
  "Quantum", "Physical", "Ice", "Lightning", "Fire", "Wind", "Imaginary"
}

export const ElementString = {
  0: 'anemo',
  1: 'pyro',
  2: 'cryo',
  3: 'electro',
  4: 'hydro',
  5: 'geo',
  6: 'dendro',
}

export enum City {
  HertaSpaceStation,
  JariloVI,
  TheXianzhouLuofu,
}

export const CityZH = ["空间站「黑塔」", "雅利洛-VI", "仙舟「罗浮」"]
export const CityEN = ["Herta Space Station", "Jarilo-VI", "The Xianzhou Luofu"]

export const ElementZH = ["量子", "物理", "冰", "雷", "火", "风", "虚数"]
export const ElementEN = ["Quantum", "Physical", "Ice", "Lightning", "Fire", "Wind", "Imaginary"]

export enum Weapon {
  sword, claymore, catalyst, bow, polearm
}

export const WeaponZH = ["巡猎", "存护", "同谐", "毁灭", "智识", "丰饶", "虚无"]
export const WeaponEN = ["The Hunt", "The Preservation", "The Harmony", "The Destruction", "The Erudition", "The Abundance", "The Nihility"]

export enum Artifacts {
  flower, plume, sands, goblet, circlet
}


export const composeSrc = (name: string) =>
  '/image/genshin/characters/' + name + '.png'



