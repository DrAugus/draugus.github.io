<template>
  <details open>
    <summary>
      列表显示
    </summary>
    <ul>
      <li v-for="(item, index) in blockFood">
        {{ item.split(",")[0] }} {{ item.split(",")[1] }}
      </li>
    </ul>

  </details>


  <details>
    <summary>
      表格显示
    </summary>
    <table>
      <tr>
        <th>拉黑店家</th>
        <th>原因</th>
      </tr>
      <tr v-for="(item, index) in blockFood">

        <td>{{ item.split(",")[0] }} </td>
        <td>{{ item.split(",")[1] }}</td>


      </tr>

    </table>
  </details>
</template>

<script>

import foodInfo from "../../data/food/blacklist.json";

export default {
  name: "Food-Block",
  components: {
  },
  data() {
    return {
      title: "block",
      blockFood: foodInfo,
    };
  },
  methods: {
  },
};

</script>

<style scoped></style>
