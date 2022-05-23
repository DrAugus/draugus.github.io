import {LocaleConfig} from "vuepress";
import {navbar_zh} from './navbar/zh';
import {navbar_en} from './navbar/en';
import {navbar_de} from './navbar/de';
import {navbar_fr} from './navbar/fr';
import {navbar_it} from './navbar/it';
import {navbar_kr} from './navbar/kr';

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
    notFound: ['NOT FOUND'],
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
    notFound: ['未找到'],
    backToHome: '返回主页',
  },
  '/i18n/de/': {
    navbar: navbar_de,
    selectLanguageText: 'Sprache',
    selectLanguageName: 'Deutsch',
    editLinkText: 'bearbeiten',
    contributorsText: 'Mitwirkende',
    lastUpdatedText: 'letzte Aktualisierung',
    tip: 'Tipp',
    warning: 'Warnung',
    danger: 'Gefahr',
    notFound: ['Nicht gefunden'],
    backToHome: 'Zurück zur Homepage',
  },
  '/i18n/fr/': {
    navbar: navbar_fr,
    selectLanguageText: 'Langue',
    selectLanguageName: 'Français',
    editLinkText: 'Éditer',
    contributorsText: 'Contributeurs',
    lastUpdatedText: 'Last Met à jour',
    tip: 'Conseil',
    warning: 'avertissement',
    danger: 'danger',
    notFound: ['non trouvé'],
    backToHome: 'Retour à la page d\'accueil',
  },
  '/i18n/it/': {
    navbar: navbar_it,
    selectLanguageText: 'linguaggio',
    selectLanguageName: 'Italiano',
    editLinkText: 'modificare',
    contributorsText: 'collaboratori',
    lastUpdatedText: 'Ultimo aggiornamento',
    tip: 'Suggerimento',
    warning: 'ATTENZIONE',
    danger: 'pericolo',
    notFound: ['non trovato'],
    backToHome: 'torna alla homepage',
  },
  '/i18n/kr/': {
    navbar: navbar_kr,
    selectLanguageText: '언어',
    selectLanguageName: '한국어',
    editLinkText: '편집하다',
    contributorsText: '기고자',
    lastUpdatedText: '마지막 업데이트',
    tip: '팁',
    warning: '경고',
    danger: '위험',
    notFound: ['찾을 수 없음'],
    backToHome: '홈페이지로 돌아 가기',
  },

}