# 6 means hsr

import json
import requests
from bs4 import BeautifulSoup
import re


def get_url_data(api_url):
    response = requests.get(api_url)
    data = response.json()
    return data


api_url = 'https://bbs-api-os.hoyolab.com/community/post/wapi/getNewsList?gids=6&type=3'

api_url += '&page_size=50'

data = get_url_data(api_url)
json_str = json.dumps(data['data']['list'])
data_dict = json.loads(json_str)

# print(data_dict)

# 0 char 1 weapon
warp_arr = [[], []]

for obj in data_dict:

    pattern_char = '5-star character'
    match_char = re.search(pattern_char, obj['post']['subject'], re.IGNORECASE)
    if obj['post']['subject'].startswith('Event Warp') or match_char:
        warp_arr[0].append(obj)

    pattern_lc = '5-star Light Cone'
    match_lc = re.search(pattern_lc, obj['post']['subject'], re.IGNORECASE)
    if (not obj['post']['subject'].startswith('Event Warp') and
            'Event Warp' in obj['post']['subject']) or match_lc:
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

    idx = idx + 1

print('post_id_arr', post_id_arr)


def parse_char(post_id):
    full_article_api_url = 'https://bbs-api-os.hoyolab.com/community/post/wapi/getPostFull?post_id=' + \
        post_id

    full_data = get_url_data(full_article_api_url)
    json_str = json.dumps(full_data['data']['post']['post']['content'])
    # print(json_str)
    # 清洗标签
    soup = BeautifulSoup(json_str, "html.parser")
    clean_text = soup.get_text()
    # print(clean_text)
    duration_text = clean_text.split("Event Duration")[
        1].split("Event Details:")[0].strip()
    # details_text = clean_text.split("Event Details:")[1].strip()

    print("Duration: ", duration_text)
    # print("Details: ", details_text)

    # 通过查找特定字符串来获取5-star角色
    character_start = clean_text.find(
        '5-Star Character') + len('5-Star Character')
    character_end = clean_text.find('4-Star Characters')

    # 提取5-star角色的名称和描述信息
    character_info = clean_text[character_start:character_end].split(')')[
        0] + ')'
    print('5-star:', character_info)

    character_info_only_name = character_info.split('(')[0]
    print('5-star only name:', character_info_only_name)

    # 通过查找特定字符串来获取4-star角色列表
    four_star_start = clean_text.find(
        '4-Star Characters') + len('4-Star Characters')
    four_star_end = clean_text.find('Among the above characters')

    # 提取4-star角色列表并按照逗号分隔
    four_star_info = clean_text[four_star_start:four_star_end].split(')')
    four_star_info_modify = []
    for v in four_star_info:
        if len(v):
            four_star_info_modify.append(v + ')')
    print('4-star:', four_star_info_modify)
    four_star_info_only_name = []
    for v in four_star_info_modify:
        if len(v):
            # strip 移除前后空白
            four_star_info_only_name.append(v.split('(')[0].strip())

    print('4-star only name:', four_star_info_only_name)


def parse_weapon(post_id):
    full_article_api_url = 'https://bbs-api-os.hoyolab.com/community/post/wapi/getPostFull?post_id=' + \
        post_id

    full_data = get_url_data(full_article_api_url)
    json_str = json.dumps(full_data['data']['post']['post']['content'])
    # print(json_str)
    # 清洗标签
    soup = BeautifulSoup(json_str, "html.parser")
    clean_text = soup.get_text()
    # print(clean_text)
    duration_text = clean_text.split("Event Duration")[
        1].split("(server time)")[0].strip()
    # details_text = clean_text.split("Event Details:")[1].strip()

    print("Duration: ", duration_text)
    # print("Details: ", details_text)

    # 通过查找特定字符串来获取5-star
    character_start = clean_text.find(
        '5-Star Light Cone') + len('5-Star Light Cone')
    character_end = clean_text.find('4-Star Light Cones')

    # 提取5-star的名称和描述信息
    character_info = clean_text[character_start:character_end].split(')')[
        0] + ')'
    print('5-star:', character_info)

    character_info_only_name = character_info.split('(')[0]
    print('5-star only name:', character_info_only_name)

    # 通过查找特定字符串来获取4-star列表
    four_star_start = clean_text.find(
        '4-Star Light Cones') + len('4-Star Light Cones')
    four_star_end = clean_text.find('Among the above')

    # 提取4-star列表并按照逗号分隔
    four_star_info = clean_text[four_star_start:four_star_end].split(')')
    four_star_info_modify = []
    for v in four_star_info:
        if len(v):
            four_star_info_modify.append(v + ')')
    print('4-star:', four_star_info_modify)
    four_star_info_only_name = []
    for v in four_star_info_modify:
        if len(v):
            # strip 移除前后空白
            four_star_info_only_name.append(v.split('(')[0].strip())

    print('4-star only name:', four_star_info_only_name)


for i in post_id_arr[0]:
    parse_char(i)

for i in post_id_arr[1]:
    parse_weapon(i)
