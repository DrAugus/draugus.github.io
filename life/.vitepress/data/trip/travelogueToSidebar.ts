import { LinkName } from "../../type";
import { dataTravelogue } from "./travelogue";

export const modifyTravelogue = (): LinkName[] =>
    dataTravelogue
        // .slice(0)
        .reverse()
        .map((v, i) => {
            let arrLink = v.link.split('/');
            if (!v.text.includes(arrLink[arrLink.length - 1])) {
                v.text = arrLink[arrLink.length - 1] + ' ' + v.text;
            }
            return v;
        });
