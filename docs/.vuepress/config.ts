import {sidebar, themeInfo, plugin, siteLocalConfig} from './configs'
import {commentTheme} from "./configs/theme";

module.exports = {
  head: [
    ["link", {rel: "icon", href: "/logo/favicon.ico"}],
    ["script", {src: "https://cdn.jsdelivr.net/npm/cfga@1.0.3", async: true}],
    ["script", {src: "https://embed.github.com/view/geojson/DrAugus/Augus/tree/test/docs/.vuepress/public/json/json.geojson"}]
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
}
