import {defineUserConfig} from "vuepress";
import theme from "./configs/theme/theme";
import {plugin, siteLocalConfig} from './configs'
import {path} from "@vuepress/utils";

export default defineUserConfig({
  base: "/Augus/",
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
    "@War": path.resolve(__dirname, "components/War.vue"),
    "@History": path.resolve(__dirname, "components/History.vue"),
    "@GenshinLevelExp": path.resolve(__dirname, "components/genshin/LevelExp.vue"),
    "@GenshinPartySetup": path.resolve(__dirname, "components/genshin/PartySetup.vue"),
    "@GenshinCharacters": path.resolve(__dirname, "components/genshin/Characters.vue"),
    "@GenshinWishCurrent": path.resolve(__dirname, "components/genshin/WishCurrent.vue"),
    "@GenshinWishFuture": path.resolve(__dirname, "components/genshin/WishFuture.vue"),
  }
});
