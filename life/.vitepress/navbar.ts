import { navItem } from "./data/dirCode";

export const navbar = [
  { text: '游戏', link: 'https://draugus.github.io/' },
  // { text: '最近更新', link: '/recent' },
  {
    text: '旅行',
    items: [
      { text: '介绍', link: '/trip/' },
      {
        text: '',
        items: [
          { text: '去哪', link: '/trip/where/' },
          { text: '飞行', link: '/trip/flying/' },
          { text: '游记', link: '/trip/travelogue/' },
          { text: '赶路', link: '/trip/journey/' },
          { text: '自驾', link: '/trip/drive/' },
        ],
      },
    ],
    activeMatch: '^/trip',
  },
  {
    text: '日常', items: [
      { text: '介绍', link: '/daily/' },
      {
        text: '',
        items: [
          { text: '小猫', link: '/daily/cat' },
          { text: '日用价格', link: '/daily/goods-price' },
          { text: '苹果购买记录', link: '/daily/apple/price' },],
      },
    ], activeMatch: '^/daily'
  },
  // { text: '吃点儿', link: '/eat/', activeMatch: '^/eat' },
  { text: '课程', link: '/course/', activeMatch: '^/course' },
  {
    text: '编程',
    items: [
      {
        text: '工具',
        items: [
          { text: '配环境', link: '/tools/nipeima' },
          { text: '全部工具', link: '/tools/' },
        ],
        activeMatch: '^/tools',
      },
      ...navItem,
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
      { text: '散记', link: '/random-notes/', activeMatch: '/random-notes/' },
      { text: '开发', link: '/dev/', activeMatch: '/dev/' },
      { text: '思考', link: '/thought/', activeMatch: '/thought/' },
      { text: '职业', link: '/career/', activeMatch: '/career/' },
      {
        text: '考试', items: [
          { text: '高考', link: '/exam/gaokao' },
          { text: '证书', link: '/exam/certificate/' },
        ], activeMatch: '^/exam',
      },
      {
        text: '差不多得了',
        items: [
          { text: '疾病', link: '/disease/', activeMatch: '/disease/' },
          { text: '牢骚', link: '/grumbling/', activeMatch: '/grumbling/' },
          { text: '事故', link: '/accident/', activeMatch: '/accident/' },
          { text: '偷乐', link: '/funny/', activeMatch: '/funny/' },
        ],
      },
      {
        text: '文科',
        items: [
          { text: '文章', link: '/article/', activeMatch: '/article/' },
          { text: '历史', link: '/history/', activeMatch: '/history/' },
          { text: '语言', link: '/language/', activeMatch: '/language/' },
        ],
      },
      { text: '演讲', link: '/speech/', activeMatch: '^/speech', },
      { text: '檄文', link: '/xiwen/', activeMatch: '^/xiwen', },
    ],
  },
  { text: '链接', link: '/nav', activeMatch: '^/nav' },

];