# 2 means genshin

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
GET_MORE_WISH = False
MORE_WISH_PAGE = 5

JSON_LOCAL_CHAR_FILENAME = f"{utils.get_project_root()}/game/.vitepress/data/char/2.json"

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


def get_output_event_tmp_filename(lang):
    return f"{OUTPUT_DIR_PREFIX}/event_tmp_{utils.Game.i18n_filename(lang)}.json"


def get_output_event_info_filename(lang):
    return f"{OUTPUT_DIR_PREFIX}/event_info_{utils.Game.i18n_filename(lang)}.json"


def get_output_event_info_filename_final(lang):
    return f"{OUTPUT_DIR_PREFIX}/event_info_{utils.Game.i18n_filename(lang)}"


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


def get_more_wish_list(lang: utils.LANG):
    more_list = []
    for idx in range(1, MORE_WISH_PAGE+1):
        if lang == utils.LANG.ZH_CN:
            url = utils.Genshin.attach_url(
                URL_ZH_PREFIX, APP_ID_ZH, CHAN_ID_ZH, utils.Game.LANG_KEY_ZH, idx)
        elif lang == utils.LANG.EN_US:
            url = utils.Genshin.attach_url(
                URL_GLOBAL_PREFIX, APP_ID_GLOBAL, CHAN_ID_GLOBAL, utils.Game.LANG_KEY_EN, idx)

        data_list = get_wish_list(url)
        more_list.extend(data_list)
    return more_list


def wish_filter(lang: utils.LANG = utils.LANG.ZH_CN):
    if lang == utils.LANG.ZH_CN:
        url = utils.Genshin.attach_url(
            URL_ZH_PREFIX, APP_ID_ZH, CHAN_ID_ZH, utils.Game.LANG_KEY_ZH)
    elif lang == utils.LANG.EN_US:
        url = utils.Genshin.attach_url(
            URL_GLOBAL_PREFIX, APP_ID_GLOBAL, CHAN_ID_GLOBAL, utils.Game.LANG_KEY_EN)

    data_list = get_wish_list(url)
    if GET_MORE_WISH:
        data_list = get_more_wish_list(lang)
    if data_list is None:
        return
    list_content = []
    for obj in data_list:
        condition_obj = 'sTitle' in obj and 'sContent' in obj
        title = obj['sTitle']
        content = obj['sContent']

        if lang == utils.LANG.ZH_CN:
            condition_title = isinstance(title, str) and '祈愿' in title
            condition_content = '集录祈愿' not in content
        elif lang == utils.LANG.EN_US:
            condition_title = isinstance(title, str) and 'Wishes' in title
            condition_content = 'Chronicled Wish' not in content

        if condition_obj and condition_title and condition_content:
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


def event_filter(lang: utils.LANG = utils.LANG.ZH_CN):
    if lang == utils.LANG.ZH_CN:
        url = utils.Genshin.attach_url(
            URL_ZH_PREFIX, APP_ID_ZH, CHAN_ID_ZH, utils.Game.LANG_KEY_ZH)
    elif lang == utils.LANG.EN_US:
        url = utils.Genshin.attach_url(
            URL_GLOBAL_PREFIX, APP_ID_GLOBAL, CHAN_ID_GLOBAL, utils.Game.LANG_KEY_EN)

    data_list = get_wish_list(url)
    if GET_MORE_WISH:
        data_list = get_more_wish_list(lang)
    if data_list is None:
        return
    list_content = []
    for obj in data_list:
        condition_obj = 'sTitle' in obj and 'sContent' in obj
        title = obj['sTitle']
        content = obj['sContent']

        if lang == utils.LANG.ZH_CN:
            condition_title = isinstance(
                title, str) and '祈愿' not in title and '活动' in title
            condition_content = '活动' in content and '活动时间' in content
        elif lang == utils.LANG.EN_US:
            condition_title = isinstance(title, str) and 'Wishes' not in title and (
                'Event' in title or 'event' in title)
            condition_content = 'event' in content and 'Event Duration' in content

        if condition_obj and condition_title and condition_content:
            modified_content = utils.get_all_text_from_html(content)
            imgs = utils.get_all_img_from_html(content)
            tmp = {
                'content': modified_content,
                'title': title,
                'img': imgs
            }
            list_content.append(tmp)

    utils.OperateFile.save_dict_to_file(
        list_content, get_output_event_tmp_filename(lang))


def get_event_tmp_file():
    event_filter(utils.LANG.ZH_CN)
    event_filter(utils.LANG.EN_US)

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
# 合并中英文 祈愿信息
 # 以英文版官网为底
def combine_wish_info(wish_info_zh, wish_info_en):
    local_chara_info = utils.OperateFile.load_dict_from_file(
        JSON_LOCAL_CHAR_FILENAME)

    def rm_epitome(wish_name_list: list):
        return [wish_name for wish_name in wish_name_list if wish_name != "Epitome Invocation"]

    combine_info = []
    for per_wish in wish_info_en:

        if len(per_wish['wish_name']) == 0:
            continue

        wish_name_en = rm_epitome(per_wish['wish_name'])
        wish_name_en_lower = [utils.replace_characters(
            name) for name in wish_name_en if name]
        wish_start = per_wish['wish_duration'][0]['start_time']
        wish_end = per_wish['wish_duration'][0]['end_time']
        wish_version = per_wish['version'][0]

        wish5star = []
        wish4star = []
        short_name = []

        chara_zh_by_chara_en = []
        for chara_en_obj in per_wish['chara']:
            chara_en = chara_en_obj['name']
            chara_en_lower = utils.replace_characters(chara_en)

            chara_zh = local_chara_info[chara_en_lower]['name']
            chara_zh_by_chara_en.append(chara_zh)

            for per_wish_zh in wish_info_zh:
                for chara_zh_obj in per_wish_zh['chara']:
                    if chara_zh_obj['name'] == chara_zh:
                        if chara_zh_obj['star'] == 4:
                            if chara_en_lower not in wish4star:
                                wish4star.append(chara_en_lower)
                        elif chara_zh_obj['star'] == 5:
                            if chara_en_lower not in wish5star:
                                wish5star.append(chara_en_lower)
                            if chara_en not in short_name:
                                short_name.append(chara_en)

        wish_name_zh = []
        if len(chara_zh_by_chara_en) != 0:
            for per_wish_zh in wish_info_zh:
                chara_zh_by_chara_zh = [
                    obj['name'] for obj in per_wish_zh['chara']
                ]
                if utils.is_subset(chara_zh_by_chara_zh, chara_zh_by_chara_en):
                    wish_name_zh.append(per_wish_zh["wish_name"])

        per_obj = {
            'name': wish_name_en,
            'nameLower': wish_name_en_lower,
            # todo 读取 local 数据，动态修改 image
            'image': 'todo',
            'shortName': short_name,
            'start': wish_start,
            'end': wish_end,
            'wish5star': wish5star,
            'wish4star': wish4star,
            'version': wish_version,
            'wishName': wish_name_zh,
            'url': ["?", "?"]
        }
        combine_info.append(per_obj)

    utils.OperateFile.save_dict_to_file(
        combine_info, f"{OUTPUT_DIR_PREFIX}/combine_wish_info.json")


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

        img = obj['img']
        if len(img) >= 2:
            img = img[:2]

        dict_en = {
            'wish_name': wish_name,
            'chara': chara,
            'wish_duration': wish_duration,
            'version': wish_version,
            'img': img,
        }
        wish_info_en.append(dict_en)

    utils.OperateFile.save_dict_to_file(
        wish_info_zh, get_output_wish_info_filename(utils.LANG.ZH_CN))
    utils.OperateFile.save_dict_to_file(
        wish_info_en, get_output_wish_info_filename(utils.LANG.EN_US))

    if len(wish_info_zh) == 0 or len(wish_info_en) == 0:
        print("JSON IS NONE!!!")
        return

    combine_wish_info(wish_info_zh, wish_info_en)


def format_event():
    event_tmp_file_zh = get_output_event_tmp_filename(utils.LANG.ZH_CN)
    event_tmp_file_en = get_output_event_tmp_filename(utils.LANG.EN_US)
    json_event_tmp_zh = utils.OperateFile.load_dict_from_file(
        event_tmp_file_zh)
    json_event_tmp_en = utils.OperateFile.load_dict_from_file(
        event_tmp_file_en)
    if json_event_tmp_zh == {} or json_event_tmp_en == {}:
        print("LOCAL FILE IS NOT EXIST!!!")
        return

    # json is arr, every ele is obj
    # obj keys are: content(str), title(str), img(links arr)

    def check_obj_keys(obj: dict):
        if 'title' not in obj or 'content' not in obj or 'img' not in obj:
            print("FORMAT ERROR!!!")
            return False
        return True

    def add_seconds(time: str):
        cal_colon = time.split(':')
        if len(cal_colon) == 2:
            return f"{time}:{cal_colon[1]}"
        return time

    def add_time_zone(time: str):
        return time + " +0800"

    event_info_zh = []

    for obj in json_event_tmp_zh:
        if not check_obj_keys(obj):
            return
        title = obj['title']
        event_name = title
        if event_name == "":
            continue

        content = obj['content']
        event_duration = utils.Game.get_duration(content)
        if len(event_duration) == 0:
            continue

        dict_zh = {
            'event_name': event_name,
            'start_time': add_time_zone(add_seconds(event_duration[0]['start_time'])),
            'end_time': add_time_zone(add_seconds(event_duration[0]['end_time'])),
            'game_name': 'Genshin'
        }

        event_info_zh.append(dict_zh)

    utils.OperateFile.save_dict_to_file(
        event_info_zh, get_output_event_info_filename(utils.LANG.ZH_CN))
    replace_json_file_2_ts(
        get_output_event_info_filename(utils.LANG.ZH_CN),
        get_output_event_info_filename_final(utils.LANG.ZH_CN),
        ['"event_name"', '"start_time"', '"end_time"', '"game_name"', '"Genshin"'],
        ['name', 'start', 'end', 'game', 'GameName.Genshin']
    )

    if len(event_info_zh) == 0:
        print("JSON IS NONE!!!")
        return


def replace_json_file_2_ts(file_in: str, file_out: str, field_src: list, field_dst: list):
    def handle_one(line: str):
        for src, dst in zip(field_src, field_dst):
            line = line.replace(src, dst)
        return line
    utils.OperateFile.open_and_read_no_strip(file_in, handle_one, file_out)


def main():
    if not OFFLINE:
        print(" ====== online ====== ")
        get_wish_tmp_file()
        get_event_tmp_file()

    print(" ====== offline ====== ")
    format_wish()
    format_event()


if __name__ == "__main__":
    main()
