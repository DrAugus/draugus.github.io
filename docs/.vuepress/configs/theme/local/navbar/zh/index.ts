const url_prefix = '/i18n/zh';

export const navbar_zh: Partial<any> = [
  {
    text: '主页',
    link: url_prefix + '/home/'
  },
  {
    text: "生活",
    link: url_prefix + '/life'
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