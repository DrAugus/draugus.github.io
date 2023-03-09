# AUGUS

## All Site ([pilot][pilot])

> cause [netlify][netlify] has been sending emails asking for payment all the time, so I [delete](https://app.netlify.com/user/settings#danger-zone) netlify account. And then, I deprecated [vercel][vercel] because every commit will be automatically built, I can't set trigger conditions.

| site | [github pages][new-repo] | source | tech|
| :--: |:--: |:--: | :--:|
| main site (now only game)|  [online][site0-1] [online2][site0-2] | [game](./game/) | [vuepress][vuepress] [vue3][vue]|
| variety of notes | [online][site1-1] | [notes](./notes/) | [nuxt docus][docus] [vue3][vue] |
| code | [online][site2-1] | [code](./code/) | [nuxt docus][docus] [vue3][vue] |
| art | [online][site3-1] | [art](./art/) | [nuxt docus][docus] [vue3][vue] |
| article | [online][site4-1] | [article](./article/) | [vitepress][vitepress] [vue3][vue] |
| trip | [online][site5-1] | [trip](./trip/) | [nuxt docus][docus] [vue3][vue] |

> notes/code/art site are same, why?

too many records, and "code page" doesn't seem to need `components`, so code page only use markdown file. while "notes page" and "art page" may need `components`. The pages are all separated to make them clearer.

## Tips

about nuxt.config.ts.example([art](./art/nuxt.config.ts.example) | [notes](./notes/nuxt.config.ts.example) | [code](./code/nuxt.config.ts.example))
> nuxt.config.ts for vercel deploy, while nuxt.config.ts.example for auto deploy by yml

## Develop

### Prerequisites

- nodejs (version >= 16)
- npm
- ~~yarn (`npm install -g yarn`)~~ yarn is no longer used, all are upgraded to pnpm
- pnpm (nuxt project required `npm install -g pnpm`)

### Git clone

```git
git clone https://github.com/DrAugus/draugus.github.io.git
```

### Run

6 sites, just run `pnpm i && pnpm dev`

- [game](./game/)
- [art](./art/)
- [article](./article/)
- [code](./code/)
- [notes](./notes/)
- [trip](./trip/)

powered

- [game](./game), powered by [vuepress][vuepress]  
- [article](./article/), [trip](./trip/), powered by [vitepress][vitepress]  
- for others, powered by [nuxt docus][docus]

### Upgrade

#### [game](./game), as vuepress

make sure all vuepress && plugins are up to date.

1. vuepress

    ```shell
    # with pnpm need add 
    pnpm add -D vue @vuepress/client@next @vuepress/utils@next
    # 
    pnpm add vuepress@next && pnpm install && pnpm upgrade
    ```

2. plugins

    ```shell
    pnpm add vuepress-plugin-clipboard@next @vuepress/client@next @vuepress/plugin-docsearch@next @vuepress/plugin-google-analytics@next && pnpm install && pnpm upgrade
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
[site2-1]: https://augusmeow.github.io/code/
[site3-1]: https://augusmeow.github.io/art/
[site4-1]: https://augusmeow.github.io/article/
[site5-1]: https://augusmeow.github.io/trip/
[netlify]: https://netlify.com/
[vercel]: https://vercel.com/
[docus]: https://docus.dev
[vue]: https://vuejs.org
[vuepress]: https://v2.vuepress.vuejs.org
[vitepress]: https://vitepress.vuejs.org/
[new-repo]: https://github.com/augusmeow/
