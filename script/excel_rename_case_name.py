from datetime import datetime
import os
import pandas as pd
from openpyxl import load_workbook
from collections import OrderedDict

current_path = os.path.dirname(__file__)


def read_excel():
    filename = current_path + "/modified.xlsx"
    sheet_name = "测试Case" 

    df = pd.read_excel(filename, sheet_name=sheet_name)

    OP_COL_NAME = "用例名称"

    columns = [OP_COL_NAME]

    def get_name_prefix(name:str):
        prefix = ''
        if 'Telltale' in name:
            prefix = name.split('Telltale')[1]     
        if 'SafetyBelt' in name:
            prefix = name.split('SafetyBelt')[1]
        return prefix
    
    def get_title(name:str):
        title = ''
        list_conclude = ['主驾','副驾',
                         '二排左','二排中','二排右',
                         '三排左','三排中','三排右']
        for con in list_conclude:
            if con in name:
                title += con + '+'
        if title.endswith('+'):
            title = title[:-1]
        return title

    def modify_index(num:int):
        if num < 10:
            return f'00{num}'
        if num < 100:
            return f'0{num}'
        return f'{num}'
    

    output_txt = ''

    title_idx = 0
    tag_first = True
    # for row in df[columns].itertuples(index=False):
        # name = row[0]
    for row_index, rw in df.iterrows():
        name = rw[OP_COL_NAME]        
        if pd.isna(name):
            continue

        if get_title(name) == "":
            continue

        if tag_first:
            title_old = get_title(name)
            tag_first = False

        title_new = get_title(name)
        if title_new != title_old:
            title_old = get_title(name)
            title_idx = 0

        title_idx += 1
        title_with_index = f'{title_new}_{modify_index(title_idx)}'
        
        output_txt += f'{title_with_index}\n'
        print(title_with_index)

        df.at[row_index, OP_COL_NAME] = title_with_index

    df.to_excel(current_path + 'new_mod.xlsx')

    utils.OperateFile.write_str(output_txt, 
                      f'{current_path}/output/title_info')

    result = df[columns].to_dict("records")


read_excel()