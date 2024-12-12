from datetime import datetime
import os
import pandas as pd
from openpyxl import load_workbook
from collections import OrderedDict

import utils

current_path = os.path.dirname(__file__)

col_name = ["序号", "招聘机关", "职位", "用人单位", "考生准考证号（不含缺考考生）", "笔试成绩"]


def one_line(line_str: str):
    arr = line_str.split(" ")
    idx = 0
    row = {}
    for item in arr:
        row[col_name[idx]] = item
        idx += 1
    return row


str_score_range = ["90分(含)以上", "80分(含)以上", "70分(含)以上", "60分(含)以上", "不足60分"]


def get_score_range(data):
    # num a, b, c, d: 90+, 80+, 70+, 60+
    num_a = 0
    num_b = 0
    num_c = 0
    num_d = 0
    num_e = 0
    for item in data:
        score = float(item['笔试成绩'])
        if score >= 90:
            num_a += 1
        elif score >= 80:
            num_b += 1
        elif score >= 70:
            num_c += 1
        elif score >= 60:
            num_d += 1
        else:
            num_e += 1
    return num_a, num_b, num_c, num_d, num_e


def display_score_ratio(total_num: int, range_num: tuple):
    text = f'总人数为{total_num}人\n'
    idx = 0
    for ran in range_num:
        text += f'{str_score_range[idx]}人数为{ran}人'
        if idx != len(range_num) - 1:
            text += '，'
        else:
            text += '。\n'
        idx += 1
    print(text)
    return text


def get_jianchajiguan_bishi():
    data = utils.OperateFile.get_dict_by_read_file('', one_line)
    total_examinee = len(data)
    score_range = get_score_range(data)
    display_score_ratio(total_examinee, score_range)
    # 将数据转换为DataFrame
    df = pd.DataFrame(data)
    # 将DataFrame导出到Excel文件
    excel_path = "output.xlsx"
    # df.to_excel(excel_path, index=False)  # index=False表示不导出行索引

    print(f"Excel文件已保存到 {excel_path}")


get_jianchajiguan_bishi()
