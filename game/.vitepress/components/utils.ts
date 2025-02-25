import type { TimelineHomeHero, WishInfo, Characters } from "./type";

export enum GameName {
  Genshin,    //原神
  HSR,        //星穹铁道
  ZZZ,        //绝区零
  WW,         //鸣潮 Wuthering Waves
  IN,         //无限暖暖 infinity nikki
}

export enum GameItems {
  GachaCurrencyItem = 0,    // 氪金抽卡道具
  StaminaCurrencyItem,      // 体力货币道具
  XPBoostItem,              // 经验升级道具
}

export enum GachaCurrencyItems {
  Item1 = 0,
  Diamond,
  Item3,
  Item4,
  Item5,
  Item6,
}

export enum StaminaCurrencyItems {
  Coin = 0,
  Item2,
  Item3,
}

export enum XPBoostItems {
  Item1 = 0,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7,
  Item8,
  Item9,
}

function isGachaCurrencyItems(item: number): item is GachaCurrencyItems {
  return GachaCurrencyItems[item] !== undefined;
}

function isStaminaCurrencyItems(item: number): item is StaminaCurrencyItems {
  return StaminaCurrencyItems[item] !== undefined;
}

function isXPBoostItems(item: number): item is XPBoostItems {
  return XPBoostItems[item] !== undefined;
}

export enum Rarity {

}

export enum WishType {
  Characters = 0,
  Weapons,
  Chronicled,
}

export enum WishPageDisplay {
  WishName,
  CharName,
  Date,
  Version,
  WishImage,
}

export enum WishInfoType {
  Table,
  List,
}

export const getCharName =
  (id: string, char: Characters) =>
    !id ? '' : char[replaceAndLow(id)]?.name;

export const getCharPrefix =
  (id: string, char: Characters) =>
    !id ? '' : char[id]?.prefix;

export const getCharElement =
  (id: string, char: Characters) =>
    !id ? '' : char[id]?.ele;

export const combineChar =
  (id: string, char: Characters) =>
    !id ? '' : (`${getCharPrefix(id, char)} · ${getCharName(id, char)}(${getCharElement(id, char).name})`);

export const getImgStyle =
  (current: WishInfo, gameNum: GameName = GameName.Genshin) => {
    let gameName = getGameNameStr(gameNum);
    // wish src
    let homeImg; // = current.src
    // replace char src
    homeImg = [];
    for (let v of current.obj) {
      if (Array.isArray(v.wish5star)) {
        for (let vv of v.wish5star) {
          homeImg.push(`/image/${gameName}/characters/full/${vv}.png`);
        }
      }
    }
    let style = {};
    if (homeImg.length == 1) {
      style = {
        backgroundImage: `url(${homeImg[0]})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: '50%',
      };
    } else if (homeImg.length == 2) {
      style = {
        backgroundImage: `url(${homeImg[0]}),url(${homeImg[1]})`,
        backgroundRepeat: 'no-repeat,no-repeat',
        backgroundPosition: 'left 3%, right 3%',
        backgroundSize: '50%, 50%',
      };
    }

    return style;
  };

export const getTimelineHomeHero =
  (current: WishInfo, gameName: GameName = GameName.Genshin) => {
    let tl: TimelineHomeHero = {
      name: '',
      text: '',
      actions: [],
      tagline: '',
      style: {}
    };

    tl.name = replaceText('x时间轴', gameName);
    tl.text = replaceText('全部x信息', gameName);

    let strGameName = getGameNameStr(gameName);

    tl.actions = [
      { theme: 'alt', text: '返回上级', link: `/${strGameName}/` },
      { theme: 'brand', text: replaceText('当前x', gameName), link: `/${strGameName}/wish` }
    ];
    let homeTagline = '';
    for (let v of current.obj) {
      homeTagline += ' + ' + v.name;
    }
    tl.tagline = homeTagline.slice(3);

    // tl.style = getImgStyle(current, gameName)

    // console.log(tl)

    return tl;

  };


export const mapGameItemName = new Map<GameName, Map<GameItems, string[]>>([
  [GameName.Genshin, new Map([
    [GameItems.GachaCurrencyItem, ["创世结晶", "原石", "纠缠之缘", "相遇之缘", "无主的星尘", "无主的星辉"]],
    [GameItems.StaminaCurrencyItem, ["摩拉", "原粹树脂", "脆弱树脂"]],
    [GameItems.XPBoostItem, ["圣遗物", "祝圣油膏", "祝圣精华", "流浪者的经验", "冒险家的经验", "大英雄的经验", "精锻用杂矿", "精锻用良矿", "精锻用魔矿"]]
  ])],
  [GameName.HSR, new Map([
    [GameItems.GachaCurrencyItem, ["古老月华", "星琼", "星轨专票", "星轨通票", "未熄的余烬", "未熄的星芒"]],
    [GameItems.StaminaCurrencyItem, ["信用点", "开拓力", "燃料"]],
    [GameItems.XPBoostItem, ["遗器", "遗失碎金", "遗失晶块", "旅情见闻", "冒险记录", "漫游指南", "稀薄以太", "凝缩以太", "提纯以太"]]
  ])],
  [GameName.ZZZ, new Map([
    [GameItems.GachaCurrencyItem, []],
    [GameItems.StaminaCurrencyItem, []],
    [GameItems.XPBoostItem, []]
  ])],
  [GameName.WW, new Map([
    [GameItems.GachaCurrencyItem, ["月相", "星声", "浮金波纹", "涡声波纹", "残振珊瑚", "余波珊瑚"]],
    [GameItems.StaminaCurrencyItem, ["贝币", "结晶波片", "结晶溶剂"]],
    [GameItems.XPBoostItem, ["声骸", "中级密音筒", "高级密音筒", "初级共鸣促剂", "中级共鸣促剂", "高级共鸣促剂", "初级能源核心", "中级能源核心", "高级能源核心"]]
  ])],
  [GameName.IN, new Map([
    [GameItems.GachaCurrencyItem, ["无垠星石", "钻石", "启示水晶", "共鸣水晶", "澎湃浪花", "静谧水滴"]],
    [GameItems.StaminaCurrencyItem, ["噗灵", "活跃能量", "能量结晶"]],
    [GameItems.XPBoostItem, ["", "", "", "", "", "", "", "", ""]]
  ])]
]);

export const getGameName = (game: GameName) => {
  switch (game) {
    case GameName.Genshin:
      return '原神';
    case GameName.HSR:
      return '星穹铁道';
    case GameName.ZZZ:
      return '绝区零';
    case GameName.WW:
      return '鸣潮';
    case GameName.IN:
      return '无限暖暖';
    default:
      return '';
  }
};

export const getGameIcon = (game: GameName) => {
  const nameIcon = (name: string) => `ico-${name}.ico`;
  switch (game) {
    case GameName.Genshin:
      return nameIcon('genshin');
    case GameName.HSR:
      return nameIcon('hsr');
    case GameName.ZZZ:
      return nameIcon('zzz');
    case GameName.WW:
      return nameIcon('ww');
    case GameName.IN:
      return nameIcon('in');
    default:
      return '';
  }
}

export const getGameThemeColor = (game: GameName) => {
  switch (game) {
    case GameName.Genshin: return '#B388FF';
    case GameName.HSR: return '#4CAF50';
    case GameName.ZZZ: return '#FF6347';
    case GameName.WW: return '#00BFFF';
    case GameName.IN: return '#FFC0CB';
    default: return '';
  }
}

export const getGameItemName = (game: GameName, item: GachaCurrencyItems | StaminaCurrencyItems | XPBoostItems) => {
  let gameItem = mapGameItemName.get(game);
  if (gameItem === undefined) {
    return '';
  }
  if (isGachaCurrencyItems(item)) {
    const gachaItems = gameItem.get(GameItems.GachaCurrencyItem);
    return gachaItems ? gachaItems[item] : '';
  }
  else if (isStaminaCurrencyItems(item)) {
    const staminaItems = gameItem.get(GameItems.StaminaCurrencyItem);
    return staminaItems ? staminaItems[item] : '';
  }
  else if (isXPBoostItems(item)) {
    const xpItems = gameItem.get(GameItems.XPBoostItem);
    return xpItems ? xpItems[item] : '';
  } else {

  }

  return "";
}

export const setBackgroundColor = (color: string) => {
  return { backgroundColor: color };
}

export const getCategoriesName = (gameName: GameName) => {
  if (gameName === GameName.Genshin) return '国家';
  if (gameName === GameName.HSR) return '星球';
  if (gameName === GameName.ZZZ) return '阵营';
  return '';
};

export const getRarityName = (gameName: GameName, star: number): string => {
  if (gameName === GameName.ZZZ) {
    let map = {
      3: "B级",
      4: 'A级',
      5: "S级"
    };
    return map[star] || '';
  }
  let map = {
    3: '三星',
    4: '四星',
    5: '五星',
  };
  if (gameName === GameName.Genshin) return map[star] || '';
  if (gameName === GameName.HSR) return map[star] || '';

  return '';
};

export const getProtagonistName = (gameName: GameName) => {
  if (gameName === GameName.Genshin) return '旅行者';
  if (gameName === GameName.HSR) return '开拓者';
  if (gameName === GameName.ZZZ) return '绳匠';
  return '';
};

export const getGameNameStr = (gameName: GameName) => {
  if (gameName === GameName.Genshin) return 'genshin';
  if (gameName === GameName.HSR) return 'hsr';
  if (gameName === GameName.ZZZ) return 'zzz';
  return '';
};

export const getWishNameStr = (gameName: GameName) => {
  if (gameName === GameName.Genshin) return '祈愿';
  if (gameName === GameName.HSR) return '跃迁';
  if (gameName === GameName.ZZZ) return '调频';
  return '';
};

// tag 0 no handle
// tag 1 weapon text weapon1
// tag 2 weapon text weapon2
export const replaceText =
  (str: string, gameName: GameName = GameName.Genshin, tag: number = 0) => {
    if (gameName === GameName.Genshin) {
      if (tag === 1) {
        return '「神铸赋形」活动祈愿';
      }
      return str.replace('x', '祈愿');
    }

    if (gameName === GameName.HSR) {
      if (tag === 1) {
        return '「流光定影」活动跃迁';
      }
      if (tag === 2) {
        return '「溯回忆象」活动跃迁';
      }
      return str.replace('x', '跃迁');
    }

    if (gameName === GameName.ZZZ) {
      if (tag === 1) {
        return '「音擎频段」喧哗奏鸣';
      }
      return str.replace('x', '调频');
    }

    return '';
  };

//替换空格 转小写
export const replaceAndLow = (inputString: string): string => {
  if (!inputString) return '';
  let newStr = inputString.replace(/[`·.,& ]/g, '_');
  while (newStr.includes('__')) {
    newStr = newStr.replace(/__/g, '_');
  }
  newStr = newStr.toLowerCase();
  return newStr;
};

export const composeCharSrc = (gameName: GameName, name: string) =>
  `/image/${getGameNameStr(gameName)}/characters/${replaceAndLow(name)}.png`;

export const combineWishPic = (wishName: string, wishImage: number) =>
  replaceAndLow(wishName) + "_" + wishImage + '.jpg';

//格式化日期
import dayjs from "dayjs";
const today = dayjs();
export const parseDayjs = (date: string) =>
  dayjs(date.toString(), "YYYY-MM-DD HH:mm:ss");
export const formatDayjs = (date: string) =>
  parseDayjs(date).format("YYYY-MM-DD HH:mm");

export const normalizeName = (name: string) =>
  name.toLowerCase().replace(/\s+/g, '');

export const compareDayjs = (a: string, b: string) => {
  if (parseDayjs(a).isBefore(parseDayjs(b))) {
    return -1;
  }
  if (parseDayjs(a).isAfter(parseDayjs(b))) {
    return 1;
  }
  return 0;
};

export const currentDayjs = (s: string, e: string) => parseDayjs(s).isBefore(today) && parseDayjs(e).isAfter(today);

export const beforeToday = (t: string) => parseDayjs(t).isBefore(today);
export const afterToday = (t: string) => parseDayjs(t).isAfter(today);

export const durationDay = (s: string, e: string) => parseDayjs(e).diff(parseDayjs(s), "day", true);
export const durationTodayDay = (t: string) => parseDayjs(t).diff(today, "day", true);
export const durationTodayMillisecond = (t: string) => parseDayjs(t).diff(today, "ms", true);

// 通过差值，计算今天之后的对应时间
export const calFutureDate = (dur: number) => today.add(dur, 'ms');

export const d2ms = (day: number) => day * 24 * 60 * 60 * 1000;

//秒转换
export const secondsFormat = (s: number) => {
  const day = Math.floor(s / (24 * 3600)); // Math.floor()向下取整
  const hour = Math.floor((s - day * 24 * 3600) / 3600);
  const minute = Math.floor((s - day * 24 * 3600 - hour * 3600) / 60);
  const second = s - day * 24 * 3600 - hour * 3600 - minute * 60;

  const padZero = (num: number) => (num < 10 ? '0' + num : num);

  if (day < 0 || hour < 0 || minute < 0 || second < 0) {
    return '';
  }

  let result = '';
  if (day > 0) {
    result = `${day}天${padZero(hour)}时`;
  } else if (hour > 0) {
    result = `${hour}时${padZero(minute)}分`;
  } else {
    result = `${minute}分${padZero(second)}秒`;
  }

  return result;
};

export const getTimeLeft = (start, end) => secondsFormat(Math.floor(end.diff(start) / 1000));

//返回始末时间之间的所有日期
export const getDuration = (type: string, start: Date, end: Date): Date[] => {
  const $array: Date[] = [];
  let current = new Date(start);
  end = new Date(end);
  while (current <= end) {
    $array.push(new Date(current));
    if (type == "hour") {//小时
      current.setHours(current.getHours() + 1);
    } else if (type == "day") {//天
      current.setDate(current.getDate() + 1);
    } else if (type == "week") {//周
      current.setDate(current.getDate() + 7);
    } else if (type == "month") {//月
      current.setMonth(current.getMonth() + 1);
    } else {//默认天
      current.setDate(current.getDate() + 1);
    }
  }
  return $array;
};


/**
 * 比较两个Date对象的时、分、秒部分（忽略日期）
 * @param {Date} date1 - 第一个Date对象
 * @param {Date} date2 - 第二个Date对象
 * @returns {number} 如果date1的时间早于date2，则返回-1；如果时间相同，则返回0；如果date1的时间晚于date2，则返回1
 */
export function compareTimeParts(date1: Date, date2: Date) {
  // 辅助函数：获取给定Date对象自当天午夜以来的总秒数
  function getTimeOfDayInSeconds(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return hours * 3600 + minutes * 60 + seconds;
  }

  // 获取两个Date对象的时间部分（自午夜以来的总秒数）
  const timeOfDay1 = getTimeOfDayInSeconds(date1);
  const timeOfDay2 = getTimeOfDayInSeconds(date2);

  // 比较时间部分并返回结果
  if (timeOfDay1 < timeOfDay2) {
    return -1; // date1的时间早于date2
  } else if (timeOfDay1 > timeOfDay2) {
    return 1;  // date1的时间晚于date2
  } else {
    return 0;  // date1和date2的时间相同
  }
}

/**
 * 获取上一个月的相同日（如果上一个月的天数少于当前日，则返回上一个月的最后一天）
 * @param {Date} date - 基准日期
 * @returns {Date} 上一个月的相同日或最后一天
 */
export function getPreviousMonthSameDay(date:Date) {
  // 创建一个新的Date对象，避免修改原始日期
  let prevDate = new Date(date);
 
  // 获取当前日期的日
  let day = prevDate.getDate();
 
  // 减去一个月
  prevDate.setMonth(prevDate.getMonth() - 1);
 
  // 如果上一个月的天数少于当前日，则设置为上一个月的最后一天
  if (prevDate.getDate() < day) {
    prevDate.setDate(0); // 设置为上个月的最后一天（setDate(0)会自动调整为上个月的最后一天）
  } else {
    // 否则，设置为上一个月的相同日
    prevDate.setDate(day);
  }
 
  // 返回结果
  return prevDate;
}
 

// https://stackoverflow.com/questions/5072136/javascript-filter-for-objects
export const objFilter = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => (res[key] = obj[key], res), {});

export const filterObject = (obj, callback) =>
  Object.fromEntries(Object.entries(obj)
    .filter(([key, val]) => callback(val, key)));

export const combineQuoteZh = (str: string) => str ? `「${str}」` : '';

export const getBadgeType = (type: number) => {
  let map = {
    0: 'info',
    1: 'tip',
    2: 'warning',
    3: 'danger',
  };
  return map[type] || map[type % 4];
}
