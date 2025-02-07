<template>
    <div v-for="event in filteredEvents" :key="event.name">
        <div>
            <Badge :text="getGameName(event.game)" :type="getBadgeType(event.game)" /> {{ event.name }}
            <span v-if="event.description">({{ event.description }})</span>，还有
            <Timer :endTime="event.end" />结束
        </div>
        <img v-if="event.image" :src="event.image" alt="Event Background" />
    </div>

</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { EVENTS } from './event';
import Timer from './Timer.vue';
import { getBadgeType, getGameName } from './utils';
// 获取当前日期
const now = new Date();

// 过滤出当前日期的活动并按结束时间排序
const filteredEvents = computed(() => {
    return EVENTS.filter(event => {
        const start = new Date(event.start);
        const end = new Date(event.end);
        return now >= start && now <= end;
    }).sort((a, b) => {
        const endA = new Date(a.end);
        const endB = new Date(b.end);
        return endA.getTime() - endB.getTime();
    });
});



</script>