import matplotlib.pyplot as plt
import get_order_due_date
import op_file

import datetime
from collections import Counter


start_date = datetime.date(2020, 1, 1)
end_date = datetime.date(2025, 1, 1)

print("start_date:", start_date)
print("end_date:", end_date)

days_between = abs(end_date.toordinal() - start_date.toordinal())
print("days_between:", days_between)

delta = datetime.timedelta(days=1)

res_arr_write_file = []
res_arr_for_cal = []

while start_date < end_date:
    # print(start_date)
    res = str(start_date) + '\n'
    res_arr_write_file.append(res)

    res_arr_for_cal.append([start_date.year, start_date.month, start_date.day])

    start_date += delta

# op_file.write_file(res_arr_write_file)


# print("res_arr_for_cal:", res_arr_for_cal)


# times means, in 1/3/6/12 month(s)
def get_due_res(times, date_arr):
    res = []
    start_arr = date_arr
    for i in range(times):
        y, m, d = start_arr[0], start_arr[1], start_arr[2]
        res = get_order_due_date.getExpirationDate(y, m, d)
        start_arr = res
    return res


def test_get_due_res():
    dd = [2022, 10, 31]
    res = get_due_res(1, dd)
    print("in 1 m:", res)
    res = get_due_res(3, dd)
    print("in 3 m:", res)
    res = get_due_res(6, dd)
    print("in 6 m:", res)
    res = get_due_res(12, dd)
    print("in 12 m:", res)

    dd = [2022, 6, 30]
    res = get_due_res(1, dd)
    print("in 1 m:", res)
    res = get_due_res(3, dd)
    print("in 3 m:", res)
    res = get_due_res(6, dd)
    print("in 6 m:", res)
    res = get_due_res(12, dd)
    print("in 12 m:", res)

    dd = [2020, 1, 29]
    res = get_due_res(1, dd)
    print("in 1 m:", res)
    res = get_due_res(3, dd)
    print("in 3 m:", res)
    res = get_due_res(6, dd)
    print("in 6 m:", res)
    res = get_due_res(12, dd)
    print("in 12 m:", res)

# test_get_due_res()


due_res_1m = []
due_res_3m = []
due_res_6m = []
due_res_12m = []

for all_days in res_arr_for_cal:
    due_res_1m.append(get_due_res(1, all_days))
    due_res_3m.append(get_due_res(3, all_days))
    due_res_6m.append(get_due_res(6, all_days))
    due_res_12m.append(get_due_res(12, all_days))


# print("due_res_1m:", due_res_1m)
# print("due_res_3m:", due_res_3m)
# print("due_res_6m:", due_res_6m)
# print("due_res_12m:", due_res_12m)


merge_all = due_res_1m + due_res_3m + due_res_6m + due_res_12m

str_all = []
for ch in merge_all:
    m = str(ch[1])
    d = str(ch[2])
    if len(m) == 1:
        m = '0' + m
    if len(d) == 1:
        d = '0' + d
    n2str = str(ch[0]) + m + d
    # print(n2str)
    str_all.append(n2str)


# op_file.write_file(str_all)

count = Counter(str_all)

# print(count)

cal_count = [[], [], [], [], [], [], [], [], [], [], [], []]

cal_values = count.values()
# print("cal_values:",cal_values)


x = list(count.keys())
y = list(count.values())

# plt.bar(x, y)
# plt.title("Distribution of elements")
# plt.xlabel("Element")
# plt.ylabel("Count")
# plt.show()


for key, value in count.items():

    # cal_count[value].append(key)
    if value >= 8:
        print(key, value)

# print(cal_count)
