<template>

  <Card v-for="(v, i) in WEAR_CONFIG.pants" :info="{
    title: v.name,
    subtitle: v.id + ' ' + v.size + ' ' + v.numeric_size,
    text: v.color + ' ¥' + v.price + '' + v.shop,
  }"></Card>


</template>

<script>
import { WEAR_CONFIG } from "./wear-config";
import Card from "../Card.vue";

export default {
  name: "Wear",
  components: { Card },
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
