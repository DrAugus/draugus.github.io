<template>
    <h2>行程统计</h2>

    <div class="flight-statistics">
        <div class="flight-statistics-item">
            <div class="box">
                <span>飞行次数</span>
                <span class="font-24">{{ `${totalFlights}次` }}</span>
                <br>
                <span>飞行里程</span>
                <span class="font-24">{{ `${totalMileage}km` }}</span>
                <br>
                <span>飞行时长</span>
                <span class="font-24">{{ totalHours }}</span>
            </div>
        </div>

        <div class="flight-statistics-item">
            <div class="flight-statistics-abstract">
                <div class="top-row">

                    <div class="box flex-row" @click="emitShowRank(rankKeys.region)">
                        <div class="box-top">
                            <span class="font-12 font-grey">大洲</span>
                        </div>
                        <div class="box-bottom">
                            <span class="align-left">
                                <span class="font-24">1</span>
                            </span>
                            <div class="align-right">
                                <div class="circle-list">
                                    <span class="circle font-12">亚洲 </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box flex-row" @click="emitShowRank(rankKeys.region)">
                        <div class="box-top">
                            <span class="font-12 font-grey">国家/地区</span>
                        </div>
                        <div class="box-bottom">
                            <span class="align-left">
                                <span class="font-24">{{ arrFlightRegion.length }}</span>
                            </span>
                            <div class="align-right">
                                <div class="circle-list">
                                    <span class="icon" v-for="(v, i) in arrFlightRegion.slice(0, 2)">
                                        <div v-html="getRegionFlag(v[TimesInfo.Text])"></div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box flex-row" @click="emitShowRank(rankKeys.city)">
                        <div class="box-top">
                            <span class="font-12 font-grey">城市</span>
                        </div>
                        <div class="box-bottom">
                            <span class="align-left">
                                <span class="font-24">{{ arrFlightCity.length }}</span>
                            </span>
                            <div class="align-right">
                                <div class="circle-list">
                                    <span class="circle font-12" v-for="(v, i) in arrFlightCity.slice(0, 2)">
                                        {{ v[TimesInfo.Text] }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-row">

                    <div class="box flex-row" @click="emitShowRank(rankKeys.airport)">
                        <div class="box-top">
                            <span class="align-left">
                                <span class="font-12 font-grey">机场</span> </span>
                            <span class="align-right"> <span class="font-10 align-right label1"> 去过最多</span> </span>
                        </div>
                        <div class="box-bottom">
                            <span class="align-left">
                                <span class="font-24">{{ arrFlightAirport.length }}</span>
                            </span>
                            <span class="align-right">
                                <span class="font-12">{{ arrFlightAirport[0][TimesInfo.Text] }}</span>
                            </span>
                        </div>
                    </div>

                    <div class="box flex-row" @click="emitShowRank(rankKeys.route)">
                        <div class="box-top">
                            <span class="align-left">
                                <span class="font-12 font-grey">航线</span> </span>
                            <span class="align-right"> <span class="font-10 align-right label2"> 飞行最多</span> </span>
                        </div>
                        <div class="box-bottom">
                            <span class="align-left">
                                <span class="font-24">{{ arrFlightRoute.length }}</span>
                            </span>
                            <span class="align-right">
                                <span class="font-12">{{ arrFlightRoute[0][TimesInfo.Text] }}</span>
                            </span>
                        </div>
                    </div>

                </div>
                <div class="bottom-row">

                    <div class="box flex-row" @click="emitShowRank(rankKeys.airline)">
                        <div class="box-top">
                            <span class="align-left">
                                <span class="font-12 font-grey">航司</span> </span>
                            <span class="align-right"> <span class="font-10 align-right label1"> 航司排行</span> </span>
                        </div>
                        <div class="box-bottom">
                            <span class="align-left">
                                <span class="font-24">{{ arrFlightAirline.length }}</span>
                            </span>
                            <span class="align-right">
                                <span class="font-12">{{ arrFlightAirline[0][TimesInfo.Text] }}</span>
                            </span>
                        </div>
                    </div>

                    <div class="box flex-row" @click="emitShowRank(rankKeys.planeModel)">
                        <div class="box-top">
                            <el-text class="align-left w-60px" truncated>
                                <span class="font-12 font-grey">机型(完整型号)</span>
                            </el-text>
                            <el-text class="align-right w-60px" truncated>
                                <span class="font-10 align-right label2">
                                    机型排行</span>
                            </el-text>
                        </div>
                        <div class="box-bottom">
                            <span class="align-left">
                                <span class="font-24">{{ arrFlightAirplaneModel.length }}</span>
                            </span>
                            <span class="align-right">
                                <span class="font-12">{{ arrFlightAirplaneModel[0][TimesInfo.Text] }}</span>
                            </span>
                        </div>
                    </div>

                    <div class="box flex-row" @click="emitShowRank(rankKeys.planeModel2)">
                        <div class="box-top">
                            <span class="align-left">
                                <span class="font-12 font-grey">机型</span> </span>
                            <span class="align-right"> <span class="font-10 align-right label2"> 机型排行</span> </span>
                        </div>
                        <div class="box-bottom">
                            <span class="align-left">
                                <span class="font-24">{{ arrFlightAirplaneModel2.length }}</span>
                            </span>
                            <span class="align-right">
                                <span class="font-12">{{ arrFlightAirplaneModel2[0][TimesInfo.Text] }}</span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>


    <FlightsRank v-for="(isVisible, key) in visibleFlightRank" :key="key" :is-visible="isVisible" :rank="findRank(key)"
        @close="handleCloseRank(key)" />


</template>


<script setup lang="ts">
import { ElText } from 'element-plus';
import { ref } from 'vue';
import { mapFlagsByName } from '../../data/flags';
import { getAirlineZhAbbrByIata } from '../../data/trip/airlines';
import { mapAirportsByAbbrZH } from '../../data/trip/airports';
import { FLIGHT_DATA } from '../../data/trip/flight';
import { CalTimes, Flight, FlightRank } from '../../type';
import FlightsRank from './FlightsRank.vue';

enum TimesInfo {
    Text = 0,
    Times,
}

const rankKeys = {
    region: '洲与国家/地区',
    city: '城市',
    airport: '机场',
    route: '航线',
    airline: '航司',
    planeModel: '机型',
    planeModel2: '机型2',
}

const totalFlights = FLIGHT_DATA.length;
const sortedFlightData = FLIGHT_DATA.sort((a, b) => b.date.getTime() - a.date.getTime());

const visibleFlightRank = ref<Record<string, boolean>>({});

const handleShowRank = (key: string) => {
    visibleFlightRank.value[key] = true;
};

const handleCloseRank = (key: string) => {
    visibleFlightRank.value[key] = false;
};

const emit = defineEmits<{
    (e: 'show-rank', key: string): void;
}>();

const emitShowRank = (key: string) => {
    emit('show-rank', key);
    // console.log("emit------", key);
    handleShowRank(key);
};

// change [string, number][] to CalTimes[]
function timesArrModified(timesInfo: [any, any][]): CalTimes[] {
    let ret: CalTimes[] = [];
    timesInfo.forEach(item => {
        let obj: CalTimes = {
            text: item[TimesInfo.Text],
            times: item[TimesInfo.Times],
        };
        ret.push(obj);
    })
    return ret;
}

function getFlightAirport() {
    let airport = new Map();
    for (let flight of sortedFlightData) {
        let dep = flight.departure.airport;
        let arr = flight.arrival.airport;
        airport.set(dep, (airport.get(dep) || 0) + 1);
        airport.set(arr, (airport.get(arr) || 0) + 1);
    }
    // change to array 
    let arrAirport = Array.from(airport).sort((a, b) => b[TimesInfo.Times] - a[TimesInfo.Times]);
    return arrAirport;
}
const arrFlightAirport = getFlightAirport();
// console.log(arrFlightAirport)

function getFlightCity() {
    let cities = new Map();
    for (let airportTimes of arrFlightAirport) {
        let airport = airportTimes[TimesInfo.Text];
        let times = airportTimes[TimesInfo.Times];
        let city = mapAirportsByAbbrZH[airport].city;
        cities.set(city, (cities.get(city) || 0) + times);
    }
    let arrCities = Array.from(cities).sort((a, b) => b[TimesInfo.Times] - a[TimesInfo.Times]);
    return arrCities;
}
const arrFlightCity = getFlightCity();
// console.log(arrFlightCity);

function getFlightRegion() {
    let regions = new Map();
    for (let airportTimes of arrFlightAirport) {
        let airport = airportTimes[TimesInfo.Text];
        let times = airportTimes[TimesInfo.Times];
        let region = mapAirportsByAbbrZH[airport].region;
        regions.set(region, (regions.get(region) || 0) + times);
    }
    let arrRegions = Array.from(regions).sort((a, b) => b[TimesInfo.Times] - a[TimesInfo.Times]);
    return arrRegions;
}
const arrFlightRegion = getFlightRegion();

function getFlightRoute() {
    let airlines = new Map();
    for (let flight of sortedFlightData) {
        let dep = flight.departure.airport;
        let arr = flight.arrival.airport;
        let cityDep = mapAirportsByAbbrZH[dep].city;
        let cityArr = mapAirportsByAbbrZH[arr].city;
        let key = `${cityDep}-${cityArr}`;
        airlines.set(key, (airlines.get(key) || 0) + 1);
    }
    let arrAirlines = Array.from(airlines).sort((a, b) => b[TimesInfo.Times] - a[TimesInfo.Times]);
    return arrAirlines;
}
const arrFlightRoute = getFlightRoute();

function getAirplaneModel() {
    let model = new Map();
    for (let flight of FLIGHT_DATA) {
        let mod = flight.airplane.model;
        let modified = mod.split('(')[0];

        let key = modified;
        model.set(key, (model.get(key) || 0) + 1);
    }
    let arrModel = Array.from(model).sort((a, b) => b[TimesInfo.Times] - a[TimesInfo.Times]);
    return arrModel;
}
const arrFlightAirplaneModel = getAirplaneModel();
// console.log(arrFlightAirplaneModel);

function getAirplaneModel2() {
    let model = new Map();
    for (let flight of FLIGHT_DATA) {
        let mod = flight.airplane.model;
        let modified = mod.split('(')[0];
        if (modified.indexOf('-') !== -1) {
            modified = modified.split('-')[0];
        }

        let key = modified;
        model.set(key, (model.get(key) || 0) + 1);
    }
    let arrModel = Array.from(model).sort((a, b) => b[TimesInfo.Times] - a[TimesInfo.Times]);
    return arrModel;
}
const arrFlightAirplaneModel2 = getAirplaneModel2();
// console.log(arrFlightAirplaneModel2);

const modelNameZH = ['空客', '波音', '中国商飞', '巴航', '其他'];
function getAirplaneModelName() {
    let model = new Map();
    for (let airplaneModel of arrFlightAirplaneModel) {
        let mod: string = airplaneModel[TimesInfo.Text];
        let times: number = airplaneModel[TimesInfo.Times];
        modelNameZH.forEach(nameZH => {
            if (mod.indexOf(nameZH) !== -1) {
                model.set(nameZH, (model.get(nameZH) || 0) + times);
            }
        })
    }
    let arrModel = Array.from(model).sort((a, b) => b[TimesInfo.Times] - a[TimesInfo.Times]);
    return arrModel;
}
const arrFlightAirplaneModelName = getAirplaneModelName();
// console.log(arrFlightAirplaneModelName);

function getAirline() {
    let airline = new Map();
    for (let flight of FLIGHT_DATA) {
        let al = getAirlineZhAbbrByIata(flight.airlineCode);
        let key = al;
        airline.set(key, (airline.get(key) || 0) + 1);
    }
    let arrAirline = Array.from(airline).sort((a, b) => b[TimesInfo.Times] - a[TimesInfo.Times]);
    return arrAirline;
}
const arrFlightAirline = getAirline();
// console.log(arrFlightAirline);

const customColors = [
    '#f56c6c',
    '#e6a23c',
    '#5cb87a',
    '#1989fa',
    '#6f7ad3',
    '#67c23a',
]

const findRank = (key: string): FlightRank | undefined => {
    let fr: FlightRank = {
        title: '',
        details: [],
    }
    switch (key) {
        case rankKeys.region:
            fr.title = '全球飞行足迹';
            fr.details = timesArrModified(arrFlightRegion);
            fr.progressColor = customColors[0];
            break;
        case rankKeys.city:
            fr.title = '城市足迹';
            fr.details = timesArrModified(arrFlightCity);
            fr.progressColor = customColors[1];
            break;
        case rankKeys.airport:
            fr.title = '机场排行榜';
            fr.details = timesArrModified(arrFlightAirport);
            fr.progressColor = customColors[2];
            break;
        case rankKeys.route:
            fr.title = '航线排行榜';
            fr.details = timesArrModified(arrFlightRoute);
            fr.progressColor = customColors[3];
            break;
        case rankKeys.airline:
            fr.title = '航司排行榜';
            fr.details = timesArrModified(arrFlightAirline);
            fr.progressColor = customColors[4];
            break;
        case rankKeys.planeModel:
            fr.title = '机型排行榜';
            fr.abstract = timesArrModified(arrFlightAirplaneModelName);
            fr.details = timesArrModified(arrFlightAirplaneModel);
            fr.progressColor = customColors[5];
            break;
        case rankKeys.planeModel2:
            fr.title = '机型排行榜';
            fr.abstract = timesArrModified(arrFlightAirplaneModelName);
            fr.details = timesArrModified(arrFlightAirplaneModel2);
            fr.progressColor = customColors[5];
            break;
    }
    if (fr.title === '')
        return undefined;
    return fr;
};

function getRegionFlag(region: string) {
    return mapFlagsByName[region].svg;
}

// 获取毫秒数
function getFlightDuration(flight: Flight) {
    let msDur = flight.arrival.actualTime.getTime() - flight.departure.actualTime.getTime();
    return msDur;
}

const totalMileage = sortedFlightData.reduce((acc, flight) => acc + flight.distance, 0);
const totalMilliseconds = sortedFlightData.reduce((acc, flight) => acc + getFlightDuration(flight), 0);
// 毫秒转为 xx时xx分显示 
function ms2HourAndMin(ms: number) {
    let hour = ms / 1000 / 60 / 60;
    let minute = ms / 1000 / 60 % 60;
    return `${hour.toFixed(0)}时${minute.toFixed(0)}分`;
}
const totalHours = ms2HourAndMin(totalMilliseconds);


</script>

<style scoped>
.flight-statistics {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px;
}

.flight-statistics-item {
    /* display: flex;
    flex-direction: column;
    gap: 5px; */
    width: calc(50% - 10px);
    border-radius: 10px;
    box-sizing: border-box;
}

@media (max-width: 768px) {
    .flight-statistics-item {
        width: calc(100% - 10px);
    }
}

.font-grey {
    color: grey;
}

.font-10 {
    font-size: 10px;
}

.font-12 {
    font-size: 12px;
}

.font-24 {
    font-size: 24px;
}

.flight-statistics-abstract {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

.box {
    width: 80%;
    margin: 3px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #dfdfdf;
    min-width: 120px;
}

.circle-list {
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    width: 60px;
    height: 30px;
    margin: 0 auto;
}

.circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #77d794;
    padding: 3px;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.label1 {
    border-radius: 10px;
    background-color: aquamarine;
    padding: 5px 8px;
}

.label2 {
    border-radius: 10px;
    background-color: lightcoral;
    padding: 5px 8px;
}

.flex-row {
    display: flex;
    flex-direction: column;
}

.top-row {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 3px;
}

.bottom-row {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 3px;
}

.align-left {
    text-align: left;
}

.align-right {
    text-align: right;
}

.box-top {
    display: flex;
    justify-content: space-between;
    /* padding: 10px; */
}

.box-bottom {
    display: flex;
    justify-content: space-between;
    /* padding: 10px; */
}
</style>