<template>
  <div class="card">
    <div class="card-title">{{ info.title }}</div>
    <div class="card-subtitle">{{ info.subtitle }}</div>
    <div class="card-text">{{ info.text }}</div>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    info: {
      type: Object,
      default: () => {
      }
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.card {
  border-width: thin;
  border-radius: 4px;
  display: block;
  max-width: 100%;
  outline: none;
  text-decoration: none;
  transition-property: box-shadow, opacity;
  overflow-wrap: break-word;
  position: relative;
  white-space: normal;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12) !important;
}

.card-title {
  padding: 16px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: .0125em;
  line-height: 2rem;
  word-break: break-all;
}

.card-subtitle {
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: .0071428571em;
  padding: 0 16px 16px;
  margin-top: -16px;
  color: rgba(0, 0, 0, .6);
}

.card-text {
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.375rem;
  letter-spacing: .0071428571em;
  width: 100%;
  padding: 0 16px 16px;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  color: rgba(0, 0, 0, .6);
}
/* 参考 vuetify https://vuetify.cn/zh-Hans/components/cards/*/
</style>
