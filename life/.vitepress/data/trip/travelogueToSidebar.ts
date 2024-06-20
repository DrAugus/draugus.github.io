import { LinkName } from "../../type";
import { linkTravelogue, sortedLastTravelogue } from "./travelogue";

export const modifyTravelogue = (): LinkName[] =>
    sortedLastTravelogue
        .reduce((res: LinkName[], cur) => {
            res.push({
                text: cur.title,
                link: linkTravelogue(cur.date)
            });
            return res;
        }, [])
        .map((v, i) => {
            let arrLink = v.link.split('/');
            if (!v.text.includes(arrLink[arrLink.length - 1])) {
                v.text = arrLink[arrLink.length - 1] + ' ' + v.text;
            }
            return v;
        });
