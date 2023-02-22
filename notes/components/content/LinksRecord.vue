<template>
  <ButtonLink @click="showTag('all')">all</ButtonLink>

  <br><br>

  <span v-for="(item, index) in filterTags" :key="index">
    <a @click="showTag(item)">
      <Badge> {{ item }}</Badge> {{ ' ' }}
    </a>
  </span>

  <br><br>

  <List v-for="(t, i) in linkLv">
    <a v-bind:href="t.url">{{ t.name }}
      <span v-if="t.tip">: {{ t.tip }}</span></a>
  </List>
</template>

<script>
import allLinks from "~/assets/json/links.json";

// console.log(allLinks)

const allTags = allLinks.map(obj => (obj.tag.split(',')))
// console.log(allTags)

// es6 降维 arr.flat(depth)
const filterTags = new Set(allTags.reduce((prev, curr) => (prev.concat(curr)), []))
// console.log(filterTags)


export default {
  name: "LinksRecord",
  data() {
    return {
      linkLv: allLinks,
      filterTags,
    };
  },
  methods: {
    showTag(tag) {
      // console.log(tag)
      if (tag == 'all') {
        this.linkLv = allLinks
        return
      }
      let all = allLinks
      this.linkLv = all.filter((ele => ele.tag.indexOf(tag) != -1))
    },
  },
};
</script>

<style scoped></style>
