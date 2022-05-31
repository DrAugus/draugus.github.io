import type {SidebarConfig} from '@vuepress/theme-default'
import {
  sidebar_zh_blog,
  sidebar_zh_learn_art,
  sidebar_zh_learn_code,
  sidebar_zh_learn_development,
  sidebar_zh_learn_language,
  sidebar_zh_life_game,
  sidebar_zh_life_memory,
  sidebar_zh_life_tech,
  sidebar_zh_life_trip,
  sidebar_zh_social_accident,
  sidebar_zh_social_biography,
  sidebar_zh_social_war
} from "./local/zh";
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
  '/i18n/zh/life/tech': sidebar_zh_life_tech,
  '/i18n/zh/life/game': sidebar_zh_life_game,
  '/i18n/zh/life/memory': sidebar_zh_life_memory,
  '/i18n/zh/life/trip': sidebar_zh_life_trip,
  '/i18n/zh/learn/art': sidebar_zh_learn_art,
  '/i18n/zh/learn/development': sidebar_zh_learn_development,
  '/i18n/zh/learn/code': sidebar_zh_learn_code,
  '/i18n/zh/learn/language': sidebar_zh_learn_language,
  '/i18n/zh/social/accident': sidebar_zh_social_accident,
  '/i18n/zh/social/biography': sidebar_zh_social_biography,
  '/i18n/zh/social/war': sidebar_zh_social_war,
  '/i18n/zh/blog': sidebar_zh_blog,

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
