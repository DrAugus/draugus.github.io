<template>
    <table>
        <tr>
            <th>大学</th>
            <th>位置</th>
            <th>标签</th>
        </tr>
        <tr v-for="(item, key, index) in data">

            <td>
                <a :href="item.link">
                    {{ item.name + '(' + item.id + ')' }}
                </a>
            </td>
            <td style="text-align:center;">{{ item.place }}</td>
            <td style="text-align:center;">{{ item.tag }}</td>

        </tr>

    </table>
</template>
  
<script>
import data from '../../data/study/university.json'

export default {
    name: "University",
    data() {
        return {
            data,
        };
    },
};

</script>
  
