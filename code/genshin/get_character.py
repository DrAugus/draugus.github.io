import requests
from bs4 import BeautifulSoup as be

import enum
import re
import yaml

# 获取yaml文件路径
yaml_path = 'config.yml'

f = open(yaml_path, 'rb')
config = yaml.safe_load_all(f)
config_list = list(config)
print("config_list", config_list)


class City(enum.Enum):
    Mondstadt = 0,
    Liyue = 1,
    Inazuma = 2,
    Sumeru = 3,
    Fontaine = 4,
    Natlan = 5,
    Snezhnaya = 6,


# ########################### config ###########################
config_value = config_list[0]
show_zh = config_value["show_zh"]
show_wish = config_value["show_wish"]
show_wish_char = config_value["show_wish_char"]
show_wish_weapon = config_value["show_wish_weapon"]
show_char_info = config_value["show_char_info"]
show_all_event = config_value["show_all_event"]
url_page_size = config_value["url_page_size"]
url_page_num = config_value["url_page_num"]
url_order = config_value["url_order"]
url_around = config_value["url_around"]
# ########################### config ###########################


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
                page_size=url_page_size, page_num=url_page_num, order=url_order):
    url_res = prefix + "pageSize=" + str(page_size) + "&pageNum=" + str(
        page_num) + "&order=" + order + "&channelId=" + str(channel_id)
    print(url_res)
    return url_res


url_zh_char = [
    # url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Mondstadt.value[0]]),
    # url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Liyue.value[0]]),
    # url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Inazuma.value[0]]),
    url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Sumeru.value[0]]),
    # url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Fontaine.value[0]]),
    # url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Natlan.value[0]]),
    # url_compose(url_zh_content_list_prefix, url_zh_char_channel_id[City.Snezhnaya.value[0]]),
]
url_en_char = [
    # url_compose(url_en_content_list_prefix, url_en_char_channel_id[City.Mondstadt.value[0]]),
    # url_compose(url_en_content_list_prefix, url_en_char_channel_id[City.Liyue.value[0]]),
    # url_compose(url_en_content_list_prefix, url_en_char_channel_id[City.Inazuma.value[0]]),
    url_compose(url_en_content_list_prefix, url_en_char_channel_id[City.Sumeru.value[0]]),
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
    print(_json_)
    return _json_


def lookup(name, url):
    json = character_data(url)[name]
    print("查找角色：", name)
    for key, value in json.items():
        if key == "音频":
            for keys, values in json[key].items():
                print(f"{keys}：{values}")
        else:
            print(f"{key}：{value}")


url_zh_event_list = url_compose(url_zh_content_list_prefix, url_zh_event_channel_id)
url_en_event_list = url_compose(url_en_content_list_prefix, url_en_event_channel_id)


def wish_data(url_lang, str_match):
    _json_ = {}
    json_list = clean_wish_data(get_json(url_lang), str_match)
    for json in json_list:
        _json_[json['id']] = json
    print(_json_)
    return _json_


def wish_detail_data(url_lang, str_match):
    arr = clean_wish_detail_data(get_json(url_lang), str_match)
    print(arr)
    return arr


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
        if not show_all_event and title.find(str_match) == -1:
            continue
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

    if show_all_event:
        _return_.append(content)
        return _return_

    wish5star = re.findall(str_match[0], content)
    wish4star = re.findall(str_match[1], content)

    _return_.append(wish5star)
    _return_.append(wish4star)
    # print(_return_)
    return _return_


str_zh_detail_match_wish_char = [
    ".*限定五星角色(.*)的祈愿.*", ".*四星角色(.*)的祈愿.*"
]
str_en_detail_match_wish_char = [
    ".*the event-exclusive 5-star character (.*) will receive a huge.*",
    ".*the 4-star characters (.*) will receive a huge.*"
]
str_zh_detail_match_wish_weapon = [
    ".*限定五星武器(.*)的祈愿.*", ".*四星武器(.*)的祈愿.*"
]
str_en_detail_match_wish_weapon = [
    ".*the event-exclusive 5-star weapons (.*) will receive a huge.*",
    ".*the 4-star weapons (.*) will receive a huge.*"
]


def get_wish_details(content_id):
    if show_zh:
        url_zh_event = url_zh_content_prefix + "contentId=" + str(content_id)
        print(url_zh_event)
        if show_wish_char:
            wish_detail_data(url_zh_event, str_zh_detail_match_wish_char)
        if show_wish_weapon:
            wish_detail_data(url_zh_event, str_zh_detail_match_wish_weapon)
    else:
        url_en_event = url_en_content_prefix + "contentId=" + str(content_id)
        print(url_en_event)
        if show_wish_char:
            wish_detail_data(url_en_event, str_en_detail_match_wish_char)
        if show_wish_weapon:
            wish_detail_data(url_en_event, str_en_detail_match_wish_weapon)


str_zh_match_wish = "活动祈愿即将开启"
str_en_match_wish = "Event Wish"

if __name__ == '__main__':
    if show_char_info:
        if show_zh:
            character_data(url_zh_char)
        else:
            character_data(url_en_char)
    if show_wish:
        if show_zh:
            all_id_zh = all_wish_id(wish_data(url_zh_event_list, str_zh_match_wish))
            for i in all_id_zh:
                get_wish_details(i)
        else:
            all_id_en = all_wish_id(wish_data(url_en_event_list, str_en_match_wish))
            for i in all_id_en:
                get_wish_details(i)
