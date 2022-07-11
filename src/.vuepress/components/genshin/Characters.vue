<template>

  <div class="character-info" v-for="(value, key, index) in info">

    <Modal :info="{
      header: value.name,
      img:'https://github.com/DrAugus/data/blob/master/game/genshin/characters/half/' + value.id +'.png?raw=true',
      body: value.intro,
      footer:'todo',
     }"></Modal>

    <div class="character-avatar">
      <img :src="'https://github.com/DrAugus/data/blob/master/game/genshin/characters/' + value.id +'.png?raw=true'">
    </div>
    <blockquote>
      {{ value.intro }}
    </blockquote>
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
.character-avatar {
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
}
</style>
