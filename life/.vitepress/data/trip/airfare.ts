import { AirfareInfo } from "../../type";

export const AIRFARE_DATA: AirfareInfo[] = [
    {
        date: new Date("2022/02/05"),
        dateModify: '前',
        costBelow800km: 0,
        costAbove800km: 0,
        taxAirport: 50,
        details: "2022年2月5日前，无燃油附加费"
    }, {
        date: new Date('2022/02/05'),
        dateModify: '起',
        costBelow800km: 10,
        costAbove800km: 20,
        taxAirport: 50,
        details: "2022年2月5日航空公司再次恢复征收国内航线燃油附加费，800公里（含）以下航线每位旅客收取10元燃油附加费，800公里以上航线每位旅客收取20元燃油附加费。"
    }, {
        date: new Date('2022/03/05'),
        dateModify: '起',
        costBelow800km: 20,
        costAbove800km: 40,
        taxAirport: 50,
        details: "2022年3月5日开始调整征收标准，800公里（含）以下航线每位旅客收取20元燃油附加费，800公里以上航线每位旅客收取40元燃油附加费"
    }, {
        date: new Date('2022/04/05'),
        dateModify: '起',
        costBelow800km: 50,
        costAbove800km: 100,
        taxAirport: 50,
        details: "2022年4月5日，燃油附加费调整至超百元时代：800公里（含）以下航线每位旅客收取50元燃油附加费，800公里以上航线每位旅客收取100元。"
    }, {
        date: new Date('2022/05/05'),
        dateModify: '起',
        costBelow800km: 60,
        costAbove800km: 120,
        taxAirport: 50,
        details: "2022年5月5日调整后的标准为：800公里（含）以下航线每位旅客收取60元燃油附加费，800公里以上航线每位旅客收取120元。"
    }, {
        date: new Date('2022/06/05'),
        dateModify: '起',
        costBelow800km: 80,
        costAbove800km: 140,
        taxAirport: 50,
        details: "2022年6月5日，国内航线旅客运输燃油附加费征收标准再度调整，成人旅客800公里（含）以下航线每位旅客收取80元燃油附加费，800公里以上航线每位旅客收取140元。"
    }, {
        date: new Date('2022/07/05'),
        dateModify: '起',
        costBelow800km: 100,
        costAbove800km: 200,
        taxAirport: 50,
        details: "2022年7月5日（出票日期）起，燃油附加费收取标准上调。国内航线燃油附加费收取标准为： 800公里（含）以下航段，每位旅客收取人民币100元；800公里以上航段，每位旅客收取人民币200元。"
    }, {
        date: new Date('2022/08/05'),
        dateModify: '起',
        costBelow800km: 80,
        costAbove800km: 140,
        taxAirport: 50,
        details: "2022年8月5日起下调国内航线燃油附加费收取标准：航线距离800公里(含)以下航线燃油附加每航段收费标准为人民币80元；航线距离800公里以上航线燃油附加每航段收费标准为人民币140元。"
    }, {
        date: new Date('2022/09/05'),
        dateModify: '起',
        costBelow800km: 60,
        costAbove800km: 120,
        taxAirport: 50,
        details: "2022年9月5日起，国内800公里以下航段每位旅客收取燃油附加费60元，800公里以上航段每位旅客收取燃油附加费120元。"
    }, {
        date: new Date('2022/11/05'),
        dateModify: '起',
        costBelow800km: 60,
        costAbove800km: 110,
        taxAirport: 50,
        details: "2022年11月5日（出票日期）起，800公里以上航段降低10元。调整后的国内航线燃油附加费收取标准为：成人旅客，800公里（含）以下航段，每名旅客收取60元；800公里以上航段，每名旅客收取110元。"
    }, {
        date: new Date('2023/01/05'),
        dateModify: '起',
        costBelow800km: 40,
        costAbove800km: 80,
        taxAirport: 50,
        details: "2023年1月5日(出票日期)起，调整国内航班燃油附加费征收标准，800公里及以下航段成人旅客的燃油附加费降至40元，800公里以上航段降至80元。"
    }, {
        date: new Date('2023/04/05'),
        dateModify: '起',
        costBelow800km: 30,
        costAbove800km: 60,
        taxAirport: 50,
        details: "2023年4月5日（含）起销售的客票，航线距离800公里（含）以下航线燃油附加每航段收费标准为人民币30元；航线距离800公里以上航线燃油附加每航段收费标准为人民币60元。"
    }, {
        date: new Date('2023/06/05'),
        dateModify: '起',
        costBelow800km: 20,
        costAbove800km: 30,
        taxAirport: 50,
        details: "2023年6月5日（出票日期）起，成人旅客800公里以下（含）航线每位旅客收取20元燃油附加费，800公里以上航线每位旅客收取30元燃油附加费。"
    }, {
        date: new Date('2023/08/05'),
        dateModify: '起',
        costBelow800km: 30,
        costAbove800km: 60,
        taxAirport: 50,
        details: "2023年8月5日（出票日期）起，成人旅客：800公里以上航线，每位旅客收取60元燃油附加费；800公里（含）以下航线，每位旅客收取30元燃油附加费。这是2023年以来燃油附加费首次上涨，相较调整前分别上涨10元和30元。"
    }, {
        date: new Date('2023/09/05'),
        dateModify: '起',
        costBelow800km: 60,
        costAbove800km: 110,
        taxAirport: 50,
        details: "2023年9月5日（出票日期）起，上调国内航线旅客运输燃油附加费征收标准。成人旅客：800公里（含）以下航线每位旅客收取60元燃油附加费，800公里以上航线每位旅客收取110元。意味着比目前的燃油附加费征收标准分别涨30元和50元，已经接近年初的60/120元。"
    }, {
        date: new Date('2023/10/05'),
        dateModify: '起',
        costBelow800km: 70,
        costAbove800km: 130,
        taxAirport: 50,
        details: "2023年10月5日（出票日期）起，成人旅客：800公里（含）以下航线每位旅客收取70元燃油附加费，800公里以上航线每位旅客收取130元燃油附加费。"
    }, {
        date: new Date('2023/11/05'),
        dateModify: '起',
        costBelow800km: 60,
        costAbove800km: 110,
        taxAirport: 50,
        details: "2023年11月5日（出票日期）起，成人旅客：800公里(含)以下航线每位旅客收取60元燃油附加费，800公里以上航线每位旅客收取110元燃油附加费。机票燃油附加费相较于调整前分别降低了10元和20元。"
    }, {
        date: new Date('2023/12/05'),
        dateModify: '起',
        costBelow800km: 50,
        costAbove800km: 90,
        taxAirport: 50,
        details: "2023年12月5日（出票日期）起，成人旅客：800公里(含)以下航线每位旅客收取50元燃油附加费，800公里以上航线每位旅客收取90元燃油附加费。机票燃油附加费相较于调整前分别降低了10元和20元。"
    }, {
        date: new Date('2024/01/05'),
        dateModify: '起',
        costBelow800km: 40,
        costAbove800km: 70,
        taxAirport: 50,
        details: "2024年1月5日（出票日期）起，成人旅客：800公里(含)以下航线每位旅客收取40元燃油附加费，800公里以上航线每位旅客收取70元燃油附加费，相较于调整前分别降低了10元和20元，机票燃油附加费连续三个月下降。"
    }, {
        date: new Date('2024/06/05'),
        dateModify: '起',
        costBelow800km: 30,
        costAbove800km: 50,
        taxAirport: 50,
        details: "2024年6月5日（出票日期）起，成人旅客：800公里以上航线每位旅客收取50元燃油附加费，800公里（含）以下航线每位旅客收取30元燃油附加费。相较于调整前分别降低了20元和10元。"
    }
]

