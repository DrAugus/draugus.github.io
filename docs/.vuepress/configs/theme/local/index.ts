import {LocaleConfig} from "@vuepress/shared";
import {navbar_zh} from "./navbar/zh";
import {navbar_en} from "./navbar/en";
import {navbar_de} from "./navbar/de";
import {navbar_fr} from "./navbar/fr";
import {navbar_it} from "./navbar/it";
import {navbar_kr} from "./navbar/kr";

export const theme_local: LocaleConfig = {

  '/': {
    navbar: navbar_en,
    selectLanguageText: 'Languages',
    selectLanguageName: 'English',
    editLinkText: 'edit',
    contributorsText: 'contributors',
    lastUpdatedText: 'last updated',
    tip: 'tip',
    warning: 'warning',
    danger: 'danger',
    notFound: ["NOT FOUND"],
    backToHome: 'back to home',
  },
  '/i18n/zh/': {
    navbar: navbar_zh,
    selectLanguageText: '语言',
    selectLanguageName: '中文-简体',
    editLinkText: '编辑此页',
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    tip: '提示',
    warning: '告警',
    danger: '危险',
    notFound: ["未找到"],
    backToHome: '返回主页',
  },
  '/i18n/de/': {
    navbar: navbar_de,
    selectLanguageText: 'Sprache',
    selectLanguageName: 'Deutsch',
    editLinkText: 'edit',
    contributorsText: 'contributors',
    lastUpdatedText: 'last updated',
    tip: 'tip',
    warning: 'warning',
    danger: 'danger',
    notFound: ["NOT FOUND"],
    backToHome: 'back to home',
  },
  '/i18n/fr/': {
    navbar: navbar_fr,
    selectLanguageText: 'Langue',
    selectLanguageName: 'Français',
    editLinkText: 'edit',
    contributorsText: 'contributors',
    lastUpdatedText: 'last updated',
    tip: 'tip',
    warning: 'warning',
    danger: 'danger',
    notFound: ["NOT FOUND"],
    backToHome: 'back to home',
  },
  '/i18n/it/': {
    navbar: navbar_it,
    selectLanguageText: 'linguaggio',
    selectLanguageName: 'Italiano',
    editLinkText: 'edit',
    contributorsText: 'contributors',
    lastUpdatedText: 'last updated',
    tip: 'tip',
    warning: 'warning',
    danger: 'danger',
    notFound: ["NOT FOUND"],
    backToHome: 'back to home',
  },
  '/i18n/kr/': {
    navbar: navbar_kr,
    selectLanguageText: '언어',
    selectLanguageName: '한국어',
    editLinkText: 'edit',
    contributorsText: 'contributors',
    lastUpdatedText: 'last updated',
    tip: 'tip',
    warning: 'warning',
    danger: 'danger',
    notFound: ["NOT FOUND"],
    backToHome: 'back to home',
  },

}