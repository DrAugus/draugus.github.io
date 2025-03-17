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
                    <div class="box flex-row">
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
                    <div class="box flex-row">
                        <div class="box-top">
                            <span class="font-12 font-grey">国家/地区</span>
                        </div>
                        <div class="box-bottom">
                            <span class="align-left">
                                <span class="font-24">{{ flightRegion.length }}</span>
                            </span>
                            <div class="align-right">
                                <div class="circle-list">
                                    <span class="icon" v-for="(v, i) in flightRegion.slice(0, 2)">
                                        <div v-html="getRegionFlag(v[TimesInfo.Text])"></div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box flex-row">
                        <div class="box-top">
                            <span class="font-12 font-grey">城市</span>
                        </div>
                        <div class="box-bottom">
                            <span class="align-left">
                                <span class="font-24">{{ flightCity.length }}</span>
                            </span>
                            <div class="align-right">
                                <div class="circle-list">
                                    <span class="circle font-12" v-for="(v, i) in flightCity.slice(0, 2)">
                                        {{ v[TimesInfo.Text] }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-row">
                    <div class="box flex-row">
                        <div class="box-top">
                            <span class="align-left">
                                <span class="font-12 font-grey">机场</span> </span>
                            <span class="align-right"> <span class="font-10 align-right label1"> 去过最多</span> </span>
                        </div>
                        <div class="box-bottom">
                            <span class="align-left">
                                <span class="font-24">{{ flightAirport.length }}</span>
                            </span>
                            <span class="align-right">
                                <span class="font-12">{{ flightAirport[0][TimesInfo.Text] }}</span>
                            </span>
                        </div>
                    </div>
                    <div class="box flex-row">
                        <div class="box-top">
                            <span class="align-left">
                                <span class="font-12 font-grey">航线</span> </span>
                            <span class="align-right"> <span class="font-10 align-right label2"> 飞行最多</span> </span>
                        </div>
                        <div class="box-bottom">
                            <span class="align-left">
                                <span class="font-24">{{ flightAirline.length }}</span>
                            </span>
                            <span class="align-right">
                                <span class="font-12">{{ flightAirline[0][TimesInfo.Text] }}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>


<script setup lang="ts">
import { mapFlagsByName } from '../../data/flags';
import { mapAirportsByAbbrZH } from '../../data/trip/airports';
import { FLIGHT_DATA } from '../../data/trip/flight';
import { Flight } from '../../type';

enum TimesInfo {
    Text = 0,
    Times,
}

const totalFlights = FLIGHT_DATA.length;
const sortedFlightData = FLIGHT_DATA.sort((a, b) => b.date.getTime() - a.date.getTime());

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
const flightAirport = getFlightAirport();
// console.log(flightAirport)

function getFlightCity() {
    let cities = new Map();
    for (let airportTimes of flightAirport) {
        let airport = airportTimes[0];
        let city = mapAirportsByAbbrZH[airport].city;
        cities.set(city, (cities.get(city) || 0) + 1);
    }
    let arrCities = Array.from(cities).sort((a, b) => b[TimesInfo.Times] - a[TimesInfo.Times]);
    return arrCities;
}
const flightCity = getFlightCity();

function getFlightRegion() {
    let regions = new Map();
    for (let airportTimes of flightAirport) {
        let airport = airportTimes[0];
        let region = mapAirportsByAbbrZH[airport].region;
        regions.set(region, (regions.get(region) || 0) + 1);
    }
    let arrRegions = Array.from(regions).sort((a, b) => b[TimesInfo.Times] - a[TimesInfo.Times]);
    return arrRegions;
}
const flightRegion = getFlightRegion();

function getFlightAirline() {
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
const flightAirline = getFlightAirline();

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