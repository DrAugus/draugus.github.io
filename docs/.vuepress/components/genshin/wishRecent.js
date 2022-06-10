import {processEvent} from "./eventHandle";
import {Deadline} from "../utils";
import dayjs from "dayjs";

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
    //如果没有找到
    if (!obj.wishIndex.length) {
        obj.haveWish = false;
        for (let i = 1; i < wishLength; ++i) {
            //介于前一个结束时间后 后一个开始时间前
            let endAfter = dayjs().isAfter(wishCharacters[i - 1].end, "second");
            let startBefore = dayjs().isBefore(wishCharacters[i].start, "second");
            if (endAfter && startBefore) {
                obj.wishIndex.push(wishCharacters[i].index2);
                obj.isFuture = true;
            }
        }
    }

    obj.reprint = obj.wishIndex.length > 1;

    //存放所有未来的祈愿
    if (obj.wishIndex.length) {
        let startIndex = obj.wishIndex[obj.wishIndex.length - 1];
        if (obj.isFuture) obj.comingIndex.push(startIndex);
        else ++startIndex;
        for (let i = startIndex; i < wishLength; ++i) {
            obj.comingIndex.push(i);
        }
    }
    return obj;

};
let objWish = getWishObj();
console.log("objWish", objWish);


export let current = {
    able: !!objWish.wishIndex[0],
    currentDate: [],
    currentSrc: []
};

if (objWish.haveWish) {
    for (let v of objWish.wishIndex) {
        let picName = replaceAndLow(wishCharacters[v].name) + "_" + wishCharacters[v].image;
        current.currentSrc.push("/image/life/game/genshin/wish/" + picName + ".jpg");
        current.currentDate.push(dayjs(wishCharacters[v].start, "YYYY/MM/DD HH:mm:ss") + "~" + dayjs(wishCharacters[v].end, "YYYY/MM/DD HH:mm:ss"));
    }
}

export let future = {
    able: !!objWish.comingIndex[0],
    futureDate: [],
    futureSrc: []
};
for (let v of objWish.comingIndex) {
    let picName = replaceAndLow(wishCharacters[v].name) + "_" + wishCharacters[v].image;
    future.futureSrc.push("/image/life/game/genshin/wish/" + picName + ".jpg");
    future.futureDate.push(dayjs(wishCharacters[v].start, "YYYY/MM/DD HH:mm:ss") + "~" + dayjs(wishCharacters[v].end, "YYYY/MM/DD HH:mm:ss"));
}

console.log(current, future);

//祈愿倒计时
export const wishDeadline = () => Deadline(dayjs(), dayjs(wishCharacters[objWish.wishIndex[0]].end));

