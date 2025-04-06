<template>
    <el-table :data="catLitterData" style="width: 100%" :empty-text="`???`">
        <el-table-column prop="brand" label="猫砂品牌">
            <template #default="scope">
                <div class="no-wrap">{{ scope.row.brand }}</div>
            </template>
        </el-table-column>
        <el-table-column prop="specification" label="规格" />
        <el-table-column label="每公斤价格 ￥/kg" sortable :sort-by="row => row.pricePerKg.min"
            :formatter="formatterPricePerKg" />
        <el-table-column prop="commonSpecification" label="常见规格" />
        <el-table-column prop="advantages" label="优" />
        <el-table-column prop="disadvantages" label="劣" />
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
</style>