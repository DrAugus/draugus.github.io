# Augus

## All Site

| site | 🇨🇳 | others | tech|
| :--: |:--: |:--: | :--:|
| main site (now only game)|  [link][site0] | [link][site0]| vuepress vue3|
| variety of notes | [link][site1-1] | [link][site1-2]| nuxt docus vue3 |
| coding |[link][site2-1] | [link][site2-2]|nuxt docus vue3 |
| art | [link][site3-1] | [link][site3-2]|nuxt docus vue3 |

> notes/code/art site are same, why?

too many records, and "code page" doesn't seem to need `components`, so code page only use markdown file. while "notes page" and "art page" may need `components`. The pages are all separated to make them clearer.

## Develop

### Prerequisites

- nodejs (version >= 16)
- npm
- yarn (`npm install -g yarn`)
- pnpm (nuxt project required `npm install -g pnpm`)

### Git clone

```git
git clone https://github.com/DrAugus/draugus.github.io.git
```

### Run

```yarn
yarn install
yarn src:dev
```

### Upgrade

make sure all vuepress plugins are up to date.

plugins

```shell
yarn add vuepress-plugin-clipboard@next @vuepress/client@next @vuepress/plugin-docsearch@next @vuepress/plugin-google-analytics@next && yarn install && yarn upgrade
```

vuepress and theme

```shell
yarn add vuepress@next && yarn install && yarn upgrade
```

## Contribute

Before you commit, please run `yarn vuepress-vite build src`

## Thanks

[JetBrains](https://www.jetbrains.com/zh-cn/community/opensource/#support)

## Reference

- [Snap.Genshin.Docs](https://github.com/DGP-Studio/Snap.Genshin.Docs)
- [VuePress](https://vuepress.vuejs.org/guide/deploy.html#github-pages)
- [vuepress deploy: step by step guide](https://github.com/marketplace/actions/vuepress-deploy#step-by-step-guide)

[site0]: https://draugus.github.io/
[site1-1]: https://augus-docus.netlify.app/
[site1-2]: https://augus-docus.vercel.app/
[site2-1]: https://augus-code.netlify.app/
[site2-2]: https://augus-code.vercel.app/
[site3-1]: https://augus-art.netlify.app/
[site3-2]: https://augus-art.vercel.app/
