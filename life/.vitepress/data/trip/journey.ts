import { CardData, CardLink, Journey } from "../../type";
import { modifyDate, modifyDate1, setTripSidebar } from "../../utils";

const dataJourney: Journey[] = [
    { date: new Date('2024/10/19') },
    { date: new Date('2024/02/14') },
    { date: new Date('2024/09/11') },
    { date: new Date('2024/10/15') },
    { date: new Date('2024/10/05') },
    { date: new Date('2023/09/30') },
    { date: new Date('2024/10/01') },
    { date: new Date('2023/06/22') },
    { date: new Date('2023/10/06') },
    { date: new Date('2024/05/13') },
    { date: new Date('2023/06/26') },
    { date: new Date('2024/09/17') },
    { date: new Date('2024/02/07') },
    { date: new Date('2023/10/19') },
    { date: new Date('2024/01/01') },
    { date: new Date('2025/05/27') },
    { date: new Date('2025/06/20') },
    { date: new Date('2025/06/26') },
    { date: new Date('2025/06/16') },
    { date: new Date('2025/06/13') },
    { date: new Date('2025/06/30') },
    { date: new Date('2025/04/24') },
    { date: new Date('2025/01/26') },
    { date: new Date('2025/06/08') },
    { date: new Date('2025/05/18') },
    { date: new Date('2025/05/17') },
    { date: new Date('2025/04/27') },
];

const linkPrefix = '/trip/journey/';
export const linkJourney = (date: Date) => linkPrefix + modifyDate(date).replace(/\//g, '');

export const sortedLastJourney = [...dataJourney].sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
});

export const setJourneySidebar = setTripSidebar(sortedLastJourney, linkJourney)

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