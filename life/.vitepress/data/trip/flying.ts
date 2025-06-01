import { Flying } from "../../type";
import { modifyDate, setTripSidebar } from "../../utils";

const dataFlying: Flying[] = [
    { date: new Date('2025/05/27') },
];

const linkPrefix = '/trip/flying/';
export const linkModified = (date: Date) => linkPrefix + modifyDate(date).replace(/\//g, '');

export const sortedLastFlying = [...dataFlying].sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    return 0;
});

export const setFlyingSidebar = setTripSidebar(sortedLastFlying, linkModified);
