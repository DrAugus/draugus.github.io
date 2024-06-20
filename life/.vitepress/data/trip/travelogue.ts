import { TravelogueInfo } from "../../type";
import { modifyDate } from "../../utils";

export const dataTravelogue: TravelogueInfo[] = [
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
    { title: '日本', date: new Date('2023/07/20'), city: ['东京', '大版', '京都'] },
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

export const isEqualCity = (cityA: string, cityB: string) => {
    if (cityA === cityB) {
        return true;
    }
    if ((cityA.length < cityB.length && cityB.includes(cityA)) ||
        (cityA.length > cityB.length && cityA.includes(cityB))) {
        return true;
    }
    return false;
};