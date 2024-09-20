import { CardData, CardLink, LinkName, Journey } from "../../type";
import { modifyDate, modifyDate1 } from "../../utils";

const dataJourney: Journey[] = [
    { date: new Date('2024/01/01') },
    { date: new Date('2024/02/14') },
    { date: new Date('2024/02/07') },
    { date: new Date('2023/10/19') },
    { date: new Date('2023/10/06') },
    { date: new Date('2023/09/30') },
    { date: new Date('2023/06/22') },
    { date: new Date('2023/06/26') },
    { date: new Date('2024/09/17') },
];

const linkPrefix = '/trip/journey/';
export const linkJourney = (date: Date) => linkPrefix + modifyDate(date).replace(/\//g, '');

export const sortedLastJourney = [...dataJourney].sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
});

export const setJourneySidebar = () => {
    const result: any[] = [];
    sortedLastJourney.forEach(obj => {
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
            link: linkJourney(obj.date)
        };
        monthItem.items.push(linkName);
    });
    return result;
};

const getJourneyCard = (): CardData[] => {

    const map = new Map<number, CardLink[]>();
    sortedLastJourney.forEach(v => {
        const year = v.date.getFullYear();
        const sDate = modifyDate1(v.date);
        const desc = `${sDate}起始游记`;

        const cardData: CardLink = {
            icon: '',
            title: modifyDate1(v.date),
            // desc,
            link: linkJourney(v.date),
            // date: sDate,
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

export const CARD_JOURNEY_DATA: CardData[] = getJourneyCard();