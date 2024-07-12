import json
import utils
import os
import op_file
from enum import Enum


class LANG(Enum):
    ZH_CN = 0
    EN_US = 1


CAMP = "camp"
CHAR = "char"

gid = 8

api_zh = "https://api-takumi-static.mihoyo.com/content_v2_user/app/706fd13a87294881/getContentList?"
api_zh += "iPageSize=999&iPage=1&sLangKey=zh-cn"
id_camp_zh = 271
id_char_zh = 272

api_en = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/3e9196a4b9274bd7/getContentList?"
api_en += "iPageSize=999&iPage=1&sLangKey=en-us"
id_camp_en = 286
id_char_en = 287


def url_append_chan_id(api_prefix, chan_id):
    return f"{api_prefix}&iChanId={chan_id}"


def url_append_lang_key(api_prefix, lang_key):
    return f"{api_prefix}&sLangKey={lang_key}"


def get_api_url():

    api_global = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/3e9196a4b9274bd7/getContentList"
    api_global += "?iPageSize=999&iPage=1"
    # 下标对应 Enum 的值
    lang_key = ["zh-cn", "en-us"]
    id_camp_global = 286
    id_char_global = 287

    api_url_camp = [
        url_append_lang_key(url_append_chan_id(api_global, id_camp_global), lang)
        for lang in lang_key
    ]
    api_url_char = [
        url_append_lang_key(url_append_chan_id(api_global, id_char_global), lang)
        for lang in lang_key
    ]
    return {CAMP: api_url_camp, CHAR: api_url_char}


def get_img_url(img_list: list):
    if not len(img_list) or "url" not in img_list[0]:
        return ""
    return img_list[0]["url"]


def get_camp():
    api_url = get_api_url()[CAMP]
    print(api_url)

    # 0 zh 1 en
    list_camp_all = []

    for url in api_url:
        print(url)
        data = utils.get_url_data(url)
        data_dict = utils.str_to_dict(data["data"]["list"])

        list_camp = []

        for camp in data_dict:
            get_sExt = utils.str_to_dict(camp["sExt"])
            # sExt keys
            # 'camp-icon', 'camp-name',
            # 'camp-shade', 'camp-channel',
            # 'camp-kv', 'camp-name-en',
            # 'camp-name-img', 'camp-name-img-m', 'camp-shade-m', 'camp-kv-m',

            camp_icon = get_img_url(get_sExt["camp-icon"])
            camp_name = get_sExt["camp-name"]
            if len(camp_name):
                camp_name = camp_name.replace("<br/>", " ").replace("<br>", " ")
            camp_shade = get_img_url(get_sExt["camp-shade"])
            camp_channel = get_sExt["camp-channel"]
            camp_kv = get_img_url(get_sExt["camp-kv"])
            camp_one_dict = {
                "camp_name": camp_name,
                "camp_channel": camp_channel,
                "camp_icon": camp_icon,
                "camp_shade": camp_shade,
                "camp_kv": camp_kv,
            }
            print(camp_one_dict)
            list_camp.append(camp_one_dict)

        list_camp_all.append(list_camp)

    print("camp len", len(list_camp_all))
    for camp_all in list_camp_all:
        if isinstance(camp_all, list):
            output_id = [v["camp_channel"] for v in camp_all]
            print(output_id)

    return list_camp_all


def camp_js_display(info_camp):
    camp_dict = {}

    if len(info_camp) != 2:
        return ""

    if len(info_camp[LANG.ZH_CN.value]) != len(info_camp[LANG.EN_US.value]):
        return ""

    for index, one_camp in enumerate(info_camp[LANG.EN_US.value]):
        name = one_camp["camp_name"].replace(" ", "")
        name = name.replace(".", "")
        camp_dict[name] = {
            "id": one_camp["camp_name"],
            "name": info_camp[LANG.ZH_CN.value][index]["camp_name"],
        }

    print(camp_dict)
    return camp_dict


# 用英文 id
def camp_by_id(info_camp):
    camp_dict = {}

    if len(info_camp) != 2:
        return ""

    if len(info_camp[LANG.ZH_CN.value]) != len(info_camp[LANG.EN_US.value]):
        return ""

    info = info_camp[LANG.EN_US.value]
    for ca in info:
        name = ca["camp_name"].replace(" ", "").replace(".", "")
        camp_dict[ca["camp_channel"]] = name

    return camp_dict


def get_char():
    api_url = get_api_url()[CHAR]
    print(api_url)
    # 0 zh 1 en
    list_char_all = []

    for url in api_url:
        print(url)
        data = utils.get_url_data(url)
        data_dict = utils.str_to_dict(data["data"]["list"])
        list_char = []

        for char in data_dict:

            char_chan_id = char["sChanId"]
            if isinstance(char_chan_id, list):
                char_chan_id = char_chan_id[0]

            get_sExt = utils.str_to_dict(char["sExt"])
            # sExt keys
            # 'chara-nav', 'chara-avatar', 'chara-name',
            # 'chara-name-en', 'chara-color', 'chara-line',
            # 'chara-cv1-name', 'chara-cv1-lang',
            # 'chara-cv1-audio1', 'chara-cv1-audio2',
            # 'chara-cv2-name', 'chara-cv2-lang',
            # 'chara-cv2-audio1', 'chara-cv2-audio2',
            # 'chara-cover-home', 'chara-cover-inner',
            # 'chara-cover-m', 'chara-cover-inner-m',
            # 'chara-name-home', 'chara-name-home-m', 'chara-cover-special'

            char_name = get_sExt["chara-name"]
            char_color = get_sExt["chara-color"]
            char_line = get_sExt["chara-line"]
            char_avatar = get_img_url(get_sExt["chara-avatar"])
            char_cover_home = get_img_url(get_sExt["chara-cover-home"])
            char_cover_inner = get_img_url(get_sExt["chara-cover-inner"])
            char_one_dict = {
                "char_name": char_name,
                "char_color": char_color,
                "char_line": char_line,
                "char_avatar": char_avatar,
                "char_cover_home": char_cover_home,
                # "char_cover_inner": char_cover_inner,
                "char_chan_id": char_chan_id,
            }
            print(char_one_dict)
            # os.system(f"wget {char_avatar} -O {char_name}")
            # os.system(f"wget {char_cover_home} -O {char_name}2")
            list_char.append(char_one_dict)

        list_char_all.append(list_char)

    print("char len", len(list_char_all))
    return list_char_all


def char_js_display(info_char, camp_map):
    char_dict = {}

    if len(info_char) != 2:
        return ""

    if len(info_char[LANG.ZH_CN.value]) != len(info_char[LANG.EN_US.value]):
        return ""

    for index, one_char in enumerate(info_char[LANG.EN_US.value]):
        key = utils.replace_characters(one_char["char_name"])
        try:
            char_dict[key] = {
                "key": one_char["char_name"],
                "id": key,
                "name": info_char[LANG.ZH_CN.value][index]["char_name"],
                "prefix": "",
                "star": 5,
                "event_exclusive": True,
                "intro": info_char[LANG.ZH_CN.value][index]["char_line"],
                # 这里使用英文的 camp id
                "camp": camp_map != ""
                and camp_map[one_char["char_chan_id"]]
                or one_char["char_chan_id"],
                "ele": "Element.ether",
                "weapon": "Weapon.anomaly",
            }
        except Exception as e:
            print(e, camp_map)

    print(char_dict)
    return char_dict


GET_CAMP = True
# GET_CAMP = False
GET_CHAR = True
# GET_CHAR = False

info_camp = GET_CAMP and get_camp() or []
info_char = GET_CHAR and get_char() or []
get_all = {
    "CAMP": info_camp,
    "JS_CAMP": camp_js_display(info_camp),
    "CHAR": info_char,
    "JS_CHAR": char_js_display(info_char, camp_by_id(info_camp)),
}

current_path = os.path.dirname(__file__)
filename = current_path + f"/auto/mhy{gid}char.json"
op_file.save_dict_to_file(get_all, filename)

url_info = get_api_url()
filename = current_path + f"/auto/mhy{gid}char"
op_file.save_dict_to_file(url_info, filename)
