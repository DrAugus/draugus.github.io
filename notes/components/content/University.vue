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
import data from '~/assets/json/university.json'

export default {
    name: "University",
    data() {
        return {
            data,
        };
    },
};

</script>
  
<style scoped>
table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    font-size: 1rem;
    line-height: 1.5;
    color: #212529;
}

th,
td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

th {
    font-weight: 700;
    border-bottom: 2px solid #dee2e6;
}

tbody tr:nth-of-type(even) {
    background-color: rgba(0, 0, 0, 0.05);
}

tfoot th,
tfoot td {
    border-top: 1px solid #dee2e6;
}

caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #6c757d;
    text-align: left;
    caption-side: bottom;
}

a {
    font-family: var(--typography-font-body);
    font-weight: var(--prose-a-fontWeight);
    -webkit-text-decoration: var(--prose-a-textDecoration);
    text-decoration: var(--prose-a-textDecoration);
    border-bottom-width: var(--prose-a-border-width);
    border-bottom-style: var(--prose-a-border-style-static);
    border-bottom-color: var(--prose-a-border-color-static);
    padding-bottom: var(--prose-a-border-distance);
    color: var(--prose-a-color-static);
}

a:hover {
    color: var(--prose-a-color-hover);
    border-color: var(--prose-a-border-color-hover);
    border-style: var(--prose-a-border-style-hover);
}
</style>