<template>
    <el-table :data="catLitterData" style="width: 100%" fit>
        <el-table-column prop="brand" sortable label="猫砂品牌" show-overflow-tooltip width="120" fixed />
        <el-table-column prop="specification" show-overflow-tooltip width="120" label="规格" />
        <el-table-column label="每公斤价格 ￥/kg" show-overflow-tooltip width="100" sortable
            :sort-by="row => row.pricePerKg.min" :formatter="formatterPricePerKg" />
        <el-table-column prop="commonSpecification" label="常见规格" show-overflow-tooltip width="120" />
        <el-table-column prop="advantages" label="优" show-overflow-tooltip width="80" />
        <el-table-column prop="disadvantages" show-overflow-tooltip width="200" label="劣" />
    </el-table>
</template>

<script setup lang="ts">
import { ElTable, ElTableColumn } from 'element-plus';

import { catLitterData } from '../data/cat';
import { CatLitter } from '../type';

function formatterPricePerKg(row: CatLitter) {
    if (!row.pricePerKg.max) {
        return row.pricePerKg.min.toFixed(2) + '元/kg';
    }
    return row.pricePerKg.min.toFixed(2) + ' ~ ' + row.pricePerKg.max.toFixed(2) + '元/kg';
}
</script>

<style scoped>
.no-wrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.vp-doc table {
    display: unset;
    border-collapse: unset;
    margin: unset;
    overflow-x: unset;
}
</style>