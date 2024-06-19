import { Flight } from "../../type";

export const FLIGHT_DATA: Flight[] = [
    {
        date: new Date('2024/06/10'),
        number: 'CZ8681',
        airplane: {
            model: '波音737-800(WL)',
            number: 'B1405'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        departureTime: new Date('2024-06-10T12:53:00'),
        departureAirport: 'CGO',
        duration: 107,
        distance: 1220,
        arrivalTime: new Date('2024-06-10T14:40:00'),
        arrivalAirport: 'KWL',
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 70
        }
    }, {
        // TEMP DATA
        date: new Date('2024/06/10'),
        number: 'CZ8681',
        airplane: {
            model: '波音737-800(WL)',
            number: 'B1405'
        },
        airlineCode: 'CZ',
        seatClass: 'R',
        departureTime: new Date('2024-06-10T12:53:00'),
        departureAirport: 'PEK',
        duration: 107,
        distance: 1220,
        arrivalTime: new Date('2024-06-10T14:40:00'),
        arrivalAirport: 'NGB',
        price: {
            ticketPrice: 20,
            airportConstructionFee: 50,
            fuelSurcharge: 70
        }
    },
];