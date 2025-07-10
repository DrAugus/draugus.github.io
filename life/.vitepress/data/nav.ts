import type { CardData } from '../type';

export const NAV_DATA: CardData[] = [
  {
    title: '努力学习',
    items: [
      {
        icon: 'https://www.hello-algo.com/assets/images/logo.svg',
        title: 'Hello 算法',
        desc: '动画图解、一键运行的数据结构与算法教程',
        link: 'https://www.hello-algo.com/'
      }, {
        icon: 'https://oi-wiki.org/favicon.ico',
        title: 'OI Wiki',
        desc: '编程竞赛 wiki 站点',
        link: 'https://oi-wiki.org/'
      },
      {
        icon: { svg: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em">        <path d="m21.66 10.44-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39c4.19.98 5.47 3.05 4.49 7.23Z" fill="#c9d1d9"></path>        <path d="M15.06 19.39c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76L2.5 13.28c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27Zm2.43-8.88c-.06 0-.12-.01-.19-.02l-4.85-1.23a.75.75 0 0 1 .37-1.45l4.85 1.23a.748.748 0 0 1-.18 1.47Z" fill="#228e6c"></path>        <path d="M14.56 13.89c-.06 0-.12-.01-.19-.02l-2.91-.74a.75.75 0 0 1 .37-1.45l2.91.74c.4.1.64.51.54.91-.08.34-.38.56-.72.56Z" fill="#228e6c"></path>      </svg>' },
        title: '开发人员速查表',
        desc: '快速查找技术栈命令',
        link: 'https://wangchujiang.com/reference/'
      },
      {
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M62.258 8.006a22.216 22.216 0 0 0-20.929 13.448c-3.404 8.169-.96 13.898 6.506 24.59c10.935 16.09 122.178 149.673 122.178 149.673l-24.619 23.038c-20.74 20.735-21.632 48.566-2.34 67.852l28.663 27.3l-79.976 98.235c-6.21 6.614-10.053 18.221-6.585 26.552a22.697 22.697 0 0 0 21.21 14.06a20.227 20.227 0 0 0 15.249-7.536l95.122-88.437L363.33 496.39a27.141 27.141 0 0 0 18.418 7.61a25.26 25.26 0 0 0 7.335-1.108a27.658 27.658 0 0 0 18.4-18.99a25.606 25.606 0 0 0-6.481-23.69L272.219 305.195l23.062-21.443c17.198-15.504 17.29-42.455.197-58.076l-25.257-24.228L357.417 98.46l.115-.133l.103-.14c7.793-10.123 11.52-17.92 7.502-27.806a36.169 36.169 0 0 0-23.647-18.37a24.07 24.07 0 0 0-3.166-.212l-.006.018a28.524 28.524 0 0 0-18.252 8.123l-.203.166l-.19.173L218.6 151.925L79.261 18.253S70.995 8.213 62.258 8.006m276.06 51.214c.742.003 1.484.051 2.22.148a29.306 29.306 0 0 1 17.719 13.81c2.246 5.523 1.554 10.01-6.506 20.484L264.861 196.3l-40.882-39.22l100.68-91.304a21.77 21.77 0 0 1 13.66-6.536zM175.077 201.127L395.19 464.872c4.32 5.408 7.02 10.818 5.18 16.914a20.246 20.246 0 0 1-13.463 14.037a17.617 17.617 0 0 1-5.17.784a19.792 19.792 0 0 1-13.293-5.56l-220.15-209.694c-17.317-17.316-14.698-40.33 2.158-57.186z"/></svg>' },
        title: 'arXiv',
        desc: 'arXiv is a free distribution service and an open-access archive for nearly 2.4 million scholarly articles in the fields of physics, mathematics, computer science, quantitative biology, quantitative finance, statistics, electrical engineering and systems science, and economics. Materials on this site are not peer-reviewed by arXiv.',
        link: 'https://arxiv.org/'
      },
      {
        icon: '',
        title: 'make',
        desc: 'make 命令 makefile 编写指南',
        link: 'https://wangchujiang.com/reference/docs/make.html'
      },
    ]
  }, {
    title: '课程学习',
    items: [{
      icon: '',
      title: '操作系统',
      desc: '南京大学 操作系统 课程 魔改版',
      link: 'https://jyywiki.cn/'
    }, {
      icon: '',
      title: '计算机自学指南',
      desc: '北京大学信科生主笔',
      link: 'https://csdiy.wiki/'
    },
    ]
  },
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://static.deepl.com/img/favicon/favicon_96.png',
        title: 'DeepL 翻译',
        desc: 'DeepL翻译：全世界最准确的翻译。',
        link: 'https://www.deepl.com/zh/translator'
      }, {
        icon: 'https://lzltool.cn/favicon.ico?v=1',
        title: '在线字符串转义',
        desc: '在线字符串转义工具可以将字符串中的双引号、单引号、换行符转义或去转义。',
        link: 'https://lzltool.cn/string-escape'
      }, {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn'
      }, {
        icon: 'https://regex101.com/static/assets/icon-96.png',
        title: 'regex101',
        desc: '正则表达式在线编辑器',
        link: 'https://regex101.com/'
      }, {
        icon: '',
        title: '地图',
        desc: '行政区划图',
        link: 'https://bajiu.cn/ditu/?qh=36'
      }, {
        icon: '',
        title: '图片坐标拾取工具',
        desc: '可以快速拾取图片中指定点的坐标',
        link: 'https://uutool.cn/img-coord/'
      },
      {
        icon: 'https://api.iconify.design/file-icons:latex.svg',
        title: 'LaTeX',
        desc: 'LaTeX 公式在线编辑器',
        link: 'https://www.latexlive.com/'
      },
      {
        title: 'Image Online',
        desc: '在线制作gif图像',
        link: 'https://gif.imageonline.co/cn/'
      },
      {
        // icon: 'https://www.iloveimg.com/img/iloveimg.svg',
        title: 'I💕IMG',
        desc: '可批量编辑图片 的所有工具',
        link: 'https://www.iloveimg.com/zh-cn'
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com'
      },
      {
        icon: 'https://www.remove.bg/favicon.ico',
        title: '图片背景擦除',
        desc: '智能擦除图片背景',
        link: 'https://www.remove.bg/'
      },
      {
        icon: '',
        title: '在图像中剪切圆圈',
        desc: '在图像中剪切圆圈',
        link: 'https://crop-circle.imageonline.co/cn/'
      },
      {
        icon: '',
        title: '智能配色',
        desc: '基于谷歌AI的智能配色工具',
        link: 'https://artsexperiments.withgoogle.com/artpalette/'
      },
      {
        icon: 'https://guyujiezi.com/static/icon.png',
        title: '科学字体生成器「谷雨解字」',
        desc: '一种基于网页字体技术可用于网页加密、反爬虫、防拷贝的在线工具',
        link: 'https://guyujiezi.com/'
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech'
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu'
      },
      {
        icon: '',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://oktools.net/'
      },
    ]
  },
  {
    title: '文史相关',
    items: [
      {
        icon: 'http://www.guoxue.com/favicon.ico',
        title: '国学网',
        desc: '文史阅读总站',
        link: 'http://www.guoxue.com'
      },
      {
        icon: 'http://www.guoxue.com/favicon.ico',
        title: '明史',
        desc: '二十四史系列——明史',
        link: 'http://www.guoxue.com/shibu/24shi/mingshi/lianshu.htm'
      },
    ]
  },
  {
    title: 'AI 导航',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT(最强)',
        link: 'https://chat.openai.com/chat'
      }, {
        icon: 'https://nlp-eb.cdn.bcebos.com/logo/favicon.ico',
        title: '文心一言',
        link: 'https://yiyan.baidu.com/'
      }, {
        icon: 'https://statics.moonshot.cn/kimi-chat/favicon.ico',
        title: 'KIMI',
        link: 'https://kimi.moonshot.cn/'
      }, {
        icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png',
        title: '豆包',
        link: 'https://www.doubao.com/chat/'
      },
      {
        // icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Character AI',
        link: 'https://beta.character.ai/'
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI(笔记)',
        link: 'https://www.notion.so'
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney(绘画)',
        link: 'https://www.midjourney.com'
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai(PPT)',
        link: 'https://www.beautiful.ai'
      },
    ]
  },
  {
    title: '后端开发',
    items: [
      {
        icon: 'https://en.cppreference.com/favicon.ico',
        title: 'cppreference.com',
        desc: 'cpp',
        link: 'https://en.cppreference.com/w/'
      },
      {
        icon: '',
        title: 'Atomics',
        desc: 'Rust Atomics and Locks',
        link: 'https://marabos.nl/atomics/'
      },
      {
        icon: '',
        title: '现代 cpp',
        // desc: '',
        link: 'https://changkun.de/modern-cpp/'
      },
      {
        icon: '',
        title: 'Linux 工具快速教程',
        // desc: '',
        link: 'https://linuxtools-rst.readthedocs.io/zh_CN/latest/'
      },
      {
        icon: '',
        title: 'Boost C++',
        // desc: '',
        link: 'https://www.boost.org/'
      },
      {
        icon: '',
        title: 'Rust 社区',
        // desc: '',
        link: 'https://crates.io/'
      },
      {
        icon: '',
        title: 'Standard C++',
        desc: 'News, Status & Discussion about Standard C++',
        link: 'https://isocpp.org/'
      },
      {
        icon: '',
        title: 'Rust 秘典',
        desc: { repo: 'https://github.com/rust-lang-cn/nomicon-zh-Hans' },
        link: 'https://nomicon.purewhite.io/'
      },
      {
        icon: '',
        title: 'Rust Doc',
        desc: 'The Rust Programming Language, an introductory book about Rust',
        link: 'https://doc.rust-lang.org/book/'
      },
    ]
  },
  {
    title: '撰写文档の框架',
    items: [
      {
        icon: 'https://vitepress.dev/vitepress-logo-mini.svg',
        title: 'Vitepress',
        desc: 'VitePress Vite & Vue Powered Static Site Generator. Simple, powerful, and fast. Meet the modern SSG framework you\'ve always wanted.',
        link: 'https://vitepress.dev/'
      },
      {
        icon: 'https://docusaurus.io/img/docusaurus.svg',
        title: 'Docusaurus',
        desc: 'Build optimized websites quickly, focus on your content',
        link: 'https://docusaurus.io/'
      },
      {
        icon: 'https://api.iconify.design/devicon:gitbook.svg',
        title: 'GitBook',
        desc: 'Engineering knowledge. Right where you work.',
        link: 'https://www.gitbook.com/'
      },
      {
        icon: 'https://jekyllrb.com/img/logo-2x.png',
        title: 'Jekyll',
        desc: 'Transform your plain text into static websites and blogs.',
        link: 'https://jekyllrb.com/'
      },
      {
        icon: 'https://gohugo.io/images/hugo-logo-wide.svg',
        title: 'Hugo',
        desc: 'The world\'s fastest framework for building websites',
        link: 'https://gohugo.io/'
      },
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org'
      },
    ]
  },
  {
    title: 'React 生态',
    items: [
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        link: 'https://zh-hans.reactjs.org'
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com'
      },
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        desc: '一个用于 Web 的 React 框架',
        link: 'https://nextjs.org'
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: 'UmiJS',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant.design'
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        title: 'Ant Design Mobile',
        desc: '构建移动 WEB 应用程序的 React 组件库',
        link: 'https://mobile.ant.design'
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction'
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: 'Valtio',
        desc: 'makes proxy-state simple for React and Vanilla',
        link: 'https://valtio.pmnd.rs'
      },
      {
        icon: 'https://jotai.org/favicon.svg',
        title: 'Jotai',
        desc: 'primitive and flexible state management for React',
        link: 'https://jotai.org'
      },
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        link: 'https://cn.redux.js.org'
      },
      {
        icon: 'https://zh.mobx.js.org/assets/mobx.png',
        title: 'MobX',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://zh.mobx.js.org'
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN'
      }
    ]
  },
  {
    title: 'Vue 生态',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org'
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh'
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh'
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com'
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org'
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org'
      },
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com'
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant'
      },
      {
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
        title: 'Cube UI',
        desc: '基于 Vue.js 实现的精致移动端组件库',
        link: 'https://didi.github.io/cube-ui'
      },
      {
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
        title: 'NutUI',
        desc: '京东风格的轻量级移动端组件库',
        link: 'https://nutui.jd.com'
      }
    ]
  },
  {
    title: 'JavaScript 框架类库',
    items: [
      {
        icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
        title: 'Svelte',
        desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
        link: 'https://svelte.dev'
      },
      {
        // icon: 'https://simpleicons.org/icons/jquery.svg',
        icon: '/icons/jquery.svg',
        title: 'jQuery API 中文文档',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'https://jquery.cuishifeng.cn'
      }
    ]
  },
  {
    title: 'CSS 相关',
    items: [
      {
        icon: 'https://api.iconify.design/logos:postcss.svg',
        title: 'PostCSS',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://postcss.org'
      },
      {
        icon: 'https://api.iconify.design/logos:sass.svg',
        title: 'Sass',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'https://sass-lang.com'
      },
      {
        icon: 'https://api.iconify.design/logos:tailwindcss-icon.svg',
        title: 'TailwindCSS 中文网',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://www.tailwindcss.cn'
      }
    ]
  },
  {
    title: '小程序相关',
    items: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: '微信小程序文档',
        desc: '微信小程序官方开发者文档',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/'
      },
      {
        icon: '/icons/taro.svg',
        title: 'Taro',
        desc: '多端统一开发解决方案',
        link: 'https://taro.jd.com'
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        desc: '一个使用 Vue.js 开发所有前端应用的框架',
        link: 'https://uniapp.dcloud.net.cn'
      },
      {
        icon: 'https://mpxjs.cn/favicon.ico',
        title: 'Mpx',
        desc: '增强型跨端小程序框架',
        link: 'https://mpxjs.cn'
      }
    ]
  },
  {
    title: 'Node 相关',
    items: [
      {
        icon: '/icons/nodejs.svg',
        title: 'Node.js',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.org/zh-cn'
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        link: 'https://expressjs.com'
      },
      {
        icon: '/icons/koa.svg',
        title: 'Koa',
        desc: '基于 Node.js 平台的下一代 web 开发框架',
        link: 'https://koajs.com'
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        desc: '为企业级框架和应用而生',
        link: 'https://www.eggjs.org/zh-CN'
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://docs.nestjs.cn'
      }
    ]
  },
  {
    title: '可视化',
    items: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html'
      },
      {
        icon: '',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        link: 'https://antv.vision/zh/'
      },
      {
        icon: 'https://api.iconify.design/logos:d3.svg',
        title: 'D3.js',
        desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
        link: 'https://d3js.org'
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: '一个简单而灵活的 JavaScript 图表库',
        link: 'https://www.chartjs.org'
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: 'Three.js',
        desc: 'JavaScript 3d 库',
        link: 'https://threejs.org'
      }
    ]
  },
  {
    title: '编译&构建&打包',
    items: [
      {
        icon: '',
        title: 'GCC GDB 技巧',
        desc: {
          others: [{
            text: 'gcc', link: 'https://github.com/hellogcc/100-gcc-tips',
          }, { text: 'gdb', link: 'https://github.com/hellogcc/100-gdb-tips', }]
        },
        target: '',
        link: ''
      },
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack 中文网',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.webpackjs.com'
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite 中文文档',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev'
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        desc: 'Rollup 是一个 JavaScript 模块打包器',
        link: 'https://www.rollupjs.com'
      },
      {
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        title: 'Turbo',
        desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
        link: 'https://turbo.build'
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn'
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        desc: 'An extremely fast bundler for the web',
        link: 'https://esbuild.github.io'
      },
      {
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        title: 'SWC',
        desc: 'Rust-based platform for the Web',
        link: 'https://swc.rs'
      }
    ]
  },
  {
    title: '图标库',
    items: [
      {
        icon: '',
        title: 'Icon',
        desc: 'all icons built by @antfu',
        link: 'https://icones.js.org/'
      },
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://www.iconfont.cn'
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        title: 'IconPark 图标库',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://iconpark.oceanengine.com/official'
      },
      {
        icon: 'https://emoji.muan.co/appicon.png',
        title: 'Emoji searcher',
        desc: 'Emoji 表情大全',
        link: ''
      },
    ]
  },
  {
    title: '前端学习资料',
    items: [
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN | Web 开发者指南',
        desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
        link: 'https://developer.mozilla.org/zh-CN'
      },
      {
        icon: '',
        title: '菜鸟教程',
        desc: '学的不仅是技术，更是梦想！',
        link: 'https://www.runoob.com'
      },
      {
        icon: '/icons/es6.svg',
        title: 'ES6 入门教程',
        desc: '阮一峰的网络日志',
        link: 'http://es6.ruanyifeng.com'
      }
    ]
  },
  {
    title: '社区',
    items: [
      {
        title: 'GitHub',
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
        },
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com'
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com'
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn'
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: '一个关于分享和探索的地方',
        link: 'https://www.v2ex.com'
      },
      {
        title: 'SegmentFault 思否',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com'
      },
      {
        title: '博客园',
        // icon: 'https://common.cnblogs.com/favicon.ico',
        icon: '/icons/cnblogs.svg',
        desc: '博客园是一个面向开发者的知识分享社区',
        link: 'https://www.cnblogs.com'
      },
      {
        title: '知乎',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://juejin.cn'
      }
    ]
  },
  {
    title: '收藏',
    items: [
      {
        icon: '',
        title: 'IP 地址查询',
        // desc: '',
        link: 'https://www.ipaddress.com/'
      },
      {
        icon: '',
        title: 'bing 壁纸',
        // desc: '',
        link: 'https://bing.ioliu.cn/'
      },
      {
        icon: '',
        title: '复旦大学东亚语言数据中心',
        // desc: '',
        link: 'http://minoritylanguages.cn/'
      }, {
        icon: 'https://bijinhyakka.com/wp-content/themes/bijinhyakka/favicon.ico',
        title: '美人百花',
        desc: '流行感がありながら社会性もある、華やかで好印象なスタイルを提案する雑誌',
        link: 'https://bijinhyakka.com/archives/new_release/'
      }, {
        // icon: 'https://bijinhyakka.com/wp-content/themes/bijinhyakka/favicon.ico',
        title: '48 Dress Types',
        desc: '48 Dress Types And What They Mean With Examples & Pictures',
        link: 'https://closetcachete.com/dress/type'
      },
    ]
  },
  {
    title: '摸鱼专用',
    items: [
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼热榜',
        // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: 'https://momoyu.cc'
      },
      {
        icon: 'https://api.iconify.design/arcticons:bilibili.svg',
        title: '哔哩哔哩',
        // desc: '',
        link: 'https://www.bilibili.com'
      },
      {
        icon: 'https://api.iconify.design/logos:youtube-icon.svg',
        title: 'YouTube',
        // desc: '',
        link: 'https://www.youtube.com'
      },
      {
        icon: '/icons/twitter.svg',
        title: 'Twitter',
        // desc: '',
        link: 'https://twitter.com'
      },
      {
        icon: '/icons/pixiv.png',
        title: 'Pixiv',
        // desc: '',
        link: 'https://www.pixiv.net'
      }
    ]
  }
];
