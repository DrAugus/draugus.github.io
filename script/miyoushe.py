# 米游社接口
# !!! 抽卡详细说明，于 2024年7月初正式倒闭


import json
import requests
from bs4 import BeautifulSoup
import re
import os
import utils
import time
from enum import Enum


class GameID(Enum):
    Genshin = 2
    HSR = 6
    ZZZ = 8


GET_IMAGE = True
current_path = os.path.dirname(__file__)
api_prefix = "https://bbs-api.miyoushe.com/post/wapi/"


def get_api_news_list(gid: GameID):

    api_url_news_list = api_prefix + "getNewsList"
    api_url_news_list += f"?gids={gid.value}"
    api_url_news_list += "&page_size=50"
    # https://augusmeow.github.io/code/api/mihoyo
    # type: 1 公告 2 活动 3 资讯
    types = [1, 2, 3]
    api_url_news_list += "&type="
    api_all = [f"{api_url_news_list}{t}" for t in types]

    print(api_all)
    return api_all


def get_data_dict(api_url):

    data = utils.get_url_data(api_url)
    data_dict = utils.str_to_dict(data["data"]["list"])
    # print(data_dict)
    return data_dict


# get
# {
#   name: ['', 'Butterfly on Swordtip'],
#   image: [1, 2],
#   shortName: ['Topaz & Numby', 'Seele'],
#   start: '2023-10-29 10:00:00 +0800',
#   end: '2023-11-15 17:59:59 +0800',
#   version: '1.4',
#   wish5star: ['topaz_numby', 'seele'],
#   wish4star: ['guinaifen', 'Luka', 'Sushang'],
#   wishName: ['「落日条款」', '「蝶立锋锷」'],
#   url: ['']
# },


def get_warp_list(gid: GameID, data_dict):

    warp_arr = [[], [], []]

    if gid == GameID.Genshin:
        # 0 char 1 weapon 2 集录
        for obj in data_dict:
            pattern_char = "限定5星角色"
            # 武器角色在一起了
            pattern_char2 = "概率UP"
            match_char = re.search(pattern_char, obj["post"]["content"], re.IGNORECASE)
            match_char2 = re.search(
                pattern_char2, obj["post"]["subject"], re.IGNORECASE
            )
            if match_char or match_char2:
                warp_arr[0].append(obj)
            pattern_weapon = "限定5星武器"
            match_weapon = re.search(
                pattern_weapon, obj["post"]["content"], re.IGNORECASE
            )
            if match_weapon:
                warp_arr[1].append(obj)
            pattern_weapon = "集录祈愿"
            match_weapon = re.search(
                pattern_weapon, obj["post"]["content"], re.IGNORECASE
            )
            if match_weapon:
                warp_arr[2].append(obj)
    elif gid == GameID.HSR:
        # 0 char 1 weapon
        for obj in data_dict:
            pattern_char = "角色活动跃迁"
            match_char = re.search(pattern_char, obj["post"]["subject"], re.IGNORECASE)
            if match_char:
                warp_arr[0].append(obj)
            pattern_weapon = "光锥活动跃迁"
            match_weapon = re.search(
                pattern_weapon, obj["post"]["subject"], re.IGNORECASE
            )
            if match_weapon:
                warp_arr[1].append(obj)
    elif gid == GameID.ZZZ:
        # 0 char 1 weapon 2 永久
        for obj in data_dict:
            pattern_subject = "调频说明"
            match_subject = re.search(
                pattern_subject, obj["post"]["subject"], re.IGNORECASE
            )
            if match_subject:
                warp_arr[0].append(obj)
                continue

                # 下面的突然又全部移除了。。。
                match_char = (
                    "非限定" not in obj["post"]["content"]
                    and "限定" in obj["post"]["content"]
                    and "代理人" in obj["post"]["content"]
                )
                match_weapon = (
                    "非限定" not in obj["post"]["content"]
                    and "限定" in obj["post"]["content"]
                    and "音擎" in obj["post"]["content"]
                )
                match_permanent = "永久频段" in obj["post"]["content"]

                if match_char:
                    warp_arr[0].append(obj)
                if match_weapon:
                    warp_arr[1].append(obj)
                if match_permanent:
                    warp_arr[2].append(obj)

    return warp_arr


def get_output(warp_arr):

    api_url_post_full = api_prefix + "getPostFull"
    api_url_post_full += "?post_id="

    post_id_arr = [[], [], []]
    idx = 0

    output = ""

    for warp_info in warp_arr:
        for get_warp in warp_info:

            # POST ID
            post_id = get_warp["post"]["post_id"]
            post_id_arr[idx].append(post_id)

            # WISH NAME
            subject = get_warp["post"]["subject"]
            matches_wish = re.findall(r"「(.*?)」", subject, re.DOTALL)
            print_wish_name = "----- wish name -----\n"
            print_wish_name += str(matches_wish) + "\n" + "----- --------- -----\n"
            output += print_wish_name
            print(print_wish_name)
            wish_name_for_img = ""
            if isinstance(matches_wish, list) and len(matches_wish[0]):
                wish_name_for_img = matches_wish[0]

            # IMAGE
            img_url = get_warp["post"]["images"]
            output += "img_url" + str(img_url) + "\n"
            print("img_url", img_url)
            if len(img_url):
                if isinstance(img_url, list):
                    for index, img in enumerate(img_url):
                        img_type = img[img.rfind(".", 0) :]
                        filename = f"{wish_name_for_img}_{index}{img_type}"
                        output += filename + "\n"
                        print("img name:", filename)
                        if GET_IMAGE:
                            utils.wget_file(img, f"{current_path}/auto/img/{filename}")

            # DETAILS
            structured_content = get_warp["post"]["structured_content"]
            if len(structured_content) == 0:
                content = get_warp["post"]["content"]
                print(content)
                output += content + "\n"
                continue

            # 先去除可能的转义字符
            structured_content = structured_content.replace("\\\\", "\\")
            data_subject = json.loads(structured_content)
            inserts = [
                item["insert"]
                for item in data_subject
                if "insert" in item and isinstance(item["insert"], str)
            ]
            merged_string = "".join(inserts)
            # print(merged_string)

            matches = re.findall(r"「(.*?)」", merged_string, re.DOTALL)
            output += str(matches) + "\n"
            print(matches)

            # print('structured_content', structured_content)
            # print('subject_zh', subject_zh)

            # print('post_id', post_id)

            # img_type = img_url[img_url[0].rfind('.', 0):]
            # print('img_type', img_type)
            # image_times = '1'

            # # modify_subject = structured_content.split('"')[1].lower().replace(' ', '_')
            # modify_subject = structured_content.split(':')[0].lower().replace(' ', '_')
            # modify_subject += '_' + image_times + img_type
            # print('modify_subject', modify_subject)

            output += "================\n"
            print("============")

        idx = idx + 1
        output += "================\n"
        print("============")

    output += f"post_id_arr\n{post_id_arr}\n"
    print("post_id_arr", post_id_arr)
    post_id_link_arr = [
        api_url_post_full + v for sublist in post_id_arr for v in sublist
    ]
    output += f"post_id_link_arr\n{post_id_link_arr}\n"
    print("post_id_link_arr", post_id_link_arr)

    return output


def write_local(gid: GameID, output):

    filename = current_path + f"/auto/mys{gid.value}"
    with open(filename, "w", encoding="utf-8") as file:
        file.write(output)


def main():
    gids = [GameID.Genshin, GameID.HSR, GameID.ZZZ]
    for gid in gids:
        api_all = get_api_news_list(gid)
        if isinstance(api_all, list):
            output = f"{gid.name} >>>\n\n"
            output += f"api_url:\n{api_all}\n"
            for url in api_all:
                data_dict = get_data_dict(url)
                warp_arr = get_warp_list(gid, data_dict)
                output += get_output(warp_arr)
            write_local(gid, output)


if __name__ == "__main__":
    main()
