<template>

  <h2>Good Website</h2>

  <ul v-for="(t,i) in allLinks.website.good">
    <li v-if="t.url">
      <a v-bind:href="t.url">{{ t.name }}<span v-if="t.tip">: {{ t.tip }}</span></a>
    </li>
  </ul>

  <h2>Backup</h2>

  <ul v-for="(t,i) in allLinks.website.backup">
    <li v-if="t.url">
      <a v-bind:href="t.url">{{ t.name }}<span v-if="t.tip">: {{ t.tip }}</span></a>
    </li>
  </ul>

</template>

<script>
import allLinks from "../data/links.json";

export default {
  name: "LinksRecord",
  data() {
    return {
      allLinks
    };
  }
};
</script>

<style scoped>

</style>
