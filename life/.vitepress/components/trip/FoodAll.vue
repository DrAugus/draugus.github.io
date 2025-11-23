<template>
    <div class="food-explorer">
        <!-- 简洁的控制面板 -->
        <div class="control-header">
            <div class="header-main">
                <h2 class="title">美食探索</h2>
                <div class="header-stats">
                    <span class="stat">
                        <el-icon>
                            <Shop />
                        </el-icon>
                        {{ filteredFoods.length }} 家餐厅
                    </span>
                </div>
            </div>

            <div class="header-controls">
                <el-input v-model="searchQuery" placeholder="搜索餐厅名称或位置..." :prefix-icon="Search" clearable size="large"
                    class="search-box" />

                <el-select v-model="selectedCity" placeholder="全部城市" clearable size="large" class="city-select">
                    <el-option label="全部城市" value="" />
                    <el-option v-for="city in cities" :key="city" :label="city" :value="city" />
                </el-select>

                <el-button type="primary" :icon="Sort" @click="toggleSort" size="large"
                    :class="{ active: sortMode !== 'default' }">
                    {{ sortButtonText }}
                </el-button>
            </div>
        </div>

        <div class="filter-section">
            <div class="filter-header">
                <span class="filter-title">菜系分类</span>
                <div class="filter-actions">
                    <el-button link @click="selectAllTags" size="small">
                        全选
                    </el-button>
                    <el-button link @click="invertSelection" size="small">
                        反选
                    </el-button>
                    <el-button link @click="clearSelection" size="small">
                        清空
                    </el-button>
                    <el-button link @click="resetAll" size="small" type="primary">
                        重置
                    </el-button>
                </div>
            </div>

            <div class="tags-cloud">
                <div v-for="tag in tags" :key="tag" class="tag-chip" :class="{ active: selectedTags.includes(tag) }"
                    @click="toggleTag(tag)">
                    <span class="tag-text">{{ tag }}</span>
                    <el-icon v-if="selectedTags.includes(tag)" class="tag-check">
                        <Check />
                    </el-icon>
                </div>
            </div>
        </div>

        <!-- 餐厅列表 - 保持原有样式 -->
        <div class="food-grid">
            <div v-for="food in filteredFoods" :key="food.name" class="food-card"
                :class="{ closed: food.closed, chain: isChain(food) }">
                <div class="card-header">
                    <h3 class="food-name">
                        <span v-if="food.closed" class="closed-badge">已倒闭</span>
                        {{ food.name }}
                    </h3>
                    <div class="header-badges">
                        <el-tag v-if="isChain(food)" type="danger" size="small">
                            <el-tooltip :content="`连锁品牌 · 总部：${food.headquartersCity}`" placement="top">
                                <span>连锁</span>
                            </el-tooltip>
                        </el-tag>
                        <el-tag type="warning" size="small">
                            ¥{{ food.pricePerPerson }}
                        </el-tag>
                    </div>
                </div>

                <div class="card-content">
                    <div class="food-info">
                        <div class="info-item">
                            <el-icon>
                                <Location />
                            </el-icon>
                            <span>{{ food.city }}{{ food.location ? ' · ' + food.location : '' }}</span>
                        </div>
                        <div class="info-item" v-if="food.businessHours">
                            <el-icon>
                                <Clock />
                            </el-icon>
                            <span>{{ food.businessHours }}</span>
                        </div>
                    </div>

                    <!-- <div class="food-tags">
                        <el-tag v-for="type in getRestaurantTypes(food)" :key="type" type="info" size="small"
                            class="type-tag">
                            {{ type }}
                        </el-tag>
                    </div> -->
                </div>

                <div class="card-footer">
                    <div class="footer-left food-tags">
                        <el-tag v-for="type in getRestaurantTypes(food)" :key="type" type="info" size="small"
                            class="type-tag">
                            {{ type }}
                        </el-tag>
                    </div>
                    <div class="footer-right">
                        <el-button v-if="food.closed" type="info" size="small" disabled>
                            已停业
                        </el-button>
                        <el-button v-else type="primary" size="small" @click="viewDetails(food)">
                            查看详情
                        </el-button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 空状态 -->
        <div v-if="filteredFoods.length === 0" class="empty-state">
            <el-empty description="没有找到符合条件的餐厅">
                <el-button type="primary" @click="resetAll">重置筛选条件</el-button>
            </el-empty>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import {
    ElButton,
    ElTag,
    ElInput,
    ElTooltip,
    ElRate,
    ElEmpty,
    ElIcon,
    ElMessage,
    ElSelect,
    ElOption
} from 'element-plus';
import {
    Sort,
    Search,
    Check,
    Shop,
    Location,
    Clock
} from '@element-plus/icons-vue';
import type { FoodRecord } from '../../type';

const props = defineProps<{
    foods: FoodRecord[];
    all?: boolean;
}>();

// 响应式数据 - 只添加城市筛选，其他保持不变
const searchQuery = ref('');
const selectedTags = ref<string[]>([]);
const selectedCity = ref('');
const sortMode = ref<'default' | 'price_asc' | 'price_desc'>('default');

// 计算属性
const cities = computed(() => {
    return Array.from(new Set(props.foods.map(food => food.city))).sort();
});

const tags = computed(() => {
    return Array.from(
        new Set(
            props.foods.flatMap(food =>
                Array.isArray(food.restaurantType)
                    ? food.restaurantType
                    : [food.restaurantType]
            )
        )
    ).sort();
});

const filteredFoods = computed(() => {
    let result = props.foods.filter(food => {
        // 搜索过滤
        const matchesSearch = !searchQuery.value ||
            food.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            food.location.toLowerCase().includes(searchQuery.value.toLowerCase());

        // 城市过滤 - 新增功能
        const matchesCity = !selectedCity.value || food.city === selectedCity.value;

        // 标签过滤
        const foodTypes = Array.isArray(food.restaurantType)
            ? food.restaurantType
            : [food.restaurantType];

        const matchesTags = selectedTags.value.length === 0 ||
            selectedTags.value.some(tag => foodTypes.includes(tag));

        return matchesSearch && matchesCity && matchesTags;
    });

    // 排序
    if (sortMode.value === 'price_asc') {
        result.sort((a, b) => a.pricePerPerson - b.pricePerPerson);
    } else if (sortMode.value === 'price_desc') {
        result.sort((a, b) => b.pricePerPerson - a.pricePerPerson);
    }

    return result;
});

const sortButtonText = computed(() => {
    switch (sortMode.value) {
        case 'price_asc': return '价格从低到高';
        case 'price_desc': return '价格从高到低';
        default: return '排序';
    }
});

// 方法 - 保持原有逻辑
const toggleSort = () => {
    const modes: Array<'default' | 'price_asc' | 'price_desc'> = [
        'default', 'price_asc', 'price_desc'
    ];
    const currentIndex = modes.indexOf(sortMode.value);
    sortMode.value = modes[(currentIndex + 1) % modes.length];
};

const toggleTag = (tag: string) => {
    const index = selectedTags.value.indexOf(tag);
    if (index > -1) {
        selectedTags.value.splice(index, 1);
    } else {
        selectedTags.value.push(tag);
    }
};

const selectAllTags = () => {
    selectedTags.value = [...tags.value];
};

const invertSelection = () => {
    selectedTags.value = tags.value.filter(tag => !selectedTags.value.includes(tag));
};

const clearSelection = () => {
    selectedTags.value = [];
};

const resetAll = () => {
    searchQuery.value = '';
    selectedTags.value = [];
    selectedCity.value = '';
    sortMode.value = 'default';
};

const isChain = (food: FoodRecord) => {
    return food.headquartersCity && food.headquartersCity !== food.city;
};

const getRestaurantTypes = (food: FoodRecord): string[] => {
    return Array.isArray(food.restaurantType)
        ? food.restaurantType
        : [food.restaurantType];
};

const viewDetails = (food: FoodRecord) => {
    ElMessage.info(`查看 ${food.name} 的详细信息`);
};

// 为每个餐厅添加模拟评分
props.foods.forEach(food => {
    (food as any).rating = Math.random() * 2 + 3;
});
const getTagCount = (tag: string) => {
    return props.foods.filter(food => {
        const types = getRestaurantTypes(food);
        return types.includes(tag);
    }).length;
};
</script>

<style scoped>
.food-explorer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* 控制面板样式保持不变 */
.control-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
    color: white;
}

.header-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.title {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    color: white;
}

.header-stats {
    display: flex;
    gap: 20px;
}

.stat {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    opacity: 0.9;
}

.header-controls {
    display: flex;
    gap: 16px;
    align-items: center;
}

.search-box {
    flex: 1;
    max-width: 400px;
}

.city-select {
    width: 150px;
}

.search-box :deep(.el-input__wrapper) {
    background: rgba(255, 255, 255, 0.95);
    border: none;
    border-radius: 12px;
}

.search-box :deep(.el-input__inner) {
    color: #333;
}

/* 筛选区域样式优化 */
.filter-section {
    background: white;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    border: 1px solid #f0f0f0;
}

.filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.filter-title {
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
}

.filter-actions {
    display: flex;
    gap: 6px;
}

.tags-cloud {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.tag-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 16px;
    font-size: 13px;
    color: #495057;
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;
}

.tag-chip:hover {
    border-color: #409eff;
    transform: translateY(-1px);
}

.tag-chip.active {
    background: #409eff;
    border-color: #409eff;
    color: white;
}

.tag-check {
    font-size: 12px;
}

/* 餐厅卡片样式保持不变 */
.food-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;
}

.food-card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    border: 1px solid #e8e8e8;
}

.food-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.food-card.closed {
    opacity: 0.6;
    background: #fafafa;
}

.food-card.chain {
    border-left: 4px solid var(--el-color-danger);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
}

.food-name {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
    line-height: 1.4;
}

.closed-badge {
    background: #9ca3af;
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    margin-right: 8px;
}

.header-badges {
    display: flex;
    gap: 6px;
    flex-shrink: 0;
}

.card-content {
    margin-bottom: 16px;
}

.food-info {
    margin-bottom: 12px;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 4px;
}

.food-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.type-tag {
    font-size: 12px;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.rating {
    transform: scale(0.9);
    transform-origin: left;
}

.empty-state {
    text-align: center;
    padding: 60px 20px;
}

.el-button.active {
    background: var(--el-color-primary-light-3);
    border-color: var(--el-color-primary-light-3);
}

/* 移动端适配 */
@media (max-width: 768px) {
    .food-grid {
        grid-template-columns: 1fr;
    }

    .control-header {
        padding: 16px;
    }

    .header-main {
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;
    }

    .header-controls {
        flex-direction: column;
        width: 100%;
        gap: 12px;
    }

    .search-box {
        max-width: none;
    }

    .city-select {
        width: 100%;
    }

    .filter-header {
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;
    }

    .filter-actions {
        width: 100%;
        justify-content: space-between;
    }
}
</style>





<style scoped>
.category-wall {
    background: white;
    border-radius: 16px;
    padding: 24px;
    margin-bottom: 24px;
}

.wall-header {
    text-align: center;
    margin-bottom: 24px;
}

.wall-header h3 {
    margin: 0 0 8px 0;
    font-size: 20px;
    font-weight: 600;
    color: #1f2937;
}

.wall-header p {
    margin: 0;
    color: #6b7280;
    font-size: 14px;
}

.tag-wall {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    align-items: center;
}

.wall-tag {
    padding: calc(8px * var(--tag-size)) calc(16px * var(--tag-size));
    background: var(--tag-color);
    color: white;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    opacity: 0.8;
}

.wall-tag:hover {
    opacity: 1;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.wall-tag.active {
    opacity: 1;
    box-shadow: 0 0 0 3px white, 0 0 0 6px var(--tag-color);
}

.tag-content {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: calc(14px * var(--tag-size));
}

.tag-count {
    font-size: calc(12px * var(--tag-size));
    opacity: 0.9;
}
</style>