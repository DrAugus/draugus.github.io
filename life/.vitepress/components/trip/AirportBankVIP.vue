<template>
    <el-table :data="flattenedData" :span-method="objectSpanMethod" style="width: 100%" fit>
        <el-table-column prop="bank" sortable label="银行" show-overflow-tooltip width="90" />
        <el-table-column prop="card" label="信用卡" width="240" />
        <el-table-column prop="rules" label="使用规则" />
    </el-table>

</template>

<script setup lang="ts">
import type { TableColumnCtx } from 'element-plus';
import { ElTable, ElTableColumn } from 'element-plus';
import { AirportBankVIP } from '../../data/trip/vip';
import type { AirportBankRights } from '../../type';

interface SpanMethodProps {
    row: AirportBankRights
    column: TableColumnCtx<AirportBankRights>
    rowIndex: number
    columnIndex: number
}
const flattenedData: AirportBankRights[] = [];
AirportBankVIP.forEach(item => {
    if (Array.isArray(item.card)) {
        item.card.forEach((card, index) => {
            flattenedData.push({
                bank: item.bank,
                card: card,
                rules: item.rules[index]
            });
        });
    } else {
        flattenedData.push({
            bank: item.bank,
            card: item.card,
            rules: item.rules
        });
    }
});
// 计算合并的行数
const spanArr: number[] = [];
let pos = 0;
flattenedData.forEach((item, index) => {
    if (index === 0) {
        spanArr.push(1);
        pos = 0;
    } else {
        if (flattenedData[index].bank === flattenedData[index - 1].bank) {
            spanArr[pos] += 1;
            spanArr.push(0);
        } else {
            spanArr.push(1);
            pos = index;
        }
    }
});
const objectSpanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex,
}: SpanMethodProps) => {
    if (columnIndex === 0) {
        const _row = spanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
            rowspan: _row,
            colspan: _col
        };
    }
}
</script>