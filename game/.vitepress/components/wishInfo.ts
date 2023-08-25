import type { EventHandleWish, WishInfo, WishInfoObj } from './type'
import dayjs from "dayjs";
import { formatDayjs, replaceAndLow, getGameName } from './utils';

// 找出当前在哪个祈愿时间段
export const getWishIndex = (wish: EventHandleWish[]) => {

    type tObj = {
        wishIndex: Number[] // 索引集 一个为当前祈愿或者即将开放的祈愿 两个为双复刻池
        comingIndex: Number[] // 即将到来的未开放的
    }

    let obj: tObj = {
        wishIndex: [],
        comingIndex: []
    };

    // 当前时间所处的祈愿时间段
    for (let e of wish) {
        // 当前时间在祈愿起始时间后
        let startAfter = dayjs().isAfter(e.start, "second");
        // 当前时间在祈愿结束时间前
        let endBefore = dayjs().isBefore(e.end, "second");
        if (startAfter && endBefore) {
            obj.wishIndex.push(e.index2);
        }
        // 当前时间在祈愿起始时间前
        let startBefore = dayjs().isBefore(e.start, "second");
        if (startBefore) {
            obj.comingIndex.push(e.index2)
        }
    }

    return obj;

};

// 
const getWishObj = (wish: EventHandleWish, game: number = 0) => {

    let strGame = getGameName(game)
    let arrImg: string[] = []
    let wish5starArr: string[] = []
    for (let i = 0; i < wish.name.length; ++i) {
        let picName = replaceAndLow(wish.name[i]) + "_" + wish.image[i];
        let img = `/image/${strGame}/wish/`;
        img += picName;
        img += ".jpg";
        arrImg.push(img)

        wish5starArr.push(wish.wish5star[i])
    }

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
        src: arrImg,
        wish5star: wish5starArr,
        wish4star: wish4star
    }
}

// 
export const getWishInfo =
    (wish: EventHandleWish[], wishIndex: number[], game: number = 0) => {
        let wishInfo: WishInfo = {
            index: wishIndex,
            able: wishIndex.length > 0,
            obj: []
        }
        for (let v of wishIndex) {
            const obj: WishInfoObj = getWishObj(wish[v], game)
            wishInfo.obj.push(obj)
        }
        return wishInfo
    }

