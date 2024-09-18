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

import argparse

from script import utils

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

OFFLINE = True

#######################################
parser = argparse.ArgumentParser(description="Process some integers.")
parser.add_argument(
    "arg1", type=int, nargs="?", help="An integer for the online get url"
)
args = parser.parse_args()

if args.arg1:
    OFFLINE = False

print(f"ARGS INFO {args}\n")
#######################################


def get_output_wish_tmp_filename(lang):
    return f"{OUTPUT_DIR_PREFIX}/wish_tmp_{utils.Game.i18n_filename(lang)}.json"


def get_output_wish_info_filename(lang):
    return f"{OUTPUT_DIR_PREFIX}/wish_info_{utils.Game.i18n_filename(lang)}.json"


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


def wish_filter(lang: utils.LANG = utils.LANG.ZH_CN):
    if lang == utils.LANG.ZH_CN:
        url = utils.Game.attach_url(
            URL_ZH_PREFIX, APP_ID_ZH, CHAN_ID_ZH, utils.Game.LANG_KEY_ZH)
    elif lang == utils.LANG.EN_US:
        url = utils.Game.attach_url(
            URL_GLOBAL_PREFIX, APP_ID_GLOBAL, CHAN_ID_GLOBAL, utils.Game.LANG_KEY_EN)

    data_list = get_wish_list(url)
    if data_list is None:
        return
    list_content = []
    for obj in data_list:
        condition_obj = 'sTitle' in obj and 'sContent' in obj
        title = obj['sTitle']

        if lang == utils.LANG.ZH_CN:
            condition_title = isinstance(title, str) and '祈愿' in title
        elif lang == utils.LANG.EN_US:
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

    utils.OperateFile.save_dict_to_file(
        list_content, get_output_wish_tmp_filename(lang))


def get_wish_tmp_file():
    wish_filter(utils.LANG.ZH_CN)
    wish_filter(utils.LANG.EN_US)


# 根据祈愿信息给角色信息完善
# 完善 prefix element
def append_chara_more_info():
    # todo
    print()


# name: ["Illuminating Lightning", "Caution in Confidence"],
# image: [1, 3],
# shortName: ["Clorinde", "Alhaitham"],
# start: "2024/06/05 11:00:00 +0800",
# end: "2024/06/25 17:59:00 +0800",
# wish5star: ['clorinde', 'alhaitham'],
# wish4star: ["sethos", "bennett", "thoma"],
# version: "4.7",
# wishName: ["流霆贯夜", "敕诫枢谋"],
# url: ["?", "?"]
def format_wish():
    wish_tmp_file_zh = get_output_wish_tmp_filename(utils.LANG.ZH_CN)
    wish_tmp_file_en = get_output_wish_tmp_filename(utils.LANG.EN_US)
    json_wish_tmp_zh = utils.OperateFile.load_dict_from_file(wish_tmp_file_zh)
    json_wish_tmp_en = utils.OperateFile.load_dict_from_file(wish_tmp_file_en)
    if json_wish_tmp_zh == {} or json_wish_tmp_en == {}:
        print("LOCAL FILE IS NOT EXIST!!!")
        return

    # json is arr, every ele is obj
    # obj keys are: content(str), title(str), img(links arr)

    def check_obj_keys(obj: dict):
        if 'title' not in obj or 'content' not in obj or 'img' not in obj:
            print("FORMAT ERROR!!!")
            return False
        return True

    wish_info_zh = []
    wish_info_en = []

    for obj in json_wish_tmp_zh:
        if not check_obj_keys(obj):
            return
        title = obj['title']
        wish_name = utils.Genshin.get_wish_name_zh(title)
        if wish_name == "":
            continue

        content = obj['content']
        chara = utils.Game.match_zh_char_prefix_name_ele(content)
        dict_zh = {
            'wish_name': wish_name,
            'chara': chara
        }
        wish_info_zh.append(dict_zh)

    for obj in json_wish_tmp_en:
        if not check_obj_keys(obj):
            return
        content = obj['content']
        wish_name = utils.Genshin.get_wish_name_en(content)
        if wish_name == "":
            continue

        chara = utils.Game.match_en_char_prefix_name_ele(content)
        # duration version 只从英文文件获取
        wish_duration = utils.Game.get_duration(content)
        title = obj['title']
        wish_version = utils.Game.get_version(title)

        dict_en = {
            'wish_name': wish_name,
            'chara': chara,
            'wish_duration': wish_duration,
            'version': wish_version
        }
        wish_info_en.append(dict_en)

    utils.OperateFile.save_dict_to_file(
        wish_info_zh, get_output_wish_info_filename(utils.LANG.ZH_CN))
    utils.OperateFile.save_dict_to_file(
        wish_info_en, get_output_wish_info_filename(utils.LANG.EN_US))


def main():
    if not OFFLINE:
        print(" ====== online ====== ")
        get_wish_tmp_file()

    print(" ====== offline ====== ")
    format_wish()


if __name__ == "__main__":
    main()
