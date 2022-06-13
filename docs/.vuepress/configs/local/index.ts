import {SiteLocaleConfig} from "vuepress";

export const main: SiteLocaleConfig = {

  // 键名是该语言所属的子路径
  // 作为特例，默认语言可以使用 '/' 作为其路径。
  '/i18n/en/': {
    lang: 'en-US',
    title: 'AUGUS',
    description: 'Record Everything'
  },
  '/i18n/fr/': {
    lang: 'fr-FR',
    title: 'AUGUS',
    description: 'Tout enregistrer'
  },
  '/i18n/de/': {
    lang: 'de-DE',
    title: 'AUGUS',
    description: 'Alles aufzeichnen'
  },
  '/i18n/it/': {
    lang: 'it-IT',
    title: 'AUGUS',
    description: 'Registra tutto'
  },
  '/i18n/kr/': {
    lang: 'kr-KR',
    title: 'AUGUS',
    description: '모든 것을 기록'
  },
  '/': {
    lang: 'zh-CN',
    title: 'AUGUS',
    description: '记录一切'
  }

}