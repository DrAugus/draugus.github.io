<template>
    <div class="mb-4">
        <el-dropdown v-for="(tag, index) in tagMap" :key="index" trigger="click">
            <el-button type="primary">
                {{ tag[0] }}
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="(v, i) in tag[1]">
                        <a :href="v['href']"> {{ v['title'] }}</a>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>

    顺序练习

    <el-table :data="tableData" style="width: 100%" height="350">
        <el-table-column fixed prop="title" label="题目">
            <template #default="scope">
                <el-button text>
                    <a :href="scope.row.href">
                        {{ scope.row.title }}
                    </a>
                </el-button>
            </template>
        </el-table-column>
        <el-table-column prop="tags" label="标签">
            <template #default="scope">
                <Badge v-for="(v, i) in scope.row.tags">{{ v }}</Badge>
            </template>
        </el-table-column>
    </el-table>

</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ElButton, ElDropdown, ElDropdownMenu, ElDropdownItem, ElTable, ElTableColumn } from 'element-plus';


// map, key: tag, value: obj[]
const tagMap = new Map<string, object[]>();
const tableData = ref([] as any[]);

onMounted(async () => {
    const { postsProgram } = await import('../theme/posts');
    postsProgram.forEach((post) => {
        if (!post.tags) return;
        post.tags.forEach((tag: string) => {
            if (!tagMap.has(tag)) {
                tagMap.set(tag, []);
            }
            tagMap.get(tag)?.push(post);
        });
    });
    tableData.value = postsProgram;
});
</script>