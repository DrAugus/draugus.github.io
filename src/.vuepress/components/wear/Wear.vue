<template>

  <div class="card-gap" v-for="(v,i) in WEAR_CONFIG.pants">
    <Card :info="{
        title:v.name,
        subtitle:v.id + ' ' + v.size + ' ' + v.numeric_size,
        text:v.color + ' ¥' + v.price +''+ v.shop,
        }"></Card>
  </div>

</template>

<script>
import {WEAR_CONFIG} from "./wear";
import Card from "../Card.vue";

export default {
  name: "Wear",
  components: {Card},
  data() {
    return {
      WEAR_CONFIG,
    };
  },
  methods: {},
};
</script>

<style scoped>
.card-gap {
  padding-bottom: 5px;
}
</style>
