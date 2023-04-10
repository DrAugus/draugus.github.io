const url_prefix = '';

const url_game = url_prefix + '/game';

export const navbar_zh = [
  { text: '导航', link: 'https://augusmeow.github.io/' },
  {
    text: "原神",
    link: url_game + "/genshin/",
    activeMatch: url_game + "/genshin/",
  },
  {
    text: '赞助',
    link: url_prefix + '/sponsor'
  },

]
