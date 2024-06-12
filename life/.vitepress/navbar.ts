import { navItem } from "./data/dirCode";

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
      { text: '最近学什么', link: '/course/latest' },
      { text: '哲学', link: '/course/philosophy/', activeMatch: '^/course/philosophy' },
      { text: '经济学', link: '/course/economics/', activeMatch: '^/course/economics' },
      { text: '法学', link: '/course/law/', activeMatch: '^/course/law' },
      { text: '教育学', link: '/course/education/', activeMatch: '^/course/education' },
      { text: '文学', link: '/course/literature/', activeMatch: '^/course/literature' },
      { text: '历史学', link: '/course/history/', activeMatch: '^/course/history' },
      { text: '理学', link: '/course/science/', activeMatch: '^/course/science' },
      { text: '工学', link: '/course/engineering/', activeMatch: '^/course/engineering' },
      { text: '农学', link: '/course/agronomy/', activeMatch: '^/course/agronomy' },
      { text: '医学', link: '/course/medicine/', activeMatch: '^/course/medicine' },
      { text: '军事学', link: '/course/military-science/', activeMatch: '^/course/military-science' },
      { text: '管理学', link: '/course/management/', activeMatch: '^/course/management' },
      { text: '艺术学', link: '/course/art/', activeMatch: '^/course/art' }
    ]
  },
  {
    text: '编程',
    items: [
      ...navItem,
      {
        text: '杂项',
        items: [
          { text: '配环境', link: '/code-notes/nipeima' },
          { text: '直接进入', link: '/code-notes/' },
        ],
        activeMatch: '^/code-notes',
      }, {
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
      { text: '散记', link: '/random-notes/', activeMatch: '/random-notes/' },
      { text: '思考', link: '/thought/', activeMatch: '/thought/' },
      { text: '职业', link: '/career/' },
      { text: '证书', link: '/exam/certificate/' },
      { text: '考试', link: '/exam/' },
      { text: '高考', link: '/exam/gaokao' },
      {
        text: '差不多得了',
        items: [
          { text: '疾病', link: '/disease/', activeMatch: '/disease/' },
          { text: '牢骚', link: '/grumbling/', activeMatch: '/grumbling/' },
          { text: '事故', link: '/accident/', activeMatch: '/accident/' },
          { text: '偷乐', link: '/funny/', activeMatch: '/funny/' },
        ],
      }, {
        text: '文科',
        items: [
          { text: '语言', link: '/arts/language/' },
          { text: '社会', link: '/arts/society/' },
          { text: '历史', link: '/arts/history/' },
          { text: '檄文', link: '/arts/xiwen/' },
          { text: '文章', link: '/arts/article/' },
          { text: '演讲', link: '/arts/speech/' },
        ],
        activeMatch: '^/arts',
      },
    ],
  },
  { text: '链接', link: '/nav', activeMatch: '^/nav' },

];