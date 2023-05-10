import { WISH } from "./genshin/wish";
import { processEvent } from "./eventHandle";
import { getWishIndex, getWishInfo } from "./wishInfo";
import { getDeadline } from './utils'

import dayjs from "dayjs";
import "dayjs/locale/zh";

dayjs.locale("zh");

const eventObj = processEvent(WISH);

let wishCharacters = eventObj.events[0];
// console.log(wishCharacters)

let objWish = getWishIndex(wishCharacters);
// console.log("objWish", objWish);

export const current = getWishInfo(wishCharacters, objWish.wishIndex);
export const future = getWishInfo(wishCharacters, objWish.comingIndex);
// console.log(current, future);

export const wishDeadline = () =>
    current.able ?
        getDeadline(dayjs(), dayjs(wishCharacters[objWish.wishIndex[0]].end)) :
        -1;
export const wishBegin = () =>
    future.able ?
        getDeadline(dayjs(), dayjs(wishCharacters[objWish.comingIndex[0]].start)) :
        -1;

// console.log(wishDeadline(), wishBegin());

