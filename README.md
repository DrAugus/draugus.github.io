# Augus

## Develop

### prerequisites

- nodejs(Version >= 16)
- yarn(Version >= 1) (`npm install -g yarn`)

### git clone

```git
git clone https://github.com/DrAugus/draugus.github.io.git
```

### run

```yarn
yarn install
yarn docs:dev
```

### upgrade

```yarn
yarn add vuepress@next vuepress-theme-hope@next && yarn install && yarn upgrade
```

## Contribute

Before you commit, please run `vuepress-vite build docs`

## Thanks

[JetBrains](https://www.jetbrains.com/zh-cn/community/opensource/#support)

## Reference

* [Snap.Genshin.Docs](https://github.com/DGP-Studio/Snap.Genshin.Docs)
* [VuePress](https://vuepress.vuejs.org/guide/deploy.html#github-pages)
* [vuepress deploy: step by step guide](https://github.com/marketplace/actions/vuepress-deploy#step-by-step-guide)
* [vuepress plugin giscus](https://vuepress-theme-hope.github.io/v2/comment/guide/giscus.html)
* [Vuepress Hope: vuepress-plugin-comment2](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/demo/comment2)

## Introduction

- life => tech game trip memory
- learn => art blog code audition struct feature
- social => character war accident

> 架构暂定

- 生活 => 科技 游戏 旅行 回忆
- 学习 => 艺术 博客 散记 代码 面试 指南 架构
- 社会 => 人物 战争 事故

### About blog home page

In blog home page.

To use this layout, you should set both `layout: Blog` and `home: true` in the page front matter.

For related configuration docs, please see [blog homepage](https://vuepress-theme-hope.github.io/v2/guide/blog/home/).

### About site info page

This is an example of a normal homepage. You can place your main content here.

To use this layout, you need to set `home: true` in the page front matter.

For related descriptions of configuration items, please see [Project HomePage Layout Config](https://vuepress-theme-hope.github.io/v2/guide/layout/home/).
