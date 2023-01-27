<script>
import Modal from "../Modal.vue";

export default {
  props: {
    info: {
      type: Object,
      default: () => {
      }
    }
  },
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<template>

  <div class="character" id="show-modal" @click="showModal = true">
    <div class="character-img">
      <img :src="'https://github.com/DrAugus/data/blob/master/game/genshin/characters/' + info.id + '.png?raw=true'">
    </div>
    <div class="character-ele"></div>
    <div class="character-name">
      <p>{{ info.name }}</p>
    </div>

  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>{{ info.prefix + " · " + info.name }}</h3>
      </template>
      <template #body>
        <div class="img-half">
          <img
            :src="'https://github.com/DrAugus/data/blob/master/game/genshin/characters/half/' + info.id + '.png?raw=true'">
        </div>
        <span>{{ info.intro }}</span>
      </template>
      <template #footer>
        <span>todo</span>
      </template>
    </modal>
  </Teleport>
</template>

<style>
.img-half {
  position: relative
}

.img-half img {
  display: block;
  border-radius: 5px;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%
}

.character:hover {
  background-position: 0 -150px;
}

.character {
  /* width: 110px !important; */
  height: 150px;
  font-size: 0;
  cursor: pointer;
  margin: 5px;
}

.character {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: relative;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  transition-property: transform, -webkit-transform;
}

.character-img {
  width: 100%;

}

.character-name {
  position: relative;
  height: 30px;
  width: 100%;
  color: #121212;
}


.character:hover p {
  color: #121212;
}


.img-half {
  position: relative
}

.img-half img {
  display: block;
  border-radius: 5px;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%
}
</style>
