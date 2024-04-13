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
    text: '课程', items: [
      { text: '说明', link: '/course/' },
      { text: '经济学', link: '/course/economics/', activeMatch: '^/course/economics' },
      { text: '文学', link: '/course/literature/', activeMatch: '^/course/literature' },
      { text: '历史学', link: '/course/history/', activeMatch: '^/course/history' },
      { text: '理学', link: '/course/science/', activeMatch: '^/course/science' },
      { text: '工学', link: '/course/engineering/', activeMatch: '^/course/engineering' },
    ]
  },
  {
    text: '编程',
    items: [
      { text: '首页', link: '/code/' },
      { text: 'API', link: '/code/api/' },
      { text: 'C++', link: '/code/cpp/' },
      { text: '操作系统', link: '/code/os/' },
      { text: 'DSA', link: '/code/dsa/' },
      { text: '数据库', link: '/code/db/' },
      { text: '前端', link: '/code/front-end/' },
      {
        text: '代码笔记',
        items: [
          { text: '配环境', link: '/code-notes/nipeima' },
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
          { text: 'Linux 命令', link: '/code/os/linux/command' },
        ],
      },
      { text: '小小震撼', link: '/code/shock/' },
    ],
    activeMatch: '^/code',
  },
  {
    text: '待定',
    items: [
      { text: '学习', link: '/study/' },
      { text: '职业', link: '/career/' },
      { text: '证书', link: '/career/certificate/' },
      {
        text: '求学',
        items: [
          { text: '高考', link: '/pursuing-education/gaokao' },
        ],
      },
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
      {
        text: '文科',
        items: [
          { text: '首页', link: '/arts/' },
          { text: '语言', link: '/arts/language/' },
          { text: '社会', link: '/arts/society/' },
          { text: '历史', link: '/arts/history/' },
          { text: '檄文', link: '/arts/xiwen/' },
          { text: '文章', link: '/arts/article/' },
          { text: '演讲', link: '/arts/speech/' },
          { text: '一言', link: '/arts/one-word' },
        ],
        activeMatch: '^/arts',
      },
    ],
  },
  { text: '链接', link: '/nav', activeMatch: '^/nav' },

];