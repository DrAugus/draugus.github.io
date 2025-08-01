export function isStringNumeric(s: string): boolean {
    const n = Number(s);
    return !isNaN(n) && !isNaN(Number(parseFloat(s)));
}

//格式化日期
import dayjs from "dayjs";
import { LinkName } from "./type";
const today = dayjs();
export const parseDayjs = (date: string | Date) =>
    typeof date === 'string' ? dayjs(date, "YYYY-MM-DD HH:mm:ss") : dayjs(date);
export const formatDayjs = (date: string | Date) =>
    parseDayjs(date).format("YYYY-MM-DD HH:mm");

export const durationDay = (s: string | Date, e: string | Date) => parseDayjs(e).diff(parseDayjs(s), "day", true);
export const durationTodayDay = (t: string | Date) => parseDayjs(t).diff(today, "day", true);

export const durationMonth = (s: string | Date, e: string | Date) => parseDayjs(e).diff(parseDayjs(s), "month", true);
export const monthsFromToday2X = (t: string | Date) => parseDayjs(t).diff(today, "month", true);
export const monthsFromX2Today = (t: string | Date) => today.diff(t, "month", true);

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

// 09:11
export const modifyTime = (date: Date): string =>
    date.toLocaleTimeString('zh-CN', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
    });

//秒转换
export const secondsFormat = (s: number, isHandleZero?: boolean) => {
    const day = Math.floor(s / (24 * 3600)); // Math.floor()向下取整
    const hour = Math.floor((s - day * 24 * 3600) / 3600);
    const minute = Math.floor((s - day * 24 * 3600 - hour * 3600) / 60);
    const second = s - day * 24 * 3600 - hour * 3600 - minute * 60;

    const padZero = (num: number) => {
        if (isHandleZero)
            return (num < 10 ? '0' + num : num);
        return num;
    };

    if (day < 0 || hour < 0 || minute < 0 || second < 0) {
        return '';
    }

    let result = '';
    if (day > 0) {
        result = `${day}天${padZero(hour)}时`;
    } else if (hour > 0) {
        result = `${hour}时${padZero(minute)}分`;
    } else {
        result = `${minute}分${padZero(second)}秒`;
    }

    return result;
};

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
    }
};

export const COLORS: Record<
    'BLUE' | 'GREEN' | 'PINK' | 'PURPLE',
    string[][]> = {
    // 蓝色系
    BLUE: [
        ['#fff4d6', '#dfd7d3', '#bec8c8', '#9bb7bb', '#80abb1', '#5496a2'],
        ['#e7ffc9', '#c2ecd6', '#a4dee1', '#7ccbed', '#59bcf6', '#3aaeff'],
        ['#eef5ff', '#e1edff', '#d6e5ff', '#c5d9ff', '#b8dOff', '#a9c6ff'],
    ],
    // 绿色系
    GREEN: [
        ['#ceeaea', '#b0dfdb', '#84cfc7', '#4bbaab', '#2bae9c', '#009f88'],
        ['#FFF5D6', '#EAEFD0', '#D7EBC6', '#C0E6BE', '#ADE2B5', '#9BDEB1'],
        ['#f1ffee', '#e1f5d3', '#d5ecbe', '#c5e2a3', '#b5d887', '#a5cd6c'],
    ],
    // 粉色系
    PINK: [
        ['#ffdce1', '#fccccf', '#fbb8c0', '#fa9faf', '#f8869f', '#f67590'],
        ['#ffe6eb', '#ffd4e0', '#ffc2d1', '#ffadc2', '#ff99b3', '#ff8aa3'],
        ['#f0d4db', '#e6bfc9', '#dcaab8', '#d295a7', '#c88096', '#be6b85'],
        ['#fff1f5', '#fde9ef', '#fcdde6', '#facfda', '#f8c2d0', '#f6b9c9'],
        ['#edd3e5', '#efd8e3', '#f3dfe0', '#f6e8dc', '#f9edda', '#fbf2d8'],
        ['#fff2ea', '#ffe6dd', '#ffdacf', '#ffccc0', '#ffbaac', '#ffac9c'],
    ],
    // 紫色系
    PURPLE: [
        ['#fff1f6', '#f9e9f3', '#eddaef', '#e4ceec', '#dac1e8', '#d3b8e5'],
    ],
}

export function hexToRgba(hex: string, alpha = 1) {
    // 去掉 # 号（如果有）
    hex = hex.replace(/^#/, '');

    // 解析 RR、GG、BB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // 返回 rgba 格式
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}



// HSL 转 RGB 辅助函数
export function hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number } {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) {
        [r, g, b] = [c, x, 0];
    } else if (60 <= h && h < 120) {
        [r, g, b] = [x, c, 0];
    } else if (120 <= h && h < 180) {
        [r, g, b] = [0, c, x];
    } else if (180 <= h && h < 240) {
        [r, g, b] = [0, x, c];
    } else if (240 <= h && h < 300) {
        [r, g, b] = [x, 0, c];
    } else if (300 <= h && h < 360) {
        [r, g, b] = [c, 0, x];
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return { r, g, b };
}

// RGB 转 HEX 辅助函数
export function rgbToHex(r: number, g: number, b: number): string {
    return `#${[r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('')}`;
}

export const setTripSidebar = (sortedData: any[], linkModify: Function) => {
    const result: any[] = [];
    sortedData.forEach(obj => {
        const year = obj.date.getFullYear();
        const month = obj.date.getMonth() + 1;
        let yearItem = result.find(item => item.text === `${year}年`);
        if (!yearItem) {
            yearItem = {
                text: `${year}年`,
                collapsed: false,
                items: []
            };
            result.push(yearItem);
        }
        let monthItem = yearItem.items.find(item => item.text === `${month}月`);
        if (!monthItem) {
            monthItem = {
                text: `${month}月`,
                items: []
            };
            yearItem.items.push(monthItem);
        }
        let day = obj.date.getDate();
        let linkName: LinkName = {
            text: `${day}日`,
            link: linkModify(obj.date)
        };
        if (obj.title) {
            linkName.text = `${day}日 ${obj.title}`;
        }
        monthItem.items.push(linkName);
    });
    return result;
};
