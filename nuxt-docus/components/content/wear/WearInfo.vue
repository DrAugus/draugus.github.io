<template>

  <Card v-for="(v, i) in WEAR_CONFIG.pants">

    <template #title>{{ v.name }}</template>
    <template #description>
      {{ v.id + ' ' + v.size + ' ' + v.numeric_size }} <br>
      {{ v.color + ' ¥' + v.price + '' + v.shop }}
    </template>

  </Card>


</template>

<script>
import { WEAR_CONFIG } from "./wear-config";

export default {
  name: "Wear",
  data() {
    return {
      WEAR_CONFIG,
    };
  },
  methods: {},
};
</script>

<style scoped>

</style>
