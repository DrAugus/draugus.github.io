<template>
    <h2>旅行航线图</h2>

    <EChartsModel :option="option" />

</template>

<script setup lang="ts">
import EChartsModel from "../EChartsMapModel.vue";
import { FLIGHT_DATA } from '../../data/trip/flight';
import { mapAirportsByAbbrZH } from '../../data/trip/airports';

const planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

interface Edge {
    fromName: string,
    toName: string,
    coords: number[][],
    date: Date,
}

interface infoMark {
    name: string,
    airport: string,
    coord: number[],
}

let arrInfo: infoMark[] = []
let countAirport = new Map();
let yearFlight: Map<number, number> = new Map();
const myEdge: Edge[] = FLIGHT_DATA.reduce((res: Edge[], item) => {

    if (!item.departure || !item.arrival) { return res; }

    const itemDepAirport = item.departure.airport;
    const itemArrAirport = item.arrival.airport;

    const depAirport = mapAirportsByAbbrZH[itemDepAirport];
    const arrAirport = mapAirportsByAbbrZH[itemArrAirport];

    countAirport.set(itemDepAirport, (countAirport.get(itemDepAirport) || 0) + 1);
    countAirport.set(itemArrAirport, (countAirport.get(itemArrAirport) || 0) + 1);

    const depCoord: number[] = [depAirport.longitude, depAirport.latitude]
    const arrCoord: number[] = [arrAirport.longitude, arrAirport.latitude]

    const year = item.date.getFullYear();
    yearFlight.set(year, (yearFlight.get(year) || 0) + 1)

    res.push({
        fromName: depAirport.city,
        toName: arrAirport.city,
        coords: [depCoord, arrCoord],
        date: item.date,
    })

    arrInfo.push({
        name: arrAirport.city,
        airport: itemArrAirport,
        coord: arrCoord
    })
    arrInfo.push({
        name: depAirport.city,
        airport: itemDepAirport,
        coord: depCoord
    })

    return res
}, [] as Edge[])

// console.log(myEdge)
// console.log(countAirport)
// console.log(arrInfo)
// console.log(yearFlight)
arrInfo.forEach((v, i) => {
    if (v.airport) {
        let c = countAirport.get(v.airport)
        v.coord.push(parseInt(c) * 10)
    }
})
// console.log(arrInfo)
let newArrInfo: any[] = []
arrInfo.forEach((v, i) => {
    let obj = {
        name: v.name,
        value: v.coord
    }
    newArrInfo.push(obj)
})

let color = [
    '#a6c84c',
    '#ffa022',
    '#46bee9'
];

// 飞线
const seriesLine1 = (name: string, data: Edge[], index: number) => ({
    name,
    type: 'lines',
    // coordinateSystem: 'geo',
    zlevel: 4,
    effect: {
        show: true,
        period: 6,
        trailLength: 0.7,
        color: '#fff',
        symbolSize: 3
    },
    lineStyle: {
        color: color[index],
        width: 0,
        curveness: 0.2
    },
    data
})
// 飞行轨迹
const seriesLine2 = (name: string, data: Edge[], index: number) => ({
    name,
    type: 'lines',
    // coordinateSystem: 'geo',
    zlevel: 2,
    symbol: ['none', 'arrow'],
    symbolSize: 10,
    effect: {
        show: true,
        period: 6,
        trailLength: 0,
        symbol: planePath,
        symbolSize: 15
    },
    lineStyle: {
        color: color[index],
        width: 1,
        opacity: 0.6,
        curveness: 0.2
    },
    data
})
// 地点标记
const seriesMark = (name: string, data: any[], index: number) => ({
    name,
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
        brushType: 'stroke'
    },
    label: {
        show: true,
        position: 'right',
        formatter: '{b}'
    },
    symbolSize: function (val) {
        return val[2] / 8;
    },
    itemStyle: {
        color: color[index]
    },
    data
})





let series: any[] = [];

yearFlight.forEach((v, k) => {
    let name = k.toString();
    let idx = Math.floor(Math.random() * color.length);
    let filter = myEdge.filter(obj => obj.date.getFullYear() === k);
    series.push(
        seriesLine1(name, filter, idx),
        seriesLine2(name, filter, idx),
        seriesMark(name, newArrInfo, idx)
    );
})

const option = {
    backgroundColor: '#D5DCE5',
    title: {
        // text: '冲冲冲',
        // subtext: '芜湖起飞',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: [...yearFlight.keys()],
        textStyle: {
            color: '#fff'
        },
        // selectedMode: 'single'
    },
    geo: {
        map: 'world',
        show: true,
        label: {
            // show: true
        },
        zoom: 4,
        center: [110, 37],
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        boundingCoords: [
            // 定位左上角经纬度
            [-180, 90],
            // 定位右下角经纬度
            [180, -90]
        ],
        roam: true,
        nameMap: {
            // China: '中国'
        },
        itemStyle: {
            // areaColor: '#32fc48',
            // borderColor: '#404a59'
        },
        emphasis: {
            disabled: true,
            label: {
                show: false
            },
            itemStyle: {
                // areaColor: '#2a333d'
            }
        },
        regions: [
            {
                name: 'Japan',
                itemStyle: {
                    // areaColor: 'red',
                    // color: 'red'
                }
            }
        ]
    },
    series: series
};
</script>
