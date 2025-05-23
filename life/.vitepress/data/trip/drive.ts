import { DriveInfo } from "../../type";

export const DRIVE_INFO: DriveInfo[] = [
    {
        title: "南京-杭州",
        departure: {
            district: "栖霞区",
            coordinates: {
                longitude: 118.914781,
                latitude: 32.057331,
            },
            time: new Date('2025-05-06T10:29:00+08:00'),
        },
        arrival: {
            district: "拱墅区",
            coordinates: {
                longitude: 120.101955,
                latitude: 30.310836,
            },
            time: new Date('2025-05-06T15:03:00+08:00'),
        },
        waypoint: {
            district: "宜兴市",
            coordinates: {
                longitude: 119.870945,
                latitude: 31.385644,
            },
            time: new Date('2025-05-06T13:06:00+08:00'),
        },
    }, {
        title: "景德镇-南京",
        departure: {
            district: "珠山区",
            coordinates: {
                longitude: 117.215054,
                latitude: 29.310592,
            },
            time: new Date('2025-05-05T16:18:00+08:00'),
        },
        arrival: {
            district: "栖霞区",
            coordinates: {
                longitude: 118.914781,
                latitude: 32.057331,
            },
            time: new Date('2025-05-05T22:40:00+08:00'),
        },
        waypoint: {
            district: "栖霞区",
            coordinates: {
                longitude: 118.958406,
                latitude: 32.11956,
            },
            time: new Date('2025-05-05T22:19:00+08:00'),
        },
    }, {
        title: "广州",
        departure: {
            district: "花都区",
            coordinates: {
                longitude: 113.306731,
                latitude: 23.393702,
            },
            time: new Date('2025-03-14T20:47:00+08:00'),
        },
        arrival: {
            district: "增城区",
            coordinates: {
                longitude: 113.822137,
                latitude: 23.283312,
            },
            time: new Date('2025-03-14T23:37:00+08:00'),
        },
        waypoint: {
            district: "番禺区",
            coordinates: {
                longitude: 113.269132,
                latitude: 22.988378,
            },
            time: new Date('2025-03-14T22:31:00+08:00'),
        },
    }, {
        title: "桂林-吉安",
        departure: {
            district: "七星区",
            coordinates: {
                longitude: 110.323011,
                latitude: 25.243765,
            },
            time: new Date('2025-02-09T19:00:00+08:00'),
        },
        arrival: {
            district: "吉安县",
            coordinates: {
                longitude: 114.907009,
                latitude: 27.041427,
            },
            time: new Date('2025-02-10T04:03:00+08:00'),
        },
        waypoint: {
            district: "全州县",
            coordinates: {
                longitude: 111.10254,
                latitude: 26.010079,
            },
            time: new Date('2025-02-09T21:40:00+08:00'),
        },
    }, {
        title: "吉安-鹰潭",
        departure: {
            district: "吉安县",
            coordinates: {
                longitude: 114.907009,
                latitude: 27.041427,
            },
            time: new Date('2025-02-10T13:13:00+08:00'),
        },
        arrival: {
            district: "月湖区",
            coordinates: {
                longitude: 117.026627,
                latitude: 28.236434,
            },
            time: new Date('2025-02-10T18:23:00+08:00'),
        },
        waypoint: {
            district: "崇仁县",
            coordinates: {
                longitude: 115.973477,
                latitude: 27.476587,
            },
            time: new Date('2025-02-10T14:56:00+08:00'),
        },
    }, {
        title: "鹰潭-杭州",
        departure: {
            district: "月湖区",
            coordinates: {
                longitude: 117.026627,
                latitude: 28.236434,
            },
            time: new Date('2025-02-11T11:50:00+08:00'),
        },
        arrival: {
            district: "拱墅区",
            coordinates: {
                longitude: 120.101955,
                latitude: 30.310836,
            },
            time: new Date('2025-02-11T20:42:00+08:00'),
        },
        waypoint: [
            {
                district: "弋阳县",
                coordinates: {
                    longitude: 117.476547,
                    latitude: 28.345066,
                },
                time: new Date('2025-02-11T13:40:00+08:00'),
            }, {
                district: "广信区",
                coordinates: {
                    longitude: 117.897708,
                    latitude: 28.453911,
                },
                time: new Date('2025-02-11T14:50:00+08:00'),
            }, {
                district: "衢江区",
                coordinates: {
                    longitude: 119.061743,
                    latitude: 29.037773,
                },
                time: new Date('2025-02-11T17:38:00+08:00'),
            },
        ]
    },
]