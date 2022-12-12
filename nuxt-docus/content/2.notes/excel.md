---
title: Excel
icon: vscode-icons:file-type-excel2
---

### 从身份证中提取年龄

`=YEAR(NOW())-MID(B2,7,4)`

### 获取当前日期

在 Excel 中，可以使用函数 `TODAY()` 来获取当前日期。具体使用方法如下：

1. 在单元格中输入 `=TODAY()` 并按下回车键。
2. Excel 会自动计算并显示当前日期。

例如：如果当前日期是 2020 年 7 月 31 日，那么 Excel 会显示 7/31/2020。

::alert{type="info"}
注意：虽然 `TODAY()` 函数返回的是当前日期，但它并不包含时间信息。如果需要获取当前时间，可以使用 `NOW()` 函数。
::
