import {LocaleConfig} from "vuepress";
import {local_en} from "./local/en";
import {local_zh} from "./local/zh";
import {local_de} from "./local/de";
import {local_fr} from "./local/fr";
import {local_it} from "./local/it";
import {local_kr} from "./local/kr";

export const theme_local: LocaleConfig = {
  '/': local_en,
  '/i18n/zh/': local_zh,
  '/i18n/de/': local_de,
  '/i18n/fr/': local_fr,
  '/i18n/it/': local_it,
  '/i18n/kr/': local_kr,
}