<template>
    <table>
        <thead>
            <tr>
                <th>大学</th>
                <th>位置</th>
                <th>标签</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, key, index) in data">
                <td>
                    <a :href="item.link">
                        {{ item.name + '(' + item.id + ')' }}
                    </a>
                </td>
                <td style="text-align:center;">{{ item.place }}</td>
                <td style="text-align:center;">{{ item.tag }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import data from '../../data/exam/university.json'

</script>
