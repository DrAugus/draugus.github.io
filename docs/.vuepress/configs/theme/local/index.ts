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
    selectText: 'Languages',
    label: 'English',
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
    selectText: '选择语言',
    label: '简体中文',
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
    selectText: 'Languages',
    label: 'English',
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
    selectText: 'Languages',
    label: 'English',
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
    selectText: 'Languages',
    label: 'English',
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
    selectText: 'Languages',
    label: 'English',
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