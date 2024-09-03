# 2 means genshin

from script import utils
from script import type

import os
from bs4 import BeautifulSoup as be

url_global = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/a1b1f9d3315447cc/getContentList?iAppId=32&iChanId=407&iPageSize=50&iPage=1&sLangKey=en-us&iOrder=6"

url_zh = "https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList?iAppId=43&iChanId=732&iPageSize=50&iPage=1&sLangKey=zh-cn&iOrder=6"


URL_GLOBAL_PREFIX = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/a1b1f9d3315447cc/getContentList"
URL_ZH_PREFIX = "https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList"

APP_ID_GLOBAL = 32
APP_ID_ZH = 43

CHAN_ID_GLOBAL = 407
CHAN_ID_ZH = 732

LANG_KEY_EN = 'en-us'
LANG_KEY_ZH = 'zh-cn'


CHAR_DIR = f"{utils.get_project_root()}/game/public/image/genshin/characters"
CHAR_FULL_DIR = f"{CHAR_DIR}/full"
CHAR_HALF_DIR = f"{CHAR_DIR}/half"


def attach_url(url_prefix: str, appId: int, chanId: int, langKey: str, pageSize: int = 99):
    order = "&iOrder=6"
    return f'{url_prefix}?iAppId={appId}&iChanId={chanId}&iPageSize={pageSize}&iPage=1&sLangKey={langKey}'


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
            os.system(f'cp {filename} {CHAR_DIR}/{name_img}{extension}')
        elif idx == 1:
            os.system(f'cp {filename} {CHAR_FULL_DIR}/{name_img}{extension}')
            os.system(f'cp {filename} {CHAR_HALF_DIR}/{name_img}{extension}')


def diff_lang(lang: type.LANG = type.LANG.ZH_CN):
    des_dir_prefix = f"{utils.get_project_root()}/script/auto/output/char"
    if lang == type.LANG.EN_US:
        des_dir = LANG_KEY_EN
        url = attach_url(URL_GLOBAL_PREFIX, APP_ID_GLOBAL,
                         CHAN_ID_GLOBAL, LANG_KEY_EN)
    elif lang == type.LANG.ZH_CN:
        des_dir = LANG_KEY_ZH
        url = attach_url(URL_ZH_PREFIX, APP_ID_ZH, CHAN_ID_ZH, LANG_KEY_ZH)
    url_response = utils.get_url_data(url)
    data = url_response['data']
    url_exception = data is None or data['list'] is None or len(
        data['list']) == 0
    if url_exception:
        print("!!! ERROR URL !!!")
        return
    data_list: list = data['list']
    des_dir_prefix += f"/{des_dir}"
    for per_char in data_list:
        chan_ids, name, (list_str, list_img) = handle_character(per_char)

        name_img = utils.replace_characters(name)
        if lang == type.LANG.EN_US:
            down_img(des_dir_prefix, name_img, list_img)


def main():
    # get url, get name, info, img
    diff_lang(type.LANG.EN_US)
    diff_lang(type.LANG.ZH_CN)


if __name__ == "__main__":
    main()
