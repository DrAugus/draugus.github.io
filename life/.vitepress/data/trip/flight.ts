import { Flight } from "../../type";

export const FLIGHT_DATA: Flight[] = [
    {
        date: new Date('2024-06-08'),
        number: 'CZ8682',
        airplane: {
            model: '波音737-81B',
            number: 'B5021'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1220,
        departure: {
            plannedTime: new Date('2024-06-08T15:40:00'),
            actualTime: new Date('2024-06-08T15:38:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2024-06-08T17:45:00'),
            actualTime: new Date('2024-06-08T17:16:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 70,
        }
    }, {
        date: new Date('2024-09-11'),
        number: 'CZ8682',
        airplane: {
            model: '波音737-81B(WL)',
            number: 'B5698'
        },
        airlineCode: 'CZ',
        seatClass: 'S',
        distance: 1220,
        departure: {
            plannedTime: new Date('2024-09-11T11:30:00'),
            actualTime: new Date('2024-09-11T11:59:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2024-09-11T13:30:00'),
            actualTime: new Date('2024-09-11T14:04:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        price: {
            ticketPrice: 380,
            airportConstructionFee: 50,
            fuelSurcharge: 50,
        }
    }, {
        date: new Date('2024-06-10'),
        number: 'CZ8681',
        airplane: {
            model: '波音737-800(WL)',
            number: 'B1405'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1220,
        departure: {
            plannedTime: new Date('2024-06-10T12:50:00'),
            actualTime: new Date('2024-06-10T12:53:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2024-06-10T15:00:00'),
            actualTime: new Date('2024-06-10T14:40:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 70,
        }
    }, {
        date: new Date('2024-09-14'),
        number: 'HU7454',
        airplane: {
            model: '波音737-84P(WL)',
            number: 'B5855'
        },
        airlineCode: 'HU',
        seatClass: 'N',
        distance: 1043,
        departure: {
            plannedTime: new Date('2024-09-14T09:45:00'),
            actualTime: new Date('2024-09-14T09:57:00'),
            airport: "南阳姜营",
        },
        arrival: {
            plannedTime: new Date('2024-09-14T11:30:00'),
            actualTime: new Date('2024-09-14T11:21:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 470,
            airportConstructionFee: 50,
            fuelSurcharge: 50,
        }
    }, {
        date: new Date('2024-09-17'),
        number: 'MF8329',
        airplane: {
            model: '波音737-85C(WL)',
            number: 'B5750'
        },
        airlineCode: 'MF',
        seatClass: 'Z',
        distance: 1230,
        departure: {
            plannedTime: new Date('2024-09-17T17:30:00'),
            actualTime: new Date('2024-09-17T17:53:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2024-09-17T20:00:00'),
            actualTime: new Date('2024-09-17T19:39:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        price: {
            ticketPrice: 350,
            airportConstructionFee: 50,
            fuelSurcharge: 50,
        }
    }, {
        date: new Date('2024-10-15'),
        number: 'JD5746',
        airplane: {
            model: '空客321-251(N)(X)',
            number: 'B30F1'
        },
        airlineCode: 'JD',
        seatClass: 'T',
        distance: 1230,
        departure: {
            plannedTime: new Date('2024-10-15T22:55:00'),
            actualTime: new Date('2024-10-15T23:02:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2024-10-16T01:10:00'),
            actualTime: new Date('2024-10-16T00:49:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 260,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    }, {
        date: new Date('2024-10-19'),
        number: 'JD5745',
        airplane: {
            model: '空客321-251(N)(X)',
            number: 'B322L'
        },
        airlineCode: 'JD',
        seatClass: 'T',
        distance: 1230,
        departure: {
            plannedTime: new Date('2024-10-19T20:00:00'),
            actualTime: new Date('2024-10-19T20:20:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2024-10-19T22:10:00'),
            actualTime: new Date('2024-10-19T22:17:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        price: {
            ticketPrice: 260,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    }, {
        date: new Date('2024-12-11'),
        number: 'GT1050',
        airplane: {
            model: '空客319-132',
            number: 'B6192'
        },
        airlineCode: 'GT',
        seatClass: 'A',
        distance: 1230,
        departure: {
            plannedTime: new Date('2024-12-11T12:10:00'),
            actualTime: new Date('2024-12-11T12:32:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2024-12-11T14:50:00'),
            actualTime: new Date('2024-12-11T14:58:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        price: {
            ticketPrice: 570,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    }, {
        date: new Date('2025-01-26'),
        number: 'SC8843',
        airplane: {
            model: '波音737-800(WL)',
            number: 'B7668'
        },
        airlineCode: 'SC',
        seatClass: 'T',
        distance: 773,
        departure: {
            plannedTime: new Date('2025-01-26T10:45:00'),
            actualTime: new Date('2025-01-26T10:41:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2025-01-26T12:15:00'),
            actualTime: new Date('2025-01-26T11:52:00'),
            airport: "海口美兰",
            terminal: 1,
        },
        price: {
            ticketPrice: 250,
            airportConstructionFee: 50,
            fuelSurcharge: 15,
        }
    }, {
        date: new Date('2025-01-26'),
        number: 'SC2328',
        airplane: {
            model: '波音737-85P(WL)',
            number: 'B5490'
        },
        airlineCode: 'SC',
        seatClass: 'T',
        distance: 1873,
        departure: {
            plannedTime: new Date('2025-01-26T14:35:00'),
            actualTime: new Date('2025-01-26T14:44:00'),
            airport: "海口美兰",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2025-01-26T17:25:00'),
            actualTime: new Date('2025-01-26T17:07:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        price: {
            ticketPrice: 250,
            airportConstructionFee: 50,
            fuelSurcharge: 15,
        }
    }, {
        date: new Date('2025-02-02'),
        number: 'MU8499',
        airplane: {
            model: '波音737-86D(WL)',
            number: 'B5523'
        },
        airlineCode: 'MU',
        seatClass: 'L',
        distance: 1220,
        departure: {
            plannedTime: new Date('2025-02-02T19:25:00'),
            actualTime: new Date('2025-02-02T19:25:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2025-02-02T21:45:00'),
            actualTime: new Date('2025-02-02T21:26:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        price: {
            ticketPrice: 790,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    }, {
        date: new Date('2025-02-20'),
        number: 'JD5603',
        airplane: {
            model: '空客320-251(N)',
            number: 'B1249'
        },
        airlineCode: 'JD',
        seatClass: 'N',
        distance: 1043,
        departure: {
            plannedTime: new Date('2025-02-20T20:35:00'),
            actualTime: new Date('2025-02-20T20:51:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2025-02-20T22:50:00'),
            actualTime: new Date('2025-02-20T22:39:00'),
            airport: "南阳姜营",
        },
        price: {
            ticketPrice: 470,
            airportConstructionFee: 50,
            fuelSurcharge: 40,
        }
    }, {
        date: new Date('2025-02-23'),
        number: 'JD5604',
        airplane: {
            model: '空客320-214(SL)',
            number: 'B8171'
        },
        airlineCode: 'JD',
        seatClass: 'U',
        distance: 1043,
        departure: {
            plannedTime: new Date('2025-02-23T22:50:00'),
            actualTime: new Date('2025-02-23T23:01:00'),
            airport: "南阳姜营",
        },
        arrival: {
            plannedTime: new Date('2025-02-24T00:50:00'),
            actualTime: new Date('2025-02-24T00:28:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 380,
            airportConstructionFee: 50,
            fuelSurcharge: 40,
        }
    }, {
        date: new Date('2017/02/22'),
        number: 'EU2765',
        airplane: {
            model: '空客320-214B',
            number: 'B8345'
        },
        airlineCode: 'EU',
        seatClass: 'N',
        distance: 1339,
        departure: {
            plannedTime: new Date('2017-02-22T16:15:00'),
            actualTime: new Date('2017-02-22T19:44:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2017-02-22T18:30:00'),
            actualTime: new Date('2017-02-22T21:39:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        price: null
    }, {
        date: new Date('2018/03/30'),
        number: 'MU2164',
        airplane: {
            model: '空客320-214',
            number: 'B2356'
        },
        airlineCode: 'MU',
        seatClass: 'S',
        distance: 1683,
        departure: {
            plannedTime: new Date('2018-03-30T10:05:00'),
            actualTime: new Date('2018-03-30T10:39:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2018-03-30T13:15:00'),
            actualTime: new Date('2018-03-30T13:27:00'),
            airport: "西安咸阳",
            terminal: 3,
        },
        price: null
    }, {
        date: new Date('2018/04/11'),
        number: 'CZ6416',
        airplane: {
            model: '空客321-23BC',
            number: 'B6270'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1683,
        departure: {
            plannedTime: new Date('2018-04-11T23:15:00'),
            actualTime: new Date('2018-04-11T23:22:00'),
            airport: "西安咸阳",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2018-04-12T01:55:00'),
            actualTime: new Date('2018-04-12T01:22:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        price: null
    }, {
        date: new Date('2020/07/27'),
        number: '3U8466',
        airplane: {
            model: '空客321-200',
            number: 'B1890'
        },
        airlineCode: '3U',
        seatClass: 'Q',
        distance: 2346,
        departure: {
            plannedTime: new Date('2020-07-27T18:00:00'),
            actualTime: new Date('2020-07-27T18:25:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2020-07-27T23:10:00'),
            actualTime: new Date('2020-07-28T01:36:00'),
            airport: "成都双流",
            terminal: 1,
        },
        price: {
            ticketPrice: 600,
            airportConstructionFee: 50,
            fuelSurcharge: 0,
        }
    }, {
        date: new Date('2020/10/02'),
        number: 'CZ6402',
        airplane: {
            model: '空客330-300(X)',
            number: 'B300U'
        },
        airlineCode: 'CZ',
        seatClass: 'Z',
        distance: 2346,
        departure: {
            plannedTime: new Date('2020-10-02T13:40:00'),
            actualTime: new Date('2020-10-02T14:59:00'),
            airport: "成都双流",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2020-10-02T17:05:00'),
            actualTime: new Date('2020-10-02T17:37:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        price: {
            ticketPrice: 1000,
            airportConstructionFee: 50,
            fuelSurcharge: 0,
        }
    }, {
        date: new Date('2020/10/04'),
        number: 'CZ6576',
        airplane: {
            model: '波音737-800(WL)',
            number: 'B1405'
        },
        airlineCode: 'CZ',
        seatClass: 'N',
        distance: 1339,
        departure: {
            plannedTime: new Date('2020-10-04T13:05:00'),
            actualTime: new Date('2020-10-04T13:06:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2020-10-04T15:30:00'),
            actualTime: new Date('2020-10-04T15:19:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        price: {
            ticketPrice: 450,
            airportConstructionFee: 50,
            fuelSurcharge: 0,
        }
    }, {
        date: new Date('2020/10/07'),
        number: 'CZ3471',
        airplane: {
            model: '波音787-9',
            number: 'B20CJ'
        },
        airlineCode: 'CZ',
        seatClass: 'E',
        distance: 1039,
        departure: {
            plannedTime: new Date('2020-10-07T12:25:00'),
            actualTime: new Date('2020-10-07T12:49:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2020-10-07T14:30:00'),
            actualTime: new Date('2020-10-07T14:45:00'),
            airport: "成都双流",
            terminal: 2,
        },
        price: {
            ticketPrice: 660,
            airportConstructionFee: 50,
            fuelSurcharge: 0,
        }
    }, {
        date: new Date('2020/11/03'),
        number: '3U8467',
        airplane: {
            model: '空客320-200(N)',
            number: 'B8683'
        },
        airlineCode: '3U',
        seatClass: 'M',
        distance: 2346,
        departure: {
            plannedTime: new Date('2020-11-03T07:00:00'),
            actualTime: new Date('2020-11-03T07:21:00'),
            airport: "成都双流",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2020-11-03T10:20:00'),
            actualTime: new Date('2020-11-03T10:12:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        price: {
            ticketPrice: 500,
            airportConstructionFee: 50,
            fuelSurcharge: 0,
        }
    }, {
        date: new Date('2020/11/06'),
        number: '3U8466',
        airplane: {
            model: '空客319-100',
            number: 'B6175'
        },
        airlineCode: '3U',
        seatClass: 'M',
        distance: 2346,
        departure: {
            plannedTime: new Date('2020-11-06T18:00:00'),
            actualTime: new Date('2020-11-06T18:09:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2020-11-06T23:40:00'),
            actualTime: new Date('2020-11-06T23:19:00'),
            airport: "成都双流",
            terminal: 1,
        },
        price: {
            ticketPrice: 400,
            airportConstructionFee: 50,
            fuelSurcharge: 0,
        }
    }, {
        date: new Date('2021-04-03'),
        number: '3U8911',
        airplane: {
            model: '空客350-900',
            number: 'B304V'
        },
        airlineCode: '3U',
        seatClass: 'N',
        distance: 1699,
        departure: {
            plannedTime: new Date('2021-04-03T06:35:00'),
            actualTime: new Date('2021-04-03T07:01:00'),
            airport: "成都双流",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2021-04-03T09:15:00'),
            actualTime: new Date('2021-04-03T09:06:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 710,
            airportConstructionFee: 50,
            fuelSurcharge: 0,
        }
    }, {
        date: new Date('2021-04-05'),
        number: 'CA4534',
        airplane: {
            model: '空客330-200',
            number: 'B6093'
        },
        airlineCode: 'CA',
        seatClass: 'W',
        distance: 1699,
        departure: {
            plannedTime: new Date('2021-04-05T22:20:00'),
            actualTime: new Date('2021-04-05T23:34:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2021-04-06T01:35:00'),
            actualTime: new Date('2021-04-06T02:06:00'),
            airport: "成都双流",
            terminal: 2,
        },
        price: {
            ticketPrice: 850,
            airportConstructionFee: 50,
            fuelSurcharge: 0,
        }
    }, {
        date: new Date('2021-04-28'),
        number: '3U8911',
        airplane: {
            model: '空客300-300(X)',
            number: 'B308F'
        },
        airlineCode: '3U',
        seatClass: 'R',
        distance: 1699,
        departure: {
            plannedTime: new Date('2021-04-28T06:25:00'),
            actualTime: new Date('2021-04-28T06:29:00'),
            airport: "成都双流",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2021-04-28T09:15:00'),
            actualTime: new Date('2021-04-28T08:38:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 1000,
            airportConstructionFee: 50,
            fuelSurcharge: 0,
        }
    }, {
        date: new Date('2022-02-12'),
        number: 'CZ3746',
        airplane: {
            model: '波音737-800(WL)',
            number: 'B5675'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 841,
        departure: {
            plannedTime: new Date('2022-02-12T17:25:00'),
            actualTime: new Date('2022-02-12T17:18:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2022-02-12T19:20:00'),
            actualTime: new Date('2022-02-12T18:56:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        price: {
            ticketPrice: 220,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    }, {
        date: new Date('2022-02-16'),
        number: 'CZ3939',
        airplane: {
            model: '波音737-800(WL)',
            number: 'B1405'
        },
        airlineCode: 'CZ',
        seatClass: 'Z',
        distance: 841,
        departure: {
            plannedTime: new Date('2022-02-16T18:15:00'),
            actualTime: new Date('2022-02-16T18:22:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2022-02-16T19:50:00'),
            actualTime: new Date('2022-02-16T19:37:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 450,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    }, {
        date: new Date('2022-05-27'),
        number: 'MF8351',
        airplane: {
            model: '波音737-800(WL)',
            number: 'B6818'
        },
        airlineCode: 'MF',
        seatClass: 'R',
        distance: 1661,
        departure: {
            plannedTime: new Date('2022-05-27T18:00:00'),
            actualTime: new Date('2022-05-27T18:08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2022-05-27T20:35:00'),
            actualTime: new Date('2022-05-27T20:30:00'),
            airport: "南宁吴圩",
            terminal: 2,
        },
        price: {
            ticketPrice: 600,
            airportConstructionFee: 50,
            fuelSurcharge: 120,
        }
    }, {
        date: new Date('2022-05-29'),
        number: 'JD5398',
        airplane: {
            model: '空客320-200(N)',
            number: 'B1246'
        },
        airlineCode: 'JD',
        seatClass: 'N',
        distance: 1661,
        departure: {
            plannedTime: new Date('2022-05-29T13:05:00'),
            actualTime: new Date('2022-05-29T13:19:00'),
            airport: "南宁吴圩",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2022-05-29T15:20:00'),
            actualTime: new Date('2022-05-29T15:31:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 650,
            airportConstructionFee: 50,
            fuelSurcharge: 120,
        }
    },
];