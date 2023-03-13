import { SidebarConfigObject } from "vuepress";

const url_code = '/code'
const url_food = '/food'
const url_game = '/game/genshin'
const url_learn = '/learn'
const url_life = '/life'
const url_record = '/record'

export const sidebar_zh: SidebarConfigObject = {

    '/': ["", "home"],

    '/life/': [
        url_life + "/book.md",
        url_life + "/movie/marvel.md",
        url_life + "/movie",
        url_life + "/record.md",
        url_life + "/wear.md",
        url_life + "/speech/craig-federighi.md",
        url_life + "/speech",
        {
            text: "Trip",
            collapsible: true,
            children: [
                url_life + "/trip/Sichuan.md",
                url_life + "/trip/Hunan.md",
                url_life + "/trip",
                url_life + "/trip/Beijing.md",
                url_life + "/trip/Jiangsu.md",
                url_life + "/trip/Yunnan.md",
                url_life + "/trip/Chongqing.md",
                url_life + "/trip/Zhejiang.md",
                url_life + "/trip/Fujian.md",
            ]
        },

        url_life + "/links.md",
        url_life + "/about.md",
        url_life + "/tech/apple/calendar.md",
        url_life + "/tech/apple/price.md",
        url_life + "/tech/apple/reflect.md",
        url_life + "/tech/apple",
        url_life + "/tech",
        url_life + "/cat.md",

    ],

    '/record/war/': [
        url_record + "/funny",
        url_record + "/funny/airfare-price.md",
        url_record + "/funny/lifetime_series.md",
        url_record + "/war/falklands_war.md",
        url_record + "/war/punic_first_war.md",
        url_record + "/war",
        url_record + "/history/history.md",
        url_record + "/history",
        url_record + "/history/royal/windsor.md",
        url_record + "/history/royal",


    ],

    '/code/development/': [
        url_code + "/development/ban.md",
        url_code + "/development/changelog.md",
        url_code + "/development/struct.md",
        url_code + "/development",
    ],
    '/code/FAQ/': [
        url_code + "/FAQ/QA.md",
        url_code + "/FAQ/complaints.md",
        url_code + "/FAQ",
    ],

    '/game/genshin/': [
        url_game + "/mihoyo-cookie.md",

        url_game + "/wish.md",
        url_game + "/timeline.md",
        url_game + "/timelinetable.md",
        url_game + "/character.md",
        url_game + "/fork.md",
        url_game + "/uptimes.md",
        url_game + "/uptable.md",

        url_game + "/language.md",
        url_game + "/level.md",
        url_game + "/party.md",
        url_game + "/artifacts.md",
        url_game + "/dialog.md",
    ],

    '/food/': [
        url_food + "/block.md",
        url_food + "/dineout.md",
        url_food + "/takeaway.md",
        url_food + "/cookbook.md",
        url_food + "/random.md",
        url_food + "/hangzhou.md",

    ],

}