import json
import requests

api_url = 'https://bbs-api-os.hoyolab.com/community/post/wapi/getNewsList?gids=6&type=3'

response = requests.get(api_url)

data = response.json()

json_str = json.dumps(data['data']['list'])
data_dict = json.loads(json_str)

# print(data_dict)


for obj in data_dict:
    if obj['post']['subject'].startswith('Event Warp'):
        get_wrap = obj
        # print(obj)

subject = get_wrap['post']['subject']
subject_zh = get_wrap['post']['multi_language_info']['lang_subject']['zh-cn']
img_url = get_wrap['image_list'][0]['url']

print('subject', subject)
print('subject_zh', subject_zh)
print('img_url', img_url)

img_type = img_url[img_url.rfind('.', 0):]
print('img_type', img_type)

image_times = '1'

modify_subject = subject.split('"')[1].lower().replace(' ', '_')
modify_subject += '_' + image_times + img_type
print('modify_subject', modify_subject)
