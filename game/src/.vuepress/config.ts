import { defineUserConfig } from "vuepress";
import theme from "./configs/theme/theme";
import { plugin } from "./configs/plugin";
import { siteLocalConfig } from "./configs/siteLocalConfig";
import {alias} from "./configs/alias";

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
  locales: siteLocalConfig,
  theme,
  plugins: plugin,
  markdown: {
    // 大于16行 显示行号
    code: {
      lineNumbers: 16
    }
  },
  alias: alias,
});
