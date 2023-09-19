export const navbar = [
  { text: '游戏', link: 'https://draugus.github.io/' },
  // { text: '最近更新', link: '/recent' },
  {
    text: '旅行',
    items: [
      { text: '介绍', link: '/trip/' },
      { text: '游记', link: '/trip/travelogue/' },
      { text: '去哪', link: '/trip/where' },
    ],
    activeMatch: '^/trip',
  },
  { text: '日常', link: '/daily/', activeMatch: '^/daily' },
  // { text: '吃点儿', link: '/eat/', activeMatch: '^/eat' },
  {
    text: '文科',
    items: [
      { text: '首页', link: '/arts/' },
      {
        text: '看看',
        items: [
          { text: '语言', link: '/arts/language/' },
          { text: '经济', link: '/arts/economics/' },
          { text: '社会', link: '/arts/society/' },
          { text: '历史', link: '/arts/history/' },
          { text: '乐理', link: '/arts/music/' },]
      },
      {
        text: '语文',
        items: [
          { text: '檄文', link: '/arts/xiwen/' },
          { text: '文章', link: '/arts/article/' },
        ],
      },
      { text: '一言', link: '/arts/one-word' },
    ],
    activeMatch: '^/arts',
  },
  {
    text: '电脑',
    items: [
      { text: '操作系统', link: '/computer/os/' },
      { text: '软件', link: '/computer/software/' },
    ]
  },
  {
    text: '编程',
    items: [
      { text: '首页', link: '/code/' },
      { text: 'API', link: '/code/api/' },
      { text: 'C++', link: '/code/cpp/' },
      { text: 'DSA', link: '/code/dsa/' },
      { text: '数据库', link: '/code/db/' },
      { text: '前端', link: '/code/front-end/' },
      {
        text: '代码笔记',
        items: [
          { text: '直接进入', link: '/code-notes/' },
          { text: '导航指示', link: '/code-notes/intro' },
        ],
        activeMatch: '^/code-notes',
      },
      { text: '八股文', link: '/code/interview/' },
      { text: '编程语言', link: '/code/program/' },
      {
        text: '速查清单',
        items: [
          { text: 'Linux 命令', link: '/computer/os/linux/command' },
        ],
      },
      {
        text: '小小震撼',
        items: [
          { text: '小妙招', link: '/code/clue' },
          { text: '小外包', link: '/code/outsourcing-co' },
        ],
      },
    ],
    activeMatch: '^/code',
  },
  {
    text: '待定',
    items: [
      { text: '学习', link: '/study/' },
      { text: '职业', link: '/career/' },
      {
        text: '差不多得了',
        items: [
          { text: '想法', link: '/thought/' },
          { text: '牢骚', link: '/grumbling/' },
          { text: '女人', link: '/thought/woman' },
          { text: '事故', link: '/accident/' },
          { text: '偷乐', link: '/funny/' },
        ],
      },
      {
        text: '大抵是病了',
        items: [
          { text: '病', link: '/disease/' },
        ],
      },
    ],
  },
  { text: '链接', link: '/nav', activeMatch: '^/nav' },

]