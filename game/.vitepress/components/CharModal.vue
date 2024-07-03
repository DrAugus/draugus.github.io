<script>
import Modal from "./Modal.vue";
import { objFilter, replaceAndLow, getGameName, GameName } from "./utils";

export default {
  props: {
    info: {
      type: Object,
      default: () => {
      }
    },
    game: null,
  },
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      replaceAndLow,
      gameName: getGameName(this.game),
      GameName,
    };
  },
  methods: {
    replaceImg(event) {
      event.target.src = '/image/genshin/characters/paimon_faq.png';
    },
  },
};
</script>

<template>
  <div class="character" id="show-modal" @click="showModal = true">
    <div class="character-img" :class="info.star == 5 ? 'bg-5-star' : 'bg-4-star', 'char-img1'">
      <img :src='`/image/${gameName}/characters/${replaceAndLow(info.id)}.png`' object-fit: contain @error="replaceImg">
    </div>
    <div class="character-ele" v-if="info.ele">
      <img :src="`/image/${gameName}/elements/${replaceAndLow(info.ele.id)}.png`" alt="{{1}}">
    </div>
    <div v-if="game && info.weapon" class="character-weapon">
      <img :src="`/image/${gameName}/elements/${(info.weapon.id).replace('The ', '').toLowerCase()}.png`" alt="{{1}}">
    </div>
    <div class="character-name" :style="{ fontSize: game === GameName.ZZZ ? '14px' : '18px' }">
      {{ info.name }}
    </div>
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <span class="slot-char-name">{{ `${info.prefix} · ${info.name}（${info.ele.name}）` }}</span>
      </template>
      <template #body>
        <div class="img-half">
          <img :src='`/image/${gameName}/characters/half/${replaceAndLow(info.id)}.png`' @error="replaceImg">
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
  background-color: #b47b48;
}

.bg-4-star {
  background-color: #77609a;
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
  /* width: 100px !important; */
  /* height: 150px; */
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

.char-img1 {
  width: 100px;
  height: 100px;
}

.char-img2 {
  width: 105px;
  height: 120px;
}

.character-img {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.character-img img {
  object-position: center;
  -o-object-fit: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.character-ele {
  position: absolute;
  top: 0;
  left: 0;
}

.character-ele img {
  width: 30px;
  height: 30px;
}

.character-weapon {
  position: absolute;
  top: 30px;
  left: 0;
}

.character-weapon img {
  width: 30px;
  height: 30px;
}

.slot-char-name {
  text-align: center;
  /* width: 100%; */
  /* color: #121212; */
  background-color: #c0c5c5;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 800;
  padding: 5px;
}

.character-name {
  /* position: relative; */
  /* margin-top: 5px; */
  text-align: center;
  /* width: 100%; */
  /* color: #121212; */
  background-color: #c0c5c5;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  font-size: 18px;
  font-weight: 800;
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
