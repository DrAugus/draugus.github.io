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
        title: 'ChatGPT',
        link: 'https://chat.openai.com/chat',
        desc: 'OpenAI开发的通用对话式AI，支持多轮对话、文本生成与复杂问题解答'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="31.88" height="32" viewBox="0 0 256 257"><!-- Icon from SVG Logos by Gil Barbara - https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt --><path fill="#D97757" d="m50.228 170.321l50.357-28.257l.843-2.463l-.843-1.361h-2.462l-8.426-.518l-28.775-.778l-24.952-1.037l-24.175-1.296l-6.092-1.297L0 125.796l.583-3.759l5.12-3.434l7.324.648l16.202 1.101l24.304 1.685l17.629 1.037l26.118 2.722h4.148l.583-1.685l-1.426-1.037l-1.101-1.037l-25.147-17.045l-27.22-18.017l-14.258-10.37l-7.713-5.25l-3.888-4.925l-1.685-10.758l7-7.713l9.397.649l2.398.648l9.527 7.323l20.35 15.75L94.817 91.9l3.889 3.24l1.555-1.102l.195-.777l-1.75-2.917l-14.453-26.118l-15.425-26.572l-6.87-11.018l-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0l10.63 1.426l4.472 3.888l6.61 15.101l10.694 23.786l16.591 32.34l4.861 9.592l2.592 8.879l.973 2.722h1.685v-1.556l1.36-18.211l2.528-22.36l2.463-28.776l.843-8.1l4.018-9.722l7.971-5.25l6.222 2.981l5.12 7.324l-.713 4.73l-3.046 19.768l-5.962 30.98l-3.889 20.739h2.268l2.593-2.593l10.499-13.934l17.628-22.036l7.778-8.749l9.073-9.657l5.833-4.601h11.018l8.1 12.055l-3.628 12.443l-11.342 14.388l-9.398 12.184l-13.48 18.147l-8.426 14.518l.778 1.166l2.01-.194l30.46-6.481l16.462-2.982l19.637-3.37l8.88 4.148l.971 4.213l-3.5 8.62l-20.998 5.184l-24.628 4.926l-36.682 8.685l-.454.324l.519.648l16.526 1.555l7.065.389h17.304l32.21 2.398l8.426 5.574l5.055 6.805l-.843 5.184l-12.962 6.611l-17.498-4.148l-40.83-9.721l-14-3.5h-1.944v1.167l11.666 11.406l21.387 19.314l26.767 24.887l1.36 6.157l-3.434 4.86l-3.63-.518l-23.526-17.693l-9.073-7.972l-20.545-17.304h-1.36v1.814l4.73 6.935l25.017 37.59l1.296 11.536l-1.814 3.76l-6.481 2.268l-7.13-1.297l-14.647-20.544l-15.1-23.138l-12.185-20.739l-1.49.843l-7.194 77.448l-3.37 3.953l-7.778 2.981l-6.48-4.925l-3.436-7.972l3.435-15.749l4.148-20.544l3.37-16.333l3.046-20.285l1.815-6.74l-.13-.454l-1.49.194l-15.295 20.999l-23.267 31.433l-18.406 19.702l-4.407 1.75l-7.648-3.954l.713-7.064l4.277-6.286l25.47-32.405l15.36-20.092l9.917-11.6l-.065-1.686h-.583L44.07 198.125l-12.055 1.555l-5.185-4.86l.648-7.972l2.463-2.593l20.35-13.999z"/></svg>'
        },
        title: 'Claude',
        link: 'https://claude.ai/',
        desc: 'Anthropic开发的对话式AI，以安全性和长文本处理能力著称'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><!-- Icon from Material Icon Theme by Material Extensions - https://github.com/material-extensions/vscode-material-icon-theme/blob/main/LICENSE --><path fill="#448AFF" d="M15 8.014A7.457 7.457 0 0 0 8.014 15h-.028A7.456 7.456 0 0 0 1 8.014v-.028A7.456 7.456 0 0 0 7.986 1h.028A7.457 7.457 0 0 0 15 7.986z"/></svg>'
        },
        title: 'Gemini',
        link: 'https://gemini.google.com/',
        desc: 'Google推出的多模态大模型，支持文本、图像、视频等跨模态理解'
      },
      {
        icon: 'https://github.githubassets.com/favicon.ico',
        title: 'GitHub Copilot',
        link: 'https://github.com/copilot',
        desc: 'AI编程助手，基于上下文自动生成代码建议与完整函数'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 26" fill="none" class="ce41ed1b"><g clip-path="url(#a)"><path fill="#3964fe" d="M33.615 2.598c-.36-.176-.515.16-.726.33-.072.055-.132.127-.193.193-.526.562-1.14.93-1.943.887-1.174-.067-2.176.302-3.062 1.2-.188-1.107-.814-1.767-1.766-2.191-.498-.22-1.002-.441-1.35-.92-.244-.341-.31-.721-.433-1.096-.077-.226-.154-.457-.415-.496-.282-.044-.393.193-.504.391-.443.81-.614 1.702-.598 2.605.04 2.033.898 3.652 2.603 4.803.193.132.243.264.182.457-.116.397-.254.782-.376 1.179-.078.253-.194.308-.465.198-.936-.391-1.744-.97-2.458-1.669-1.213-1.173-2.31-2.467-3.676-3.48a16.254 16.254 0 0 0-.975-.668c-1.395-1.354.183-2.467.548-2.599.382-.138.133-.612-1.102-.606-1.234.005-2.364.42-3.803.97a4.34 4.34 0 0 1-.66.193 13.577 13.577 0 0 0-4.08-.143c-2.667.297-4.799 1.558-6.365 3.712C.116 8.436-.327 11.378.215 14.444c.57 3.233 2.22 5.91 4.755 8.002 2.63 2.17 5.658 3.233 9.113 3.03 2.098-.122 4.434-.403 7.07-2.633.664.33 1.362.463 2.518.562.892.083 1.75-.044 2.414-.182 1.04-.22.97-1.184.593-1.36-3.05-1.421-2.38-.843-2.99-1.311 1.55-1.834 3.918-5.093 4.648-9.531.072-.49.164-1.18.153-1.577-.006-.242.05-.336.326-.364a5.903 5.903 0 0 0 2.187-.672c1.977-1.08 2.774-2.853 2.962-4.978.028-.325-.006-.661-.35-.832ZM16.39 21.73c-2.956-2.324-4.39-3.089-4.982-3.056-.554.033-.454.667-.332 1.08.127.407.293.688.526 1.046.16.237.271.59-.161.854-.952.589-2.607-.198-2.685-.237-1.927-1.134-3.537-2.632-4.673-4.68-1.096-1.972-1.733-4.087-1.838-6.345-.028-.545.133-.738.676-.837A6.643 6.643 0 0 1 5.086 9.5c3.017.441 5.586 1.79 7.74 3.927 1.229 1.217 2.159 2.671 3.116 4.092 1.02 1.509 2.115 2.946 3.51 4.125.494.413.887.727 1.263.958-1.135.127-3.028.154-4.324-.87v-.002Zm1.417-9.114a.434.434 0 0 1 .587-.408c.06.022.117.055.16.105a.426.426 0 0 1 .122.303.434.434 0 0 1-.437.435.43.43 0 0 1-.432-.435Zm4.402 2.257c-.283.116-.565.215-.836.226-.421.022-.88-.149-1.13-.358-.387-.325-.664-.506-.78-1.073-.05-.242-.022-.617.022-.832.1-.463-.011-.76-.338-1.03-.265-.22-.603-.28-.974-.28a.8.8 0 0 1-.36-.11c-.155-.078-.283-.27-.161-.508.039-.077.227-.264.271-.297.504-.286 1.085-.193 1.623.022.498.204.875.578 1.417 1.107.553.639.653.815.968 1.295.25.374.476.76.632 1.2.094.275-.028.5-.354.638Z"></path></g></svg>'
        },
        title: 'DeepSeek',
        link: 'https://chat.deepseek.com/',
        desc: 'DeepSeek是由深度求索公司开发的AI助手，提供智能对话服务。'
      },
      {
        icon: 'https://nlp-eb.cdn.bcebos.com/logo/favicon.ico',
        title: '文心一言',
        link: 'https://yiyan.baidu.com/',
        desc: '百度研发的生成式对话产品，融合文学创作、商业文案与多模态生成能力'
      },
      {
        icon: 'https://statics.moonshot.cn/kimi-chat/favicon.ico',
        title: 'Kimi',
        link: 'https://kimi.moonshot.cn/',
        desc: '月之暗面推出的智能助手，擅长长文本处理与多语言交互'
      },
      {
        icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png',
        title: '豆包',
        link: 'https://www.doubao.com/chat/',
        desc: '字节跳动旗下AI对话工具，支持个性化角色设定与实用工具集成'
      },
      {
        icon: '/icons/tongyi.svg',
        title: '通义千问',
        link: 'https://tongyi.aliyun.com/',
        desc: '阿里云通义系列大模型，提供文本生成、图像理解等多场景AI服务'
      },
      {
        icon: '/icons/tiangong.svg',
        title: '天工AI',
        link: 'https://www.tiangong.cn/',
        desc: '昆仑万维推出的双千亿级大模型，聚焦搜索增强与多模态交互'
      },
      {
        icon: '/icons/xinghuo.svg',
        title: '讯飞星火',
        link: 'https://xinghuo.xfyun.cn/',
        desc: '科大讯飞研发的认知大模型，支持语音交互、代码生成等跨领域任务'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48"><!-- Icon from Arcticons by Donnnno - https://creativecommons.org/licenses/by-sa/4.0/ --><rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.282 25.898c-.45.9-1.5 1.5-2.55 1.5h0a3.01 3.01 0 0 1-3-3v-1.95a3.01 3.01 0 0 1 3-3h0c1.05 0 2.1.6 2.55 1.5"/><circle cx="33.518" cy="16.853" r=".75" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.518 19.297v8.101m-3.558 0v-8.101m0 5.101a3.01 3.01 0 0 1-3 3h0a3.01 3.01 0 0 1-3-3v-1.95a3.01 3.01 0 0 1 3-3h0a3.01 3.01 0 0 1 3 3"/><circle cx="21.879" cy="27.148" r=".75" fill="currentColor"/></svg>'
        },
        title: 'Character AI',
        link: 'https://beta.character.ai/',
        desc: '个性化AI角色生成平台，用户可创建并互动虚拟角色'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Simple Icons by Simple Icons Collaborators - https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md --><path fill="currentColor" d="M23.55 5.067a2.177 2.177 0 0 0-2.18 2.177v4.867a1.77 1.77 0 0 1-1.76 1.76a1.82 1.82 0 0 1-1.472-.766l-4.971-7.1a2.2 2.2 0 0 0-1.81-.942c-1.134 0-2.154.964-2.154 2.153v4.896c0 .972-.797 1.76-1.76 1.76c-.57 0-1.136-.287-1.472-.766L.408 5.16A.224.224 0 0 0 0 5.288v4.245c0 .215.066.423.188.6l5.475 7.818c.324.462.8.805 1.351.93a2.164 2.164 0 0 0 2.645-2.098V11.89c0-.972.787-1.76 1.76-1.76h.002a1.8 1.8 0 0 1 1.472.766l4.972 7.1a2.172 2.172 0 0 0 3.96-1.212v-4.895a1.76 1.76 0 0 1 1.76-1.76h.195a.22.22 0 0 0 .22-.22V5.287a.22.22 0 0 0-.22-.22Z"/></svg>'
        },
        title: 'Codeium',
        link: 'https://codeium.com/',
        desc: 'AI驱动的代码补全工具，支持多种编程语言与IDE集成'
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI',
        link: 'https://www.notion.so',
        desc: '集成于Notion的AI助手，支持文档生成、总结与内容优化'
      },
      {
        icon: 'https://www.wps.cn/favicon.ico',
        title: 'WPS AI',
        link: 'https://ai.wps.cn/',
        desc: 'WPS办公软件中的AI模块，提供智能排版、表格处理等功能'
      },
      {
        icon: 'https://www.beautiful.ai/favicon.ico',
        title: 'Beautiful.ai',
        link: 'https://www.beautiful.ai',
        desc: 'AI驱动的PPT设计工具，自动优化布局与视觉效果'
      },
      {
        icon: '/icons/tongyi.svg',
        title: '通义听悟',
        link: 'https://tingwu.aliyun.com/',
        desc: '阿里云推出的语音转文字工具，支持实时会议记录与多语言翻译'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="38.29" height="32" viewBox="0 0 256 214"><!-- Icon from SVG Logos by Gil Barbara - https://raw.githubusercontent.com/gilbarbara/logos/master/LICENSE.txt --><path fill="#1A222D" d="M240.86 162.892c.662 1.719.119 3.158-1.35 4.34c-13.753 11.071-28.19 21.114-43.904 29.24l-13.12 6.776c2.706 2.161 5.76 2.769 9.003 2.648c3.55-.133 6.524-1.763 9.27-3.858c3.283-2.504 6.387-5.274 9.836-7.519c8.35-5.435 17.35-4.944 25.248 1.185c3.355 2.604 6.439 5.578 9.92 7.988c1.683 1.165 3.838 1.8 5.904 2.257l.457.099c2.507.528 4.03 1.79 3.863 3.955c-.165 2.148-1.867 3.403-4.437 3.237c-5.445-.352-9.713-3.16-13.713-6.556c-2.498-2.12-4.91-4.38-7.606-6.219c-4.999-3.409-10.303-3.508-15.396-.235c-3.001 1.929-5.73 4.289-8.539 6.508c-4.527 3.578-9.413 6.212-15.374 6.302c-6.538.099-11.8-2.835-16.62-6.866c-1.724-1.442-3.431-2.905-5.188-4.306c-6.586-5.254-13.334-5.251-19.943.004a177 177 0 0 0-2.292 1.86l-1.52 1.25a122 122 0 0 1-3.849 3.062c-8.09 6.115-17.355 6.407-25.738.681c-3.05-2.083-5.831-4.561-8.74-6.853c-6.61-5.205-12.096-5.19-18.824-.022l-.55.424l-1.65 1.275c-2.2 1.7-4.415 3.385-6.74 4.896c-8.76 5.696-17.677 5.458-26.384-.047c-3.603-2.278-6.892-5.052-10.305-7.631l-.513-.386c-1.362-1.017-2.708-2.059-4.106-3.024c-1.95-1.346-4.05-1.722-6.162-.44c-3.732 2.266-7.42 4.604-11.116 6.928c-3.493 2.196-6.868 4.61-10.5 6.542c-1.968 1.046-4.332 1.533-6.575 1.82c-2.088.266-3.524-1.284-3.604-3.24c-.078-1.926 1.18-3.136 3.135-3.692l.114-.031c2.078-.556 4.219-1.262 6.022-2.395c5.087-3.199 10.017-6.649 15.003-10.008c.142-.095.224-.276.393-.493l-3.095-5.854q-1.552-2.93-3.093-5.87c-1.8-3.438-.629-5.744 3.237-6.02c10.423-.745 20.853-1.384 31.28-2.055l60.021-3.852c14.187-.913 28.373-1.835 42.56-2.75q30.008-1.936 60.018-3.87c5.32-.342 10.64-.676 15.96-1.024l5.32-.353c1.832-.123 3.302.43 3.982 2.192m-15.22 6.079l-.179-.437l-198.607 12.787l.49.916c1.288 2.412 2.428 4.59 3.673 6.706c.115.195.517.235.938.25l.43.01l.129.005l.122.007c1.726.127 3.612-.177 5.145.428c2.446.966 4.784 2.35 6.94 3.876c3.86 2.733 7.432 5.881 11.34 8.536c6.946 4.716 13.487 4.576 20.32-.206c2.883-2.018 5.618-4.248 8.475-6.306c8.932-6.435 17.394-6.302 26.113.417c2.548 1.964 4.977 4.082 7.52 6.051c6.378 4.938 12.849 4.956 19.194.051c2.113-1.633 4.125-3.397 6.199-5.082c9.406-7.641 18.94-8.378 28.19-1.563l.28.208c2.96 2.232 5.163 2.12 8.113.649l1.436-.718c13.157-6.597 26.065-13.607 37.982-22.318c1.928-1.41 3.838-2.844 5.756-4.267M41.217.675c21.496 9.698 40.8 22.744 58.345 38.424c21.83 19.512 39.036 42.552 51.744 68.903c6.688 13.87 11.89 28.276 14.28 43.572l.114.75l.174 1.198c.003 2.96-2.368 4.699-4.84 3.7c-12.272-4.959-24.944-8.398-38.039-10.362c-17.305-2.596-34.393-1.95-51.217 3.115c-11.157 3.36-21.77 7.942-31.632 14.195c-1.821 1.155-3.752.953-4.94-.46c-1.236-1.467-1.234-3.238.193-4.787c10.303-11.187 16.298-24.622 20.273-39.068c3.883-14.115 5.301-28.538 4.431-43.13c-.653-10.967-3.283-21.579-6.725-31.996c-4.453-13.477-10.231-26.36-17.198-38.717c-1.138-2.02-1.117-3.593.034-4.885c1.191-1.338 2.725-1.48 5.003-.452m66.27 25.192c1.993.581 4.678 1.155 7.204 2.137c10.083 3.925 18.77 10.152 27.046 16.955c13.45 11.056 25.765 23.285 36.779 36.772c7.665 9.387 13.953 19.713 19.686 30.371c6.5 12.087 12.099 24.582 16.85 37.454l.33.899c.126.342.255.683.37 1.028c.501 1.488.439 2.928-.727 4.065c-1.19 1.161-2.618 1.238-4.125.648l-.105-.042c-2.16-.888-4.35-1.707-6.505-2.604l-.922-.389c-6.066-2.604-12.3-3.124-18.72-1.666c-.592.135-1.192.237-1.792.329c-2.382.367-3.87-.564-4.52-2.87c-6.253-22.186-15.069-43.311-26.23-63.467l-.558-1.004c-7.196-12.857-15.434-24.948-26.14-35.22c-6.321-6.067-12.973-11.722-20.32-16.525c-1.702-1.113-2.34-2.658-1.78-4.344c.552-1.658 1.84-2.31 4.18-2.527M47.645 11.789c.02.561.171 1 .375 1.41c4.672 9.423 8.735 19.102 12.034 29.089c3.13 9.474 5.53 19.13 6.68 29.06c1.287 11.114.758 22.2-.767 33.254c-2.007 14.558-6.045 28.482-13.009 41.487l-.81 1.515l-1.228 2.303c.257.07.388.153.472.12a64 64 0 0 0 2.185-.907c14.78-6.488 30.181-10.406 46.357-10.809c18.47-.46 36.36 2.87 53.83 8.67l1.193.396c.864.284 1.786.576 2.98.963c-7.077-30.978-21.748-57.605-41.522-81.557c-19.063-23.09-42.249-41.132-68.77-54.994m87.764 37.559l.234.265l.465.518c.18.202.343.392.496.59a274 274 0 0 0 3.305 4.18l1.819 2.262c2.732 3.404 5.43 6.832 7.802 10.47c15.005 23.014 26.039 47.899 34.082 74.124l.243.795c.418 1.373.992 1.759 2.33 1.557l.093-.015c6.017-1.002 11.898-.481 17.6 1.715l.295.115c.545.216 1.127.336 2.183.645c-7.725-19.275-16.855-37.217-28.408-53.942c-9.99-14.462-36.741-40.14-42.54-43.28"/></svg>'
        },
        title: 'Midjourney',
        link: 'https://www.midjourney.com',
        desc: '通过文本描述生成高质量图像的AI绘画平台'
      },
      {
        icon: 'https://static.stablediffusionweb.com/favicon.ico',
        title: 'Stable Diffusion',
        link: 'https://stablediffusionweb.com/',
        desc: '开源文本到图像生成模型，支持本地部署与自定义训练'
      },
      {
        icon: '/icons/pixian.svg',
        title: 'Pixian AI',
        link: 'https://pixian.ai/',
        desc: 'AI图像编辑工具，提供背景移除、画质增强等功能'
      },
      {
        icon: '/icons/runway.png',
        title: 'Runway',
        link: 'https://runwayml.com/',
        desc: '视频生成与编辑平台，支持AI驱动的特效制作与内容创作'
      },
      {
        icon: 'https://elevenlabs.io/favicon.ico',
        title: 'ElevenLabs',
        link: 'https://elevenlabs.io/',
        desc: 'AI语音生成工具，提供高自然度语音克隆与多语言配音服务'
      }
    ]
  }

  ,
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
