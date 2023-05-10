<template>
  <VPHomeHero :name="replaceText('x时间轴', gameNum)" :text="replaceText('全部x信息', gameNum)" :actions="homeActions"
    :tagline="homeTagline" :style="getImgStyle()" />

  <Timeline :WISH=WISH :CHARACTER=CHARACTER :WISH_TEXT=gameNum />
</template>

<script setup>

import { VPHomeHero } from 'vitepress/theme'
// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// css
import "./hsr.scss";
// utils
import Timeline from "../Timeline.vue";
import { current } from "../wishRecent";
import { replaceText } from "../utils"

const gameNum = 1
let gameName = ''

if (gameNum == 0) gameName = 'genshin'
if (gameNum == 1) gameName = 'hsr'


const homeActions = [
  { theme: 'alt', text: '返回上级', link: '/' + gameName + '/' },
  { theme: 'brand', text: replaceText('当前x', gameNum), link: '/' + gameName + '/wish' }
]

let homeTagline = ''
for (let v of current.obj) {
  homeTagline += ' + ' + v.name
}
homeTagline = homeTagline.slice(3)

function getImgStyle() {
  // wish src
  let homeImg // = current.src
  // replace char src
  homeImg = []
  for (let v of current.obj) {
    homeImg.push(`/image/${gameName}/characters/full/${v.wish5star}.png`)
  }
  let objImg = { cnt: 0, src: '' }
  objImg.cnt = homeImg.length
  if (homeImg.length == 1) objImg.src = homeImg[0]
  if (homeImg.length == 2) objImg.src = `url(${homeImg[0]}),url(${homeImg[1]})`
  return {
    backgroundImage: objImg.src,
    backgroundRepeat: 'no-repeat,no-repeat',
    backgroundPosition: 'left 3%, right 3%',
  }
}

</script>
