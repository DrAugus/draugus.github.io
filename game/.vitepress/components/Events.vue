<template>
    <div v-for="event in filteredEvents" :key="event.name">
        <div>
            <span class="self-badge" :style="setBackgroundColor(getGameThemeColor(event.game))">
                {{ getGameName(event.game) }}</span>
            <img class="VPImage" :src="'/logo/' + getGameIcon(event.game)" width="15px" height="15px" alt="">
            {{ event.name }}
            <span v-if="event.description">({{ event.description }})</span>
            <span v-if="event.reward"> ，可以获取
                {{ event.reward + getGameItemName(event.game, GachaCurrencyItems.Diamond) }}</span>
            ，还有
            <Timer :endTime="event.end" />结束
        </div>
        <img v-if="event.image" :src="event.image" alt="Event Background" />
    </div>

</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { EVENTS } from './event';
import Timer from './Timer.vue';
import { getGameIcon, getGameName, getGameThemeColor, setBackgroundColor, getGameItemName, GachaCurrencyItems } from './utils';
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

<style scoped>
img {
    display: unset;
}

.self-badge {
    display: inline-block;
    margin-left: 2px;
    border: 1px solid transparent;
    border-radius: 12px;
    padding: 0 10px;
    line-height: 22px;
    font-size: 12px;
    font-weight: 500;
    transform: translateY(-2px);
}
</style>