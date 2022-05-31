import {sidebar, themeInfo, plugin, siteLocalConfig} from './configs'
import {commentTheme} from "./configs/theme";

module.exports = {
  head: [
    ["link", {rel: "icon", href: "/logo/favicon.ico"}],
    ["script", {src: "https://cdn.jsdelivr.net/npm/cfga@1.0.3", async: true}],
    ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'}],
    ['link', {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'}]
  ],
  base: "/Augus/",
  lang: 'en-US',
  title: 'AUGUS',
  description: 'Record Everything',
  locales: siteLocalConfig.main,
  theme: commentTheme({
    logo: '/logo/ico.jpg',
    locales: themeInfo.theme_local,
    repo: 'DrAugus/Augus',
    editLinkPattern: ':repo/edit/master/docs/:path',
    sidebar: sidebar.main,
    editLink: true,
    contributors: true,
    lastUpdated: true,
  }),
  plugins: plugin.main,
  extendsMarkdown: md => {
    md.use(require("markdown-it-katex"));
  },
  markdown: {
    // 大于16行 显示行号
    code: {
      lineNumbers: 16
    }
  }
}
