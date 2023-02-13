<template>

  <p>
    <a @click="showLv('all')">all</a>
    <span v-for="i in 6">
      | <a @click="showLv(i - 1)">lv{{ i - 1 }}</a>
    </span>
  </p>

  <p>
    <a @click="showTag('all')">all</a>
    <span v-for="(item, index) in filterTags" :key="index">
      <a @click="showTag(item)"> | {{ item }}</a>

    </span>
  </p>


  <ul>
    <li v-for="(t, i) in linkLv">
      <a v-bind:href="t.url">{{ t.name }}<span v-if="t.tip">: {{ t.tip }}</span></a>
    </li>
  </ul>

</template>

<script>
import allLinks from "~/assets/json/links.json";

const allLinkLv = [
  ...(allLinks.website.lv0),
  ...(allLinks.website.lv1),
  ...(allLinks.website.lv2),
  ...(allLinks.website.lv3),
  ...(allLinks.website.lv4),
  ...(allLinks.website.lv5)
]

// console.log(allLinkLv)


const allTags = allLinkLv.map(obj => (obj.tag.split(',')))
// console.log(allTags)

// es6 降维 arr.flat(depth)
const filterTags = new Set(allTags.reduce((prev, curr) => (prev.concat(curr)), []))
// console.log(filterTags)


export default {
  name: "LinksRecord",
  data() {
    return {
      linkLv: allLinkLv,
      filterTags,
    };
  },
  methods: {
    showLv(lv) {
      // console.log(lv)
      if (lv == 'all') {
        this.linkLv = allLinkLv
        return
      }
      let str = 'lv' + lv
      this.linkLv = allLinks.website[str]
    },
    showTag(tag) {
      // console.log(tag)
      if (tag == 'all') {
        this.linkLv = allLinkLv
        return
      }
      let all = allLinkLv
      this.linkLv = all.filter((ele => ele.tag.indexOf(tag) != -1))
    },
  },
};
</script>

<style scoped>

</style>
