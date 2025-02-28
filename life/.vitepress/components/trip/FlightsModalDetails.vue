<template>
    <div v-if="isVisible" class="modal-overlay">
        <div class="modal-content" v-if="flight">
            <div class="flight-top">
                <img :src="`/img/trip/airline/${flight.airlineCode}.svg`" alt="airline-logo" class="airline-logo" />
                <span class="font-bold font-18">
                    {{ getAirlineZhAbbrByIata(flight.airlineCode) }} {{ flight.number }}</span>
            </div>
            <div class="flight-label">
                <div class="flight-planned">
                    <span class="font-bold">{{ getAirportInfo(flight) }}</span><br>
                    <span class="font-14">{{ getPlannedTime(flight) }}</span>
                </div>
                <div class="flight-airplane">
                    <span class="font-bold">{{ flight.airplane.model }}</span><br>
                    <span class="font-14">{{ `编号 ${flight.airplane.number}` }}</span>
                </div>
            </div>
            <div class="flight-label">
                <div class="align-left">
                    <span class="font-12">实际起飞</span> <br>
                    <span class="font-bold">{{ modifyTime(flight.departure.actualTime) }}</span>
                </div>
                <div class="align-right">
                    <span class="font-12">实际到达</span> <br>
                    <span class="font-bold">{{ modifyTime(flight.arrival.actualTime) }}</span>
                </div>
            </div>
            <div class="flight-label">
                {{ getDistanceAndDuration(flight) }}
            </div>

            <div class="flight-label" v-if="flight.price">
                <span class="font-12">
                    <span class="font-grey">含税票价</span><span>{{ ` ${getTotalTicketPrice(flight)}` }}</span><br>
                    <span class="font-grey">机票价格</span><span>{{ ` ${getPriceDisplay(flight.price.ticketPrice)}`
                    }}</span><br>
                    <span class="font-grey">民航基金</span><span>{{ `
                        ${getPriceDisplay(flight.price.airportConstructionFee)}` }}</span><br>
                    <span class="font-grey">燃油费</span><span>{{ ` ${getPriceDisplay(flight.price.fuelSurcharge)}`
                    }}</span><br>
                </span>
            </div>

            <div class="flight-label" v-if="flight.seatClass">
                <span class="font-12">
                    <span class="font-grey">舱位</span><span>{{ ` ${flight.seatClass}` }}</span>
                </span>
            </div>


            <button class="close-button" @click="emitClose">关闭</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAirlineZhAbbrByIata } from '../../data/trip/airlines';
import { Flight } from '../../type';
import { modifyDate, modifyTime, secondsFormat } from "../../utils";

const props = defineProps<{
    isVisible: boolean;
    flight?: Flight;
}>();

const emit = defineEmits<{
    (e: 'close'): void;
}>();

const emitClose = () => {
    emit('close');
};

// 成都双流T1-新郑机场T3
function getAirportInfo(flight: Flight) {
    let res = '';
    if (flight.departure.terminal) {
        res += `${flight.departure.airport} T${flight.departure.terminal}`;
    } else {
        res += flight.departure.airport;
    }
    res += ' - ';
    if (flight.arrival.terminal) {
        res += `${flight.arrival.airport} T${flight.arrival.terminal}`;
    } else {
        res += flight.arrival.airport;
    }
    return res;
}
// 计划 xxxx-xx-xx xx:xx-xx:xx
function getPlannedTime(flight: Flight) {
    return `计划${modifyDate(flight.date)} ${modifyTime(flight.departure.plannedTime)}-${modifyTime(flight.arrival.plannedTime)}`;
}
function getDistanceAndDuration(flight: Flight) {
    let msDur = flight.arrival.actualTime.getTime() - flight.departure.actualTime.getTime();
    let durationHours = secondsFormat(Math.floor(msDur / 1000));
    return `里程 ${flight.distance}km | 时长 ${durationHours}`;
}
function getTotalTicketPrice(flight: Flight) {
    if (flight.price) {
        let total = 0;
        if (flight.price.ticketPrice) {
            total += flight.price.ticketPrice;
        }
        if (flight.price.airportConstructionFee) {
            total += flight.price.airportConstructionFee;
        }
        if (flight.price.fuelSurcharge) {
            total += flight.price.fuelSurcharge;
        }
        return `${total}CNY`;
    }
    return `--`;
}
function getPriceDisplay(price: number) {
    let _price = ''
    if (price) {
        _price = `${price}CNY`
    } else {
        _price = '--'
    }
    return _price
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 15px;
    border-radius: 10px;
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto;
}

.close-button {
    margin-top: 8px;
    padding: 3px 5px;
    border: none;
    background-color: #d9534f;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

.close-button:hover {
    background-color: #c9302c;
}

.flight-top {
    display: flex;
    align-items: center;
}

.flight-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flight-planned {
    /* 左边占60% */
    flex: 60%;
    background-color: #f0f0f0;
    padding: 10px;
    /* 包含内边距和边框在宽度内 */
    box-sizing: border-box;
    white-space: nowrap;
    text-align: left;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.flight-airplane {
    flex: 40%;
    background-color: #c0c0c0;
    padding: 10px;
    /* 包含内边距和边框在宽度内 */
    box-sizing: border-box;
    white-space: nowrap;
    text-align: right;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.airline-logo {
    width: 30px;
    height: 30px;
    margin-right: 5px;
}

.font-18 {
    font-size: 18px;
}

.font-14 {
    font-size: 14px;
}

.font-12 {
    font-size: 12px;
}

.font-bold {
    font-weight: bold;
}

.align-left {
    text-align: left;
}

.align-right {
    text-align: right;
}

.font-grey {
    color: grey;
}
</style>