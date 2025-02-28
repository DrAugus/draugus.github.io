<template>
    <h2>历史行程</h2>

    <div class="flight-list">
        <FlightsLabel v-for="flight in sortedFlightData" :key="setKey(flight)" :flight="flight"
            @show-details="handleShowDetails(setKey(flight))" />
    </div>

    <!-- 模态框组件应该在父组件中渲染 -->
    <FlightsModalDetails v-for="(isVisible, key) in visibleFlightDetails" :key="key" :is-visible="isVisible"
        :flight="findFlightByNumber(key)" @close="handleCloseDetails(key)" />

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FLIGHT_DATA } from '../../data/trip/flight';
import { Flight } from '../../type';
import FlightsLabel from './FlightsLabel.vue';
import FlightsModalDetails from './FlightsModalDetails.vue';

const sortedFlightData = FLIGHT_DATA.sort((a, b) => b.date.getTime() - a.date.getTime());

const visibleFlightDetails = ref<Record<string, boolean>>({});

const handleShowDetails = (key: string) => {
    visibleFlightDetails.value[key] = true;
};

const handleCloseDetails = (key: string) => {
    visibleFlightDetails.value[key] = false;
};

const setKey = (flight: Flight) => {
    return `${flight.departure.airport}-${flight.arrival.airport}-${flight.number}-${flight.date.getTime()}`;
};

const findFlightByNumber = (key: string): Flight | undefined => {
    return sortedFlightData.find(flight => {
        let combineKey = setKey(flight);
        return combineKey === key;
    });
};

</script>

<style scoped>
.flight-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px;
}
</style>