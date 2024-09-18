#

# news chan id 中文官网
# 16:00 2024/09/05 统计 数值似乎不太对 以最多的 719 为准吧
# 719: 最新     3164
# 720: 新闻     3057
# 721: 公告     96
# 722: 活动     15
# 723: all?     2931

# news chan id 英文官网
# 15:00 2024/09/18 统计 数值似乎不太对 以最多的 395 为准吧
# 395: Latest   1499
# 396: Info     1129
# 397: Updates  139
# 398: Events   231
# 399: all?     1152

from script import utils
from script import type

####### just backup meaningless #######
url_global = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/a1b1f9d3315447cc/getContentList?iAppId=32&iChanId=395&iPageSize=99&iPage=1&sLangKey=en-us"
url_zh = "https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList?iAppId=43&iChanId=719&iPageSize=99&iPage=1&sLangKey=zh-cn"

url_city_name = ""
#######################################

URL_GLOBAL_PREFIX = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/a1b1f9d3315447cc/getContentList"
URL_ZH_PREFIX = "https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList"

APP_ID_GLOBAL = 32
APP_ID_ZH = 43

CHAN_ID_GLOBAL = 395
CHAN_ID_ZH = 719

OUTPUT_DIR_PREFIX = f"{utils.get_project_root()}/script/auto/output/wish/2"


def get_wish_list(url: str):
    url_response = utils.get_url_data(url)
    data = url_response['data']
    url_exception = data is None or data['list'] is None or len(
        data['list']) == 0
    if url_exception:
        print("!!! ERROR URL !!!")
        return None
    if data['iTotal']:
        print(f"URL: {url}")
        print(f"TOTAL DATA: {data['iTotal']}")
    data_list: list = data['list']
    return data_list


def wish_filter(lang: type.LANG = type.LANG.ZH_CN):
    if lang == type.LANG.ZH_CN:
        url = utils.Game.attach_url(
            URL_ZH_PREFIX, APP_ID_ZH, CHAN_ID_ZH, utils.Game.LANG_KEY_ZH)
    elif lang == type.LANG.EN_US:
        url = utils.Game.attach_url(
            URL_GLOBAL_PREFIX, APP_ID_GLOBAL, CHAN_ID_GLOBAL, utils.Game.LANG_KEY_EN)

    data_list = get_wish_list(url)
    if data_list is None:
        return
    list_content = []
    for obj in data_list:
        condition_obj = 'sTitle' in obj and 'sContent' in obj
        title = obj['sTitle']

        if lang == type.LANG.ZH_CN:
            condition_title = isinstance(title, str) and '祈愿' in title
        elif lang == type.LANG.EN_US:
            condition_title = isinstance(title, str) and 'Wishes' in title

        if condition_obj and condition_title:
            content = obj['sContent']
            modified_content = utils.get_all_text_from_html(content)
            imgs = utils.get_all_img_from_html(content)
            tmp = {
                'content': modified_content,
                'title': title,
                'img': imgs
            }
            list_content.append(tmp)
    print()
    utils.OperateFile.save_dict_to_file(
        list_content, f"{OUTPUT_DIR_PREFIX}/{lang.name.lower()}/tmp.json")


def main():
    wish_filter(type.LANG.ZH_CN)
    wish_filter(type.LANG.EN_US)


if __name__ == "__main__":
    main()
