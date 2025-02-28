<template>

    <div class="flight-item">

        <span class="flight-date">{{ modifyDate1(flight.date) }}</span>

        <div class="flight-tag" @click="emitShowDetails">
            <div class="flight-info">
                <div class="flight-title">
                    <img :src="`/img/trip/airline/${flight.airlineCode}.svg`" alt="airline-logo" class="airline-logo"
                        width="20px" />
                    <span class="airline-name">{{ getAirlineZhAbbrByIata(flight.airlineCode) }}</span>
                    <span class="flight-number">{{ flight.number }}</span>
                </div>
                <div class="flight-departure">
                    <span class="flight-time">
                        {{ modifyTime(flight.departure.plannedTime) }}
                    </span>
                    <span class="flight-airport"> {{ flight.departure.airport }}
                        <span v-if="flight.departure.terminal">{{ `T${flight.departure.terminal}` }} </span>
                    </span>
                </div>
                <div class="flight-arrival">
                    <span class="flight-time">{{ modifyTime(flight.arrival.plannedTime) }}
                    </span>
                    <span class="flight-airport"> {{ flight.arrival.airport }}
                        <span v-if="flight.arrival.terminal">{{ `T${flight.arrival.terminal}` }}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import { modifyDate1, modifyTime } from "../../utils";
import { Flight } from '../../type';
import { getAirlineZhAbbrByIata } from '../../data/trip/airlines';

const props = defineProps<{
    flight: Flight
}>();

const emit = defineEmits<{
    (e: 'show-details', key: string): void;
}>();

const combineKey = `${props.flight.departure.airport}-${props.flight.arrival.airport}-${props.flight.number}-${props.flight.date.getTime()}`;
const emitShowDetails = () => {
    emit('show-details', combineKey);
};
</script>


<style scoped>
.flight-tag {
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    background-color: #f0f0f0;
    cursor: pointer;
}

.flight-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
}

.flight-date {
    display: inline-block;
    width: 140px;
    text-align: right;
}

.flight-info {
    width: 200px;
    text-align: left;
}

.flight-departure {
    display: flex;
    gap: 5px;
}

.flight-arrival {
    display: flex;
    gap: 5px;
}

.flight-time {
    width: 45px;
    text-align: left;
}

.flight-airport {
    text-align: left;
}



.airline-logo {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

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
    padding: 20px;
    border-radius: 10px;
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto;
}

.flight-item {
    width: 100%;
}

@media (min-width: 768px) {
    .flight-item {
        /* 减去 gap */
        width: calc(50% - 10px);
    }
}
</style>