<template>

    <TitleFormat :title="`购买过的东西，总计消耗 ${totalPurchasedPrice.toFixed(2)} 元`" :number="2" />

    设备总消耗 <b>{{ totalPurchasedPrice.toFixed(2) }}</b> 元，如果包含订阅的 <b>{{ allSubscribe().toFixed(2) }}</b>元，则总计为
    <b>{{ (totalPurchasedPrice + allSubscribe()).toFixed(2) }}</b>元

    <div class="warning custom-block">
        <p class="custom-block-title">订阅 总计消耗 {{ allSubscribe().toFixed(2) }}</p>
        <ul>
            <li v-for="(appleSub, i) in APPLE_SUBSCRIBE" v-html="modifiedSubscribe(appleSub)"> </li>
        </ul>
    </div>


    <el-radio-group v-model="tableLayout">
        <el-radio-button value="fixed">fixed</el-radio-button>
        <el-radio-button value="auto">auto</el-radio-button>
    </el-radio-group>

    <el-table :data="filterPurchasedDataRef" :table-layout="tableLayout" empty-text="-" stripe border
        style="width: 100%">
        <el-table-column sortable fixed show-overflow-tooltip width="200" prop="device" label="设备" />
        <el-table-column sortable label="类型" prop="deviceType">
            <template #default="scope">
                <el-tag :type="tagDisplay(scope.row)" disable-transitions>{{ deviceTypeDisplay(scope.row) }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="priceSale" label="官网" />
        <el-table-column sortable prop="pricePurchase" label="购买价" />
        <el-table-column label="优惠幅度" :formatter="discount" />
        <el-table-column show-overflow-tooltip prop="platform" label="购买平台">
            <template #default="scope">
                <el-tag :type="platformDisplay(scope.row)" disable-transitions>{{ scope.row.platform }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column sortable :sort-by="row => new Date(row.date).toISOString()" label="购买日期"
            :formatter="purchaseDateDisplay" />
    </el-table>

</template>

<script setup lang="ts">
import type { TableInstance } from 'element-plus';
import { ElRadioButton, ElRadioGroup, ElTable, ElTableColumn, ElTag } from 'element-plus';
import { onMounted, ref } from 'vue';
import TitleFormat from './TitleFormat.vue';

import { APPLE_PURCHASED } from '../data/applepurchased';
import { APPLE_SUBSCRIBE } from '../data/applesubscribe';

import { ApplePurchased, AppleSubscribe } from '../type';
import { durationMonth, modifyDate, modifyDate1, monthsFromX2Today } from '../utils';

const filterPurchasedData = APPLE_PURCHASED.filter(obj => obj.device);
const totalPurchasedPrice = filterPurchasedData.reduce((sum, product) => sum + product.pricePurchase, 0);

let filterPurchasedDataRef = ref(filterPurchasedData);

const tableLayout = ref<TableInstance['tableLayout']>('fixed')

const fix2 = (n: number) => (n * 100).toFixed(2) + '%';

function platformDisplay(item: ApplePurchased) {
    switch (item.platform) {
        case '淘宝':
            return "warning";
        case '京东':
            return "danger";
        case '官网':
        case '天猫官方':
        case '线下官方店':
            return "success";
        default:
            return "info";
    }
}

function tagDisplay(item: ApplePurchased) {
    switch (item.deviceType) {
        case 'Mac':
            return "primary";
        case 'iPad':
            return "success";
        case 'iPhone':
            return "warning";
        case 'AirPods':
            return "primary";
        case 'Watch':
            return "danger";
        case 'Vision':
        case 'TV & Home':
        case 'Accessories':
        default:
            return "info";
    }
}

function deviceTypeDisplay(item: ApplePurchased) {
    switch (item.deviceType) {
        case "Accessories":
            return "配件";
        case "TV & Home":
            return "家居";
        default:
            return item.deviceType;
    }
}

function purchaseDateDisplay(item: ApplePurchased) {
    return modifyDate(item.date);
}

function discount(item: ApplePurchased): string {
    if (!item.priceSale) return '-';
    const max = item.priceSale;
    const rate = (max - item.pricePurchase) / max;
    if (rate === 0) return '-';
    return fix2(rate);
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
onMounted(async () => {
    sortOrder.value = 1;
    sortByDate();
})

function calSubscribeTotal(appleSub: AppleSubscribe) {
    if (appleSub.duration && appleSub.duration === 'yearly') {
        // 按年计算
        const durMonth = appleSub.end ? durationMonth(appleSub.start, appleSub.end) : monthsFromX2Today(appleSub.start);
        const years = Math.ceil(durMonth / 12);
        return years * appleSub.price;
    }
    // 默认计算月循环
    let durMonth = appleSub.end ? durationMonth(appleSub.start, appleSub.end) : monthsFromX2Today(appleSub.start);
    // console.log(durMonth);
    return durMonth * appleSub.price;
}

function modifiedSubscribe(appleSubs: AppleSubscribe) {
    let dateDisplay = `${modifyDate1(appleSubs.start)}-`;
    dateDisplay += appleSubs.end ? modifyDate1(appleSubs.end) : '至今';
    return `${appleSubs.name}(￥${appleSubs.price}): ${dateDisplay}，共计 <b>${calSubscribeTotal(appleSubs).toFixed(2)}元</b>`
}

function allSubscribe() {
    let total = 0;
    for (let appleSub of APPLE_SUBSCRIBE) {
        total += calSubscribeTotal(appleSub);
    }
    return total;
}

</script>

<style lang="css" scoped>
.vp-doc table {
    display: unset;
    border-collapse: unset;
    margin: unset;
    overflow-x: unset;
}
</style>