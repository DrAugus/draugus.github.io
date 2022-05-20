import type {SidebarConfig} from '@vuepress/theme-default'
import {sidebar_zh_biography, sidebar_zh_code, sidebar_zh_development, sidebar_zh_life} from "./local/zh";
import {sidebar_en_code, sidebar_en_development, sidebar_en_life} from "./local/en";
import {sidebar_de_code, sidebar_de_development, sidebar_de_life} from "./local/de";
import {sidebar_fr_code, sidebar_fr_development, sidebar_fr_life} from "./local/fr";
import {sidebar_it_code, sidebar_it_development, sidebar_it_life} from "./local/it";
import {sidebar_kr_code, sidebar_kr_development, sidebar_kr_life} from "./local/kr";

export const main: SidebarConfig = {
  '/': [],
  '/life': sidebar_en_life,
  '/code': sidebar_en_code,
  '/development': sidebar_en_development,

  '/i18n/zh/': [],
  '/i18n/zh/life': sidebar_zh_life,
  '/i18n/zh/code': sidebar_zh_code,
  '/i18n/zh/development': sidebar_zh_development,
  '/i18n/zh/biography': sidebar_zh_biography,

  '/i18n/de/': [],
  '/i18n/de/life': sidebar_de_life,
  '/i18n/de/code': sidebar_de_code,
  '/i18n/de/development': sidebar_de_development,

  '/i18n/fr/': [],
  '/i18n/fr/life': sidebar_fr_life,
  '/i18n/fr/code': sidebar_fr_code,
  '/i18n/fr/development': sidebar_fr_development,

  '/i18n/it/': [],
  '/i18n/it/life': sidebar_it_life,
  '/i18n/it/code': sidebar_it_code,
  '/i18n/it/development': sidebar_it_development,

  '/i18n/kr/': [],
  '/i18n/kr/life': sidebar_kr_life,
  '/i18n/kr/code': sidebar_kr_code,
  '/i18n/kr/development': sidebar_kr_development,

}
