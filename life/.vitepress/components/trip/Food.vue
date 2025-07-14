<template>
    <div class="mb-4">
        <el-button type="success" @click="sortFood">人均排序</el-button>
    </div>
    <br />
    <div class="mb-4">
        <el-button text type="success" @click="filterTag()">全部</el-button>
        <el-button @click="filterTag(v)" text v-for="(v, i) in tags">{{ v }}</el-button>
    </div>
    <ul>
        <li v-for="(v, i) in sortedFoods">
            <span v-if="v.closed">
                <del> {{ v.name }}</del> (已倒闭)
            </span>
            <span v-else> {{ v.name }}</span>
            <span v-if="isChain(v)">
                <el-tooltip class="box-item" effect="dark" :content="`总部：${v.headquartersCity}`" placement="top">
                    <Badge type="danger" :text="`连锁`" />
                </el-tooltip>
            </span>
            <Badge type="warning" :text="`人均 ¥${v.pricePerPerson}`" />
            <span v-if="!Array.isArray(v.restaurantType)">
                <Badge type="tip" :text="v.restaurantType" />
            </span>
            <span v-else>
                <Badge type="tip" v-for="(vv, ii) in v.restaurantType" :text="vv" />
            </span>
            {{ v.location }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ElButton, ElTooltip } from 'element-plus';
import { ref } from 'vue';

import { FoodRecord } from '../../type';

const props = defineProps<{
    foods: FoodRecord[],
}>();

const key = ref(0);
const sortedFoods = ref(props.foods);

const tags = Array.from(
    new Set(
        props.foods.flatMap(obj =>
            Array.isArray(obj.restaurantType) ? obj.restaurantType : [obj.restaurantType]
        )
    )
);

const isChain = (food: FoodRecord) => food.headquartersCity ? food.headquartersCity != food.city : false;


const sortFood = () => {
    key.value = key.value + 1;
    if (key.value > 2) key.value = 0;
    if (key.value === 0) {
        sortedFoods.value = props.foods;
    } else if (key.value === 1) {
        sortedFoods.value = [...props.foods].sort((a, b) => {
            return b.pricePerPerson - a.pricePerPerson;
        });
    } else if (key.value === 2) {
        sortedFoods.value = [...props.foods].sort((a, b) => {
            return a.pricePerPerson - b.pricePerPerson;
        });
    }
}

const filterTag = (tag?: string) => {
    sortedFoods.value = props.foods;
    if (tag === undefined) {
        return;
    }
    sortedFoods.value = sortedFoods.value.filter((item: FoodRecord) => {
        if (Array.isArray(item.restaurantType)) {
            return item.restaurantType.includes(tag);
        } else {
            return item.restaurantType === tag;
        }
    });
}
</script>