import os
from git import Repo
from datetime import datetime, timedelta
import op_file
from op_md import modify_md_content
import utils


def get_files_updated_in_last_week(repo_path):
    repo = Repo(repo_path)
    one_week_ago = datetime.now() - timedelta(days=7)

    updated_files = {}

    # 遍历仓库中的每一个commit
    for commit in repo.iter_commits(since=one_week_ago.strftime("%Y-%m-%d %H:%M:%S")):
        # 获取commit中修改的文件
        for diff in commit.diff(None):
            # 如果文件是修改或添加的，则添加到列表中
            if diff.a_path and not diff.deleted_file:
                if diff.a_path in updated_files:
                    # compare date
                    if updated_files[diff.a_path] < commit.committed_date:
                        updated_files[diff.a_path] = commit.committed_date
                else:
                    updated_files[diff.a_path] = commit.committed_date

    return updated_files


current_path = os.path.dirname(__file__)
# 使用你的Git仓库路径替换这里的路径
repo_path = current_path + "/../"
print(repo_path)
print("=========================")
print("=========================")
# path: date
files = get_files_updated_in_last_week(repo_path)
print(files)
print("=========================")
print("=========================")

sorted_items = sorted(files.items(), key=lambda item: item[1], reverse=True)
# print(sorted_items)
# print('=========================')
# print('=========================')

# all md files, except index.md. ONLY LIFE, NO GAME DIR
md_files = []
md_dict = {}
for tuple_items in sorted_items:
    file_name = tuple_items[0]
    file_date = tuple_items[1]
    if (
        file_name.startswith("life")
        and file_name.endswith(".md")
        and (
            not file_name.endswith("index.md")
            # 去哪些地方
            or ("trip" in file_name and file_name.endswith("index.md"))
        )
    ):
        md_files.append(file_name)
        md_title = op_file.get_md_title(f"{repo_path}{file_name}")
        if md_title != "":
            md_dict[file_name] = {"title": md_title, "date": file_date}


print(md_dict)
print(len(md_dict))

local_dict_file = current_path + "/auto/latest.json"


# load local data
local_md_dict = op_file.load_dict_from_file(local_dict_file)
if len(local_md_dict):
    for _local_file, _local_obj in local_md_dict.items():
        if _local_file in md_dict and _local_obj["date"] > md_dict[_local_file]["date"]:
            # 不会出现这种情况
            print("===========")
        else:
            md_dict[_local_file] = _local_obj

print(len(md_dict))

# export interface CardData {
#   title: string,
#   items: CardLink[],
# }
ts_card = {"title": "", "items": []}
for file, obj in md_dict.items():
    content = op_file.read_file_and_truncate(current_path + "/../" + file)
    if file.startswith("life") and file.endswith(".md"):
        link = file[4:-3]
    else:
        print("!!!!! WRONG LINK !!!!!")
    card_item = {
        "title": obj["title"],
        "desc": modify_md_content(content)[:50].strip(),
        "link": link,
        "date": utils.timestamp2date(obj["date"]),
    }
    ts_card["items"].append(card_item)
    if len(ts_card["items"]) >= 20:
        break

print(ts_card)

op_file.save_dict_to_file(md_dict, local_dict_file)

op_file.save_dict_to_file(
    ts_card, current_path + "/../life/.vitepress/data/recent.json"
)

# op_file.write_file(md_files)
