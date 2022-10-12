import {defineUserConfig} from "vuepress";
import theme from "./configs/theme/theme";
import {plugin, siteLocalConfig} from './configs'
import { getDirname, path } from '@vuepress/utils'

// https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#alias
const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  base: "/",
  lang: 'en-US',
  title: 'AUGUS',
  description: 'Record Everything',
  head: [
    [
      "link",
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
    "@War": path.resolve(__dirname, "./components/War.vue"),
    "@History": path.resolve(__dirname, "./components/History.vue"),
    "@TestLeaflet": path.resolve(__dirname, "./components/Leaflet.vue"),
    "@LinksRecord": path.resolve(__dirname, "./components/LinksRecord.vue"),
    "@Article": path.resolve(__dirname, "./components/Article.vue"),


    "@FoodBlock": path.resolve(__dirname, "./components/food/Block.vue"),
    "@FoodCookbook": path.resolve(__dirname, "./components/food/Cookbook.vue"),
    "@FoodDineOut": path.resolve(__dirname, "./components/food/DineOut.vue"),
    "@FoodRandom": path.resolve(__dirname, "./components/food/Random.vue"),
    "@FoodTakeaway": path.resolve(__dirname, "./components/food/Takeaway.vue"),

    "@GenshinLevelExp": path.resolve(__dirname, "./components/genshin/LevelExp.vue"),
    "@GenshinPartySetup": path.resolve(__dirname, "./components/genshin/PartySetup.vue"),
    "@GenshinCharacters": path.resolve(__dirname, "./components/genshin/Characters.vue"),
    "@GenshinWish": path.resolve(__dirname, "./components/genshin/Wish.vue"),
    "@GenshinTimeline": path.resolve(__dirname, "./components/genshin/Timeline.vue"),
    "@GenshinTimelineTable": path.resolve(__dirname, "./components/genshin/TimelineTable.vue"),

    "@Chinese": path.resolve(__dirname, "./components/language/Chinese.vue"),
    "@WordsEN": path.resolve(__dirname, "./components/language/WordsEN.vue"),
    "@SentenceIT": path.resolve(__dirname, "./components/language/SentenceIT.vue"),
    "@SentenceEN": path.resolve(__dirname, "./components/language/SentenceEN.vue"),
  }
});
