# 6 means hsr
# hoyolab interface

import json
import requests
from bs4 import BeautifulSoup
import re


def get_url_data(api_url):
    response = requests.get(api_url)
    data = response.json()
    return data

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

data = get_url_data(api_url_news_list)
json_str = json.dumps(data['data']['list'])
data_dict = json.loads(json_str)

# print(data_dict)

# 0 char 1 weapon
warp_arr = [[], []]

for obj in data_dict:

    pattern_char = '5-star character'
    pattern_char2 = 'Character Event Warp'
    match_char = re.search(pattern_char, obj['post']['subject'], re.IGNORECASE)
    match_char2 = re.search(pattern_char2, obj['post']['subject'], re.IGNORECASE)
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


def find_nth_occurrence(string, substring, occurrence):
    if (occurrence == 1):
        return string.find(substring)
    else:
        return string.find(substring, find_nth_occurrence(string, substring, occurrence - 1) + 1)

def unicode_conversion(s):
    return bytes(s, "latin1").decode("unicode_escape")


# escape 避免传入可能引起正则错误的符号
# 包含 start_str end_str：r'({}.*?{})'
# 不包含 start_str：r'{}(.*?{})'
def find_substrs(text, start_str, end_str):
    pattern = r'{}(.*?{})'.format(re.escape(start_str), re.escape(end_str))
    return re.findall(pattern, text, re.IGNORECASE)

def parse_char(post_id):
    full_article_api_url = api_url_post_full + '?post_id=' + post_id
    print(full_article_api_url)

    full_data = get_url_data(full_article_api_url)
    json_str = json.dumps(full_data['data']['post']['post']['content'])
    # print(json_str)
    # 清洗标签
    soup = BeautifulSoup(json_str, "html.parser")
    clean_text = soup.get_text()
    clean_text = unicode_conversion(clean_text)
    # print(clean_text)

    duration_find = find_substrs(clean_text,'Duration','(server time)')
    duration_find = list(set(duration_find))
    duration_text = duration_find[0].split('(server time)')[0]
    print("Duration: ", duration_text)
    # print("Details: ", details_text)

    wish_name = find_substrs(clean_text,'Character Event Warp: ','During the event')
    wish_name = list(set(wish_name))
    wish_name = [ww.split('●')[0] for ww in wish_name]
    print(wish_name)
    for ww in wish_name:
        modify_wish_name = ww.lower().replace(' ', '_')
        print('modify_wish_name: ',modify_wish_name)

    # 提取5-star角色的名称和描述信息
    character_info = find_substrs(clean_text, '5-Star Character',')')
    character_info = [info for info in character_info if len(info) < 50]
    # str.strip()方法用于移除字符串头尾指定的字符，默认为空格或换行符
    character_info = [name.strip() for name in character_info]
    # 使用set去除重复
    character_info = list(set(character_info))
    print('5-star:', character_info)

    character_info_only_name = [info.split('(')[0] for info in character_info]
    character_info_only_name = [name.strip() for name in character_info_only_name]
    print('5-star only name:', character_info_only_name)

    # # 通过查找特定字符串来获取4-star角色列表
    # four_star_start = clean_text.find(
    #     '4-Star Characters') + len('4-Star Characters')
    # four_star_end = clean_text.find('Among the above characters')




    # 提取4-star角色的名称和描述信息
    character_info = find_substrs(clean_text, 'Drop Rate Boost: 4-Star Characters','Among the above characters')
    # 找到三个 Name(Attribute: Type) 类型就不找了 以 ）为标记
    find_char_index = find_nth_occurrence(character_info[0], ')', 3)
    character_info = character_info[0][:find_char_index]
    # 提取4-star角色列表并按照逗号分隔
    four_star_info = character_info.split(')')
    four_star_info_modify = []
    for v in four_star_info:
        if len(v):
            four_star_info_modify.append(v + ')')

    print('4-star:', four_star_info_modify)

    character_info_only_name = [info.split('(')[0] for info in four_star_info_modify]
    character_info_only_name = [name.strip() for name in character_info_only_name]
    print('4-star only name:', character_info_only_name)


def parse_weapon(post_id):
    full_article_api_url = api_url_post_full + '?post_id=' + post_id
    print(full_article_api_url)

    full_data = get_url_data(full_article_api_url)
    json_str = json.dumps(full_data['data']['post']['post']['content'])
    # print(json_str)
    # 清洗标签
    soup = BeautifulSoup(json_str, "html.parser")
    clean_text = soup.get_text()
    clean_text = unicode_conversion(clean_text)    
    # print(clean_text)

    duration_find = find_substrs(clean_text,'Duration','(server time)')
    duration_find = list(set(duration_find))
    duration_text = duration_find[0].split('(server time)')[0]
    print("Duration: ", duration_text)
    # print("Details: ", details_text)


    # 提取5-star角色的名称和描述信息
    character_info = find_substrs(clean_text, '5-Star Light Cone',')')
    character_info = [info for info in character_info if len(info) < 50]
    # str.strip()方法用于移除字符串头尾指定的字符，默认为空格或换行符
    character_info = [name.strip() for name in character_info]
    # 使用set去除重复
    character_info = list(set(character_info))
    print('5-star:', character_info)

    character_info_only_name = [info.split('(')[0] for info in character_info]
    character_info_only_name = [name.strip() for name in character_info_only_name]
    print('5-star only name:', character_info_only_name)


    # 提取4-star角色的名称和描述信息
    character_info_4star = clean_text.split('4-star Light Cones')
    for info in character_info_4star:
        find_char_index = find_nth_occurrence(info, ')', 3)
        if find_char_index != -1:
            character_info = info[:find_char_index]
                # 提取4-star角色列表并按照逗号分隔
            four_star_info = character_info.split(')')
            four_star_info_modify = []
            for v in four_star_info:
                if len(v):
                    four_star_info_modify.append(v + ')')

            print('4-star:', four_star_info_modify)

            character_info_only_name = [info.split('(')[0] for info in four_star_info_modify]
            character_info_only_name = [name.strip() for name in character_info_only_name]
            print('4-star only name:', character_info_only_name)    

    # character_info = find_substrs(clean_text, 'Drop Rate Boost: 4-Star Light Cones','Among the above Light Cones')
    # # 找到三个 Name(Attribute: Type) 类型就不找了 以 ）为标记
    # find_char_index = find_nth_occurrence(character_info[0], ')', 3)
    # character_info = character_info[0][:find_char_index]
    # # 提取4-star角色列表并按照逗号分隔
    # four_star_info = character_info.split(')')
    # four_star_info_modify = []
    # for v in four_star_info:
    #     if len(v):
    #         four_star_info_modify.append(v + ')')

    # print('4-star:', four_star_info_modify)

    # character_info_only_name = [info.split('(')[0] for info in four_star_info_modify]
    # character_info_only_name = [name.strip() for name in character_info_only_name]
    # print('4-star only name:', character_info_only_name)    


for i in post_id_arr[0]:
    print("======= parse_char =======")
    parse_char(i)

for i in post_id_arr[1]:
    print("======= parse_weapon =======")    
    parse_weapon(i)
