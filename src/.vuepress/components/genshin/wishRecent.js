import {processEvent} from "./eventHandle";
import {Deadline} from "../utils";
import dayjs from "dayjs";
import "dayjs/locale/zh";
import {formatDate} from "./timeHandle";

dayjs.locale("zh");

const ELEMENT_COLOR = {
    dendro: "#98e628",//草
    geo: "#e2b032",//岩
    electro: "#fca7ff",//雷
    hydro: "#03ddfe",//水
    pyro: "#fa5d3e",//火
    anemo: "#4cf3b6",//风
    cryo: "#a6fdfd"//冰
};

const eventObj = processEvent();

let wishCharacters = eventObj.events[0];
let wishLength = wishCharacters.length;

//替换空格 转小写----------------
//因为liquid没找到'如何替换 此处不再替换'
const replaceAndLow = str => str.replace(/ /g, "_").toLowerCase();

//----------------------------

let WishDetails = {
    haveWish: true,//0无祈愿 1有祈愿
    wishIndex: [],//索引集 一个为当前祈愿或者即将开放的祈愿 两个为双复刻池
    reprint: true,//双复刻标记
    isFuture: true,//当前无祈愿 正在等待开放
    comingIndex: []//即将到来的未开放的
};

//找出当前在哪个祈愿时间段
const getWishObj = () => {

    let obj = {
        wishIndex: [],
        haveWish: true,
        isFuture: false,
        comingIndex: [],
    };

    //当前时间所处的祈愿时间段
    for (let e of wishCharacters) {
        //当前时间在祈愿起始时间后
        let startAfter = dayjs().isAfter(e.start, "second");
        //当前时间在祈愿结束时间前
        let endBefore = dayjs().isBefore(e.end, "second");
        if (startAfter && endBefore) {
            obj.wishIndex.push(e.index2);
        }
    }

    obj.reprint = obj.wishIndex.length > 1;

    //存放所有未来的祈愿
    {
        let startIndex = obj.wishIndex[obj.wishIndex.length - 1];
        ++startIndex;
        for (let i = startIndex; i < wishLength; ++i) {
            obj.comingIndex.push(i);
        }
    }
    return obj;

};
let objWish = getWishObj();
console.log("objWish", objWish);

export let current = {
    able: objWish.wishIndex.length > 0,
    currentDate: [],
    currentSrc: []
};

if (objWish.haveWish) {
    for (let v of objWish.wishIndex) {
        let picName = replaceAndLow(wishCharacters[v].name) + "_" + wishCharacters[v].image;
        let img = "https://github.com/DrAugus/data/blob/master/game/genshin/wish/";
        img += picName;
        img += ".jpg?raw=true";
        current.currentSrc.push(img);
        let s = formatDate(dayjs(wishCharacters[v].start));
        let e = formatDate(dayjs(wishCharacters[v].end));
        // console.log(s, e);
        current.currentDate.push(s + "~" + e);
    }
}

export let future = {
    able: objWish.comingIndex.length > 0,
    futureDate: [],
    futureSrc: []
};
for (let v of objWish.comingIndex) {
    let picName = replaceAndLow(wishCharacters[v].name) + "_" + wishCharacters[v].image;
    let img = "https://github.com/DrAugus/data/blob/master/game/genshin/wish/";
    img += picName;
    img += ".jpg?raw=true";
    future.futureSrc.push(img);
    let s = formatDate(dayjs(wishCharacters[v].start));
    let e = formatDate(dayjs(wishCharacters[v].end));
    // console.log(s, e);
    future.futureDate.push(s + "~" + e);
}

// console.log(current, future);

export const wishDeadline = () => Deadline(dayjs(), dayjs(wishCharacters[objWish.wishIndex[0]].end));
export const wishBegin = () => Deadline(dayjs(), dayjs(wishCharacters[objWish.comingIndex[0]].start));

// console.log(wishDeadline(), wishBegin());

