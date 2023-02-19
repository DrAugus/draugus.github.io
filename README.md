# AUGUS

## All Site ([pilot][pilot])

> cause [netlify][netlify] has been sending emails asking for payment all the time, so I [delete](https://app.netlify.com/user/settings#danger-zone) netlify account

| site | [github pages][new-repo] (🇨🇳) | [vercel][vercel] (other countries) | source | tech|
| :--: |:--: |:--: | :--:| :--:|
| main site (now only game)|  [online][site0-1] [online2][site0-2] | - | [game](./game/) | [vuepress][vuepress] [vue3][vue]|
| variety of notes | [online][site1-1] | [online][site1-2] | [notes](./notes/) | [nuxt docus][docus] [vue3][vue] |
| code | [online][site2-1] | [online][site2-2] | [code](./code/) | [nuxt docus][docus] [vue3][vue] |
| art | [online][site3-1] | [online][site3-2] | [art](./art/) | [nuxt docus][docus] [vue3][vue] |
| article | [online][site4-1] | - | [article](./article/) | [vitepress][vitepress] [vue3][vue] |

> notes/code/art site are same, why?

too many records, and "code page" doesn't seem to need `components`, so code page only use markdown file. while "notes page" and "art page" may need `components`. The pages are all separated to make them clearer.

## Tips

about nuxt.config.ts.example([art](./art/nuxt.config.ts.example) | [notes](./notes/nuxt.config.ts.example) | [code](./code/nuxt.config.ts.example))
> nuxt.config.ts for vercel deploy, while nuxt.config.ts.example for auto deploy by yml

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

5 sites

- [game](./game/)
- [art](./art/)
- [article](./article/)
- [code](./code/)
- [notes](./notes/)

[game](./game), use and run [vuepress][vuepress], just run `yarn install && yarn src:dev`  
[article](./article/), use and run [vitepress][vitepress], just run `yarn install && yarn dev`  
for others, run `pnpm i && pnpm dev`

### Upgrade

#### [game](./game), as vuepress

make sure all vuepress && plugins are up to date.

1. vuepress

    ```shell
    yarn add vuepress@next && yarn install && yarn upgrade
    ```

2. plugins

    ```shell
    yarn add vuepress-plugin-clipboard@next @vuepress/client@next @vuepress/plugin-docsearch@next @vuepress/plugin-google-analytics@next && yarn install && yarn upgrade
    ```

#### others

You don't have to think about them. Just give them to the robot.

## Thanks

[JetBrains](https://www.jetbrains.com/zh-cn/community/opensource/#support)

## Reference

- [Snap.Genshin.Docs](https://github.com/DGP-Studio/Snap.Genshin.Docs)
- [VuePress](https://vuepress.vuejs.org/guide/deploy.html#github-pages)
- [vuepress deploy: step by step guide](https://github.com/marketplace/actions/vuepress-deploy#step-by-step-guide)

[pilot]:https://augusmeow.github.io/
[site0-1]: https://draugus.github.io/
[site0-2]: https://augusmeow.github.io/game/
[site1-1]: https://augusmeow.github.io/notes/
[site1-2]: https://augus-notes.vercel.app/
[site2-1]: https://augusmeow.github.io/code/
[site2-2]: https://augus-code.vercel.app/
[site3-1]: https://augusmeow.github.io/art/
[site3-2]: https://augus-art.vercel.app/
[site4-1]: https://augusmeow.github.io/article/
[netlify]: https://netlify.com/
[vercel]: https://vercel.com/
[docus]: https://docus.dev
[vue]: https://vuejs.org
[vuepress]: https://v2.vuepress.vuejs.org
[vitepress]: https://vitepress.vuejs.org/
[new-repo]: https://github.com/augusmeow/
