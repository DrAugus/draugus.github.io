import { CardData, CardLink, LinkName, TravelogueInfo } from "../../type";
import { modifyDate, modifyDate1 } from "../../utils";

const dataTravelogue: TravelogueInfo[] = [
    { title: '长沙', date: new Date('2022/08/10'), city: '长沙' },
    { title: '云南', date: new Date('2022/08/12'), city: ['西双版纳', '昆明', '大理'] },
    { title: '苏州', date: new Date('2022/09/06'), city: '苏州' },
    { title: '南京', date: new Date('2023/02/25'), city: '南京' },
    { title: '上海', date: new Date('2023/03/11'), city: '上海' },
    { title: '舟山', date: new Date('2023/04/15'), city: '舟山' },
    { title: '绍兴', date: new Date('2023/04/22'), city: '绍兴' },
    { title: '港珠澳广深', date: new Date('2023/04/29'), city: ['香港', '澳门', '珠海', '广州', '深圳'] },
    { title: '长春', date: new Date('2023/05/27'), city: '长春' },
    { title: '南宁', date: new Date('2023/06/10'), city: '南宁' },
    { title: '深港珠柳州', date: new Date('2023/06/28'), city: ['深圳', '香港', '珠海', '柳州'] },
    { title: '日本', date: new Date('2023/07/20'), city: ['Tokyo', 'Kyoto', 'Osaka'] },
    { title: '青岛淄博济宁', date: new Date('2023/08/03'), city: ['青岛', '淄博', '济宁'] },
    { title: '南京', date: new Date('2023/08/09'), city: '南京' },
    { title: '桂林', date: new Date('2023/09/02'), city: '桂林' },
    { title: '潮汕地区', date: new Date('2024/04/04'), city: ['香港', '深圳', '广州', '汕头', '潮州'] },
    { title: '海口', date: new Date('2024/04/15'), city: '海口' },
    { title: '贵阳', date: new Date('2024/04/26'), city: '贵阳' },
    { title: '武汉', date: new Date('2024/05/08'), city: '武汉' },
];

const linkPrefix = '/trip/travelogue/';
export const linkTravelogue = (date: Date) => linkPrefix + modifyDate(date).replace(/\//g, '');

export const sortedLastTravelogue = [...dataTravelogue].sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
});

export const setTravelogueSidebar = () => {
    const result: any[] = [];
    sortedLastTravelogue.forEach(travelogue => {
        const year = travelogue.date.getFullYear();
        const month = travelogue.date.getMonth() + 1;
        let yearItem = result.find(item => item.text === `${year}年`);
        if (!yearItem) {
            yearItem = {
                text: `${year}年`,
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
        let day = travelogue.date.getDate();
        let linkName: LinkName = {
            text: `${day}日${travelogue.title}`,
            link: linkTravelogue(travelogue.date)
        };
        monthItem.items.push(linkName);
    });
    return result;
};

export const isEqualCity = (cityA: string, cityB: string) => {
    if (cityA === cityB) { return true; }
    if (cityA.toLowerCase() === cityB.toLowerCase()) { return true; }
    if ((cityA.length < cityB.length && cityB.includes(cityA)) ||
        (cityA.length > cityB.length && cityA.includes(cityB))) {
        return true;
    }
    return false;
};

interface CityLink {
    title: string,
    links: string[],
    date: Date,
}

const travelogueByCity = () => {
    let mapCityDate: Map<string, TravelogueInfo[]> = new Map();
    dataTravelogue.forEach(item => {
        if (Array.isArray(item.city)) {
            item.city.forEach(city => {
                mapCityDate.set(city, (mapCityDate.get(city) || []).concat(item));
            });
        } else {
            mapCityDate.set(item.city, (mapCityDate.get(item.city) || []).concat(item));
        }
    });
    return mapCityDate;
};

export const getCityLink = (city: string, date?: Date) => {
    let dataByCity = travelogueByCity().get(city);
    if (!dataByCity || !dataByCity.length) return [];
    if (date) {
        dataByCity = dataByCity.filter(obj => obj.date.getTime() !== date.getTime());
    }
    return dataByCity;
};

const getTravelogueCard = (): CardData[] => {

    const map = new Map<number, CardLink[]>();
    sortedLastTravelogue.forEach(v => {
        const year = v.date.getFullYear();
        const sDate = modifyDate1(v.date);
        const desc = `${sDate}起始游记`;

        const cardData: CardLink = {
            icon: '',
            title: v.title,
            // desc,
            link: linkTravelogue(v.date),
            date: sDate,
        };

        const currentYearData = map.get(year) || [];
        currentYearData.push(cardData);
        map.set(year, currentYearData);
    });

    let res: CardData[] = [];
    map.forEach((v, k) => {
        res.push({
            title: `${k}年`,
            items: v
        });
    });

    return res;
};

export const CARD_TRAVELOGUE_DATA: CardData[] = getTravelogueCard();