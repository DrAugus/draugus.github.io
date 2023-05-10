import type { EventHandleWish, WishInfo, WishInfoObj } from './type'

//替换空格 转小写
export const replaceAndLow = (str: string) =>
  str.replace(/ /g, "_").toLowerCase();

//格式化日期
import dayjs from "dayjs";
export const parseDayjs = (date: string) =>
  dayjs(date.toString(), "YYYY-MM-DD HH:mm:ss");
export const formatDayjs = (date: string) =>
  parseDayjs(date).format("YYYY-MM-DD HH:mm");

export const normalizeName = (name: string) =>
  name.toLowerCase().replace(/\s+/g, '')


//找出当前在哪个祈愿时间段
export const getWishIndex = (wish: EventHandleWish[]) => {

  type tObj = {
    wishIndex: Number[] //索引集 一个为当前祈愿或者即将开放的祈愿 两个为双复刻池
    comingIndex: Number[] //即将到来的未开放的
  }

  let obj: tObj = {
    wishIndex: [],
    comingIndex: []
  };

  //当前时间所处的祈愿时间段
  for (let e of wish) {
    //当前时间在祈愿起始时间后
    let startAfter = dayjs().isAfter(e.start, "second");
    //当前时间在祈愿结束时间前
    let endBefore = dayjs().isBefore(e.end, "second");
    if (startAfter && endBefore) {
      obj.wishIndex.push(e.index2);
    }
    //当前时间在祈愿起始时间前
    let startBefore = dayjs().isBefore(e.start, "second");
    if (startBefore) {
      obj.comingIndex.push(e.index2)
    }
  }

  return obj;

};

// 

export const getWishObj = (wish: EventHandleWish, game: number = 0) => {
  let picName = replaceAndLow(wish.name) + "_" + wish.image;
  let img = "/image/genshin/wish/";
  img += picName;
  img += ".jpg";
  let s = formatDayjs(wish.start);
  let e = formatDayjs(wish.end);
  // console.log(s, e);
  let wish4star = wish.wish4star
  // 有部分没有小写
  if (Array.isArray(wish4star))
    wish4star = wish4star?.map((v, i, arr) => replaceAndLow(v))
  return {
    name: wish.wishName,
    date: s + " ~ " + e,
    ver: wish.version,
    src: img,
    wish5star: wish.wish5star,
    wish4star: wish4star
  }
}

export const getWishInfo = (wish: EventHandleWish[], wishIndex: number[]) => {
  let wishInfo: WishInfo = {
    index: wishIndex,
    able: wishIndex.length > 0,
    obj: []
  }
  for (let v of wishIndex) {
    const obj: WishInfoObj = getWishObj(wish[v])
    wishInfo.obj.push(obj)
  }
  return wishInfo
}


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

