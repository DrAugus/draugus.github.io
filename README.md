# AUGUS

## All Site ([pilot][pilot])

> cause [netlify][netlify] has been sending emails asking for payment all the time, so I [delete](https://app.netlify.com/user/settings#danger-zone) netlify account. And then, I deprecated [vercel][vercel] because every commit will be automatically built, I can't set trigger conditions.

| site | [github pages][new-repo] | source | tech|
| :--: |:--: |:--: | :--:|
| main site (now only game)|  [online][site0-1] [online2][site0-2] | [game](./game/) | [vitepress][vitepress] [vue3][vue] |
| arts | [online][site4-1] | [arts](./arts/) | [vitepress][vitepress] [vue3][vue] |
| life | [online][site6-1] | [life](./life/) | [vitepress][vitepress] [vue3][vue] |
| variety of notes | [online][site1-1] | [notes](./notes/) | [nuxt docus][docus] [vue3][vue] |
| code | [online][site2-1] | [code](./code/) | [nuxt docus][docus] [vue3][vue] |

> notes/code site are same, why?

too many records, and "code page" doesn't seem to need `components`, so code page only use markdown file. while "notes page" may need `components`. The pages are all separated to make them clearer.

## Tips

> vercel canceled, below not applicable.
about nuxt.config.ts.example([notes](./notes/nuxt.config.ts.example) | [code](./code/nuxt.config.ts.example))
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

7 sites, just run `pnpm i && pnpm dev`

- [game](./game/)
- [arts](./arts/)
- [code](./code/)
- [notes](./notes/)
- [life](./life/)

powered

- [game](./game), [arts](./arts/), [life](./life/), powered by [vitepress][vitepress]
- for others, powered by [nuxt docus][docus]

## Upgrade

You don't have to think about them. Just give them to the robot.

## Thanks

[JetBrains](https://www.jetbrains.com/zh-cn/community/opensource/#support)

## Reference

- [vitepress][vitepress]

[pilot]:https://augusmeow.github.io/
[site0-1]: https://draugus.github.io/
[site0-2]: https://augusmeow.github.io/game/
[site1-1]: https://augusmeow.github.io/notes/
[site2-1]: https://augusmeow.github.io/code/
[site4-1]: https://augusmeow.github.io/arts/
[site6-1]: https://augusmeow.github.io/life/
[netlify]: https://netlify.com/
[vercel]: https://vercel.com/
[docus]: https://docus.dev
[vue]: https://vuejs.org
[vitepress]: https://vitepress.vuejs.org/
[new-repo]: https://github.com/augusmeow/
