<template>
  <VPHomeHero :name="replaceText('x时间轴')" :text="replaceText('全部x信息')" :actions="homeActions" :tagline="homeTagline"
    :style="getImgStyle()" />

  <Timeline :WISH="WISH" :CHARACTER="CHARACTER" :WISH_TEXT=0 />
</template>

<script setup>

import { VPHomeHero } from 'vitepress/theme'
// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// css
import "./genshin.scss";
// utils
import Timeline from "../Timeline.vue";
import { current } from "../wishRecent";

let gameName = 0
let strGameName = ''

if (gameName == 0) strGameName = 'genshin'
if (gameName == 1) strGameName = 'hsr'

function replaceText(str) {
  if (gameName == 0) {

    return str.replace('x', '祈愿')
  } else if (gameName == 1) {

    return str.replace('x', '跃迁')
  }
}

const homeActions = [
  { theme: 'alt', text: '返回上级', link: '/' + strGameName + '/' },
  { theme: 'brand', text: replaceText('当前x'), link: '/' + strGameName + '/wish' }
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
    homeImg.push(`/image/${strGameName}/characters/full/${v.wish5star}.png`)
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
