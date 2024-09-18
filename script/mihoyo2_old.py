# 2 means genshin

import json
import requests
from bs4 import BeautifulSoup
import re
import utils
import os


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


def parse_all(post_id, post_idx):
    full_article_api_url = (
        "https://bbs-api-os.hoyolab.com/community/post/wapi/getPostFull?post_id="
        + post_id
    )

    full_data = utils.get_url_data(full_article_api_url)
    json_str = json.dumps(full_data["data"]["post"]["post"]["content"])
    # print(json_str)
    # 清洗标签
    soup = BeautifulSoup(json_str, "html.parser")
    clean_text = soup.get_text()
    clean_text = clean_text.replace("\\", "")

    print("=====================")
    # print(clean_text)
    print("=====================")

    duration_text = (
        clean_text.split("Event Wish Duration")[1]
        .split("Event Wish Details")[0]
        .strip()
    )
    # details_text = clean_text.split("Event Details:")[1].strip()

    print("Duration: ", duration_text)
    # print("Details: ", details_text)

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
    find_res = find_between_a_b(clean_text, start_tag, end_tag)
    wish_name = find_res
    print("wish name:", wish_name)
    print("find_res len:", len(find_res))
    img_times = ["1", "1", "1"]
    img_name = []
    for i in range(len(find_res)):
        # print(find_res[i])
        img_type = img_url[post_idx][i][img_url[post_idx][i].rfind(".", 0) :]
        # print('img_type', img_type)
        img_name.append(modify_image_name(find_res[i], img_times[i], img_type))
    print("img_name:", img_name)

    # 5-star char
    pattern_string = r"5-star character(.*?)will receive a huge"
    find_res = re_find_between_a_b(clean_text, pattern_string)
    print("5-star:", find_res)
    character_info = []
    for c_info in find_res:
        modify_c = c_info.split('"')[2].split("(")[0].strip()
        character_info.append(modify_c)
    short_name = character_info
    print("5-star only name:", short_name)

    # 4-star char
    pattern_string = r"4-star characters(.*?)will receive a huge"
    find_res = re_find_between_a_b(clean_text, pattern_string)
    find_res = find_res[0].split(",")
    print("4-star:", find_res)
    character_info = []
    for c_info in find_res:
        modify_c = c_info.split('"')[2].split("(")[0].strip()
        character_info.append(modify_c)
    char_info4 = character_info
    print("4-star only name:", char_info4)

    name_lower = [utils.replace_characters(char) for char in wish_name]

    wish_char = {
        "name": wish_name,
        "name_lower": name_lower,
        "image": [1, 1],
        "shortName": short_name,
        "start": duration_text,
        "end": duration_text,
        "version": "xxx",
        "wish5star": [utils.replace_characters(char) for char in short_name],
        "wish4star": [utils.replace_characters(char) for char in char_info4],
        "wishName": [],
        "url": [""],
    }

    # 5-star weapon
    pattern_string = r"5-star weapons(.*?)will receive a huge"
    find_res = re_find_between_a_b(clean_text, pattern_string)
    if len(find_res) == 0:
        pattern_string = r"5-star weapon (.*?) \(.*?\)"
        find_res = re_find_between_a_b(clean_text, pattern_string)
    find_res = find_res[0].split("and")
    print("5-weapon:", find_res)
    weapon_info = []
    for c_info in find_res:
        modify_c = c_info.split("(")[0].strip()
        weapon_info.append(modify_c)
    weapon_info5 = weapon_info
    print("5-weapon only name:", weapon_info5)

    # 4-star weapon
    pattern_string = r"4-star weapons(.*?)will receive a huge"
    find_res = re_find_between_a_b(clean_text, pattern_string)
    find_res = find_res[0].split(",")
    print("4-weapon:", find_res)
    weapon_info = []
    for c_info in find_res:
        modify_c = c_info.split("(")[0].strip()
        if modify_c.startswith("and"):
            modify_c = modify_c[3:].strip()
        weapon_info.append(modify_c)
    weapon_info4 = weapon_info
    print("4-weapon only name:", weapon_info4)

    wish_weapon = {
        "name": "Epitome Invocation",
        "image": [1, 1],
        "shortName": weapon_info5,
        "start": duration_text,
        "end": duration_text,
        "version": "xxx",
        "wish5star": weapon_info5,
        "wish4star": weapon_info4,
        "url": [""],
    }

    return {
        "post_url": full_article_api_url,
        "wish_char": wish_char,
        "wish_weapon": wish_weapon,
    }


all_info = []

all_info.append({"img_url": img_url})

# 只取最新的
only_last = False

for i in range(len(post_id)):
    all_info.append(parse_all(post_id[i], i))
    if only_last:
        break

current_path = os.path.dirname(__file__)
filename = current_path + "/auto/mhy2old.json"
utils.OperateFile.save_dict_to_file(all_info, filename)
