<template>
    <h2>限时活动</h2>
    <div v-for="event in filteredEvents" :key="event.name">
        <div>
            <span class="self-badge" :style="setBackgroundColor(getGameThemeColor(event.game))">
                {{ getGameName(event.game) }}</span>
            <img class="VPImage" :src="'/logo/' + getGameIcon(event.game)" width="15px" height="15px" alt="">
            <span :class="event.completed ? 'deleted-text' : ''">
                {{ event.name }}
                <span v-if="event.description">({{ event.description }})</span>
                <span v-if="event.reward"> ，可以获取
                    {{ event.reward + getGameItemName(event.game, GachaCurrencyItems.Diamond) }}</span>
                ，还有
                <Timer :endTime="event.end" :dayWarningLv1="3" :dayWarningLv2="7" />
                结束
            </span>
            <span v-if="event.completed">✅</span>
        </div>
        <img v-if="event.image" :src="event.image" alt="Event Background" />
    </div>

    <h2>常驻活动</h2>
    <div v-for="event in PermanentEvents" :key="event.name">
        <div>
            <span class="self-badge" :style="setBackgroundColor(getGameThemeColor(event.game))">
                {{ getGameName(event.game) }}</span>
            <img class="VPImage" :src="'/logo/' + getGameIcon(event.game)" width="15px" height="15px" alt="">
            <span :class="event.completed ? 'deleted-text' : ''">
                {{ event.name }}
                <span v-if="event.description">({{ event.description }})</span>
                <span v-if="event.reward"> ，可以获取
                    {{ event.reward + getGameItemName(event.game, GachaCurrencyItems.Diamond) }}</span>
                ，还有
                <Timer :endTime="event.end" :dayWarningLv1="3" :dayWarningLv2="7" />
                结束
            </span>
            <span v-if="event.completed">✅</span>
        </div>
        <img v-if="event.image" :src="event.image" alt="Event Background" />
    </div>

</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { EVENTS, PERMANENT_EVENTS } from './event';
import Timer from './Timer.vue';
import { getGameIcon, getGameName, getGameThemeColor, setBackgroundColor, getGameItemName, GachaCurrencyItems, compareTimeParts, getPreviousMonthSameDay, getNextMonthSameDay } from './utils';
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

// 是否在现在之前，如果是则返回 true
const isBeforeNow = (date: Date) => now >= date;


function handlePermanent() {
    let resPermanent: any = [];
    const msNow = now.getTime();
    PERMANENT_EVENTS.forEach(event => {
        let tmp = {
            name: event.name,
            description: event.description,
            image: event.image,
            start: new Date(),
            end: new Date(),
            reward: event.reward,
            game: event.game,
        }

        const dateFirst = new Date(event.first);
        const msFirst = dateFirst.getTime();
        const msDiff = msNow - msFirst;
        const msBackspace = event.backspace * 1000;

        if (event.duration.unit === 'day') {
            const msDuration = event.duration.value * 24 * 60 * 60 * 1000;
            const a = msDiff % msDuration;
            tmp.start = new Date(msNow - a);
            tmp.end = new Date(msNow - a + msDuration - msBackspace);

            if (isBeforeNow(tmp.start)) {
                resPermanent.push(tmp);
            }
        } else if (event.duration.unit === 'month') {
            // TODO
            if (event.duration.value != 1) {
                return;
            }

            const dayFirst = dateFirst.getDate();
            const dayNow = now.getDate();
            if (dayNow === dayFirst) {
                // 如果现在早于开始的时间，就用上个月的
                if (compareTimeParts(now, dateFirst) === -1) {
                    const previousMonthDate = getPreviousMonthSameDay(now);
                    // 给初始值，保证时分秒一致
                    tmp.start = dateFirst;
                    // 而后修改年月日
                    tmp.start.setFullYear(previousMonthDate.getFullYear(), previousMonthDate.getMonth(), previousMonthDate.getDate());
                    tmp.end = getNextMonthSameDay(tmp.start);
                    tmp.end = new Date(tmp.end.getTime() - msBackspace);
                } else {
                    tmp.start = dateFirst;
                    tmp.start.setFullYear(now.getFullYear(), now.getMonth(), now.getDate());
                    tmp.end = getNextMonthSameDay(tmp.start);
                    tmp.end = new Date(tmp.end.getTime() - msBackspace);
                }
                resPermanent.push(tmp);
            } else if (dayNow > dayFirst) {
                tmp.start = dateFirst;
                tmp.start.setFullYear(now.getFullYear(), now.getMonth());
                tmp.end = getNextMonthSameDay(tmp.start);
                tmp.end = new Date(tmp.end.getTime() - msBackspace);
                resPermanent.push(tmp);
            } else if (dayNow < dayFirst) {
                const previousMonthDate = getPreviousMonthSameDay(now);
                tmp.start = dateFirst;
                tmp.start.setFullYear(previousMonthDate.getFullYear(), previousMonthDate.getMonth());
                tmp.end = getNextMonthSameDay(tmp.start);
                tmp.end = new Date(tmp.end.getTime() - msBackspace);
                resPermanent.push(tmp);
            }
        }
    })

    return resPermanent.sort((a, b) => {
        const endA = new Date(a.end);
        const endB = new Date(b.end);
        return endA.getTime() - endB.getTime();
    });;
}

const PermanentEvents = handlePermanent();
// console.log(PermanentEvents);
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

.deleted-text {
    text-decoration: line-through;
}
</style>