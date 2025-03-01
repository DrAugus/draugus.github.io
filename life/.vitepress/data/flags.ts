import { Flag, FlagMap } from "../type";

// https://icones.js.org/collection/circle-flags
export const FLAGS_DATA: Flag[] = [
    {
        id: "JP",
        name: "日本",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><mask id="circleFlagsJp0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsJp0)"><path fill="#eee" d="M0 0h512v512H0z"/><circle cx="256" cy="256" r="111.3" fill="#d80027"/></g></svg>'
    }, {
        id: "CN",
        name: "中国",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><mask id="circleFlagsCn0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsCn0)"><path fill="#d80027" d="M0 0h512v512H0z"/><path fill="#ffda44" d="m140.1 155.8l22.1 68h71.5l-57.8 42.1l22.1 68l-57.9-42l-57.9 42l22.2-68l-57.9-42.1H118zm163.4 240.7l-16.9-20.8l-25 9.7l14.5-22.5l-16.9-20.9l25.9 6.9l14.6-22.5l1.4 26.8l26 6.9l-25.1 9.6zm33.6-61l8-25.6l-21.9-15.5l26.8-.4l7.9-25.6l8.7 25.4l26.8-.3l-21.5 16l8.6 25.4l-21.9-15.5zm45.3-147.6L370.6 212l19.2 18.7l-26.5-3.8l-11.8 24l-4.6-26.4l-26.6-3.8l23.8-12.5l-4.6-26.5l19.2 18.7zm-78.2-73l-2 26.7l24.9 10.1l-26.1 6.4l-1.9 26.8l-14.1-22.8l-26.1 6.4l17.3-20.5l-14.2-22.7l24.9 10.1z"/></g></svg>',
    }, {
        id: "HK",
        name: "香港",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><mask id="circleFlagsCnHk0"><circle cx="256" cy="256" r="256" fill="#fff"/></mask><g mask="url(#circleFlagsCnHk0)"><path fill="#d80027" d="M0 0h512v512H0z"/><path fill="#eee" d="M282.4 193.7c-5.8 24.2-16.1 19.6-21.2 40.7a55.7 55.7 0 0 1 26-108.3c-10.1 42.2.4 46-4.8 67.6M205 211.6c21.2 13 13.6 21.4 32.1 32.8a55.7 55.7 0 0 1-94.9-58.2c37 22.7 43.8 13.8 62.8 25.4m-7 79.3c19-16.2 24.7-6.4 41.2-20.4a55.7 55.7 0 0 1-84.7 72.2c33-28.2 26.6-37.4 43.6-51.8zm73.4 31c-9.6-23 1.5-25.3-6.8-45.3a55.7 55.7 0 0 1 42.6 102.8c-16.6-40-27.3-36.9-35.8-57.4zm52.2-60c-24.9 2-23.7-9.3-45.3-7.6a55.7 55.7 0 0 1 111-8.7c-43.3 3.4-43.6 14.5-65.7 16.3"/></g></svg>',
    }, {
        id: "",
        name: "",
        svg: '',
    },
]


export const mapFlagsByName: FlagMap = FLAGS_DATA.reduce((obj, item) => {
    const key = item.name;
    if (key) {
        obj[key] = item;
    }
    return obj;
}, {});
