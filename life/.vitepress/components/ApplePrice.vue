<template>
    <table>
        <tr>
            <th>设备</th>
            <th>官网</th>
            <th>最低价</th>
            <th>优惠幅度</th>
            <th>优惠日期</th>
        </tr>
        <tr v-for="(item, i) in filterData">
            <td>{{ item.device }} </td>
            <td v-if="Array.isArray(item.price)">
                <span v-for="(vv, ii) in item.price">{{ vv + ' ' }}</span>
            </td>
            <td v-else>{{ item.price }} </td>
            <td>{{ item.lowest }} </td>
            <td>{{ discount(item) }} </td>
            <td>{{ item.discountDate ? modifyDate(item.discountDate) : '-' }} </td>
        </tr>
    </table>
</template>

<script setup lang="ts">
import { APPLE_PRICE } from '../data/appleprice';
import { ApplePrice } from '../type';
import { modifyDate } from '../utils';
const filterData = APPLE_PRICE.filter(obj => obj.device);

const fix2 = (n: number) => (n * 100).toFixed(2) + '%';
const discount = (item: ApplePrice) => {
    if (!item.price) return '';
    const max = Array.isArray(item.price) ? Math.max(...item.price) : item.price;
    const rate = (max - item.lowest) / max;
    if (rate === 0) return '-';
    return fix2(rate);
}
</script>
