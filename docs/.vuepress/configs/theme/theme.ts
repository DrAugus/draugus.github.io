import {hopeTheme} from "vuepress-theme-hope";
import {theme_local} from "./";

export default hopeTheme({
  hostname: "https://augusmeow.cn/Augus/",

  author: {
    name: "Augus",
    url: "https://github.com/DrAugus",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  logo: "/logo/logo.jpg",
  repo: "DrAugus/Augus",

  editLinkPattern: ":repo/edit/master/docs/:path",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime","Word"],

  blog: {
    medias: {
      Baidu: "https://augusmeow.cn/Augus/",
      Bitbucket: "https://augusmeow.cn/Augus/",
      Dingding: "https://augusmeow.cn/Augus/",
      Discord: "https://augusmeow.cn/Augus/",
      Dribbble: "https://augusmeow.cn/Augus/",
      Email: "https://augusmeow.cn/Augus/",
      Evernote: "https://augusmeow.cn/Augus/",
      Facebook: "https://augusmeow.cn/Augus/",
      Flipboard: "https://augusmeow.cn/Augus/",
      GitHub: "https://github.com/DrAugus",
      Gmail: "https://augusmeow.cn/Augus/",
      Instagram: "https://augusmeow.cn/Augus/",
      Lines: "https://augusmeow.cn/Augus/",
      Linkedin: "https://augusmeow.cn/Augus/",
      Pinterest: "https://augusmeow.cn/Augus/",
      Pocket: "https://augusmeow.cn/Augus/",
      QQ: "https://augusmeow.cn/Augus/",
      Qzone: "https://augusmeow.cn/Augus/",
      Reddit: "https://augusmeow.cn/Augus/",
      Rss: "https://augusmeow.cn/Augus/",
      Steam: "https://augusmeow.cn/Augus/",
      Twitter: "https://augusmeow.cn/Augus/",
      Wechat: "https://augusmeow.cn/Augus/",
      Weibo: "https://augusmeow.cn/Augus/",
      Whatsapp: "https://augusmeow.cn/Augus/",
      Youtube: "https://augusmeow.cn/Augus/",
      Zhihu: "https://augusmeow.cn/Augus/",
    },
  },

  locales: theme_local,

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need to comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "DrAugus/Augus",
      repoId: "R_kgDOHV19bA",
      category: "Announcements",
      categoryId: "DIC_kwDOHV19bM4CPJQy",
      inputPosition: "top"

      /**
       * Using twikoo
       */
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },


  },
});
