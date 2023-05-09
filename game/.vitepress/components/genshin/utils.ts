export const Element = {
  anemo: { id: "anemo", name: "风" },
  pyro: { id: "pyro", name: "火" },
  cryo: { id: "cryo", name: "冰" },
  electro: { id: "electro", name: "雷" },
  hydro: { id: "hydro", name: "水" },
  geo: { id: "geo", name: "岩" },
  dendro: { id: "dendro", name: "草" }
}

export const City = {
  Mondstadt: { id: "Mondstadt", name: "蒙德" },
  Liyue: { id: "Liyue", name: "璃月" },
  Inazuma: { id: "Inazuma", name: "稻妻" },
  Sumeru: { id: "Sumeru", name: "须弥" },
  Fontaine: { id: "Fontaine", name: "枫丹" },
  Natlan: { id: "Natlan", name: "纳塔" },
  Snezhnaya: { id: "Snezhnaya", name: "至冬" }
}

export const Weapon = {
  sword: { id: "sword", name: "单手剑" },
  claymore: { id: "claymore", name: "双手剑" },
  catalyst: { id: "catalyst", name: "法器" },
  bow: { id: "bow", name: "弓" },
  polearm: { id: "polearm", name: "长柄武器" },
}


export enum Artifacts {
  flower, plume, sands, goblet, circlet
}


export const composeSrc = (name: string) =>
  '/image/genshin/characters/' + name + '.png'



