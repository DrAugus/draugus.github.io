<template>
    东航里程兑换
    <table>
        <thead>
            <tr>
                <th class="align-center" v-for="(v, i) in CEAIR_HEAD">{{ v }}</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(item, index) in CEAIR_MILES_REDEMPTION" :key="index">
                <tr>
                    <td :class="index % 2 ? 'color-1' : 'color-2'" :rowspan="item.coBrandedCardBenefits.length">
                        {{ item.bank }}</td>
                    <td :class="index % 2 ? 'color-1' : 'color-2'" :rowspan="item.coBrandedCardBenefits.length">
                        {{ item.coBrandedCardName }}</td>
                    <td :class="index % 2 ? 'color-1' : 'color-2'">
                        {{ item.coBrandedCardBenefits[0].cardLevel }}</td>
                    <td :class="index % 2 ? 'color-1' : 'color-2'"
                        v-html="ratioDisplay(item.coBrandedCardBenefits[0].redemptionRatio)">
                    </td>
                    <td :class="index % 2 ? 'color-1' : 'color-2'">
                        {{ item.coBrandedCardBenefits[0].redemptionCap }}
                    </td>
                    <td :class="index % 2 ? 'color-1' : 'color-2'">
                        {{ item.coBrandedCardBenefits[0].annualFeeReduction }}</td>
                </tr>
                <template v-for="(benefit, benefitIndex) in item.coBrandedCardBenefits.slice(1)" :key="benefitIndex">
                    <tr>
                        <td :class="index % 2 ? 'color-1' : 'color-2'">{{ benefit.cardLevel }}</td>
                        <td :class="index % 2 ? 'color-1' : 'color-2'" v-html="ratioDisplay(benefit.redemptionRatio)">
                        </td>
                        <td :class="index % 2 ? 'color-1' : 'color-2'">{{ benefit.redemptionCap }}</td>
                        <td :class="index % 2 ? 'color-1' : 'color-2'">{{ benefit.annualFeeReduction }}</td>
                    </tr>
                </template>
            </template>


        </tbody>
    </table>

</template>

<script setup lang="ts">
import { CEAIR_MILES_REDEMPTION } from '../../data/trip/miles';
const CEAIR_HEAD = ["银行", "联名卡名称", "卡片等级", "积分(里程)兑换比例", "里程兑换上限", "年费减免政策"];

function mergeRows(index: number) {
    for (let i = 0; i < CEAIR_MILES_REDEMPTION.length; ++i) {
        if (i === index) {
            return CEAIR_MILES_REDEMPTION[i].coBrandedCardBenefits.length;
        }
    }
    return 1;
}

function ratioDisplay(ratio: string | string[]) {
    let res = '';
    if (Array.isArray(ratio)) {
        ratio.forEach((v, i) => {
            res += v;
            if (i !== ratio.length - 1) {
                res += '<br>';
            }
        })
    } else {
        res = ratio;
    }
    return res;
}

</script>

<style scoped>
.align-center {
    text-align: center;
}

.vp-doc tr {
    white-space: unset;
    overflow: unset;
    text-overflow: unset;
}

.color-1 {
    background-color: #fbe4f2;
}

.color-2 {
    background-color: #dbdbfd;
}
</style>
