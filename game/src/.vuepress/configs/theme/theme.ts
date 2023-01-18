import { defaultTheme } from "vuepress";
import { navbar_de, navbar_en, navbar_fr, navbar_it, navbar_kr, navbar_zh } from "../navbar";
import { sidebar_zh } from "../sidebar/zh";

export default defaultTheme({

  logo: "/logo/logo.jpg",
  repo: "DrAugus/draugus.github.io",

  editLinkPattern: ":repo/edit/master/src/:path",
  sidebar: 'auto',

  locales: {
    '/': {
      navbar: navbar_zh,
      sidebar: sidebar_zh,

      selectLanguageName: "简体中文",
      selectLanguageText: "选择语言",
      selectLanguageAriaLabel: "选择语言",
      editLinkText: "编辑此页",
      lastUpdatedText: "上次编辑于",
      contributorsText: "贡献者",
      notFound: [
        "这里什么也没有",
        "我们是怎么来到这儿的？",
        "这 是 四 零 四 !",
        "看起来你访问了一个失效的链接",
      ],
      backToHome: "返回首页",
    },
    '/i18n/en/': { navbar: navbar_en, },
    '/i18n/de/': { navbar: navbar_de, },
    '/i18n/fr/': { navbar: navbar_fr, },
    '/i18n/it/': { navbar: navbar_it, },
    '/i18n/kr/': { navbar: navbar_kr, },
  }

});
