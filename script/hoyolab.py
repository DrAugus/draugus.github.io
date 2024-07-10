# hoyolab interface

import argparse
import json
import os
import requests
from bs4 import BeautifulSoup
import re
import utils
import op_file
from enum import Enum

################# GLOBAL INFO ##################
current_path = os.path.dirname(__file__)
current_file_path = __file__
current_file_name = os.path.basename(current_file_path)
print(f"\n >>>> RUN {current_file_name} >>>> \n")
print("path is", current_file_path)

config_name = current_file_name.replace("py", "yml")
config_path = os.path.join(current_path, "config", config_name)
print("config path is", config_path)

config_info = utils.get_yaml_config(config_path)

LAST_ONLY = config_info["LAST_ONLY"]
USE_LOCAL_JSON = config_info["USE_LOCAL_JSON"]

print("\n")
###############################################


############# FOR GITHUB RUNNING #############
parser = argparse.ArgumentParser(description="Process some integers.")
parser.add_argument(
    "arg1", type=int, nargs="?", help="An integer for the github workflows"
)
args = parser.parse_args()

if args.arg1:
    USE_LOCAL_JSON = False

print("ARGS INFO", args)
print("\n")
###############################################


class GameID(Enum):
    Genshin = 2
    HSR = 6
    ZZZ = 8


WISH_IMG_PATH = {
    GameID.Genshin: "/../game/public/image/genshin/wish",
    GameID.HSR: "/../game/public/image/hsr/wish",
    GameID.ZZZ: "/../game/public/image/zzz/wish",
}


class WishType(Enum):
    INVALID = -1
    CHARACTER = 0
    WEAPON = 1
    OTHERS = 2


class Rarity(Enum):
    STAR3 = 3
    STAR4 = 4
    STAR5 = 5


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

    # 1, 2, 3
    list_api_url_news_list = [
        api_url_news_list + "1",
        api_url_news_list + "2",
        api_url_news_list + "3",
    ]

    print(list_api_url_news_list)
    return list_api_url_news_list


def get_data_dict(gid: GameID, api_url):

    if USE_LOCAL_JSON:
        filename = get_local_official_json_name(gid, api_url)
        data = op_file.load_dict_from_file(filename)
        data_dict = data["data"]["list"]
        return data_dict

    data = utils.get_url_data(api_url)
    data_dict = utils.str_to_dict(data["data"]["list"])
    # print(data_dict)
    return data_dict


def get_warp_list(gid: GameID, data_dict):

    warp_arr = [[], [], []]

    if gid == GameID.Genshin:
        for obj in data_dict:
            pattern_subject = "Event Wish"
            pattern_content = "Event Wish"
            match_subject = re.search(
                pattern_subject, obj["post"]["subject"], re.IGNORECASE
            )
            match_content = re.search(
                pattern_content, obj["post"]["content"], re.IGNORECASE
            )
            if match_subject or match_content:
                warp_arr[WishType.CHARACTER.value].append(obj)

    elif gid == GameID.HSR:
        # 0 char 1 weapon
        for obj in data_dict:

            pattern_char = "5-star character"
            pattern_char2 = "Character Event Warp"
            match_char = re.search(pattern_char, obj["post"]["subject"], re.IGNORECASE)
            match_char2 = re.search(
                pattern_char2, obj["post"]["subject"], re.IGNORECASE
            )
            if match_char or match_char2:
                warp_arr[WishType.CHARACTER.value].append(obj)

            pattern_weapon = "5-star Light Cone"
            pattern_weapon2 = "Light Cone Event Warp"
            match_weapon = re.search(
                pattern_weapon, obj["post"]["subject"], re.IGNORECASE
            )
            match_weapon2 = re.search(
                pattern_weapon2, obj["post"]["subject"], re.IGNORECASE
            )
            if match_weapon or match_weapon2:
                warp_arr[WishType.WEAPON.value].append(obj)

    elif gid == GameID.ZZZ:
        for obj in data_dict:
            # 0 char 1 weapon 2 permanent
            pattern_subject = "Channel"
            if re.search(pattern_subject, obj["post"]["subject"], re.IGNORECASE):

                pattern_char = "Exclusive Channel"
                match_char = re.search(
                    pattern_char, obj["post"]["content"], re.IGNORECASE
                )
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


def get_post_id(gid: GameID, warp_arr):

    print("INVOKE get_post_id >>>")

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
            modify_subject = utils.replace_characters(subject.split(":")[0])
            modify_subject += "_" + image_times + img_type
            print("modify_subject", modify_subject)

            if len(img_url) and len(modify_subject) and not USE_LOCAL_JSON:
                utils.wget_file(img_url, f"{WISH_IMG_PATH[gid]}/{modify_subject}")

            print("============")

        idx = idx + 1
        print("============")

    print("post_id_arr", post_id_arr)
    return post_id_arr


def unicode_conversion(s):
    return bytes(s, "latin1").decode("unicode_escape")


def get_arr_str_event_warp_name(gid: GameID, text):
    arr = []

    match_pattern = []

    if gid == GameID.Genshin:
        match_pattern = ["Character Event Warp", "Event Wish"]

    def append_match(find_des):
        for substr in match_pattern:
            if utils.is_match(substr, find_des):
                match = utils.match_char_event_warp_name_string(find_des)
                if len(match):
                    arr.extend([m for m in match if m])

    utils.got_insert_info(text, append_match)

    # print(arr)
    return arr


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


# match: "xxx" name (type)
def modify_char(text: str):
    pattern = r'"(.+?)"\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+\((.+?)\)'
    matches = re.findall(pattern, text, re.IGNORECASE)
    res = []
    if len(matches):
        for ma in matches:
            if len(ma) == 3:
                res.append(
                    {
                        "quote": ma[0],
                        "name": ma[1],
                        "type": ma[2],
                    }
                )

    return res


def get_wish_stars(gid: GameID, text, wish_type: WishType, rarity: Rarity):
    arr = []
    find_tag: str = ""
    start_str = ""
    end_str = ""
    if gid == GameID.Genshin:
        if wish_type == WishType.CHARACTER:
            if rarity == Rarity.STAR5:
                start_str = "5-Star Character"
                end_str = "will receive a huge"
            elif rarity == Rarity.STAR4:
                start_str = "4-Star Character"
                end_str = "will receive a huge"
        elif wish_type == WishType.WEAPON:
            if rarity == Rarity.STAR5:
                start_str = "5-Star weapon"
                end_str = "will receive a huge"
            elif rarity == Rarity.STAR4:
                start_str = "4-Star weapon"
                end_str = "will receive a huge"

    def append_match(find_des):
        arr.extend(utils.find_all_substr(find_des, start_str, end_str))

    utils.got_insert_info(text, append_match)

    arr_char = []
    for one in arr:
        arr_char.extend([char for char in modify_char(one) if char])

    return arr_char


def get_post_url(post_id):
    api_url_post_full = api_prefix + "getPostFull"
    api_url_post_full += "?post_id=" + post_id
    print("api_url_post_full: ", api_url_post_full)
    return api_url_post_full


def get_info_by_insert(gid: GameID, post_id, wish_type: WishType, clean_text):

    api_url_post_full = get_post_url(post_id)
    arr_str_char_event_warp_name = get_arr_str_event_warp_name(gid, clean_text)
    print("arr_str_char_event_warp_name is ", arr_str_char_event_warp_name)
    arr_str_char_event_warp_name_modify = [
        modify_name.lower().replace(" ", "_") + "_"
        for modify_name in arr_str_char_event_warp_name
    ]
    print(
        "arr_str_char_event_warp_name modify is ", arr_str_char_event_warp_name_modify
    )

    text_date = utils.get_date(clean_text)
    print("Date: ", text_date)

    duration_text = utils.get_duration(clean_text)
    print("Duration: ", duration_text)

    # str.strip()方法用于移除字符串头尾指定的字符，默认为空格或换行符
    # 提取5-star角色的名称和描述信息
    character_info = get_wish_stars(gid, clean_text, wish_type, Rarity.STAR5)
    print("5-star:", character_info)
    character_info_only_name = [info["name"] for info in character_info]
    print("5-star only name:", character_info_only_name)

    # 提取4-star角色的名称和描述信息
    character_info4 = get_wish_stars(gid, clean_text, wish_type, Rarity.STAR4)
    print("4-star:", character_info4)
    character_info_only_name4 = [info["name"] for info in character_info4]
    print("4-star only name:", character_info_only_name4)

    name = (
        arr_str_char_event_warp_name
        if wish_type == WishType.CHARACTER
        else "Brilliant Fixation"
    )

    return {
        "api_url": api_url_post_full,
        "name": name,
        "name_lower": arr_str_char_event_warp_name_modify,
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


@utils.log_args
def parse_wish(gid: GameID, post_id, wish_type: WishType):

    api_url_post_full = get_post_url(post_id)

    if USE_LOCAL_JSON:
        post_json_filename = get_local_official_json_name(gid, api_url_post_full)
        # TODO temp name, if commit delete
        post_json_filename = post_json_filename.split("_")[0] + ".json"
        full_data = op_file.load_dict_from_file(post_json_filename)
    else:
        full_data = utils.get_url_data(api_url_post_full)

    got_content = full_data["data"]["post"]["post"]["structured_content"]

    clean_text = utils.str_to_dict(got_content)
    print("clean_text type is ", type(clean_text))
    if clean_text == None:
        return

    merge_insert = utils.merge_insert(clean_text)
    return get_info_by_insert(gid, post_id, wish_type, merge_insert)

    return get_info_by_insert(gid, post_id, wish_type, clean_text)


def get_json(gid: GameID, post_id_arr):
    all_info = []
    for index, id_arr in enumerate(post_id_arr):
        for post_id in id_arr:
            dict_info = parse_wish(gid, post_id, WishType(index))
            all_info.append(dict_info)
            if LAST_ONLY:
                break
    return all_info


@utils.log_args
def get_local_official_json_name(gid: GameID, url):
    type_news = utils.match_value_by_key(url, "type")
    post_id = utils.match_value_by_key(url, "post_id")

    filename = current_path + f"/data/hoyolab{gid.name}{type_news}"
    if len(post_id):
        filename += f"_{post_id}"
    filename += ".json"
    return filename


def write_local(gid: GameID, output):
    filename = current_path + f"/auto/hoyolab{gid.value}.json"
    op_file.save_dict_to_file(output, filename)


@utils.log_args
def get_official_json(gid: GameID, url):
    if USE_LOCAL_JSON:
        return
    filename = get_local_official_json_name(gid, url)
    utils.wget_file(url, filename)


@utils.log_args
def get_post_id_url(gid: GameID, post_all: list):
    for post in post_all:
        if "api_url" in post:
            url = post["api_url"]
            get_official_json(gid, url)
            # 只获取最新的，一个就够用了
            break


def main():
    gids = [GameID.Genshin, GameID.HSR, GameID.ZZZ]
    for gid in gids:
        api_url = get_api_news_list(gid)
        gid_info_list = []
        if isinstance(api_url, list):
            for url in api_url:
                get_official_json(gid, url)
                data_dict = get_data_dict(gid, url)
                warp_arr = get_warp_list(gid, data_dict)
                post_id_arr = get_post_id(gid, warp_arr)
                all_info = get_json(gid, post_id_arr)
                gid_info_list.extend([info for info in all_info if info])
        get_post_id_url(gid, gid_info_list)
        write_local(gid, gid_info_list)


if __name__ == "__main__":
    main()
