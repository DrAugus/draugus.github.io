import { ApplePrice } from "../type";

export const APPLE_PRICE: ApplePrice[] = [
    {
        device: '20W USB-C 电源适配器',
        price: 149,
        lowest: 106.3,
    }, {
        device: 'MagSafe 充电器',
        price: 329,
        lowest: 254.2,
    }, {
        device: 'USB-C 转闪电连接线 (1 米)',
        price: 145,
        lowest: 145,
    }, {
        device: '20W USB-C 电源适配器 + USB-C 转闪电连接线 (1 米)',
        price: 294,
        lowest: 240,
    }, {
        device: '20W USB-C 电源适配器 + MagSafe 充电器',
        price: 478,
        lowest: 360,
    }, {
        device: 'iPhone 13 256G',
        price: [6799, 6299],
        lowest: 5448,
        discountDate: new Date('2022/06/18'),
    }, {
        device: 'iPhone 15 pro max 256G',
        price: 9999,
        lowest: 7706.4,
        discountDate: new Date('2024/06/18'),
    }, {
        device: 'iPhone 15 pro 512G',
        price: 10999,
        lowest: 8852.5,
        discountDate: new Date('2024/06/18'),
    }, {
        device: '',
        price: 0,
        lowest: 0,
    },
]