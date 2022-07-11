<script>
import Modal from "../Modal.vue";

export default {
  props: {
    info: {
      type: Object,
      default: () => {}
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
  <a id="show-modal" @click="showModal = true">{{info.header}}</a>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>{{ info.header }}</h3>
      </template>
      <template #body>
        <div class="img-half">
          <img :src="info.img">
        </div>
        <span>{{ info.body }}</span>
      </template>
      <template #footer>
        <span>{{ info.footer }}</span>
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
</style>
