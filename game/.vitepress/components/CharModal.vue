<script>
import Modal from "./Modal.vue";
import { objFilter, replaceAndLow, getGameName } from "./utils";

export default {
  props: {
    info: {
      type: Object,
      default: () => {
      }
    },
    game: '',
  },
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      replaceAndLow,
    };
  },
  methods: {
    replaceImg(event) {
      event.target.src = '/image/genshin/characters/paimon_faq.png'
    },
  },
};
</script>

<template>
  <div class="character" id="show-modal" @click="showModal = true">
    <div class="character-img" :class="info.star == 5 ? 'bg-5-star' : 'bg-4-star'">
      <img :src='`/image/${game}/characters/${replaceAndLow(info.id)}.png`' @error="replaceImg">
    </div>
    <div class="character-ele">
      <img :src="`/image/${game}/elements/${replaceAndLow(info.ele)}.png`" alt="{{1}}">
    </div>
    <div class="character-name">
      <div>
        <p>{{ info.name }}</p>
      </div>
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
          <img :src='`/image/${game}/characters/half/${replaceAndLow(info.id)}.png`' @error="replaceImg">
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
.bg-5-star {
  background-color: rgb(255 177 63 / .5);
}

.bg-4-star {
  background-color: rgb(210 143 214 / .5);
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

.character:hover {
  background-position: 0 -150px;
}

.character {
  width: 110px !important;
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
  /* width: 6rem; */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.character-ele {
  position: absolute;
  padding: 4px;
  margin: -10px;
  top: 0;
  right: 0;
  background-color: rgb(0 0 0 /.5);
  border-radius: 9999px;
}

.character-ele img {
  width: 1rem;
  height: 1rem;
}

.character-name {
  position: relative;
  height: 30px;
  /* width: 100%; */
  /* color: #121212; */
  background-color: rgb(153, 200, 196);
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;

}

.character-name div {
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}

.character-name p {
  padding: .25rem;
  text-align: center;
  margin: 0;
  font-size: .875rem;
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
