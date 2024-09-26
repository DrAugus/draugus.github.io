import { Flight } from "../../type";

export const FLIGHT_DATA: Flight[] = [
    {
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