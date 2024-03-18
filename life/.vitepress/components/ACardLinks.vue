<!-- https://github.com/maomao1996/mm-notes/tree/master/docs/nav -->
<script setup lang="ts">
import { computed } from 'vue';
import { slugify } from '@mdit-vue/shared';

import ACardLink from './ACardLink.vue';
import type { CardLink } from '../type';

const props = defineProps<{
  title?: string,
  items: CardLink[],
  target?: string,
  long?: boolean,
}>();

const formatTitle = computed(() => {
  return props.title ? slugify(props.title) : '';
});
</script>

<template>
  <h2 v-if="title" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </h2>
  <div class="m-nav-links" :class="long ? 'long-width-links' : ''">
    <ACardLink v-for="{ icon, title, date, desc, link } in items" :key="link" :icon="icon" :title="title" :date="date"
      :desc="desc" :link="link" :target="target" />
  </div>
</template>

<style lang="scss" scoped>
.m-nav-links {
  --m-nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--m-nav-gap);
  grid-column-gap: var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--m-nav-gap);
}

.long-width-links {
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

@each $media,
$size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .m-nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@each $media,
$size in (500px: 280px, 640px: 310px, 768px: 350px, 960px: 400px, 1440px: 480px) {
  @media (min-width: $media) {
    .long-width-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .m-nav-links {
    --m-nav-gap: 20px;
  }
}
</style>
