<template>
    <table>
        <thead>
            <tr>
                <th>设备</th>
                <th>官网</th>
                <th>最低价</th>
                <th>优惠幅度</th>
                <th>购买日期</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in filterPriceData">
                <td>{{ item.device }} </td>
                <td v-if="Array.isArray(item.price)">
                    <span v-for="(vv, ii) in item.price">{{ vv + ' ' }}</span>
                </td>
                <td v-else>{{ item.price }} </td>
                <td>{{ item.lowest }} </td>
                <td>{{ discount(item) }} </td>
                <td>{{ item.purchaseDate ? modifyDate(item.purchaseDate) : '-' }} </td>
            </tr>
        </tbody>
    </table>


    <p>购买过的东西，总计消耗 {{ totalPurchasedPrice }} 元</p>

    <p>
        <button @click="sortByDate"> 日期排序 </button>
    </p>

    <table>
        <thead>
            <tr>
                <th>设备</th>
                <th>官网</th>
                <th>购买价</th>
                <th>优惠幅度</th>
                <th>购买平台</th>
                <th>购买日期</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in filterPurchasedDataRef">
                <td>{{ item.device }} </td>
                <td>{{ item.priceSale ? item.priceSale : '-' }} </td>
                <td>{{ item.pricePurchase }} </td>
                <td>{{ discount(item) }} </td>
                <td>{{ item.platform }} </td>
                <td>{{ modifyDate(item.date) }} </td>
            </tr>
        </tbody>
    </table>

</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { APPLE_PRICE } from '../data/appleprice';
import { APPLE_PURCHASED } from '../data/applepurchased';
import { ApplePrice, ApplePurchased } from '../type';
import { modifyDate } from '../utils';
const filterPriceData = APPLE_PRICE.filter(obj => obj.device);
const filterPurchasedData = APPLE_PURCHASED.filter(obj => obj.device);
const totalPurchasedPrice = filterPurchasedData.reduce((sum, product) => sum + product.pricePurchase, 0);;

let filterPurchasedDataRef = ref(filterPurchasedData);

const fix2 = (n: number) => (n * 100).toFixed(2) + '%';

function discount(item: ApplePrice): string;
function discount(item: ApplePurchased): string;
function discount(item: ApplePrice | ApplePurchased): string {
    if ('price' in item) {
        if (!item.price) return '-';
        const max = Array.isArray(item.price) ? Math.max(...item.price) : item.price;
        const rate = (max - item.lowest) / max;
        if (rate === 0) return '-';
        return fix2(rate);
    } else if ('pricePurchase' in item) {
        if (!item.priceSale) return '-';
        const max = item.priceSale;
        const rate = (max - item.pricePurchase) / max;
        if (rate === 0) return '-';
        return fix2(rate);
    }
    return '-';
}

let sortOrder = ref(0);

function sortByDate() {
    sortOrder.value = (sortOrder.value + 1) % 3;
    const items = [...filterPurchasedData];
    if (sortOrder.value === 1) {
        // 正序排序  
        filterPurchasedDataRef.value = items.sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());
    } else if (sortOrder.value === 2) {
        // 倒序排序  
        filterPurchasedDataRef.value = items.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
    } else {
        // 默认（不排序）  
        filterPurchasedDataRef.value = items;
    }
}
</script>
