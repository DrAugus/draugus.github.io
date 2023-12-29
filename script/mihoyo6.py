# 6 means hsr
# hoyolab interface

import json
import os
import requests
from bs4 import BeautifulSoup
import re

import utils


from enum import Enum

# 定义全局枚举类型


class WishType(Enum):
    INVALID = 0
    CHARACTER = 1
    WEAPON = 2


api_prefix = 'https://bbs-api-os.hoyolab.com/community/post/wapi/'

api_url_news_list = api_prefix + 'getNewsList'
api_url_post_full = api_prefix + 'getPostFull'
# https://augusmeow.github.io/code/api/mihoyo
# type: 1 公告 2 活动 3 资讯
# 之前跃迁都是 type=3 hoyolab 放在了资讯里
# 1.5版本 放到了公告里 type=1
api_url_news_list += '?gids=6&type=1'
api_url_news_list += '&page_size=50'

print(api_url_news_list)

data = utils.get_url_data(api_url_news_list)
data_dict = utils.str_to_dict(data['data']['list'])

# print(data_dict)
print("data_dict type is ", type(data_dict))

# 0 char 1 weapon
warp_arr = [[], []]

for obj in data_dict:

    pattern_char = '5-star character'
    pattern_char2 = 'Character Event Warp'
    match_char = re.search(pattern_char, obj['post']['subject'], re.IGNORECASE)
    match_char2 = re.search(
        pattern_char2, obj['post']['subject'], re.IGNORECASE)
    if match_char or match_char2:
        warp_arr[0].append(obj)

    pattern_lc = '5-star Light Cone'
    pattern_lc2 = 'Light Cone Event Warp'
    match_lc = re.search(pattern_lc, obj['post']['subject'], re.IGNORECASE)
    match_lc2 = re.search(pattern_lc2, obj['post']['subject'], re.IGNORECASE)
    if match_lc or match_lc2:
        warp_arr[1].append(obj)

post_id_arr = [[], []]
idx = 0


for warp_info in warp_arr:

    for get_warp in warp_info:

        subject = get_warp['post']['subject']
        subject_zh = get_warp['post']['multi_language_info']['lang_subject']['zh-cn']
        img_url = get_warp['image_list'][0]['url']
        post_id = get_warp['post']['post_id']

        post_id_arr[idx].append(post_id)

        print('subject', subject)
        print('subject_zh', subject_zh)
        print('img_url', img_url)
        print('post_id', post_id)

        img_type = img_url[img_url.rfind('.', 0):]
        print('img_type', img_type)

        image_times = '1'

        # modify_subject = subject.split('"')[1].lower().replace(' ', '_')
        modify_subject = subject.split(':')[0].lower().replace(' ', '_')
        modify_subject += '_' + image_times + img_type
        print('modify_subject', modify_subject)

        print('============')

    idx = idx + 1
    print('============')

print('post_id_arr', post_id_arr)


def unicode_conversion(s):
    return bytes(s, "latin1").decode("unicode_escape")


def got_insert_info(text, callback):
    for vv in text:
        find_des = vv.get("insert")
        if isinstance(find_des, str):
            callback(find_des)


def get_arr_str_event_warp_name(sub_str, text):
    arr = []

    def append_match(find_des):
        if sub_str in find_des:
            arr.append(
                utils.match_char_event_warp_name_string(find_des))

    got_insert_info(text, append_match)
    # print(arr)
    return utils.clean_list_none(arr)


def get_timestamp(text):
    arr = []

    def append_match(find_des):
        arr.extend(utils.find_unique_timestamps(find_des))

    got_insert_info(text, append_match)

    return utils.clean_list_none(arr)


def get_duration(text):
    arr = []

    def append_match(find_des: str):

        def got_dur(start: str, end: str):
            if start != None and end != None:
                arr.append({
                    'start_time': start,
                    'end_time': end
                })

        # 大版本更新时
        # update – 2024/01/17 11:59:00(server time)
        if 'update' in find_des and 'server time' in find_des:
            version_match = re.search(r"Version (\d+\.\d+)", find_des)
            if version_match:
                version = version_match.group(1)
            else:
                version = None

            time_match = re.search(
                r"(\d{4}/\d{2}/\d{2} \d{2}:\d{2}:\d{2})", find_des)
            if time_match:
                time = time_match.group(1)
            else:
                time = None

            if version != None and time != None:
                # print(f'version:{version}', f'time:{time}')
                got_dur(version, time)
                return

        # 小版本更新时
        # Event Duration\n2023/12/06 12:00:00 – 2023/12/26 14:59:00(server time)
        if 'Event Duration' in find_des and 'server time' in find_des:
            # 正则表达式模式匹配 ISO 8601 风格的日期和时间
            pattern = r'(\d{4}/\d{2}/\d{2} \d{2}:\d{2}:\d{2})'
            # 使用正则表达式搜索所有匹配的时间
            matches = re.findall(pattern, find_des)
            # 检查是否找到了两个匹配的时间，表示开始和结束时间
            if matches and len(matches) == 2:
                start_time, end_time = matches
                got_dur(start_time, end_time)
                # print(f"start_time:{start_time} end_time:{end_time}")
            else:
                start_time, end_time = None
                # print("Could not extract start and end times from the string.")

        got_dur(None, None)

    got_insert_info(text, append_match)

    return arr


def re_find(text_full: str, find_tag: str) -> list:
    arr = []

    def append_match(find_des):
        if find_tag in find_des:
            arr.append(find_des)

    got_insert_info(text_full, append_match)
    got_new_str: str = ''
    for vv in arr:
        find_index = utils.find_nth_occurrence_2(vv, find_tag, ')', 3)
        start_index = vv.find(find_tag)
        if find_index != -1:
            got_new_str = vv[start_index+len(find_tag):find_index]
            break
    if got_new_str != '':
        got_new_str = got_new_str.replace('\n', '')
        res = got_new_str.split(')')
        # print(res)
        return res

    return []


def get_wish5star(text: str, wish_type: WishType):
    arr = []
    find_tag: str = ''
    if wish_type == WishType.CHARACTER:
        find_tag = '5-Star Character'
    elif wish_type == WishType.WEAPON:
        find_tag = '5-Star Light Cone'

    def append_match(find_des):
        arr.extend(utils.find_substrs(find_des, find_tag, ')'))

    got_insert_info(text, append_match)

    return utils.clean_list_none(arr)


def get_wish4star(text: str, wish_type: WishType):
    arr = []
    find_tag: str = ''
    if wish_type == WishType.CHARACTER:
        find_tag = '4-Star Characters'
    elif wish_type == WishType.WEAPON:
        find_tag = '4-Star Light Cones'

    def extract_characters(text: str, find_tag: str):
        # 使用一个正则表达式模式匹配所有的角色及其类型，根据传递的角色等级进行匹配
        pattern = fr"{
            find_tag}\s+((?:\w+\s+)?\w+\s+\(.*?\))\s+((?:\w+\s+)?\w+\s+\(.*?\))\s+((?:\w+\s+)?\w+\s+\(.*?\))"

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

    got_insert_info(text, append_match)

    res = utils.clean_list_none(arr)

    # 没找着
    if isinstance(res, list) and not len(res):
        # print(">>>>>>> 没找到没找到没找到")
        res = re_find(text, find_tag)

    return utils.clean_list_none(res)


def get_only_name(character_info: list) -> list:
    character_info_only_name = [info.split('(')[0] for info in character_info]
    character_info_only_name = [name.strip()
                                for name in character_info_only_name]
    character_info_only_name = [utils.clear_non_letters(
        clear) for clear in character_info_only_name]
    character_info_only_name = utils.clean_list_none(character_info_only_name)
    # print('only name:', character_info_only_name)
    return character_info_only_name

# wish_type 0 character 1 weapon


@utils.log_args
def parse_wish(post_id, wish_type: WishType):
    full_article_api_url = api_url_post_full + '?post_id=' + post_id
    print("full_article_api_url: ", full_article_api_url)

    full_data = utils.get_url_data(full_article_api_url)
    got_content = full_data['data']['post']['post']['structured_content']

    clean_text = utils.str_to_dict(got_content)
    print("clean_text type is ", type(clean_text))
    if clean_text == None:
        return

    arr_str_char_event_warp_name = get_arr_str_event_warp_name(
        'Character Event Warp', clean_text)
    print("arr_str_char_event_warp_name is ", arr_str_char_event_warp_name)
    arr_str_char_event_warp_name_modify = [modify_name.lower().replace(
        " ", "_") for modify_name in arr_str_char_event_warp_name]
    print("arr_str_char_event_warp_name modify is ",
          arr_str_char_event_warp_name_modify)

    timestamp_text = get_timestamp(clean_text)
    print("Timestamp: ", timestamp_text)

    duration_text = get_duration(clean_text)
    print("Duration: ", duration_text)

    # str.strip()方法用于移除字符串头尾指定的字符，默认为空格或换行符
    # 提取5-star角色的名称和描述信息
    character_info = get_wish5star(clean_text, wish_type)
    print('5-star:', character_info)
    character_info_only_name = get_only_name(character_info)
    print('5-star only name:', character_info_only_name)

    # 提取4-star角色的名称和描述信息
    character_info4 = get_wish4star(clean_text, wish_type)
    print('4-star:', character_info4)
    character_info_only_name4 = get_only_name(character_info4)
    print('4-star only name:', character_info_only_name4)

    return {
        'name': arr_str_char_event_warp_name if wish_type == WishType.CHARACTER else "Brilliant Fixation",
        'image': [1, 1] if len(character_info_only_name) == 2 else [1],
        'shortName': character_info_only_name,
        'start': duration_text[0]['start_time'] + ' +0800',
        'end': duration_text[1]['end_time'] + ' +0800',
        'version': 'xxx',
        'wish5star': [utils.replace_characters(char) for char in character_info_only_name],
        'wish4star':  [utils.replace_characters(char) for char in character_info_only_name4],
        'wishName': [],
        'url': ['']
    }


all_info = []

# 只取最新的
only_last = True

for i in post_id_arr[0]:
    dict_char = parse_wish(i, WishType.CHARACTER)
    all_info.append(dict_char)
    if only_last:
        break

for i in post_id_arr[1]:
    dict_weapon = parse_wish(i, WishType.WEAPON)
    all_info.append(dict_weapon)
    if only_last:
        break

current_path = os.path.dirname(__file__)
filename = current_path + '/auto/mhy6.json'
with open(filename, 'w') as file:
    # 将字典写入文件
    json.dump(all_info, file)
