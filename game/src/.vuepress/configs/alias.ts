import {getDirname, path} from '@vuepress/utils';

// https://v2.vuepress.vuejs.org/zh/reference/plugin-api.html#alias
const __dirname = getDirname(import.meta.url);

const pre_path = "../components/";

export const alias = {

  // "@War": path.resolve(__dirname, pre_path + "War.vue"),
  // "@History": path.resolve(__dirname, pre_path + "History.vue"),
  // "@TestLeaflet": path.resolve(__dirname, pre_path + "Leaflet.vue"),
  // "@LinksRecord": path.resolve(__dirname, pre_path + "LinksRecord.vue"),
  // "@Article": path.resolve(__dirname, pre_path + "Article.vue"),
  // "@Marvel": path.resolve(__dirname, pre_path + "Marvel.vue"),

  // "@FoodBlock": path.resolve(__dirname, pre_path + "food/Block.vue"),
  // "@FoodCookbook": path.resolve(__dirname, pre_path + "food/Cookbook.vue"),
  // "@FoodDineOut": path.resolve(__dirname, pre_path + "food/DineOut.vue"),
  // "@FoodRandom": path.resolve(__dirname, pre_path + "food/Random.vue"),
  // "@FoodTakeaway": path.resolve(__dirname, pre_path + "food/Takeaway.vue"),

  "@GenshinLevelExp": path.resolve(__dirname, pre_path + "genshin/LevelExp.vue"),
  "@GenshinPartySetup": path.resolve(__dirname, pre_path + "genshin/PartySetup.vue"),
  "@GenshinCharacters": path.resolve(__dirname, pre_path + "genshin/Characters.vue"),
  "@GenshinWish": path.resolve(__dirname, pre_path + "genshin/Wish.vue"),
  "@GenshinTimeline": path.resolve(__dirname, pre_path + "genshin/Timeline.vue"),
  "@GenshinTimelineTable": path.resolve(__dirname, pre_path + "genshin/TimelineTable.vue"),
  "@GenshinFork": path.resolve(__dirname, pre_path + "genshin/Fork.vue"),
  "@GenshinEvents": path.resolve(__dirname, pre_path + "genshin/Events.vue"),
  "@GenshinUpTimes": path.resolve(__dirname, pre_path + "genshin/UpTimes.vue"),

  // "@Chinese": path.resolve(__dirname, pre_path + "language/Chinese.vue"),
  // "@WordsEN": path.resolve(__dirname, pre_path + "language/WordsEN.vue"),
  // "@SentenceIT": path.resolve(__dirname, pre_path + "language/SentenceIT.vue"),
  // "@SentenceEN": path.resolve(__dirname, pre_path + "language/SentenceEN.vue"),

  // "@Wear": path.resolve(__dirname, pre_path + "wear/Wear.vue"),
}
