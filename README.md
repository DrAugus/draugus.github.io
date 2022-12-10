# Augus

## All Site

- [docus 🇨🇳][site1] [docus not 🇨🇳][site2]
- [site][site3]

## Develop

### Prerequisites

- nodejs(Version >= 16)
- yarn(Version >= 1) (`npm install -g yarn`)

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
yarn add vuepress@next vuepress-theme-hope@next && yarn install && yarn upgrade
```

## Contribute

Before you commit, please run `yarn vuepress-vite build src`

## Thanks

[JetBrains](https://www.jetbrains.com/zh-cn/community/opensource/#support)

## Reference

- [Snap.Genshin.Docs](https://github.com/DGP-Studio/Snap.Genshin.Docs)
- [VuePress](https://vuepress.vuejs.org/guide/deploy.html#github-pages)
- [vuepress deploy: step by step guide](https://github.com/marketplace/actions/vuepress-deploy#step-by-step-guide)
- [vuepress plugin giscus](https://vuepress-theme-hope.github.io/v2/comment/guide/giscus.html)
- [Vuepress Hope: vuepress-plugin-comment2](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/demo/comment2)
- [vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/)

[site1]: https://augus-docus.netlify.app/
[site2]: https://augus-docus.vercel.app/
[site3]: https://draugus.github.io/
