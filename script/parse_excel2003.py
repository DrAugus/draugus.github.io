# `xlrd`库适用于读取Excel 2003及以前版本的.xlsx和.xls格式文件。下面是读取Excel文件的示例代码：


import xlrd

# 打开Excel文件
wb = xlrd.open_workbook('example.xlsx')

# 获取所有sheet的名称
print(wb.sheet_names())

# 选择要读取的sheet
sheet1 = wb.sheet_by_name('Sheet1')

# 获取行数和列数
nrows = sheet1.nrows
ncols = sheet1.ncols

# 遍历所有行和列
for i in range(nrows):
    for j in range(ncols):
        cell_value = sheet1.cell_value(i, j)
        print(cell_value)
