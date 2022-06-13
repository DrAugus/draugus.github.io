<template>

  <div class="character-info" v-for="(value, key, index) in info">

    <div>
      {{ value.name }}
    </div>
    <div class="character-avatar">
      <img :src="'/image/life/game/genshin/characters/' + value.id +'.png'">
    </div>
    <blockquote>
      {{ value.intro }}
    </blockquote>
  </div>

</template>

<script>

import {CHARACTER} from "./characters";

export default {
  name: "Characters",

  data() {
    return {
      info: CHARACTER
    };
  }

};
</script>

<style scoped>
.character-avatar {
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
}
</style>