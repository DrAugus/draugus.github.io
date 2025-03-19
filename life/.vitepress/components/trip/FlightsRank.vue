<template>
    <div v-if="isVisible" class="modal-overlay" @click="emitClose">
        <div class="modal-content hide-scrollbar" @click.stop v-if="rank">
            <el-container>
                <el-header>
                    <h3>
                        {{ rank.title }}
                    </h3>
                </el-header>
                <el-main>
                    <FlightsBar v-for="(v, i) in rank.details" :rankIndex="i" :name="v.text" :times="v.times"
                        :timesMax="maxTimes" :color="rank.progressColor" />
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ElContainer, ElHeader, ElMain } from 'element-plus';
import { FlightRank } from '../../type';
import FlightsBar from './FlightsBar.vue';

const props = defineProps<{
    isVisible: boolean,
    rank: FlightRank | undefined,
}>();

let maxTimes = 0;
if (props.rank && props.rank.details.length) {
    const det = props.rank.details;
    maxTimes = det.reduce((max, current) => current.times > max ? current.times : max, det[0].times);
}

const emit = defineEmits<{
    (e: 'close'): void;
}>();

const emitClose = () => {
    emit('close');
};
</script>

<style scoped>
.flight-tag {
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    background-color: #f0f0f0;
    cursor: pointer;
    width: 200px;
    text-align: left;
}

.flight-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
}

.flight-date {
    display: inline-block;
    width: 70px;
    text-align: right;
    align-content: center;
    justify-content: center;
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
    padding: 5px;
    border-radius: 10px;
    max-width: 80%;
    max-height: 80%;
    overflow-y: auto;
}

.flight-item {
    width: 100%;
    display: flex;
    gap: 5px;
}

@media (min-width: 630px) {
    .flight-item {
        /* 减去 gap */
        width: calc(50% - 5px);
    }
}

@media (min-width: 960px) {
    .flight-item {
        width: 100%;
    }
}

@media (min-width: 975px) {
    .flight-item {
        /* 减去 gap */
        width: calc(50% - 5px);
    }
}

/* 270px date + label */
@media (min-width: 1258px) {
    .flight-item {
        /* 减去 gap */
        width: calc(33% - 5px);
    }
}

/* 适用于 Chrome、Safari 和 Opera */
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

/* 适用于 IE 和 Edge */
.hide-scrollbar {
    -ms-overflow-style: none;
}

/* 适用于 Firefox */
.hide-scrollbar {
    scrollbar-width: none;
}
</style>