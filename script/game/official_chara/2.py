# 2 means genshin

from script import utils

import os

####### just backup meaningless #######
url_global = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/a1b1f9d3315447cc/getContentList?iAppId=32&iChanId=407&iPageSize=999&iPage=1&sLangKey=en-us&iOrder=6"
url_zh = "https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList?iAppId=43&iChanId=732&iPageSize=999&iPage=1&sLangKey=zh-cn&iOrder=6"

url_city_name = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/a1b1f9d3315447cc/getContentList?iAppId=32&iChanId=414&iPageSize=50&iPage=1&sLangKey=en-us&iOrder=6"
#######################################

URL_GLOBAL_PREFIX = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/a1b1f9d3315447cc/getContentList"
URL_ZH_PREFIX = "https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList"

APP_ID_GLOBAL = 32
APP_ID_ZH = 43

CHAR_CHAN_ID_GLOBAL = 407
CHAR_CHAN_ID_ZH = 732
CITY_CHAN_ID_GLOBAL = {
    403: utils.Genshin.City.Mondstadt,
    404: utils.Genshin.City.Liyue,
    405: utils.Genshin.City.Inazuma,
    406: utils.Genshin.City.Sumeru,
    653: utils.Genshin.City.Fontaine,
    934: utils.Genshin.City.Natlan,
    0: utils.Genshin.City.Snezhnaya
}
CITY_CHAN_ID_ZH = {
    727: utils.Genshin.City.Mondstadt,
    728: utils.Genshin.City.Liyue,
    729: utils.Genshin.City.Inazuma,
    730: utils.Genshin.City.Sumeru,
    731: utils.Genshin.City.Fontaine,
    936: utils.Genshin.City.Natlan,
    0: utils.Genshin.City.Snezhnaya
}


IMG_DIR_CHAR = f"{utils.get_project_root()}/game/public/image/genshin/characters"
IMG_DIR_CHAR_FULL = f"{IMG_DIR_CHAR}/full"
IMG_DIR_CHAR_HALF = f"{IMG_DIR_CHAR}/half"

JSON_LOCAL_CHAR_FILENAME = f"{utils.get_project_root()}/game/.vitepress/data/char/2.json"

OUTPUT_DIR_PREFIX = f"{utils.get_project_root()}/script/auto/output/char/2"

I18N_FILENAME_PREFIX = f"{OUTPUT_DIR_PREFIX}/i18n"
JSON_I18N_CHAR_NAME_FILENAME = f"{I18N_FILENAME_PREFIX}/char_name.json"
JSON_I18N_CHAR_INTRO_FILENAME = f"{I18N_FILENAME_PREFIX}/char_intro.json"

JSON_ALL_CHAR_FILENAME = f"{OUTPUT_DIR_PREFIX}/all_char_info.json"

CHARA_DEFAULT = {
    "id": "",
    "name": "",
    "prefix": "",
    "star": 4,
    "event_exclusive": False,
    "intro": "",
    "city": "",
    "ele": "pyro",
    "weapon": "catalyst"
}


def handle_ext(ext: str):
    ext_obj: dict = utils.str_to_dict(ext)
    list_str: list = []
    list_img: list = []
    for val in ext_obj.values():
        if isinstance(val, str) and val != "":
            list_str.append(val)
            continue
        if isinstance(val, list):
            for vv in val:
                if vv['name'] is None or vv['url'] is None:
                    continue
                if utils.url_is_img(vv['url']):
                    list_img.append(vv['url'])
    return list_str, list_img


def handle_character(obj: object):
    if obj['sChanId'] is None or obj['sTitle'] is None or obj['sExt'] is None:
        print(f"!!! ERROR OBJ[{obj}] !!!")
        return
    chan_ids = [val for val in obj['sChanId'] if val]
    name = obj['sTitle']
    ext = obj['sExt']
    return chan_ids, name, handle_ext(ext)


def down_img(dir_prefix: str, name_img: str, list_img: list):
    full_dir = f"{dir_prefix}/{name_img}"
    utils.make_dir(full_dir)
    for idx, img in enumerate(list_img):
        # 只取 前两个，0 为头像 1 为全图
        if idx > 1:
            break
        filename_without_ext, extension = os.path.splitext(img)
        filename = f'{full_dir}/{idx}{extension}'
        utils.wget_file(img, filename)
        # cp img
        if idx == 0:
            des_filename = f'{IMG_DIR_CHAR}/{name_img}{extension}'
            utils.cp_file(filename, des_filename)
        elif idx == 1:
            des_filename = f'{IMG_DIR_CHAR_FULL}/{name_img}{extension}'
            utils.cp_file(filename, des_filename)
            des_filename = f'{IMG_DIR_CHAR_HALF}/{name_img}{extension}'
            utils.cp_file(filename, des_filename)


def get_city(chan_ids: list, lang: utils.LANG = utils.LANG.ZH_CN):
    if lang == utils.LANG.EN_US:
        city_chan_id_dict = CITY_CHAN_ID_GLOBAL
    elif lang == utils.LANG.ZH_CN:
        city_chan_id_dict = CITY_CHAN_ID_ZH
    for id_str in chan_ids:
        id = int(id_str)
        if id not in city_chan_id_dict:
            continue
        return city_chan_id_dict[id]

    return utils.Genshin.City.Invalid


def get_char_intro(list_str: list):
    # 0,1,2 为声优 3 为 intro
    for idx, s in enumerate(list_str):
        if idx == 3:
            return utils.rm_simple_html_tag(s)
    return ""


def get_chara_list(url: str):
    url_response = utils.get_url_data(url)
    data = url_response['data']
    url_exception = data is None or data['list'] is None or len(
        data['list']) == 0
    if url_exception:
        print("!!! ERROR URL !!!")
        return None
    if data['iTotal']:
        print(f"TOTAL DATA: {data['iTotal']}")
    data_list: list = data['list']
    return data_list


def get_chara_info(lang: utils.LANG = utils.LANG.EN_US):
    # FOR ENGLISH ONLY
    if lang != utils.LANG.EN_US:
        return

    if lang == utils.LANG.EN_US:
        des_dir = utils.Game.LANG_KEY_EN
        url = utils.Game.attach_url(URL_GLOBAL_PREFIX, APP_ID_GLOBAL,
                                    CHAR_CHAN_ID_GLOBAL, utils.Game.LANG_KEY_EN)
    elif lang == utils.LANG.ZH_CN:
        des_dir = utils.Game.LANG_KEY_ZH
        url = utils.Game.attach_url(URL_ZH_PREFIX, APP_ID_ZH,
                                    CHAR_CHAN_ID_ZH, utils.Game.LANG_KEY_ZH)
    data_list = get_chara_list(url)
    if data_list is None:
        return

    img_dir_prefix = f"{OUTPUT_DIR_PREFIX}/{des_dir}"

    # local info
    i18n_name, i18n_intro = read_i18n_chara()
    exist_i18n_name = i18n_name != {}
    exist_i18n_intro = i18n_intro != {}

    all_char_info = {}
    for per_char in data_list:
        chan_ids, name, (list_str, list_img) = handle_character(per_char)
        chara_city: utils.Genshin.City = get_city(chan_ids, lang)
        chara_intro = get_char_intro(list_str)
        chara_id = utils.replace_characters(name)
        chara_name = name

        tmp_char = CHARA_DEFAULT.copy()
        tmp_char['id'] = chara_id
        if exist_i18n_name:
            tmp_char['name'] = utils.find_value_by_key(i18n_name, name)
        tmp_char['intro'] = utils.find_value_by_key(
            i18n_intro, chara_intro) if exist_i18n_intro else chara_intro
        tmp_char['city'] = chara_city.name
        all_char_info[chara_id] = tmp_char
        #
        down_img(img_dir_prefix, chara_id, list_img)

    utils.OperateFile.save_dict_to_file(
        all_char_info, JSON_ALL_CHAR_FILENAME)


def get_chara_name_and_intro(data_list: list):
    list_chara_name = []
    list_chara_intro = []
    for per_char in data_list:
        chan_ids, name, (list_str, list_img) = handle_character(per_char)
        chara_intro = get_char_intro(list_str)
        modified_intro = utils.rm_simple_html_tag(chara_intro)
        list_chara_name.append(name)
        list_chara_intro.append(modified_intro)
    return list_chara_name, list_chara_intro


def read_i18n_chara():
    return utils.OperateFile.load_dict_from_file(JSON_I18N_CHAR_NAME_FILENAME), \
        utils.OperateFile.load_dict_from_file(JSON_I18N_CHAR_INTRO_FILENAME)


def write_i18n_chara():

    url = utils.Game.attach_url(URL_GLOBAL_PREFIX, APP_ID_GLOBAL,
                                CHAR_CHAN_ID_GLOBAL, utils.Game.LANG_KEY_EN)
    data_list = get_chara_list(url)
    if data_list is None:
        return
    name_en, intro_en = get_chara_name_and_intro(data_list)

    url = utils.Game.attach_url(URL_ZH_PREFIX, APP_ID_ZH,
                                CHAR_CHAN_ID_ZH, utils.Game.LANG_KEY_ZH)
    data_list = get_chara_list(url)
    if data_list is None:
        return
    name_zh, intro_zh = get_chara_name_and_intro(data_list)

    # 姑且认为，中文与国际版是一一对应的
    exception_name = len(name_en) != len(name_zh) or len(name_en) == 0
    exception_intro = len(intro_en) != len(intro_zh) or len(intro_en) == 0

    res_name = []
    res_intro = []
    if not exception_name:
        for idx, n in enumerate(name_en):
            res_name.append({
                n: name_zh[idx]
            })
    if not exception_intro:
        for idx, i in enumerate(intro_en):
            res_intro.append({
                i: intro_zh[idx]
            })

    utils.OperateFile.save_dict_to_file(
        res_name, JSON_I18N_CHAR_NAME_FILENAME, False)
    utils.OperateFile.save_dict_to_file(
        res_intro, JSON_I18N_CHAR_INTRO_FILENAME, False)


def compare_local_char_json():
    # old
    local_json = utils.OperateFile.load_dict_from_file(
        JSON_LOCAL_CHAR_FILENAME)
    if local_json == {}:
        return
    # new
    py_get_json = utils.OperateFile.load_dict_from_file(JSON_ALL_CHAR_FILENAME)
    if py_get_json == {}:
        return
    for key, val in py_get_json.items():
        if key not in local_json:
            local_json[key] = val
        else:
            if local_json[key]["intro"] == "":
                local_json[key]["intro"] = val["intro"]

    utils.OperateFile.save_dict_to_file(local_json, JSON_LOCAL_CHAR_FILENAME)


def main():
    write_i18n_chara()
    # get url, get name, info, img
    get_chara_info(utils.LANG.EN_US)
    # get_chara_info(utils.LANG.ZH_CN)
    compare_local_char_json()


if __name__ == "__main__":
    main()
