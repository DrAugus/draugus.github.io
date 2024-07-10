# 2 means genshin

import json
import os
import requests
from bs4 import BeautifulSoup
import re
import op_file
import utils


# type=3 公告
api_url = "https://bbs-api-os.hoyolab.com/community/post/wapi/getNewsList?gids=2&type=3"
api_url += "&page_size=50"

data = utils.get_url_data(api_url)
json_str = json.dumps(data["data"]["list"])
data_dict = json.loads(json_str)

# print(data_dict)

all_events_info = []

for obj in data_dict:
    if "Event Wishes" in obj["post"]["subject"]:
        all_events_info.append(obj)

img_url = [[]]
post_id = []

for get_warp in all_events_info:
    tmp_img_url = []
    for img in get_warp["image_list"]:
        tmp_img_url.append(img["url"])
    img_url.append(tmp_img_url)

    post_id.append(get_warp["post"]["post_id"])

# clean none img arr
img_url = list(filter(None, img_url))

print("img_url")
for mm in img_url:
    print(mm)
print("post_id", post_id)


def modify_image_name(str, img_times, img_type):
    res = str.lower().replace(" ", "_")
    res += "_" + img_times + img_type
    # print('res:', res)
    return res


def find_all_index(str, sub):
    indices = []

    start = 0
    while True:
        index = str.find(sub, start)
        if index == -1:
            break
        indices.append(index)
        start = index + 1
    return indices


# 正则查找
def re_find_between_a_b(src_str, pattern_str):
    pattern = re.compile(pattern_str, re.DOTALL)
    substrings = re.findall(pattern, src_str)
    # print("substrings:", substrings)
    return substrings


def find_between_a_b(my_str, start_tag, end_tag):
    # 定义子串的列表
    sub_strs = []

    # 循环查找子串
    while end_tag in my_str:
        # 找到起始位置和结束位置
        start_index = my_str.find(start_tag) + len(start_tag)
        end_index = my_str.find(end_tag, start_index)
        if start_index == -1 or end_index == -1:
            break

        # 截取子串并添加到列表
        sub_strs.append(my_str[start_index:end_index])
        # 将已找到的部分从原字符串中删除
        my_str = my_str[end_index:]

    # print('sub_strs:', sub_strs)
    return sub_strs


def get_arr_str_event_wish_name(text, start_tag, end_tag):
    arr = []

    def append_match(find_des):
        arr.extend(find_between_a_b(find_des, start_tag, end_tag))

    utils.got_insert_info(text, append_match)
    # print(arr)
    return utils.clean_list_none(arr)


def get_wish_char(text: str):
    arr = []

    def append_match(find_des):
        arr.extend(utils.get_char_name(find_des))

    utils.got_insert_info(text, append_match)

    return arr


def get_wish5star(text: str):
    arr = []
    find_tag: list[str] = ["5-star character", "5-star weapons"]

    def append_match(find_des):
        for vv in find_tag:
            arr.extend(utils.find_all_substr(find_des, vv, ")"))

    utils.got_insert_info(text, append_match)

    return utils.clean_list_none(arr)


def get_wish4star(text: str):
    arr = []
    find_tag: list[str] = ["4-star characters", "4-star weapons"]

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
        for vv in find_tag:
            if extract_characters(find_des, vv) != None:
                arr.extend(extract_characters(find_des, vv))

    utils.got_insert_info(text, append_match)

    res = utils.clean_list_none(arr)

    # 没找着
    if isinstance(res, list) and not len(res):
        # print(">>>>>>> 没找到没找到没找到")
        res = []
        for vv in find_tag:
            res.extend(re_find(text, vv))

    return utils.clean_list_none(res)


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


# Chronicled Wish
def get_chronicled_wish(text):
    arr = []

    def modify_name(s: str):
        sub = s.split(",")
        if len(sub):
            sub = [v.replace(":", "").replace("\n", "").strip() for v in sub]
            sub = [v[3:].strip() if v.startswith("and") else v for v in sub]
            return sub
        return []

    def append_match(find_des):
        if "Chronicled" in find_des or "chronicled" in find_des:
            index1 = find_des.find("5-Star Characters")
            res = find_des[index1:]

            char5star = utils.find_all_substr(res, "5-Star Characters", "\n")
            char5weapon = utils.find_all_substr(res, "5-Star Weapons", "\n")
            char4star = utils.find_all_substr(res, "4-Star Characters", "\n")
            char4weapon = utils.find_all_substr(res, "4-Star Weapons", "\n")

            if len(char5star):
                char5star = [modify_name(s) for s in char5star]
                char5weapon = [modify_name(s) for s in char5weapon]
                char4star = [modify_name(s) for s in char4star]
                char4weapon = [modify_name(s) for s in char4weapon]

                arr.append(
                    {
                        "char5star": char5star,
                        "char5weapon": char5weapon,
                        "char4star": char4star,
                        "char4weapon": char4weapon,
                    }
                )

    utils.got_insert_info(text, append_match)

    return arr


@utils.log_args
def parse_wish(post_id, post_idx):
    full_article_api_url = (
        "https://bbs-api-os.hoyolab.com/community/post/wapi/getPostFull?post_id="
        + post_id
    )
    print("full_article_api_url: ", full_article_api_url)

    full_data = utils.get_url_data(full_article_api_url)
    got_content = full_data["data"]["post"]["post"]["structured_content"]

    clean_text = utils.str_to_dict(got_content)
    print("clean_text type is ", type(clean_text))
    if clean_text == None:
        return

    print("=====================")
    # print(clean_text)
    print("=====================")

    text_date = utils.get_date(clean_text)
    print("Date: ", text_date)

    duration_text = utils.get_duration(clean_text)
    print("Duration: ", duration_text)

    # 通过查找特定字符串来获取5-star角色 弃用
    # find_sub = '5-Star character'
    # character_start = find_all_index(clean_text, find_sub)
    # character_start = [len(find_sub) + s for s in character_start]
    # print('character_start index:',character_start)
    # print('character_start index length:',len(character_start))

    # find_sub = 'will receive a huge'
    # character_end = find_all_index(clean_text,find_sub)

    # WISH NAME
    start_tag = 'Event Wish "'
    end_tag = '" - Boosted Drop Rate'
    wish_name = get_arr_str_event_wish_name(clean_text, start_tag, end_tag)
    end_tag = '" - Chronicled'
    wish_name.extend(get_arr_str_event_wish_name(clean_text, start_tag, end_tag))
    print("wish name:", wish_name)
    print("wish name len:", len(wish_name))
    img_times = ["1"] * len(wish_name)
    for i in range(len(wish_name)):
        # print(find_res[i])
        img_type = img_url[post_idx][i][img_url[post_idx][i].rfind(".", 0) :]
        # print('img_type', img_type)
        img_name = modify_image_name(wish_name[i], img_times[i], img_type)
        print("img_name:", img_name)

    # 5-star char
    # pattern_string = r'5-star character(.*?)will receive a huge'
    # find_res = re_find_between_a_b(clean_text, pattern_string)
    # character_info = find_res
    # print('5-star:', character_info)
    # character_info_only_name = utils.get_only_name(character_info)
    # print('5-star only name:', character_info_only_name)

    all_char_info = get_wish_char(clean_text)
    print("all char:", all_char_info)
    only_name = []
    for v in all_char_info:
        char_prefix, char_name, char_type = v
        if len(char_name) < 30:
            only_name.append(char_name)
    print("all char only name:", only_name)
    # count_5star = len(all_char_info) / 4
    # character_info = []
    # for i in range(0, count_5star):
    #     character_info.append(all_char_info[i*4])
    # print('5-star:', character_info)
    # character_info_only_name = utils.get_only_name(character_info)
    # print('5-star only name:', character_info_only_name)

    # character_info4 = []
    # character_info4.append(
    #     all_char_info[1], all_char_info[2], all_char_info[3])
    # print('4-star:', character_info4)
    # character_info_only_name4 = utils.get_only_name(character_info4)
    # print('4-star only name:', character_info_only_name4)

    # # 提取5-star角色的名称和描述信息
    # character_info = get_wish5star(clean_text)
    # print('5-star:', character_info)
    # character_info_only_name = utils.get_only_name(character_info)
    # print('5-star only name:', character_info_only_name)

    # # 提取4-star角色的名称和描述信息
    # character_info4 = get_wish4star(clean_text)
    # print('4-star:', character_info4)
    # character_info_only_name4 = utils.get_only_name(character_info4)
    # print('4-star only name:', character_info_only_name4)

    # 集录祈愿
    chronicle = get_chronicled_wish(clean_text)
    print("chronicle", chronicle)

    name_lower = [utils.replace_characters(char) for char in wish_name]

    return {
        "name": wish_name,
        "name_lower": name_lower,
        "image": [1, 1],
        "shortName": only_name,
        "start": (
            duration_text[0]["start_time"] + " +0800" if len(duration_text) else ""
        ),
        "end": duration_text[0]["end_time"] + " +0800" if len(duration_text) else "",
        "version": "xxx",
        "wish5star": [utils.replace_characters(char) for char in only_name],
        "wish4star": [utils.replace_characters(char) for char in only_name],
        "chronicle": chronicle,
        "wishName": [],
        "url": [""],
    }


all_info = []

# 只取最新的
only_last = False

for i in range(len(post_id)):
    dict_wish = parse_wish(post_id[i], i)
    all_info.append(dict_wish)
    if only_last:
        break

current_path = os.path.dirname(__file__)
filename = current_path + "/auto/mhy2.json"
op_file.save_dict_to_file(all_info, filename)
