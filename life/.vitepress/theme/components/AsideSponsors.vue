<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme'

import { withBase } from 'vitepress'

const data = [
  // {
  //   items: [{ img: withBase('/img/alipay.png') }]
  // },
  // {
  //   items: [{ img: withBase('/img/wechatpay.png') }]
  // }
]
</script>

<template>
  <VPDocAsideSponsors :data="data" />
</template>

<style>
.vp-sponsor-grid.medium .vp-sponsor-grid-image {
  max-height: 90px;
}
</style>
