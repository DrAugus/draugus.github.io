<template>
    <div class="mb-4">
        <el-button type="success" @click="sortFood">人均排序</el-button>
    </div>
    <div class="mb-4">
        <el-button text type="success" @click="resetFilter">全部</el-button>
        <el-button @click="toggleTag(v)" text v-for="(v, i) in tags" :key="i"
            :type="selectedTags.includes(v) ? 'primary' : ''">
            {{ v }} {{ selectedTags.includes(v) ? '✓' : '' }}
        </el-button>
        <el-button text @click="invertSelection">反选</el-button>
        <el-button text @click="clearSelection">清空</el-button>
    </div>
    <ul>
        <li v-for="(v, i) in sortedFoods" :key="i">
            <span v-if="v.closed" class="closed">
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
                <Badge type="tip" v-for="(vv, ii) in v.restaurantType" :key="ii" :text="vv" />
            </span>
            {{ v.location }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ElButton, ElTooltip } from 'element-plus';
import { ref, computed, watch } from 'vue';

import { FoodRecord } from '../../type';

const props = defineProps<{
    foods: FoodRecord[],
}>();

const key = ref(0);
const sortedFoods = ref(props.foods);
const selectedTags = ref<string[]>([]);

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

// 切换标签选择状态
const toggleTag = (tag: string) => {
    const index = selectedTags.value.indexOf(tag);
    if (index > -1) {
        selectedTags.value.splice(index, 1);
    } else {
        selectedTags.value.push(tag);
    }
}

// 反选所有标签
const invertSelection = () => {
    selectedTags.value = tags.filter(tag => !selectedTags.value.includes(tag));
}

// 清空选择
const clearSelection = () => {
    selectedTags.value = [];
}

// 重置过滤器
const resetFilter = () => {
    selectedTags.value = [];
    sortedFoods.value = props.foods;
}

// 监听标签选择变化，自动过滤
watch(selectedTags, (newTags) => {
    if (newTags.length === 0) {
        sortedFoods.value = props.foods;
        return;
    }

    sortedFoods.value = props.foods.filter((item: FoodRecord) => {
        const itemTags = Array.isArray(item.restaurantType)
            ? item.restaurantType
            : [item.restaurantType];

        // 多选逻辑：只要包含任意一个选中的标签就显示
        return newTags.some(tag => itemTags.includes(tag));
    });
}, { deep: true });
</script>

<style scoped>
.closed {
    color: gray;
}

.el-button {
    margin-right: 8px;
    margin-bottom: 8px;
}

.el-button[type="primary"] {
    background-color: #409eff;
    color: white;
}
</style>