<template>
  <VPHomeHero :name=tl.name :text=tl.text :actions=tl.actions :tagline=tl.tagline :style=tl.style />

  <Timeline :WISH=WISH :CHARACTER=CHARACTER :WISH_TEXT=gameNum />
</template>

<script setup>

import { VPHomeHero } from 'vitepress/theme'
// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// method
import { current } from "./wishRecent";
// css
import "./genshin.scss";
// utils
import Timeline from "../Timeline.vue";
import { getTimelineHomeHero } from '../utils';

const gameNum = 0

const tl = getTimelineHomeHero(current, gameNum)

</script>
