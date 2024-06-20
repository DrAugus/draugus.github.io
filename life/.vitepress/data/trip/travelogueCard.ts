import { CardData, CardLink, LinkName } from "../../type";
import { modifyDate1 } from "../../utils";
import { linkTravelogue, sortedLastTravelogue } from "./travelogue";

const getTravelogue = (): CardData[] => {

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

export const TRAVELOGUE_DATA: CardData[] = getTravelogue();