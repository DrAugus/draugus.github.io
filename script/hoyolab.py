# 8 means zzz
# hoyolab interface

import json
import os
import requests
from bs4 import BeautifulSoup
import re
import utils
from enum import Enum


# 只取最新的
LAST_ONLY = False
wish_img_path = "/../game/public/image/zzz/wish"

current_path = os.path.dirname(__file__)


class GameID(Enum):
    Genshin = 2
    HSR = 6
    ZZZ = 8


class WishType(Enum):
    INVALID = -1
    CHARACTER = 0
    WEAPON = 1
    OTHERS = 2


api_prefix = "https://bbs-api-os.hoyolab.com/community/post/wapi/"


def get_api_news_list(gid: GameID):

    api_url_news_list = api_prefix + "getNewsList"
    # https://augusmeow.github.io/code/api/mihoyo
    # type: 1 公告 2 活动 3 资讯
    # 之前跃迁都是 type=3 hoyolab 放在了资讯里
    # 1.5版本 放到了公告里 type=1
    # 英文官网非常乱，从此之后三个type里全都找，一会放公告一会放活动一会放资讯
    api_url_news_list += f"?gids={gid.value}"
    api_url_news_list += "&page_size=50"

    api_url_news_list += "&type="

    list_api_url_news_list = [
        api_url_news_list + "1",
        api_url_news_list + "2",
        api_url_news_list + "3",
    ]

    print(list_api_url_news_list)
    return list_api_url_news_list


def get_data_dict(api_url):

    data = utils.get_url_data(api_url)
    data_dict = utils.str_to_dict(data["data"]["list"])
    # print(data_dict)
    return data_dict


def get_warp_list(gid: GameID, data_dict):
    
    warp_arr = [[], [], []]

    if gid == GameID.Genshin:
        for obj in data_dict:
            pattern_subject = "Event Wishes"
            if re.search(pattern_subject, obj["post"]["subject"], re.IGNORECASE):
                warp_arr[WishType.CHARACTER.value].append(obj)
    elif gid == GameID.HSR:
        # 0 char 1 weapon

        for one_dict in data_dict:
            for obj in one_dict:

                pattern_char = "5-star character"
                pattern_char2 = "Character Event Warp"
                match_char = re.search(pattern_char, obj["post"]["subject"], re.IGNORECASE)
                match_char2 = re.search(pattern_char2, obj["post"]["subject"], re.IGNORECASE)
                if match_char or match_char2:
                    warp_arr[WishType.CHARACTER.value].append(obj)

                pattern_weapon = "5-star Light Cone"
                pattern_weapon2 = "Light Cone Event Warp"
                match_weapon = re.search(pattern_weapon, obj["post"]["subject"], re.IGNORECASE)
                match_weapon2 = re.search(pattern_weapon2, obj["post"]["subject"], re.IGNORECASE)
                if match_weapon or match_weapon2:
                    warp_arr[WishType.WEAPON.value].append(obj)
    elif gid == GameID.ZZZ:
        for obj in data_dict:
            # 0 char 1 weapon 2 permanent
            pattern_subject = "Channel"
            if re.search(pattern_subject, obj["post"]["subject"], re.IGNORECASE):

                pattern_char = "Exclusive Channel"
                match_char = re.search(pattern_char, obj["post"]["content"], re.IGNORECASE)
                if match_char:
                    warp_arr[WishType.CHARACTER.value].append(obj)

                pattern_weapon = "W-Engine Channel"
                match_weapon = re.search(
                    pattern_weapon, obj["post"]["content"], re.IGNORECASE
                )
                if match_weapon:
                    warp_arr[WishType.WEAPON.value].append(obj)

                pattern_permanent = "permanent channel"
                match_permanent = re.search(
                    pattern_permanent, obj["post"]["content"], re.IGNORECASE
                )
                if match_permanent:
                    warp_arr[WishType.OTHERS.value].append(obj)

    return warp_arr


def get_post_id(warp_arr):

    post_id_arr = [[], [], []]
    idx = 0

    for warp_info in warp_arr:

        for get_warp in warp_info:

            subject = get_warp["post"]["subject"]
            subject_zh = get_warp["post"]["multi_language_info"]["lang_subject"][
                "zh-cn"
            ]
            img_url = (
                len(get_warp["image_list"]) and get_warp["image_list"][0]["url"] or ""
            )
            post_id = get_warp["post"]["post_id"]

            post_id_arr[idx].append(post_id)

            print("subject", subject)
            print("subject_zh", subject_zh)
            print("img_url", img_url)
            print("post_id", post_id)

            img_type = len(img_url) and img_url[img_url.rfind(".", 0) :] or ""
            print("img_type", img_type)

            image_times = "1"

            # modify_subject = subject.split('"')[1].lower().replace(' ', '_')
            modify_subject = subject.split(":")[0].lower().replace(" ", "_")
            modify_subject += "_" + image_times + img_type
            print("modify_subject", modify_subject)

            if len(img_url) and len(modify_subject):
                utils.wget_img(img_url, f"{wish_img_path}/{modify_subject}")

            print("============")

        idx = idx + 1
        print("============")

    print("post_id_arr", post_id_arr)
    return post_id_arr


def unicode_conversion(s):
    return bytes(s, "latin1").decode("unicode_escape")


def get_arr_str_event_warp_name(sub_str, text):
    arr = []

    def append_match(find_des):
        if sub_str in find_des:
            arr.append(utils.match_char_event_warp_name_string(find_des))

    utils.got_insert_info(text, append_match)
    if isinstance(arr, list) and len(arr) > 2:
        arr = arr[:2]
    # print(arr)
    return utils.clean_list_none(arr)


def re_find(text_full: str, find_tag: str) -> list:
    arr = []

    def append_match(find_des):
        if find_tag in find_des:
            arr.append(find_des)

    utils.got_insert_info(text_full, append_match)
    got_new_str: str = ""
    for vv in arr:
        find_index = utils.find_nth_occurrence_2(vv, find_tag, ")", 3)
        start_index = vv.find(find_tag)
        if find_index != -1:
            got_new_str = vv[start_index + len(find_tag) : find_index]
            break
    if got_new_str != "":
        got_new_str = got_new_str.replace("\n", "")
        res = got_new_str.split(")")
        # print(res)
        return res

    return []


def get_wish5star(text: str, wish_type: WishType):
    arr = []
    find_tag: str = ""
    if wish_type == WishType.CHARACTER:
        find_tag = "5-Star Character"
    elif wish_type == WishType.WEAPON:
        find_tag = "5-Star Light Cone"

    def append_match(find_des):
        arr.extend(utils.find_substrs(find_des, find_tag, ")"))

    utils.got_insert_info(text, append_match)

    if isinstance(arr, list) and len(arr) > 2:
        arr = arr[:2]

    return utils.clean_list_none(arr)


def get_wish4star(text: str, wish_type: WishType):
    arr = []
    find_tag: str = ""
    if wish_type == WishType.CHARACTER:
        find_tag = "4-Star Characters"
    elif wish_type == WishType.WEAPON:
        find_tag = "4-Star Light Cones"

    def extract_characters(text: str, find_tag: str):
        # 使用一个正则表达式模式匹配所有的角色及其类型，根据传递的角色等级进行匹配
        pattern = rf"{find_tag}\s+((?:\w+\s+)?\w+\s+\(.*?\))\s+((?:\w+\s+)?\w+\s+\(.*?\))\s+((?:\w+\s+)?\w+\s+\(.*?\))"

        # 使用findall而不是search，findall将找到所有的匹配项，每项都是一个组中的字符。
        matches = re.findall(pattern, text)

        # 由于 findall 返回列表的列表，我们需要使用列表展开来获取单个组。
        if matches:
            character_list = [match for group in matches for match in group]
            return character_list
        else:
            return None

    def append_match(find_des):
        if extract_characters(find_des, find_tag) != None:
            arr.extend(extract_characters(find_des, find_tag))

    utils.got_insert_info(text, append_match)

    if isinstance(arr, list) and len(arr) > 3:
        arr = arr[:3]

    res = utils.clean_list_none(arr)

    # 没找着
    if isinstance(res, list) and not len(res):
        # print(">>>>>>> 没找到没找到没找到")
        res = re_find(text, find_tag)

    return utils.clean_list_none(res)


# wish_type 0 character 1 weapon


@utils.log_args
def parse_wish(post_id, wish_type: WishType):
    api_url_post_full = api_prefix + "getPostFull"
    api_url_post_full += "?post_id=" + post_id
    print("api_url_post_full: ", api_url_post_full)

    full_data = utils.get_url_data(api_url_post_full)
    got_content = full_data["data"]["post"]["post"]["structured_content"]

    clean_text = utils.str_to_dict(got_content)
    print("clean_text type is ", type(clean_text))
    if clean_text == None:
        return

    arr_str_char_event_warp_name = get_arr_str_event_warp_name(
        "Character Event Warp", clean_text
    )
    print("arr_str_char_event_warp_name is ", arr_str_char_event_warp_name)
    arr_str_char_event_warp_name_modify = [
        modify_name.lower().replace(" ", "_")
        for modify_name in arr_str_char_event_warp_name
    ]
    print(
        "arr_str_char_event_warp_name modify is ", arr_str_char_event_warp_name_modify
    )

    timestamp_text = utils.get_timestamp(clean_text)
    print("Timestamp: ", timestamp_text)

    duration_text = utils.get_duration(clean_text)
    print("Duration: ", duration_text)

    # str.strip()方法用于移除字符串头尾指定的字符，默认为空格或换行符
    # 提取5-star角色的名称和描述信息
    character_info = get_wish5star(clean_text, wish_type)
    print("5-star:", character_info)
    character_info_only_name = utils.get_only_name(character_info)
    print("5-star only name:", character_info_only_name)

    # 提取4-star角色的名称和描述信息
    character_info4 = get_wish4star(clean_text, wish_type)
    print("4-star:", character_info4)
    character_info_only_name4 = utils.get_only_name(character_info4)
    print("4-star only name:", character_info_only_name4)

    name = (
        arr_str_char_event_warp_name
        if wish_type == WishType.CHARACTER
        else "Brilliant Fixation"
    )
    name_lower = [utils.replace_characters(char) for char in name]

    return {
        "name": name,
        "name_lower": name_lower,
        "image": [1, 1] if len(character_info_only_name) == 2 else [1],
        "shortName": character_info_only_name,
        "start": (
            duration_text[0]["start_time"] + " +0800" if len(duration_text) else ""
        ),
        "end": duration_text[0]["end_time"] + " +0800" if len(duration_text) else "",
        "version": "xxx",
        "wish5star": (
            [utils.replace_characters(char) for char in character_info_only_name]
            if wish_type == WishType.CHARACTER
            else character_info_only_name
        ),
        "wish4star": (
            [utils.replace_characters(char) for char in character_info_only_name4]
            if wish_type == WishType.CHARACTER
            else character_info_only_name4
        ),
        "wishName": [],
        "url": [""],
    }


def get_json(post_id_arr):
    all_info = []
    for index, id_arr in enumerate(post_id_arr):
        for id in id_arr:
            dict_info = parse_wish(id, WishType(index))
            all_info.append(dict_info)
            if LAST_ONLY:
                break
    return all_info


def write_local(gid: GameID, output):
    filename = current_path + f"/auto/hoyolab{gid.value}.json"
    with open(filename, "w", encoding="utf-8") as file:
        # 将字典写入文件
        json.dump(output, file)


def main():
    gids = [GameID.Genshin, GameID.HSR, GameID.ZZZ]
    for gid in gids:
        api_url = get_api_news_list(gid)
        if isinstance(api_url, list):
            for url in api_url:
                data_dict = get_data_dict(url)
                warp_arr = get_warp_list(gid, data_dict)
                post_id_arr = get_post_id(warp_arr)
                all_info = get_json(post_id_arr)
                write_local(gid, all_info)


if __name__ == "__main__":
    main()
