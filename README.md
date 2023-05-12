# AUGUS

## All Site ([pilot][pilot])

> cause [netlify][netlify] has been sending emails asking for payment all the time, so I [delete](https://app.netlify.com/user/settings#danger-zone) netlify account. And then, I deprecated [vercel][vercel] because every commit will be automatically built, I can't set trigger conditions.

| site | [github pages][new-repo] | source | tech|
| :--: |:--: |:--: | :--:|
| main site (now only game)|  [online][site0-1] [online2][site0-2] | [game](./game/) | [vitepress][vitepress] [vue3][vue] |
| life | [online][site6-1] | [life](./life/) | [vitepress][vitepress] [vue3][vue] |

## Develop

### Prerequisites

- nodejs (version >= 16)
- npm
- ~~yarn (`npm install -g yarn`)~~ yarn is no longer used, all are upgraded to pnpm
- pnpm (`npm install -g pnpm`)

### Git clone

```git
git clone https://github.com/DrAugus/draugus.github.io.git
```

### Run

2 sites, just run `pnpm i && pnpm dev`

- [game](./game/), powered by [vitepress][vitepress]
- [life](./life/), powered by [vitepress][vitepress]

## Upgrade

You don't have to think about them. Just give them to the robot.

## Thanks

[JetBrains](https://www.jetbrains.com/zh-cn/community/opensource/#support)

## Reference

- [vitepress][vitepress]

[pilot]:https://augusmeow.github.io/
[site0-1]: https://draugus.github.io/
[site0-2]: https://augusmeow.github.io/game/
[site6-1]: https://augusmeow.github.io/life/
[netlify]: https://netlify.com/
[vercel]: https://vercel.com/
[vue]: https://vuejs.org
[vitepress]: https://vitepress.vuejs.org/
[new-repo]: https://github.com/augusmeow/
