const url_prefix = '/i18n/zh';

export const navbar_zh: Partial<any> = [
  {
    text: '主页',
    link: url_prefix + '/home/'
  },
  {
    text: "生活",
    children: [
      {
        text: '旅行',
        link: url_prefix + '/life/trip/'
      },
      {
        text: '记忆',
        link: url_prefix + '/life/memory/'
      },
      {
        text: '社会',
        children: [
          {
            text: '事故',
            link: url_prefix + '/life/social/accident/'
          },
        ]
      },
    ]
  },
  {
    text: "编程",
    children: [
      {
        text: '面试题解',
        link: url_prefix + '/code/audition/'
      },
      {
        text: '开发',
        children: [
          {
            text: '开发此项目',
            link: url_prefix + '/development/'
          },
        ]
      },
    ]
  },
  {
    text: "人物",
    children: [
      {
        text: '人物简介',
        children: [
          {
            text: '唐纳德·约翰·特朗普',
            link: url_prefix + '/biography/donald/'
          },
          {
            text: '泰勒斯威夫特',
            link: url_prefix + '/biography/taylor/'
          },
        ]
      },
    ]
  },
  {
    text: '外链',
    children: [
      {
        text: '英国王室',
        children: [
          {
            text: '温莎',
            link: 'https://augusmeow.cn/RoyalFamily/'
          },
        ]
      },
      {
        text: '博客',
        children: [
          {
            text: '博文',
            link: 'https://augusmeow.cn/blog/'
          },
          {
            text: '原神',
            link: 'https://augusmeow.cn/list/genshin'
          },
        ]
      },
    ]
  },
  {
    text: '赞助',
    link: url_prefix + '/sponsor'
  },

]