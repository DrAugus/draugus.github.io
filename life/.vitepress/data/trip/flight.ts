import { Flight } from "../../type";

export const FLIGHT_DATA: Flight[] = [
    {
        date: new Date('2022-08-12'),
        number: 'EU1842',
        airplane: {
            model: '空客320-214(SL)',
            number: 'B30DX'
        },
        airlineCode: 'EU',
        seatClass: 'I',
        distance: 1556,
        departure: {
            plannedTime: new Date('2022-08-12T13:40:00+08:00'),
            actualTime: new Date('2022-08-12T13:51:00+08:00'),
            airport: "长沙黄花",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2022-08-12T16:05:00+08:00'),
            actualTime: new Date('2022-08-12T15:57:00+08:00'),
            airport: "西双版纳嘎洒",
        },
        price: {
            ticketPrice: 530,
            airportConstructionFee: 50,
            fuelSurcharge: 140,
        }
    }, {
        date: new Date('2022-08-15'),
        number: 'MF8642',
        airplane: {
            model: '波音787-8',
            number: 'B2768'
        },
        airlineCode: 'MF',
        seatClass: 'U',
        distance: 2089,
        departure: {
            plannedTime: new Date('2022-08-15T20:10:00+08:00'),
            actualTime: new Date('2022-08-15T20:36:00+08:00'),
            airport: "昆明长水",
        },
        arrival: {
            plannedTime: new Date('2022-08-15T22:55:00+08:00'),
            actualTime: new Date('2022-08-15T23:04:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 720,
            airportConstructionFee: 50,
            fuelSurcharge: 140,
        }
    }, {
        date: new Date('2023-05-28'),
        number: 'CZ6405',
        airplane: {
            model: '空客321-200',
            number: 'B2280'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 2010,
        departure: {
            plannedTime: new Date('2023-05-28T16:00:00+08:00'),
            actualTime: new Date('2023-05-28T16:23:00+08:00'),
            airport: "长春龙嘉",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2023-05-28T18:55:00+08:00'),
            actualTime: new Date('2023-05-28T18:59:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 60,
        }
    }, {
        date: new Date('2023-05-27'),
        number: 'CZ6546',
        airplane: {
            model: '空客321-231',
            number: 'B2281'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 2010,
        departure: {
            plannedTime: new Date('2023-05-27T11:50:00+08:00'),
            actualTime: new Date('2023-05-27T11:56:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        arrival: {
            plannedTime: new Date('2023-05-27T14:55:00+08:00'),
            actualTime: new Date('2023-05-27T14:23:00+08:00'),
            airport: "长春龙嘉",
            terminal: 2,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 60,
        }
    }, {
        date: new Date('2023-06-22'),
        number: 'CZ6976',
        airplane: {
            model: '波音737-800(WL)',
            number: 'B1285'
        },
        airlineCode: 'CZ',
        seatClass: 'O',
        distance: 1045,
        departure: {
            plannedTime: new Date('2023-06-22T17:05:00+08:00'),
            actualTime: new Date('2023-06-22T17:25:00+08:00'),
            airport: "上海浦东",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2023-06-22T19:10:00+08:00'),
            actualTime: new Date('2023-06-22T19:03:00+08:00'),
            airport: "南阳姜营",
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 30,
        }
    }, {
        date: new Date('2023-06-26'),
        number: 'CZ6975',
        airplane: {
            model: '波音737-81B(WL)',
            number: 'B7969'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1045,
        departure: {
            plannedTime: new Date('2023-06-26T13:55:00+08:00'),
            actualTime: new Date('2023-06-26T14:43:00+08:00'),
            airport: "南阳姜营",
        },
        arrival: {
            plannedTime: new Date('2023-06-26T16:00:00+08:00'),
            actualTime: new Date('2023-06-26T16:11:00+08:00'),
            airport: "上海浦东",
            terminal: 2,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 30,
        }
    }, {
        date: new Date('2023-06-28'),
        number: 'CZ3570',
        airplane: {
            model: '空客321-253(N)',
            number: 'B303H'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1179,
        departure: {
            plannedTime: new Date('2023-06-28T12:10:00+08:00'),
            actualTime: new Date('2023-06-28T12:16:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        arrival: {
            plannedTime: new Date('2023-06-28T14:25:00+08:00'),
            actualTime: new Date('2023-06-28T14:05:00+08:00'),
            airport: "深圳宝安",
            terminal: 3,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 30,
        }
    }, {
        date: new Date('2023-05-03'),
        number: 'CZ3365',
        airplane: {
            model: '空客321-253(N)',
            number: 'B303H'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1179,
        departure: {
            plannedTime: new Date('2023-05-03T21:00:00+08:00'),
            actualTime: new Date('2023-05-03T21:06:00+08:00'),
            airport: "深圳宝安",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2023-05-03T23:10:00+08:00'),
            actualTime: new Date('2023-05-03T22:44:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 60,
        }
    }, {
        date: new Date('2023-07-20'),
        number: 'HX129',
        airplane: {
            model: '空客320-214(SL)',
            number: 'BLPO'
        },
        airlineCode: 'HX',
        seatClass: 'T',
        distance: 1091,
        departure: {
            plannedTime: new Date('2023-07-20T08:35:00+08:00'),
            actualTime: new Date('2023-07-20T08:45:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        arrival: {
            plannedTime: new Date('2023-07-20T10:55:00+08:00'),
            actualTime: new Date('2023-07-20T10:32:00+08:00'),
            airport: "香港国际",
            terminal: 1,
        },
        price: null
    }, {
        date: new Date('2023-07-20'),
        number: 'HX610',
        airplane: {
            model: '空客320-214',
            number: 'BLPJ'
        },
        airlineCode: 'HX',
        seatClass: 'T',
        distance: 2933,
        departure: {
            plannedTime: new Date('2023-07-20T15:30:00+08:00'),
            actualTime: new Date('2023-07-20T15:39:00+08:00'),
            airport: "香港国际",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2023-07-20T20:55:00+09:00'),
            actualTime: new Date('2023-07-20T20:46:00+09:00'),
            airport: "东京成田",
            terminal: 1,
        },
        price: null
    }, {
        date: new Date('2024-04-04'),
        number: 'CZ3502',
        airplane: {
            model: '波音737 MAX 8',
            number: 'B1176'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1099,
        departure: {
            plannedTime: new Date('2024-04-04T18:35:00+08:00'),
            actualTime: new Date('2024-04-04T21:34:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        arrival: {
            plannedTime: new Date('2024-04-04T20:45:00+08:00'),
            actualTime: new Date('2024-04-04T23:37:00+08:00'),
            airport: "广州白云",
            terminal: 2,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 70,
        }
    }, {
        date: new Date('2023-04-29'),
        number: 'CZ3804',
        airplane: {
            model: '空客320-214',
            number: 'B6682'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1099,
        departure: {
            plannedTime: new Date('2023-04-29T12:35:00+08:00'),
            actualTime: new Date('2023-04-29T15:11:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        arrival: {
            plannedTime: new Date('2023-04-29T14:55:00+08:00'),
            actualTime: new Date('2023-04-29T17:04:00+08:00'),
            airport: "广州白云",
            terminal: 2,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 80,
        }
    }, {
        date: new Date('2024-04-10'),
        number: 'CZ5107',
        airplane: {
            model: '波音737-81B(WL)',
            number: 'B5837'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 930,
        departure: {
            plannedTime: new Date('2024-04-10T13:20:00+08:00'),
            actualTime: new Date('2024-04-10T13:14:00+08:00'),
            airport: "揭阳潮汕",
        },
        arrival: {
            plannedTime: new Date('2024-04-10T15:05:00+08:00'),
            actualTime: new Date('2024-04-10T14:36:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 70,
        }
    }, {
        date: new Date('2024-04-15'),
        number: 'CZ8208',
        airplane: {
            model: '空客320-232',
            number: 'B6653'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1606,
        departure: {
            plannedTime: new Date('2024-04-15T21:55:00+08:00'),
            actualTime: new Date('2024-04-15T22:09:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        arrival: {
            plannedTime: new Date('2024-04-16T00:45:00+08:00'),
            actualTime: new Date('2024-04-16T00:41:00+08:00'),
            airport: "海口美兰",
            terminal: 2,
        },
        price: {
            ticketPrice: 150,
            airportConstructionFee: 50,
            fuelSurcharge: 70,
        }
    }, {
        date: new Date('2024-04-18'),
        number: 'CZ8631',
        airplane: {
            model: '空客320-232',
            number: 'B6976'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 460,
        departure: {
            plannedTime: new Date('2024-04-18T07:35:00+08:00'),
            actualTime: new Date('2024-04-18T07:39:00+08:00'),
            airport: "海口美兰",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2024-04-18T08:40:00+08:00'),
            actualTime: new Date('2024-04-18T08:27:00+08:00'),
            airport: "珠海金湾",
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 40,
        }
    }, {
        date: new Date('2024-04-22'),
        number: 'CZ6381',
        airplane: {
            model: '波音737-81B(WL)',
            number: 'B6068'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1538,
        departure: {
            plannedTime: new Date('2024-04-22T14:30:00+08:00'),
            actualTime: new Date('2024-04-22T14:43:00+08:00'),
            airport: "贵阳龙洞堡",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2024-04-22T16:45:00+08:00'),
            actualTime: new Date('2024-04-22T16:33:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 70,
        }
    }, {
        date: new Date('2024-04-26'),
        number: 'CZ8600',
        airplane: {
            model: '波音737-81B(WL)',
            number: 'B5759'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1538,
        departure: {
            plannedTime: new Date('2024-04-26T11:50:00+08:00'),
            actualTime: new Date('2024-04-26T11:58:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        arrival: {
            plannedTime: new Date('2024-04-26T14:40:00+08:00'),
            actualTime: new Date('2024-04-26T14:15:00+08:00'),
            airport: "贵阳龙洞堡",
            terminal: 3,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 70,
        }
    }, {
        date: new Date('2024-05-01'),
        number: 'CZ2190',
        airplane: {
            model: '空客320-232',
            number: 'B6641'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1538,
        departure: {
            plannedTime: new Date('2024-05-01T15:55:00+08:00'),
            actualTime: new Date('2024-05-01T16:35:00+08:00'),
            airport: "贵阳龙洞堡",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2024-05-01T18:20:00+08:00'),
            actualTime: new Date('2024-05-01T18:27:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 70,
        }
    }, {
        date: new Date('2024-05-08'),
        number: 'CZ6198',
        airplane: {
            model: '波音737-800(WL)',
            number: 'B1585'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 656,
        departure: {
            plannedTime: new Date('2024-05-08T13:30:00+08:00'),
            actualTime: new Date('2024-05-08T13:43:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        arrival: {
            plannedTime: new Date('2024-05-08T15:10:00+08:00'),
            actualTime: new Date('2024-05-08T15:04:00+08:00'),
            airport: "武汉天河",
            terminal: 3,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 40,
        }
    }, {
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
            plannedTime: new Date('2024-06-08T15:40:00+08:00'),
            actualTime: new Date('2024-06-08T15:38:00+08:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2024-06-08T17:45:00+08:00'),
            actualTime: new Date('2024-06-08T17:16:00+08:00'),
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
            plannedTime: new Date('2024-09-11T11:30:00+08:00'),
            actualTime: new Date('2024-09-11T11:59:00+08:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2024-09-11T13:30:00+08:00'),
            actualTime: new Date('2024-09-11T14:04:00+08:00'),
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
            plannedTime: new Date('2024-06-10T12:50:00+08:00'),
            actualTime: new Date('2024-06-10T12:53:00+08:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2024-06-10T15:00:00+08:00'),
            actualTime: new Date('2024-06-10T14:40:00+08:00'),
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
            plannedTime: new Date('2024-09-14T09:45:00+08:00'),
            actualTime: new Date('2024-09-14T09:57:00+08:00'),
            airport: "南阳姜营",
        },
        arrival: {
            plannedTime: new Date('2024-09-14T11:30:00+08:00'),
            actualTime: new Date('2024-09-14T11:21:00+08:00'),
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
            plannedTime: new Date('2024-09-17T17:30:00+08:00'),
            actualTime: new Date('2024-09-17T17:53:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2024-09-17T20:00:00+08:00'),
            actualTime: new Date('2024-09-17T19:39:00+08:00'),
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
            plannedTime: new Date('2024-10-15T22:55:00+08:00'),
            actualTime: new Date('2024-10-15T23:02:00+08:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2024-10-16T01:10:00+08:00'),
            actualTime: new Date('2024-10-16T00:49:00+08:00'),
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
            plannedTime: new Date('2024-10-19T20:00:00+08:00'),
            actualTime: new Date('2024-10-19T20:20:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2024-10-19T22:10:00+08:00'),
            actualTime: new Date('2024-10-19T22:17:00+08:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        price: {
            ticketPrice: 260,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    }, {
        date: new Date('2023-09-06'),
        number: 'JD5746',
        airplane: {
            model: '空客321-251(N)(X)',
            number: 'B30F1'
        },
        airlineCode: 'JD',
        seatClass: 'S',
        distance: 1230,
        departure: {
            plannedTime: new Date('2023-09-06T23:10:00+08:00'),
            actualTime: new Date('2023-09-06T23:15:00+08:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2023-09-07T01:15:00+08:00'),
            actualTime: new Date('2023-09-07T01:01:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 260,
            airportConstructionFee: 50,
            fuelSurcharge: 60,
        }
    }, {
        date: new Date('2023-09-02'),
        number: 'JD5745',
        airplane: {
            model: '空客321-251(N)(X)',
            number: 'B30F1'
        },
        airlineCode: 'JD',
        seatClass: 'R',
        distance: 1230,
        departure: {
            plannedTime: new Date('2023-09-02T20:05:00+08:00'),
            actualTime: new Date('2023-09-02T20:14:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2023-09-02T22:25:00+08:00'),
            actualTime: new Date('2023-09-02T22:06:00+08:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        price: {
            ticketPrice: 350,
            airportConstructionFee: 50,
            fuelSurcharge: 60,
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
            plannedTime: new Date('2024-12-11T12:10:00+08:00'),
            actualTime: new Date('2024-12-11T12:32:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2024-12-11T14:50:00+08:00'),
            actualTime: new Date('2024-12-11T14:58:00+08:00'),
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
            plannedTime: new Date('2025-01-26T10:45:00+08:00'),
            actualTime: new Date('2025-01-26T10:41:00+08:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2025-01-26T12:15:00+08:00'),
            actualTime: new Date('2025-01-26T11:52:00+08:00'),
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
            plannedTime: new Date('2025-01-26T14:35:00+08:00'),
            actualTime: new Date('2025-01-26T14:44:00+08:00'),
            airport: "海口美兰",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2025-01-26T17:25:00+08:00'),
            actualTime: new Date('2025-01-26T17:07:00+08:00'),
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
            plannedTime: new Date('2025-02-02T19:25:00+08:00'),
            actualTime: new Date('2025-02-02T19:25:00+08:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2025-02-02T21:45:00+08:00'),
            actualTime: new Date('2025-02-02T21:26:00+08:00'),
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
            plannedTime: new Date('2025-02-20T20:35:00+08:00'),
            actualTime: new Date('2025-02-20T20:51:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2025-02-20T22:50:00+08:00'),
            actualTime: new Date('2025-02-20T22:39:00+08:00'),
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
            plannedTime: new Date('2025-02-23T22:50:00+08:00'),
            actualTime: new Date('2025-02-23T23:01:00+08:00'),
            airport: "南阳姜营",
        },
        arrival: {
            plannedTime: new Date('2025-02-24T00:50:00+08:00'),
            actualTime: new Date('2025-02-24T00:28:00+08:00'),
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
            plannedTime: new Date('2017-02-22T16:15:00+08:00'),
            actualTime: new Date('2017-02-22T19:44:00+08:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2017-02-22T18:30:00+08:00'),
            actualTime: new Date('2017-02-22T21:39:00+08:00'),
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
            plannedTime: new Date('2018-03-30T10:05:00+08:00'),
            actualTime: new Date('2018-03-30T10:39:00+08:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2018-03-30T13:15:00+08:00'),
            actualTime: new Date('2018-03-30T13:27:00+08:00'),
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
            plannedTime: new Date('2018-04-11T23:15:00+08:00'),
            actualTime: new Date('2018-04-11T23:22:00+08:00'),
            airport: "西安咸阳",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2018-04-12T01:55:00+08:00'),
            actualTime: new Date('2018-04-12T01:22:00+08:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        price: null
    }, {
        date: new Date('2019-01-03'),
        number: 'EU2770',
        airplane: {
            model: '空客320-214(SL)',
            number: 'B8878'
        },
        airlineCode: 'EU',
        seatClass: 'N',
        distance: 1339,
        departure: {
            plannedTime: new Date('2019-01-03T19:20:00+08:00'),
            actualTime: new Date('2019-01-03T19:25:00+08:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2019-01-03T21:55:00+08:00'),
            actualTime: new Date('2019-01-03T21:54:00+08:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        price: {
            ticketPrice: 350,
            airportConstructionFee: 50,
            fuelSurcharge: 30,
        }
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
            plannedTime: new Date('2020-07-27T18:00:00+08:00'),
            actualTime: new Date('2020-07-27T18:25:00+08:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2020-07-27T23:10:00+08:00'),
            actualTime: new Date('2020-07-28T01:36:00+08:00'),
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
            plannedTime: new Date('2020-10-02T13:40:00+08:00'),
            actualTime: new Date('2020-10-02T14:59:00+08:00'),
            airport: "成都双流",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2020-10-02T17:05:00+08:00'),
            actualTime: new Date('2020-10-02T17:37:00+08:00'),
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
            plannedTime: new Date('2020-10-04T13:05:00+08:00'),
            actualTime: new Date('2020-10-04T13:06:00+08:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2020-10-04T15:30:00+08:00'),
            actualTime: new Date('2020-10-04T15:19:00+08:00'),
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
            plannedTime: new Date('2020-10-07T12:25:00+08:00'),
            actualTime: new Date('2020-10-07T12:49:00+08:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2020-10-07T14:30:00+08:00'),
            actualTime: new Date('2020-10-07T14:45:00+08:00'),
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
            plannedTime: new Date('2020-11-03T07:00:00+08:00'),
            actualTime: new Date('2020-11-03T07:21:00+08:00'),
            airport: "成都双流",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2020-11-03T10:20:00+08:00'),
            actualTime: new Date('2020-11-03T10:12:00+08:00'),
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
            plannedTime: new Date('2020-11-06T18:00:00+08:00'),
            actualTime: new Date('2020-11-06T18:09:00+08:00'),
            airport: "沈阳桃仙",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2020-11-06T23:40:00+08:00'),
            actualTime: new Date('2020-11-06T23:19:00+08:00'),
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
            plannedTime: new Date('2021-04-03T06:35:00+08:00'),
            actualTime: new Date('2021-04-03T07:01:00+08:00'),
            airport: "成都双流",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2021-04-03T09:15:00+08:00'),
            actualTime: new Date('2021-04-03T09:06:00+08:00'),
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
            plannedTime: new Date('2021-04-05T22:20:00+08:00'),
            actualTime: new Date('2021-04-05T23:34:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2021-04-06T01:35:00+08:00'),
            actualTime: new Date('2021-04-06T02:06:00+08:00'),
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
            plannedTime: new Date('2021-04-28T06:25:00+08:00'),
            actualTime: new Date('2021-04-28T06:29:00+08:00'),
            airport: "成都双流",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2021-04-28T09:15:00+08:00'),
            actualTime: new Date('2021-04-28T08:38:00+08:00'),
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
            plannedTime: new Date('2022-02-12T17:25:00+08:00'),
            actualTime: new Date('2022-02-12T17:18:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2022-02-12T19:20:00+08:00'),
            actualTime: new Date('2022-02-12T18:56:00+08:00'),
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
            plannedTime: new Date('2022-02-16T18:15:00+08:00'),
            actualTime: new Date('2022-02-16T18:22:00+08:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2022-02-16T19:50:00+08:00'),
            actualTime: new Date('2022-02-16T19:37:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 450,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    }, {
        date: new Date('2023-06-10'),
        number: 'CZ3910',
        airplane: {
            model: '波音737-81B(WL)',
            number: 'B5699'
        },
        airlineCode: 'CZ',
        seatClass: 'O',
        distance: 1661,
        departure: {
            plannedTime: new Date('2023-06-10T13:10:00+08:00'),
            actualTime: new Date('2023-06-10T13:12:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        arrival: {
            plannedTime: new Date('2023-06-10T15:55:00+08:00'),
            actualTime: new Date('2023-06-10T15:28:00+08:00'),
            airport: "南宁吴圩",
            terminal: 2,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 60,
        }
    }, {
        date: new Date('2023-06-12'),
        number: 'CZ3757',
        airplane: {
            model: '波音737-81B(WL)',
            number: 'B5699'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1661,
        departure: {
            plannedTime: new Date('2023-06-12T12:10:00+08:00'),
            actualTime: new Date('2023-06-12T12:22:00+08:00'),
            airport: "南宁吴圩",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2023-06-12T14:30:00+08:00'),
            actualTime: new Date('2023-06-12T14:30:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 60,
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
            plannedTime: new Date('2022-05-27T18:00:00+08:00'),
            actualTime: new Date('2022-05-27T18:08:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2022-05-27T20:35:00+08:00'),
            actualTime: new Date('2022-05-27T20:30:00+08:00'),
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
            plannedTime: new Date('2022-05-29T13:05:00+08:00'),
            actualTime: new Date('2022-05-29T13:19:00+08:00'),
            airport: "南宁吴圩",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2022-05-29T15:20:00+08:00'),
            actualTime: new Date('2022-05-29T15:31:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 650,
            airportConstructionFee: 50,
            fuelSurcharge: 120,
        }
    }, {
        date: new Date('2024-05-13'),
        number: 'CZ5889',
        airplane: {
            model: '波音737-86J(WL)',
            number: 'B5586'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        distance: 1661,
        departure: {
            plannedTime: new Date('2024-05-13T17:00:00+08:00'),
            actualTime: new Date('2024-05-13T17:11:00+08:00'),
            airport: "南宁吴圩",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2024-05-13T19:25:00+08:00'),
            actualTime: new Date('2024-05-13T19:18:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 70,
        }
    }, {
        date: new Date('2023-07-27'),
        number: 'HX112',
        airplane: {
            model: '空客320-214',
            number: 'BLPD'
        },
        airlineCode: 'HX',
        seatClass: 'T',
        distance: 1091,
        departure: {
            plannedTime: new Date('2023-07-27T08:40:00+08:00'),
            actualTime: new Date('2023-07-27T09:13:00+08:00'),
            airport: "香港国际",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2023-07-27T10:55:00+08:00'),
            actualTime: new Date('2023-07-27T11:05:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        price: null
    }, {
        date: new Date('2023-07-26'),
        number: 'HX613',
        airplane: {
            model: '空客320-214',
            number: 'BLPE'
        },
        airlineCode: 'HX',
        seatClass: 'T',
        distance: 2491,
        departure: {
            plannedTime: new Date('2023-07-26T23:55:00+09:00'),
            actualTime: new Date('2023-07-27T00:12:00+09:00'),
            airport: "大阪关西",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2023-07-27T03:10:00+08:00'),
            actualTime: new Date('2023-07-27T02:33:00+08:00'),
            airport: "香港国际",
            terminal: 1,
        },
        price: null
    }, {
        date: new Date('2025-03-14'),
        number: 'CZ3512',
        airplane: {
            model: '波音737 MAX 8',
            number: 'B205L'
        },
        airlineCode: 'CZ',
        seatClass: 'X',
        distance: 1099,
        departure: {
            plannedTime: new Date('2025-03-14T16:35:00+08:00'),
            actualTime: new Date('2025-03-14T17:59:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        arrival: {
            plannedTime: new Date('2025-03-14T19:00:00+08:00'),
            actualTime: new Date('2025-03-14T19:50:00+08:00'),
            airport: "广州白云",
            terminal: 2,
        },
        price: {
            isMileage: true,
            ticketPrice: 12000,
            airportConstructionFee: 50,
            fuelSurcharge: 40,
        }
    }, {
        date: new Date('2025-03-16'),
        number: 'MU5216',
        airplane: {
            model: '空客321-211(SL)',
            number: 'B8570'
        },
        airlineCode: 'MU',
        seatClass: 'X',
        distance: 1099,
        departure: {
            plannedTime: new Date('2025-03-16T18:00:00+08:00'),
            actualTime: new Date('2025-03-16T18:17:00+08:00'),
            airport: "广州白云",
            terminal: 1,
        },
        arrival: {
            plannedTime: new Date('2025-03-16T19:55:00+08:00'),
            actualTime: new Date('2025-03-16T19:59:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            isMileage: true,
            ticketPrice: 12000,
            airportConstructionFee: 50,
            fuelSurcharge: 40,
        }
    }, {
        date: new Date('2025-04-24'),
        number: 'HO2045',
        airplane: {
            model: '空客320-214',
            number: 'B6922'
        },
        airlineCode: 'HO',
        seatClass: 'T',
        distance: 1230,
        departure: {
            plannedTime: new Date('2025-04-24T18:40:00+08:00'),
            actualTime: new Date('2025-04-24T19:03:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2025-04-24T21:05:00+08:00'),
            actualTime: new Date('2025-04-24T21:07:00+08:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        price: {
            ticketPrice: 690,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    }, {
        date: new Date('2025-04-27'),
        number: 'JD5746',
        airplane: {
            model: '空客330-243',
            number: 'B1043'
        },
        airlineCode: 'JD',
        seatClass: 'F',
        distance: 1230,
        departure: {
            plannedTime: new Date('2025-04-27T23:15:00+08:00'),
            actualTime: new Date('2025-04-27T23:30:00+08:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2025-04-28T01:10:00+08:00'),
            actualTime: new Date('2025-04-28T01:09:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 320,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    }, {
        date: new Date('2025-05-17'),
        number: 'CZ3840',
        airplane: {
            model: '波音737-81B(WL)',
            number: 'B5446'
        },
        airlineCode: 'CZ',
        seatClass: 'X',
        distance: 841,
        departure: {
            plannedTime: new Date('2025-05-17T15:50:00+08:00'),
            actualTime: new Date('2025-05-17T16:14:00+08:00'),
            airport: "杭州萧山",
            terminal: 4,
        },
        arrival: {
            plannedTime: new Date('2025-05-17T17:40:00+08:00'),
            actualTime: new Date('2025-05-17T17:43:00+08:00'),
            airport: "郑州新郑",
            terminal: 2,
        },
        price: {
            isMileage: true,
            ticketPrice: 6000,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    }, {
        date: new Date('2025-05-24'),
        number: 'HO2045',
        airplane: {
            model: '空客320-214(SL)',
            number: 'B304H'
        },
        airlineCode: 'HO',
        seatClass: 'X',
        distance: 1230,
        departure: {
            plannedTime: new Date('2025-05-24T18:35:00+08:00'),
            actualTime: new Date('2025-05-24T19:02:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        arrival: {
            plannedTime: new Date('2025-05-24T21:05:00+08:00'),
            actualTime: new Date('2025-05-24T21:05:00+08:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        price: {
            ticketPrice: 378,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    }, {
        date: new Date('2025-05-27'),
        number: 'JD5746',
        airplane: {
            model: '空客320-232',
            number: 'B6877'
        },
        airlineCode: 'JD',
        seatClass: 'S',
        distance: 1230,
        departure: {
            plannedTime: new Date('2025-05-27T15:30:00+08:00'),
            actualTime: new Date('2025-05-27T15:38:00+08:00'),
            airport: "桂林两江",
            terminal: 2,
        },
        arrival: {
            plannedTime: new Date('2025-05-27T17:30:00+08:00'),
            actualTime: new Date('2025-05-27T17:19:00+08:00'),
            airport: "杭州萧山",
            terminal: 3,
        },
        price: {
            ticketPrice: 259,
            airportConstructionFee: 50,
            fuelSurcharge: 20,
        }
    },
];