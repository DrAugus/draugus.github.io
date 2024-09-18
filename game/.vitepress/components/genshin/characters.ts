import { City, Element, Weapon } from "./utils";

// https://github.com/theBowja/genshin-db
// todo 后续改为 db

// 原神官网
// https://ys.mihoyo.com/main/character/fontaine?char=0
// 英文官网 https://genshin.hoyoverse.com/en/character/Natlan?char=0


import json from '../../data/char/2.json';

const getObjCity = (str: string) => City[str];
const getObjElement = (str: string) => Element[str];
const getObjWeapon = (str: string) => Weapon[str];

const modifiedJsonChar = () => {
  let new_char = {};
  for (const [key, value] of Object.entries(json)) {
    let new_per = value;
    new_per.city = getObjCity(value.city);
    new_per.ele = getObjElement(value.ele);
    new_per.weapon = getObjWeapon(value.weapon);
    new_char[key] = new_per;
  }
  return new_char;
};

export const CHARACTER = modifiedJsonChar();
