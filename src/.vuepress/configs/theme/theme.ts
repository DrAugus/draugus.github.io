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

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "Word"],

  blog: {
    medias: {
      Baidu: "https://draugus.github.io/",
      Bitbucket: "https://draugus.github.io/",
      Dingding: "https://draugus.github.io/",
      Discord: "https://draugus.github.io/",
      Dribbble: "https://draugus.github.io/",
      Email: "https://draugus.github.io/",
      Evernote: "https://draugus.github.io/",
      Facebook: "https://draugus.github.io/",
      Flipboard: "https://draugus.github.io/",
      GitHub: "https://github.com/DrAugus",
      Gmail: "https://draugus.github.io/",
      Instagram: "https://draugus.github.io/",
      Lines: "https://draugus.github.io/",
      Linkedin: "https://draugus.github.io/",
      Pinterest: "https://draugus.github.io/",
      Pocket: "https://draugus.github.io/",
      QQ: "https://draugus.github.io/",
      Qzone: "https://draugus.github.io/",
      Reddit: "https://draugus.github.io/",
      Rss: "https://draugus.github.io/",
      Steam: "https://draugus.github.io/",
      Twitter: "https://draugus.github.io/",
      Wechat: "https://draugus.github.io/",
      Weibo: "https://draugus.github.io/",
      Whatsapp: "https://draugus.github.io/",
      Youtube: "https://draugus.github.io/",
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

    components: ["Badge", "CodePen", "FontIcon", "PDF", "StackBlitz", "YouTube"],

    // If you don't need to comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      provider: "Giscus",
      repo: "DrAugus/draugus.github.io",
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
