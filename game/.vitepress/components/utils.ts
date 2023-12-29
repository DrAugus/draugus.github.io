import type { TimelineHomeHero, WishInfo, Characters } from "./type";

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
  (current: WishInfo, gameNum: number = 0) => {
    let gameName = getGameName(gameNum);
    // wish src
    let homeImg; // = current.src
    // replace char src
    homeImg = [];
    for (let v of current.obj) {
      for (let vv of v.wish5star) {
        homeImg.push(`/image/${gameName}/characters/full/${vv}.png`);
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
  (current: WishInfo, gameNum: number = 0) => {
    let tl: TimelineHomeHero = {
      name: '',
      text: '',
      actions: [],
      tagline: '',
      style: {}
    };

    tl.name = replaceText('x时间轴', gameNum);
    tl.text = replaceText('全部x信息', gameNum);

    let gameName = getGameName(gameNum);

    tl.actions = [
      { theme: 'alt', text: '返回上级', link: '/' + gameName + '/' },
      { theme: 'brand', text: replaceText('当前x', gameNum), link: '/' + gameName + '/wish' }
    ];
    let homeTagline = '';
    for (let v of current.obj) {
      homeTagline += ' + ' + v.name;
    }
    tl.tagline = homeTagline.slice(3);

    // tl.style = getImgStyle(current, gameNum)

    // console.log(tl)

    return tl;

  };

export const getGameName = (game: number) => {
  if (game === 0) return 'genshin';
  if (game === 1) return 'hsr';
};

// tag 0 no handle
// tag 1 weapon text
export const replaceText =
  (str: string, game: number = 0, tag: number = 0) => {
    if (game === 0) {

      if (tag === 1) {
        return '「神铸赋形」活动祈愿';
      }

      return str.replace('x', '祈愿');
    } else if (game === 1) {

      if (tag === 1) {
        return '「流光定影」活动跃迁';
      }

      return str.replace('x', '跃迁');
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

export const composeCharSrc = (game: number, name: string) =>
  `/image/${getGameName(game)}/characters/${replaceAndLow(name)}.png`;

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

//秒转换
export const secondsFormat = (s) => {
  const day = Math.floor(s / (24 * 3600)); // Math.floor()向下取整
  const hour = Math.floor((s - day * 24 * 3600) / 3600);
  const minute = Math.floor((s - day * 24 * 3600 - hour * 3600) / 60);
  const second = s - day * 24 * 3600 - hour * 3600 - minute * 60;
  if (day < 0 || hour < 0 || minute < 0 || second < 0) return -1;
  return day + "天" + hour + "时" + minute + "分" + second + "秒";
};

export const getDeadline = (start, end) => secondsFormat(Math.floor(end.diff(start) / 1000));

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

