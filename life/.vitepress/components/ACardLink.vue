<!-- https://github.com/maomao1996/mm-notes/tree/master/docs/nav -->
<script setup lang="ts">
import { computed } from 'vue';
import { withBase } from 'vitepress';
import { slugify } from '@mdit-vue/shared';

import { CardLink, LinkName } from '../type';

const props = defineProps<{
  icon?: CardLink['icon'];
  title?: CardLink['title'];
  date?: CardLink['date'];
  desc?: CardLink['desc'];
  link: CardLink['link'];
  target?: CardLink['target'];
  bgColor?: CardLink['bgColor'];
}>();

const formatTitle = computed(() => {
  if (!props.title) {
    return '';
  }
  return slugify(props.title);
});

const svg = computed(() => {
  if (typeof props.icon === 'object') return props.icon.svg;
  return '';
});

const prefixGitHub = 'https://github.com/';

const splitLink = (text: string, link: string) => {

  if (link.includes(prefixGitHub)) {
    return splitRepo(text, link);
  }

  let splitDot = link.split('.');
  // rm https://www
  splitDot = splitDot.slice(1);
  let res = '';
  for (let i = 0; i < splitDot.length; ++i) {
    let v = splitDot[i];
    res += v;
    if (v.indexOf('/') != -1 || i == splitDot.length - 1) {
      if (v.endsWith('/')) {
        res = res.slice(0, -1);
      }
      break;
    }
    res += '.';
  }
  let obj: LinkName = {
    text,
    link
  };
  return modifyLink(obj, res);
};

const splitRepo = (text: string, link: string) => {

  let obj: LinkName = {
    text,
    link
  };
  return modifyLink(obj, link.replace(prefixGitHub, ''));
};

const modifyLink = (obj: LinkName, res: string) => {
  let target = '_blank';
  let textInfo = `<b>${obj.text}</b>: `;
  let linkInfo = `<a href="${obj.link}" target='${target}' rel='noreferrer' > ${res}</a>`;

  return textInfo + linkInfo;
}

</script>

<template>
  <a class="m-nav-link" :href="link ? link : ''" :target="!link ? '' : !target ? '' : '_blank'" rel="noreferrer"
    :style="{ backgroundColor: bgColor ? bgColor : '' }">
    <article class="box">
      <div class="box-header">
        <div v-if="svg" class="icon" v-html="svg"></div>
        <div v-else-if="icon && typeof icon === 'string'" class="icon">
          <img :src="withBase(icon)" :alt="title" onerror="this.parentElement.style.display='none'" />
        </div>
        <div v-else class="icon">😛</div>
        <h5 v-if="title" :id="formatTitle" class="title">{{ title }}</h5>
      </div>
      <span v-if="date" class="italic">{{ date }}</span>
      <div v-if="desc">
        <p v-if="typeof desc === 'string'" class="desc" v-html="desc"></p>
        <div v-else-if="'desc instanceof LibsInfo'" class="desc">
          <ul>
            <li v-if="desc.intro" class="desc intro" v-html="'<b>Intro: </b>' + desc.intro"> </li>
            <li v-if="desc.repo" class="desc" v-html="splitRepo('Repo', desc.repo)"> </li>
            <li v-if="desc.homepage" class="desc" v-html="splitLink('homepage', desc.homepage)"> </li>
            <li v-if="desc.guide" class="desc" v-html="splitLink('guide', desc.guide)"> </li>
            <div v-if="desc.others">
              <li v-for="(v, i) in desc.others" class="desc" v-html="splitLink(v.text, v.link)"> </li>
            </div>
          </ul>
        </div>

      </div>

    </article>
  </a>
</template>

<style lang="scss" scoped>
.m-nav-link {
  --m-nav-icon-box-size: 40px;
  --m-nav-icon-size: 24px;
  --m-nav-box-gap: 12px;

  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.25s;

  text-decoration: none;

  &:hover {
    box-shadow: var(--vp-shadow-2);
    border-color: var(--vp-c-brand);
    text-decoration: initial;
    background-color: var(--vp-c-bg-soft-up);
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: var(--m-nav-box-gap);
    height: 100%;
    color: var(--vp-c-text-1);

    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: calc(var(--m-nav-box-gap) - 2px);
    border-radius: 6px;
    width: var(--m-nav-icon-box-size);
    height: var(--m-nav-icon-box-size);
    font-size: var(--m-nav-icon-size);
    background-color: var(--vp-c-bg-soft-down);
    transition: background-color 0.25s;

    :deep(svg) {
      width: var(--m-nav-icon-size);
      fill: currentColor;
    }

    :deep(img) {
      border-radius: 4px;
      width: var(--m-nav-icon-size);
    }
  }

  .title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: var(--m-nav-icon-box-size);
    font-size: 16px;
    font-weight: 600;
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
    line-height: 1.5;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }

  .intro {
    -webkit-line-clamp: 5;
  }

  .italic {
    font-style: italic;
  }

}

@media (max-width: 960px) {
  .m-nav-link {
    --m-nav-icon-box-size: 36px;
    --m-nav-icon-size: 20px;
    --m-nav-box-gap: 8px;

    .title {
      font-size: 14px;
    }
  }
}
</style>
