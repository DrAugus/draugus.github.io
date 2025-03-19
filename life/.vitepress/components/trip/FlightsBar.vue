<template>
    <div class="bar-item">

        <el-row class="bar-row">
            <el-col :span="2">
                <div v-if="rankIndex <= 2">
                    <img :src="`/img/rank${rankIndex + 1}.svg`" alt="airline-logo" class="airline-logo" />
                </div>
                <div v-else>
                    <span class="airline-name">{{ rankIndex + 1 }} </span>
                </div>
            </el-col>
            <el-col :span="22">
                <span> {{ name }}</span>
            </el-col>
        </el-row>
        <el-row class="bar-row">
            <el-col :span="20">
                <el-progress :color="color" :percentage="percentage" :show-text="false" :striped="true"
                    :striped-flow="true" />
            </el-col>
            <el-col :span="4">
                <span class="times"> {{ `${times}次` }}</span>
            </el-col>
        </el-row>

    </div>

</template>

<script setup lang="ts">
import { ElCol, ElProgress, ElRow } from 'element-plus';

const props = defineProps<{
    rankIndex: number,
    name: string,
    times: number,  // 航司次数
    timesMax: number,
    color?: string,
}>();

const percentage = props.times / props.timesMax * 100;

</script>

<style scoped>
.bar-item {
    /* width: 300px; */
    gap: 5px;
}

@media (min-width: 630px) {
    .bar-item {
        /* 减去 gap */
        width: calc(50% - 5px);
    }
}

@media (min-width: 960px) {
    .bar-item {
        width: 100%;
    }
}

@media (min-width: 975px) {
    .bar-item {
        /* 减去 gap */
        width: calc(50% - 5px);
    }
}

/* 270px date + label */
@media (min-width: 1258px) {
    .bar-item {
        /* 减去 gap */
        width: calc(33% - 5px);
    }
}

.bar-row {
    min-width: 300px;
}

@media (max-width: 768px) {
    .bar-row {
        min-width: 200px;
    }
}

.airline-name {
    white-space: nowrap;
}

.airline-logo {
    width: 30px;
    height: 30px;
    margin-right: 5px;
}

.el-row {
    margin-bottom: 5px;
}
</style>