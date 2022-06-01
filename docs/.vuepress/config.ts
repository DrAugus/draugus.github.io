import {defineUserConfig} from "vuepress";
import theme from "./configs/theme/theme";
import {plugin, siteLocalConfig} from './configs'

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
  }
});
