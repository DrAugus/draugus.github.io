import type { TimelineHomeHero, WishInfo, Characters } from "./type";

export enum GameName {
  Genshin,    //原神
  HSR,        //星穹铁道
  ZZZ,        //绝区零
  WW,         //鸣潮 Wuthering Waves
  IN,         //无限暖暖 infinity nikki
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

export const getGameRewardName = (game: GameName) => {
  switch (game) {
    case GameName.Genshin: return '原石';
    case GameName.HSR: return '星穹';
    case GameName.ZZZ: return '星币';
    case GameName.WW: return '星币';
    case GameName.IN: return '星币';
    default: return '';
  }
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
