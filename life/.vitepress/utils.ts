export function isStringNumeric(s: string): boolean {
    const n = Number(s);
    return !isNaN(n) && !isNaN(Number(parseFloat(s)));
}

//格式化日期
import dayjs from "dayjs";
const today = dayjs();
export const parseDayjs = (date: string | Date) =>
    typeof date === 'string' ? dayjs(date, "YYYY-MM-DD HH:mm:ss") : dayjs(date);
export const formatDayjs = (date: string | Date) =>
    parseDayjs(date).format("YYYY-MM-DD HH:mm");

export const durationDay = (s: string | Date, e: string | Date) => parseDayjs(e).diff(parseDayjs(s), "day", true);
export const durationTodayDay = (t: string | Date) => parseDayjs(t).diff(today, "day", true);

export const durationMonth = (s: string | Date, e: string | Date) => parseDayjs(e).diff(parseDayjs(s), "month", true);
export const monthsFromToday2X   = (t: string | Date) => parseDayjs(t).diff(today, "month", true);
export const monthsFromX2Today  = (t: string | Date) => today.diff(t, "month", true);

// 2021/01/01
export const modifyDate = (date: Date): string =>
    date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

// 2021年1月1日
export const modifyDate1 = (date: Date): string =>
    `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;

export function extractNumbers(str: string) {
    const regex = /\d+/g; // \d 表示一个数字，+ 表示一个或多个，g 表示全局搜索  
    const numbers = str.match(regex);
    return numbers ? numbers.map(Number) : []; // 将匹配到的字符串数组转换为数字数组  
}

export enum ColorScheme {
    SoftPinkAndBlue = 0,    // 柔和粉蓝
    WarmCream,              // 温暖奶油
    FreshGrassAndWood,      // 清新草木
    ElegantSky,             // 淡雅天空
    GracefulViolet,         // 优雅紫罗兰
}

export const getColorScheme = (colorScheme: ColorScheme): string[] => {
    switch (colorScheme) {
        case ColorScheme.SoftPinkAndBlue: return ['#f5f0f9', '#e2eff8', '#d3d3d3'];
        case ColorScheme.WarmCream: return ['#f9f1e6', '#fff9e7', '#c1a58f'];
        case ColorScheme.FreshGrassAndWood: return ['#e5f2e7', '#eff7f5', '#d4e2dc'];
        case ColorScheme.ElegantSky: return ['#e7f5fe', '#f0f0f0', '#ffffff'];
        case ColorScheme.GracefulViolet: return ['#f0e6f5', '#f9f2f4', '#d9d9d9'];
        default:
            return [];
            break;
    }
};
