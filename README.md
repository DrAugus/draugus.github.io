# AUGUS

## All Site ([pilot][pilot])

> cause [netlify][netlify] has been sending emails asking for payment all the time, so I [delete](https://app.netlify.com/user/settings#danger-zone) netlify account. And then, I deprecated [vercel][vercel] because every commit will be automatically built, I can't set trigger conditions.

| SITE | [Github Pages][new-repo] | Source | TECH|
| :--: |:--: |:--: | :--:|
| main site (now only game)|  [online][site0-1], [online2][site0-2] | [game](./game/) | [vitepress][vitepress], [vue3][vue] |
| life | [online][site6-1], [online2][pilot] | [life](./life/) | [vitepress][vitepress], [vue3][vue] |

## Develop

### Prerequisites

- nodejs (version >= 16)
- npm
- ~~yarn (`npm install -g yarn`)~~ yarn is no longer used, all are upgraded to pnpm
- pnpm (`npm install -g pnpm`)

### Git clone

```bash
git clone https://github.com/DrAugus/draugus.github.io.git
cd draugus.github.io
pnpm i
# preview
./run.sh life/
./run.sh game/
# build
./run.sh life/ -b
./run.sh game/ -b
```

## Upgrade

You don't have to think about them. Just give them to the robot.

## Reference

[vitepress][vitepress]

[pilot]:https://augusmeow.github.io/
[site0-1]: https://draugus.github.io/
[site0-2]: https://augusmeow.github.io/game/
[site6-1]: https://augusmeow.github.io/life/
[netlify]: https://netlify.com/
[vercel]: https://vercel.com/
[vue]: https://vuejs.org
[vitepress]: https://vitepress.vuejs.org/
[new-repo]: https://github.com/augusmeow/
