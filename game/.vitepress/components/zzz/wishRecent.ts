import { WISH } from "./wish";
import { processEvent } from "../eventHandle";
import { getWishIndex, getWishInfo } from "../wishInfo";
import { GameName, WishType, getDeadline } from '../utils';

import dayjs from "dayjs";
import "dayjs/locale/zh";

dayjs.locale("zh");

const eventObj = processEvent(WISH);
const game = GameName.ZZZ;

let wishCharacters = eventObj.events[WishType.Characters];
// console.log(wishCharacters)

let objWish = getWishIndex(wishCharacters);
// console.log("objWish", objWish);

export const current = getWishInfo(wishCharacters, objWish.wishIndex, game);
export const future = getWishInfo(wishCharacters, objWish.comingIndex, game);
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

