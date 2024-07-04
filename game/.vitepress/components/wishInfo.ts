import type { EventHandleWish, WishIndex, WishInfo, WishInfoObj } from './type';
import dayjs from "dayjs";
import { formatDayjs, replaceAndLow, combineWishPic, getGameNameStr } from './utils';

// 找出当前在哪个祈愿时间段
export const getWishIndex = (wish: EventHandleWish[]): WishIndex => {

    let obj: WishIndex = {
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
            obj.comingIndex.push(e.index2);
        }
    }

    return obj;

};

// 
const getWishObj = (wish: EventHandleWish, game: number = 0): WishInfoObj => {

    let strGame = getGameNameStr(game);
    let arrImg: string[] = [];
    for (let i = 0; i < wish.name.length; ++i) {
        arrImg.push(`/image/${strGame}/wish/${combineWishPic(wish.name[i], wish.image[i])}`);
    }
    let s = formatDayjs(wish.start);
    let e = formatDayjs(wish.end);
    // console.log(s, e);

    let wish5star = wish.wish5star;
    if (Array.isArray(wish5star)) {
        wish5star = wish5star?.map((v, i, arr) => replaceAndLow(v));
    } else {
        wish5star.characters = wish5star.characters?.map((v, i, arr) => replaceAndLow(v));
    }
    let wish4star = wish.wish4star;
    if (Array.isArray(wish4star)) {
        wish4star = wish4star?.map((v, i, arr) => replaceAndLow(v));
    } else {
        wish4star.characters = wish4star.characters?.map((v, i, arr) => replaceAndLow(v));
    }
    return {
        name: wish.wishName,
        date: s + " ~ " + e,
        ver: wish.version,
        image: wish.image,
        src: arrImg,
        wish5star,
        wish4star
    };
};

// 
export const getWishInfo =
    (wish: EventHandleWish[], wishIndex: number[], game: number = 0) => {
        let wishInfo: WishInfo = {
            index: wishIndex,
            able: wishIndex.length > 0,
            obj: []
        };
        for (let v of wishIndex) {
            const obj: WishInfoObj = getWishObj(wish[v], game);
            wishInfo.obj.push(obj);
        }
        return wishInfo;
    }

