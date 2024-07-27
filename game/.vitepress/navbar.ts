const url_prefix = '';

const url_game = url_prefix + '';

export const navbar_zh = [
  { text: '导航', link: 'https://augusmeow.github.io/' },
  { text: "原神", link: url_game + "/genshin/" },
  { text: "星铁", link: url_game + "/hsr/" },
  { text: "绝区零", link: url_game + "/zzz/" },
  {
    text: '米哈游',
    items: [
      { text: "梗", link: `${url_game}/mhy/geng` },
      { text: "抽卡分析", link: `${url_game}/mhy/banner` },
    ],
    activeMatch: '^/trip',
  },
]
