#

# news chan id
# 16:00 2024/09/05 统计 数值似乎不太对 以最多的 719 为准吧
# 719: latest   3164
# 720: news     3057
# 721: notice   96
# 722: events   15
# 723: all?     2931

from script import utils

####### just backup meaningless #######
url_global = ""
url_zh = "https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList?iAppId=43&iChanId=719&iPageSize=99&iPage=1&sLangKey=zh-cn"

url_city_name = ""
#######################################


URL_ZH_PREFIX = "https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList"

APP_ID_GLOBAL = 32
APP_ID_ZH = 43

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
        print(f"TOTAL DATA: {data['iTotal']}")
    data_list: list = data['list']
    return data_list


def wish_filter():
    url = utils.Game.attach_url(
        URL_ZH_PREFIX, APP_ID_ZH, CHAN_ID_ZH, utils.Game.LANG_KEY_ZH)
    data_list = get_wish_list(url)
    if data_list is None:
        return
    list_content = []
    for obj in data_list:
        condition_obj = 'sTitle' in obj and 'sContent' in obj
        condition_title = isinstance(
            obj['sTitle'], str) and '祈愿' in obj['sTitle']
        if condition_obj and condition_title:
            content = obj['sContent']
            modified_content = utils.get_all_text_from_html(content)
            imgs = utils.get_all_img_from_html(content)
            tmp = {
                'content': modified_content,
                'img': imgs
            }
            list_content.append(tmp)
    print()
    utils.OperateFile.save_dict_to_file(
        list_content, f"{OUTPUT_DIR_PREFIX}/tmp.json")


def main():
    wish_filter()


if __name__ == "__main__":
    main()
