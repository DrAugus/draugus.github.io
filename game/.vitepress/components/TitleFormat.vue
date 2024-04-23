<script setup lang="ts">
import { computed } from 'vue';
import { slugify } from '@mdit-vue/shared';


const props = defineProps<{
  title: string,
  // head number
  number: number,
}>();

const formatTitle = computed(() => {
  return slugify(props.title);
});
</script>

<template>
  <h1 v-if="number == 1" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </h1>
  <h2 v-if="number == 2" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </h2>
  <h3 v-if="number == 3" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </h3>
  <h4 v-if="number == 4" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </h4>
</template>
