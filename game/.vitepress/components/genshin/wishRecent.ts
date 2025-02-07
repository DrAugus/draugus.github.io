import { WISH } from "./wish";
import { processEvent } from "../eventHandle";
import { getWishIndex, getWishInfo } from "../wishInfo";
import { GameName, WishType, getTimeLeft } from '../utils';

import dayjs from "dayjs";
import "dayjs/locale/zh";

dayjs.locale("zh");

const eventObj = processEvent(WISH);
const game = GameName.Genshin;

// console.log(eventObj);

const wishCharacters = eventObj.events[WishType.Characters];
// console.log(wishCharacters)

const wishChronicled = eventObj.events[WishType.Chronicled];
// console.log(wishChronicled);

const objWishIndex = getWishIndex(wishCharacters);
// console.log("objWishIndex", objWishIndex);

const objWishChronicledIndex = getWishIndex(wishChronicled);
// console.log("objWishChronicledIndex", objWishChronicledIndex);

export const current = getWishInfo(wishCharacters, objWishIndex.wishIndex, game);
export const future = getWishInfo(wishCharacters, objWishIndex.comingIndex, game);
// console.log(current, future);

export const wishDeadline = (): string =>
    current.able ?
        getTimeLeft(dayjs(), dayjs(wishCharacters[objWishIndex.wishIndex[0]].end)) :
        '';
export const wishBegin = (): string =>
    future.able ?
        getTimeLeft(dayjs(), dayjs(wishCharacters[objWishIndex.comingIndex[0]].start)) :
        '';

// console.log(wishDeadline(), wishBegin());


export const currentChronicled = getWishInfo(wishChronicled, objWishChronicledIndex.wishIndex, game);
export const futureChronicled = getWishInfo(wishChronicled, objWishChronicledIndex.comingIndex, game);
// console.log(currentChronicled, futureChronicled);

export const wishDeadlineChronicled = (): string =>
    currentChronicled.able ?
        getTimeLeft(dayjs(), dayjs(wishChronicled[objWishChronicledIndex.wishIndex[0]].end)) :
        '';
export const wishBeginChronicled = (): string =>
    futureChronicled.able ?
        getTimeLeft(dayjs(), dayjs(wishChronicled[objWishChronicledIndex.comingIndex[0]].start)) :
        '';

// console.log(wishDeadlineChronicled(), wishBeginChronicled());
