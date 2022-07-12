<template>

  <div class="character-info">

    <div v-for="(value, key, index) in info">

      <Modal :info="{
        name:value.name,
        prefix:value.prefix,
        id:value.id,
        intro:value.intro,
        }"></Modal>

    </div>

  </div>

</template>

<script>

import {CHARACTER} from "./characters";
import Modal from "./Modal.vue";

export default {
  name: "Characters",
  components: {Modal},
  data() {
    return {
      info: CHARACTER,
      showModal: false
    };
  },
  mounted() {

  },
  methods: {}
};
</script>

<style scoped>

.character-info {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

</style>
