export const navbar = [
  { text: '游戏', link: 'https://draugus.github.io/' },
  { text: '链接', link: '/nav', activeMatch: '^/nav' },
  { text: '吃点儿', link: '/eat/', activeMatch: '^/eat' },
  { text: '日常', link: '/daily/', activeMatch: '^/daily' },
  {
    text: '旅行',
    items: [
      { text: '介绍', link: '/trip/' },
      { text: '游记', link: '/trip/travelogue/' },
      {
        text: '去哪', items: [
          { text: '国内', link: '/trip/china/' },
          { text: '国外', link: '/trip/abroad/' },
        ]
      },
    ],
    activeMatch: '^/trip',
  },
  {
    text: '文科',
    items: [
      { text: '首页', link: '/arts/' },
      { text: '语言', link: '/arts/language/' },
      { text: '经济', link: '/arts/economics/' },
      { text: '社会', link: '/arts/society/' },
      { text: '历史', link: '/arts/history/' },
      { text: '乐理', link: '/arts/music/' },
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
    text: '编程',
    items: [
      { text: '首页', link: '/code/' },
      { text: 'API', link: '/code/api/' },
      { text: 'C++', link: '/code/cpp/' },
      { text: 'DSA', link: '/code/dsa/' },
      { text: '数据库', link: '/code/db/' },
      { text: '代码笔记', link: '/code/code-notes/' },
      { text: '八股文', link: '/code/interview/' },
      { text: '其他代码', link: '/code/other-code/' },
      {
        text: '速查清单',
        items: [
          { text: 'Linux 命令', link: '/code/code-notes/linux/command' },
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

]