<template>
    <h3>1 CNY = {{ num }} JPY</h3>

    <el-input-number v-model="num" :precision="6" :step="0.000001" :min="18" :max="22" />

    <br />
    <span> 输入范围: 18 - 22</span>

    <h3>1 JPY = {{ (1 / num).toFixed(6) }} CNY</h3>

    <p>
        以常见的 1 CNY = 20 JPY 为例，
        1000 CNY = 20,000 JPY, 
        <br/>
        根据您输入的汇率
        <br/>
        您用 1000 CNY 可以兑换到 {{ (1000 * num).toFixed(2) }} JPY，{{ num > 20 ? '多' : '少' }}兑换 {{ (Math.abs(1000 * num - 20000)).toFixed(2) }} JPY。
        <br/>
        您用 20,000 JPY 可以兑换到 {{ (20000 / num).toFixed(2) }} CNY，{{ num < 20 ? '多' : '少' }}兑换 {{ (Math.abs(20000 / num - 1000)).toFixed(2) }} CNY。
    </p>

</template>

<script setup lang="ts">
import { ElRadioButton, ElRadioGroup, ElTable, ElTableColumn, ElTag, ElInputNumber } from 'element-plus';
import { onMounted, ref } from 'vue';
import TitleFormat from '../TitleFormat.vue';

const num = ref(19.5);
</script>