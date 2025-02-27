<template>
    <h2>历史行程</h2>

    <div v-for="(v, i) in sortedFlightData">
        {{ modifyDate1(v.date) }} {{ v.departure.airport }} {{ v.arrival.airport }} {{ v.number }}
    </div>

    <div class="flight-list">
        <FlightsLabel v-for="flight in sortedFlightData" :key="setKey(flight)" :flight="flight"
            @show-details="handleShowDetails(setKey(flight))" />
    </div>

    <!-- 模态框组件应该在父组件中渲染 -->
    <FlightsModalDetails v-for="(isVisible, key) in visibleFlightDetails" :key="key" :is-visible="isVisible"
        :flight="findFlightByNumber(key)" @close="handleCloseDetails(key)" />

</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { FLIGHT_DATA } from '../../data/trip/flight';
import FlightsLabel from './FlightsLabel.vue';
import FlightsModalDetails from './FlightsModalDetails.vue';
import { modifyDate1, modifyTime } from "../../utils";
import { Flight } from '../../type';
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

// 使用 computed 属性来过滤出当前可见的航班详细信息，但在这个例子中我们不需要它，
// 因为我们已经在 v-for 循环中直接使用了 visibleFlightDetails。
// 如果你想要基于其他条件过滤航班，你可以在这里创建一个 computed 属性。
</script>

<style scoped>
.flight-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
</style>