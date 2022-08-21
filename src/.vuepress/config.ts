import {defineUserConfig} from "vuepress";
import theme from "./configs/theme/theme";
import {plugin, siteLocalConfig} from './configs'
import {path} from "@vuepress/utils";

export default defineUserConfig({
  base: "/",
  lang: 'en-US',
  title: 'AUGUS',
  description: 'Record Everything',
  head: [
    [
      "link",
      // https://vuepress-theme-hope.github.io/v2/zh/faq/vite.html#import-%E8%AF%AD%E6%B3%95%E6%97%A0%E6%95%88
      {
        rel: "stylesheet",
        href: "//unpkg.com/heti/umd/heti.min.css",
      },
    ],
  ],
  locales: siteLocalConfig.main,
  theme,
  plugins: plugin.main,
  markdown: {
    // 大于16行 显示行号
    code: {
      lineNumbers: 16
    }
  },
  alias: {
    "@KatexPlayground": path.resolve(__dirname, "./components/KatexPlayground"),
    "@Food": path.resolve(__dirname, "./components/Food.vue"),
    "@War": path.resolve(__dirname, "./components/War.vue"),
    "@History": path.resolve(__dirname, "./components/History.vue"),
    "@TestLeaflet": path.resolve(__dirname, "./components/Leaflet.vue"),
    "@LinksRecord": path.resolve(__dirname, "./components/LinksRecord.vue"),
    "@Article": path.resolve(__dirname, "./components/Article.vue"),

    "@GenshinLevelExp": path.resolve(__dirname, "./components/genshin/LevelExp.vue"),
    "@GenshinPartySetup": path.resolve(__dirname, "./components/genshin/PartySetup.vue"),
    "@GenshinCharacters": path.resolve(__dirname, "./components/genshin/Characters.vue"),
    "@GenshinWish": path.resolve(__dirname, "./components/genshin/Wish.vue"),
    "@GenshinTimeline": path.resolve(__dirname, "./components/genshin/Timeline.vue"),
    "@GenshinTimelineTable": path.resolve(__dirname, "./components/genshin/TimelineTable.vue"),

    "@EnglishWords": path.resolve(__dirname, "./components/language/EnglishWords.vue"),
    "@EnglishSentence": path.resolve(__dirname, "./components/language/EnglishSentence.vue"),
    "@Chinese": path.resolve(__dirname, "./components/language/Chinese.vue"),
  }
});
