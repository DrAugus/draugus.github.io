<template>
  <AugusHome :name=tl.name :text=tl.text :tagline=tl.tagline :style=tl.style>
    <Timeline :WISH=WISH :CHARACTER=CHARACTER :WISH_TEXT=gameNum />
  </AugusHome>
</template>

<script setup>

// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// method
import { current } from "./wishRecent";
// css
import "./hsr.scss";
// utils
import Timeline from "../Timeline.vue";
import AugusHome from '../AugusHome.vue'
import { getTimelineHomeHero } from "../utils"

const gameNum = 1

const tl = getTimelineHomeHero(current, gameNum)

</script>
