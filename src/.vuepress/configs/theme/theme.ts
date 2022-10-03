import {hopeTheme} from "vuepress-theme-hope";
import {theme_local} from "./";

export default hopeTheme({
  hostname: "https://draugus.github.io/",

  author: {
    name: "Augus",
    url: "https://github.com/DrAugus",
  },

  iconAssets: "fontawesome",

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  logo: "/logo/logo.jpg",
  repo: "DrAugus/draugus.github.io",

  editLinkPattern: ":repo/edit/master/src/:path",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word", "PageView"],

  blog: {
    medias: {
      Discord: "https://discord.com/channels/AugusMeow#5870",
      Email: "mailto:980652196@qq.com",
      GitHub: "https://github.com/DrAugus",
      Gmail: "mailto:980652196@qq.com",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=980652196&site=qq&menu=yes",
      Steam: "https://steamcommunity.com/id/bramlye/",
      Weibo: "https://draugus.github.io/",
      Zhihu: "https://draugus.github.io/",
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
      // only with date frontmatter are articles
      // filter: (page) => !!page.frontmatter.date,
      // only article is article
      filter: (page) => !!page.frontmatter.article,
    },

    feed: {
      atom: true,
      rss: true,
      json: true,
    },

    components: ["Badge", "CodePen", "PDF", "StackBlitz", "YouTube"],

    // If you don't need to comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      // provider: "Giscus",
      // repo: "DrAugus/draugus.github.io",
      // repoId: "R_kgDOHV19bA",
      // category: "Announcements",
      // categoryId: "DIC_kwDOHV19bM4CPJQy",
      // inputPosition: "top"
    },

    mdEnhance: {
      // enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },


  },
});
