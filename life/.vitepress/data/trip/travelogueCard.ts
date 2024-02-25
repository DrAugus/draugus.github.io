import { CardData, CardLink, LinkName } from "../../type";
import { dataTravelogue } from "./travelogue";

const getTravelogue = (): CardData[] => {
    const sorted = [...dataTravelogue].sort((a, b) => {
        const dateA = a.link.split('/').pop()!;
        const dateB = b.link.split('/').pop()!;
        return Number(dateB) - Number(dateA);
    });

    const map = new Map<string, CardLink[]>();
    sorted.forEach(v => {
        const date = v.link.split('/').pop()!;
        const year = date.slice(0, 4);
        const month = date.slice(4, 6);
        const day = date.slice(6, 8);
        const desc = `${year}年${month}月${day}日起始游记`;

        const cardData: CardLink = {
            icon: '',
            title: v.text,
            desc,
            link: v.link
        };

        const currentYearData = map.get(year) || [];
        currentYearData.push(cardData);
        map.set(year, currentYearData);
    })

    let res: CardData[] = []
    map.forEach((v, k) => {
        res.push({
            title: `${k}年`,
            items: v
        })
    })

    return res
}

export const TRAVELOGUE_DATA: CardData[] = getTravelogue()