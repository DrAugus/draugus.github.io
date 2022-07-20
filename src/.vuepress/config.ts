import {defineUserConfig} from "vuepress";
import theme from "./configs/theme/theme";
import {plugin, siteLocalConfig} from './configs'
import {path} from "@vuepress/utils";

export default defineUserConfig({
  base: "/",
  lang: 'en-US',
  title: 'AUGUS',
  description: 'Record Everything',
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

    "@GenshinLevelExp": path.resolve(__dirname, "./components/genshin/LevelExp.vue"),
    "@GenshinPartySetup": path.resolve(__dirname, "./components/genshin/PartySetup.vue"),
    "@GenshinCharacters": path.resolve(__dirname, "./components/genshin/Characters.vue"),
    "@GenshinWish": path.resolve(__dirname, "./components/genshin/Wish.vue"),
    "@GenshinTimeline": path.resolve(__dirname, "./components/genshin/Timeline.vue"),

    "@EnglishWords": path.resolve(__dirname, "./components/words/English.vue"),
    "@ChineseIdiom": path.resolve(__dirname, "./components/words/Idiom.vue"),
  }
});
