import requests
from bs4 import BeautifulSoup as be

import enum
import re
import yaml
import numpy
import html

import util

# 获取yaml文件路径
# yaml_path = 'config.yml'
# if platform.system() == "Windows":
yaml_path = 'code/genshin/config.yml'

f = open(yaml_path, 'rb')
config = yaml.safe_load_all(f)
config_list = list(config)

# ########################### config ###########################
config_value = config_list[0]
DEBUG_LV = config_value["LOG"]
SHOW_ZH = config_value["SHOW_ZH"]
SHOW_WISH = config_value["SHOW_WISH"]
SHOW_WISH_CHAR = config_value["SHOW_WISH_CHAR"]
SHOW_WISH_WEAPON = config_value["SHOW_WISH_WEAPON"]
SHOW_CHAR_INFO = config_value["SHOW_CHAR_INFO"]
SHOW_ALL_EVENT = config_value["SHOW_ALL_EVENT"]
URL_PAGE_SIZE = config_value["URL_PAGE_SIZE"]
URL_PAGE_NUM = config_value["URL_PAGE_NUM"]
URL_ORDER = config_value["URL_ORDER"]
URL_AROUND = config_value["URL_AROUND"]
# ########################### config ###########################

LV = {
    'trace': 0,
    'debug': 1,
    'info': 2,
    'warn': 3,
    'error': 4,
    'max': 5
}


def log_debug(lv, *str):
    # 白色 绿色 青蓝色 yellow red
    color = [37, 32, 36, 33, 31]

    if DEBUG_LV <= lv:
        print(f"\033[1;{color[lv]};m{lv}: {str}\033[0m")


log_debug(LV["trace"], "config_list", config_list)


_weapon_zh = ["单手剑", "双手剑", "法器", "弓", "长柄武器"]
_weapon_en = ["sword", "claymore", "catalyst", "bow", "polearm"]

# ########################### result ###########################
RES_WISH_TIME = []
RES_WISH_NAME = []
RES_WISH_INFO = []
RES_WISH_WITH_PREFIX_INFO = []
RES_CHAR_INFO = []
# ########################### result ###########################


class City(enum.Enum):
    Mondstadt = 0,
    Liyue = 1,
    Inazuma = 2,
    Sumeru = 3,
    Fontaine = 4,
    Natlan = 5,
    Snezhnaya = 6,


url_zh_char_channel_id = [150, 151, 324, 350]
url_zh_char_channel_id_all = 152
url_zh_event_channel_id = 11
url_zh_event_wish_channel_id = []

url_en_char_channel_id = [487, 488, 1108, 1148]
url_en_char_channel_id_all = 489
url_en_event_channel_id = 10
url_en_event_wish_channel_id = []

url_zh_content_list_prefix = "https://content-static.mihoyo.com/content/ysCn/getContentList?"
url_en_content_list_prefix = "https://content-static-sea.hoyoverse.com/content/yuanshen/getContentList?"

url_zh_content_prefix = "https://content-static.mihoyo.com/content/ysCn/getContent?"
url_en_content_prefix = "https://content-static-sea.hoyoverse.com/content/yuanshen/getContent?"


def url_compose(prefix, channel_id,
                page_size=URL_PAGE_SIZE, page_num=URL_PAGE_NUM, order=URL_ORDER):
    url_res = prefix + "pageSize=" + str(page_size) + "&pageNum=" + \
        str(page_num) + "&order=" + order + "&channelId=" + str(channel_id)
    log_debug(LV["trace"], url_res)
    return url_res


url_zh_char = [
    # url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Mondstadt.value[0]]),
    # url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Liyue.value[0]]),
    # url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Inazuma.value[0]]),
    url_compose(url_zh_content_list_prefix,
                url_zh_char_channel_id[City.Sumeru.value[0]]),
    # url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Fontaine.value[0]]),
    # url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Natlan.value[0]]),
    # url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Snezhnaya.value[0]]),
]
url_en_char = [
    # url_compose(url_en_content_list_prefix, url_en_char_channel_id[City.Mondstadt.value[0]]),
    # url_compose(url_en_content_list_prefix, url_en_char_channel_id[City.Liyue.value[0]]),
    # url_compose(url_en_content_list_prefix, url_en_char_channel_id[City.Inazuma.value[0]]),
    url_compose(url_en_content_list_prefix,
                url_en_char_channel_id[City.Sumeru.value[0]]),
    # url_compose(url_en_content_list_prefix, url_en_char_channel_id[City.Fontaine.value[0]]),
    # url_compose(url_en_content_list_prefix, url_en_char_channel_id[City.Natlan.value[0]]),
    # url_compose(url_en_content_list_prefix, url_en_char_channel_id[City.Snezhnaya.value[0]]),
]


def get_json(_url_):
    req = requests.get(url=_url_)
    if req.status_code == 200:
        return req.json()['data']
    else:
        return None


def clean_char_data(_data_):
    _return_ = []
    for key in _data_['list']:
        ext = key["ext"]
        all_data = {key['title']: {
            "角色ICON": ext[0]["value"][0]["url"],
            "电脑端立绘": ext[1]["value"][0]["url"],
            "手机端立绘": ext[15]["value"][0]["url"],
            "角色名字": key['title'],
            "角色属性": ext[3]["value"][0]["url"],
            # "角色语言": ext[4]["value"],
            # "声优1": ext[5]["value"],
            # "声优2": ext[6]["value"],
            "简介": be(ext[7]["value"], "lxml").p.text.strip(),
            # "台词": ext[8]["value"][0]["url"],
            # "音频": {
            #     ext[9]["value"][0]["name"]: ext[9]["value"][0]["url"],
            #     ext[10]["value"][0]["name"]: ext[10]["value"][0]["url"],
            #     ext[11]["value"][0]["name"]: ext[11]["value"][0]["url"],
            #     ext[12]["value"][0]["name"]: ext[12]["value"][0]["url"],
            #     ext[13]["value"][0]["name"]: ext[13]["value"][0]["url"],
            #     ext[14]["value"][0]["name"]: ext[14]["value"][0]["url"],
            # },
        }
        }
        _return_.append(all_data[key['title']])
    return _return_


def character_data(url_lang):
    _json_ = {}
    for url in url_lang:
        json_list = clean_char_data(get_json(url))
        for json in json_list:
            _json_[json['角色名字']] = json
    RES_CHAR_INFO.append(_json_)
    log_debug(LV["trace"], _json_)
    return _json_


def lookup(name, url):
    json = character_data(url)[name]
    log_debug(LV["trace"], "查找角色：", name)
    for key, value in json.items():
        if key == "音频":
            for keys, values in json[key].items():
                log_debug(LV["trace"], f"{keys}: {values}")
        else:
            log_debug(LV["trace"], f"{key}: {value}")


url_zh_event_list = url_compose(
    url_zh_content_list_prefix, url_zh_event_channel_id)
url_en_event_list = url_compose(
    url_en_content_list_prefix, url_en_event_channel_id)


def wish_data(url_lang, str_match):
    # log_debug(LV["info"], "wish_data url_lang "f"{url_lang}")
    _json_ = {}
    json_list = clean_wish_data(get_json(url_lang), str_match)
    for json in json_list:
        _json_[json['id']] = json
    display_format_event(_json_)
    return _json_

# obj
# todo: download img and then rename img


def display_format_event(event_map):
    for k in event_map:
        s = "--------" + \
            "\n [id] "f"{event_map[k]['id']} " + \
            "\n [title] "f"{event_map[k]['title']} " + \
            "\n [img] "f"{event_map[k]['img']} " + \
            "\n--------\n"
        log_debug(LV["info"], s)


def wish_detail_data(url_lang, str_match):
    log_debug(LV["info"], "wish_detail_data url_lang :"f"{url_lang}")
    print("URL", url_lang)
    arr = clean_wish_detail_data(get_json(url_lang), str_match)
    for a in arr:
        if len(a):
            wish_detail_filter(a)
    return arr


def wish_detail_filter(arr):
    if len(arr) == 0:
        return
    log_debug(LV["trace"], "source arr", arr)

    filter_str = "「(.*)」"
    # filter_str = r'(.*)&middot;(.*)'
    filter_str = "(.*)\("
    # split_str = "「(.*)\("
    split_str = r"\W+"
    for a in arr:
        new_a = a.replace('「', '')
        split_a = new_a.split('」')
        # split_a = re.split(split_str, a)
        # for aa in new_a:
        #     name_prefix = re.findall(r"(.*)&middot;",aa)
        #     name = re.findall(r"&middot;(.*)",aa)
        #     print(name,name_prefix)
        # print("split_a", split_a)
        if not len(split_a):
            continue
        arr_filter1 = []
        for aa in split_a:
            if not len(aa):
                continue
            filter_aa = re.findall(filter_str, aa)
            if not len(filter_aa):
                arr_filter1.append(aa)
                # print(aa)
            else:
                arr_filter1.append(filter_aa[0])
                # print(filter_aa[0])
        if not len(arr_filter1):
            log_debug(LV["error"], "arr_filter1", arr_filter1)
            continue

        arr_filter2 = []
        with_prefix_char = []
        for aa in arr_filter1:
            split_aa = []
            # zh
            if '&middot;' in aa:
                split_aa = aa.split('&middot;')
            # en
            if '&quot;' in aa:
                split_aa = aa.split('&quot;')

            if not len(split_aa):
                log_debug(LV["error"], "split aa none")
                continue

            split_aa = list(filter(None, split_aa))
            if len(split_aa) != 2:
                log_debug(LV["trace"], "split_aa", split_aa)
                if len(split_aa) > 2:
                    # others clean - only en
                    aaa_arr = []
                    for index, aaa in enumerate(split_aa):
                        aaa = aaa.split('(')[0].strip()
                        aaa_arr.append(aaa)

                    # if len(aaa_arr) > 0 and isinstance(aaa_arr, list):
                    #     aaa_arr = list(filter(lambda avv: '<' not in avv and '>' not in avv, aaa_arr))
                    if len(aaa_arr) % 2 > 0:
                        log_debug(LV["error"], "aaa_arr", aaa_arr)
                        continue

                    log_debug(LV["debug"], "aaa_arr", aaa_arr)
                    aaa_arr = numpy.array(aaa_arr).reshape(
                        int(len(aaa_arr) / 2), 2)
                    for aaaa in aaa_arr:
                        dict_res = {}
                        dict_res['prefix'] = aaaa[0]
                        dict_res['name'] = aaaa[1]
                        with_prefix_char.append(dict_res)
                        arr_filter2.append(aaaa[1])
                    log_debug(LV["debug"], "aaa_arr", aaa_arr)
                    continue
                else:
                    # sample
                    # ['A Thousand Floating Dreams (Catalyst) and Thundering Pulse ']

                    if ',' in split_aa[0]:
                        split_aa1 = split_aa[0].split(',')
                    elif 'and' in split_aa[0]:
                        split_aa1 = split_aa[0].split(' and ')
                    elif 'or' in split_aa[0]:
                        split_aa1 = split_aa[0].split(' or ')
                    else:
                        split_aa1 = split_aa

                    for aaa in split_aa1:
                        aaa = aaa.strip()
                        if '(' in aaa:
                            aaa = aaa.split('(')[0].strip()
                        arr_filter2.append(aaa)

                    continue

            log_debug(LV["debug"], "split_aa", split_aa)
            # strip(), str maybe have leading and trailing whitespaces
            arr_filter2.append(split_aa[1].strip())
            if split_aa[0] in _weapon_zh:
                continue

            dict_res = {}
            dict_res['prefix'] = split_aa[0].strip()
            dict_res['name'] = split_aa[1].strip()
            with_prefix_char.append(dict_res)
        if len(arr_filter2):
            RES_WISH_INFO.append(arr_filter2)
            log_debug(LV["info"], "arr_filter2", arr_filter2)
        if len(with_prefix_char):
            RES_WISH_WITH_PREFIX_INFO.append(with_prefix_char)
            log_debug(LV["info"], "with_prefix_char", with_prefix_char)


def all_wish_id(json):
    all_id = []
    for wish_id in json:
        all_id.append(wish_id)
    return all_id


def clean_wish_data(_data_, str_match):
    _return_ = []

    for key in _data_['list']:
        ext = key["ext"]
        title = key["title"]
        # range of len
        if len(ext) < 2 or len(ext[1]["value"]) < 1:
            continue
        # when only wish, have not wish
        if not SHOW_ALL_EVENT and title.find(str_match) == -1:
            continue
        # todo: one id, many img can't get
        all_data = {key['contentId']: {
            "title": key["title"],
            "img": ext[1]["value"][0]["url"],
            "id": key["contentId"],
        }
        }
        _return_.append(all_data[key['contentId']])

    return _return_


def clean_wish_detail_data(_data_, str_match):
    _return_ = []

    content = _data_['content']
    new_str = content

    # only en website
    if not SHOW_ZH:
        s_str = "Event Wish Duration"
        e_str = "Event Wish Details"
        new_str = util.remove_html_tags(content)
        new_str = util.remove_line_break(new_str)
        # new_str = html.unescape(new_str)
        wish_time = util.match_strings(new_str, s_str, e_str)
        if len(wish_time):
            wt = html.unescape(wish_time[0])
            if len(wt):
                RES_WISH_TIME.append(wt)
            log_debug(LV["info"], "wish time ", wt)

        wish_name = re.findall(str_en_wish_name, new_str)
        if len(wish_name):
            wn = html.unescape(wish_name[0])
            if len(wn):
                wn = util.remove_char(wn, '"')
                RES_WISH_NAME.append(wn)

    if SHOW_ALL_EVENT:
        _return_.append(content)
        return _return_

    # 英文这里如果 使用 content 直接 find 会找不全 后续再看看为什么
    wish5star = re.findall(str_match[0], new_str)
    wish4star = re.findall(str_match[1], new_str)

    _return_.append(wish5star)
    _return_.append(wish4star)
    # print(_return_)
    return _return_


str_zh_wish_name = [

]
str_en_wish_name = "Event Wish (.*?) - Boosted Drop Rate"
str_zh_detail_match_wish_char = [
    ".*限定五星角色(.*)的祈愿.*",
    ".*四星角色(.*)的祈愿.*"
]
str_en_detail_match_wish_char = [
    "the event-exclusive 5-star character (.*?) will receive a huge",
    "the 4-star characters (.*?) will receive a huge"
]
str_zh_detail_match_wish_weapon = [
    ".*限定五星武器(.*)的祈愿.*",
    ".*四星武器(.*)的祈愿.*"
]
str_en_detail_match_wish_weapon = [
    ".*the event-exclusive 5-star weapons (.*) will receive a huge.*",
    ".*the 4-star weapons (.*) will receive a huge.*"
]


def get_wish_details(content_id):
    if SHOW_ZH:
        url_zh_event = url_zh_content_prefix + "contentId=" + str(content_id)
        if SHOW_WISH_CHAR:
            wish_detail_data(url_zh_event, str_zh_detail_match_wish_char)
        if SHOW_WISH_WEAPON:
            wish_detail_data(url_zh_event, str_zh_detail_match_wish_weapon)
    else:
        url_en_event = url_en_content_prefix + "contentId=" + str(content_id)
        if SHOW_WISH_CHAR:
            wish_detail_data(url_en_event, str_en_detail_match_wish_char)
        if SHOW_WISH_WEAPON:
            wish_detail_data(url_en_event, str_en_detail_match_wish_weapon)


str_zh_match_wish = "活动祈愿即将开启"
str_en_match_wish = "Event Wish"


def for_print(str, arr):
    print(str)
    for i in arr:
        print(i)


def filter_repeat():
    global RES_CHAR_INFO
    global RES_WISH_INFO
    global RES_WISH_TIME
    global RES_WISH_WITH_PREFIX_INFO
    # 目前无法 filter
    util.remove_duplicate(RES_CHAR_INFO)
    util.remove_duplicate(RES_WISH_INFO)
    util.remove_duplicate(RES_WISH_TIME)
    util.remove_duplicate(RES_WISH_WITH_PREFIX_INFO)


def filter_none():
    # ..
    print()


def display_all_res():
    # filter_repeat()
    if SHOW_WISH or SHOW_ALL_EVENT:
        for_print("RES_WISH_TIME", RES_WISH_TIME)
        for_print("RES_WISH_NAME", RES_WISH_NAME)
        for_print("RES_WISH_INFO", RES_WISH_INFO)
        for_print("RES_WISH_WITH_PREFIX_INFO", RES_WISH_WITH_PREFIX_INFO)
    if SHOW_CHAR_INFO:
        for_print("RES_CHAR_INFO", RES_CHAR_INFO)


if __name__ == '__main__':
    # test_arr = ['绮思晚星&middot;莱依拉(冰)」「渡来介者&middot;托马(火)」「心朝乂安&middot;鹿野院平藏']
    # wish_detail_filter(test_arr)

    # test_arr = ['', '单手剑', 'middot', '西风剑', '双手剑', 'middot', '钟剑', '长柄武器', 'middot', '匣里灭辰', '法器', 'middot', '西风秘典', '弓', 'middot', '绝弦', '']
    # wish_detail_filter(test_arr)

    if SHOW_CHAR_INFO:
        if SHOW_ZH:
            character_data(url_zh_char)
        else:
            character_data(url_en_char)
    if SHOW_WISH:
        if SHOW_ZH:
            all_id_zh = all_wish_id(
                wish_data(url_zh_event_list, str_zh_match_wish))
            for i in all_id_zh:
                get_wish_details(i)
        else:
            all_id_en = all_wish_id(
                wish_data(url_en_event_list, str_en_match_wish))
            for i in all_id_en:
                get_wish_details(i)

    print("================")
    display_all_res()
    print("================")
