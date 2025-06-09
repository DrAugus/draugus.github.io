<template>
    <h3>年利率日利息</h3>
    <el-input-number v-model="inputAmount" :step="1000" :min="10000">
        <template #suffix>
            <span>元</span>
        </template>
    </el-input-number>
    <el-input-number v-model="inputRate" :precision="2" :step="0.01" :min="0.1">
        <template #suffix>
            <span>%</span>
        </template>
    </el-input-number>
    <table>
        <thead>
            <tr>
                <th>存款金额</th>
                <th>1.0%</th>
                <th class="input-bg-color">{{ inputRate }}%</th>
                <th>4.0%</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
                <td :class="{ 'input-bg-color': index === tableDataLength - 2 }">{{ item[0].toLocaleString() }} 元</td>
                <td :class="{ 'input-bg-color': index === tableDataLength - 2 }">{{ item[1].toLocaleString() }}</td>
                <td class="input-bg-color">{{ item[2].toLocaleString() }}</td>
                <td :class="{ 'input-bg-color': index === tableDataLength - 2 }">{{ item[3].toLocaleString() }}</td>
            </tr>

        </tbody>
    </table>
</template>

<script setup lang="ts">
import { ElInputNumber } from 'element-plus';
import { computed, ref } from 'vue';


const dayRate = (rate: number, amount: number) => {
    return (amount * rate / 100 / 365).toFixed(2);
};

const inputRate = ref(2.0);
const inputAmount = ref(20000);


const tableData = computed(() => {
    const amounts = [10000, 100000, 500000, inputAmount.value, 1000000];
    const rates = [1.0, inputRate.value, 4.0];

    return amounts.map(amount => [
        amount,
        ...rates.map(rate => dayRate(rate, amount))
    ]);
});
const tableDataLength = computed(() => tableData.value.length);
</script>

<style scoped>
.input-bg-color {
    background-color: #ffa9aa;
}
</style>