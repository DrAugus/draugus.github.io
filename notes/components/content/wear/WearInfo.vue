<template>

  <ButtonLink :icon="icon[0]" @click="showCloth(0)">
    外套
  </ButtonLink> |
  <ButtonLink :icon="icon[1]" @click="showCloth(1)">
    上衣
  </ButtonLink> |
  <ButtonLink :icon="icon[2]" @click="showCloth(2)">
    下衣
  </ButtonLink> |
  <ButtonLink :icon="icon[3]" @click="showCloth(3)">
    全部
  </ButtonLink>

  <CardGrid>
    <template #title>穿点什么</template>

    <Card v-for="(v, i) in wearInfo">

      <template #title>{{ v.name }}</template>
      <template #description>
        {{ v.id + ' ' + v.size + ' ' + v.numeric_size }} <br>
        {{ v.color + ' ¥' + v.price + '' + v.shop }}
      </template>

    </Card>
  </CardGrid>

</template>

<script>
import { WEAR_CONFIG } from "./wear-config";

export default {
  name: "WearInfo",
  data() {
    return {
      wearInfo: [...WEAR_CONFIG.outerwear, ...WEAR_CONFIG.tops, ...WEAR_CONFIG.bottoms],
      icon: ['icon-park-outline:clothes-cardigan', 'icon-park-outline:clothes-crew-neck', 'iconoir:pants', 'game-icons:clothes']
    };
  },
  methods: {
    showCloth(which) {
      const idx = parseInt(which)
      switch (idx) {
        case 0:
          this.wearInfo = WEAR_CONFIG.outerwear
          break
        case 1:
          this.wearInfo = WEAR_CONFIG.tops
          break
        case 2:
          this.wearInfo = WEAR_CONFIG.bottoms
          break
        case 3:
          this.wearInfo = [...WEAR_CONFIG.outerwear, ...WEAR_CONFIG.tops, ...WEAR_CONFIG.bottoms]
          break
      }
    },
  },
};
</script>

<style scoped>

</style>
