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


due_res_1m = []
due_res_3m = []
due_res_6m = []
due_res_12m = []

for all_days in res_arr_for_cal:
    # m1 = get_due_res(1, all_days)
    # m3 = get_due_res(3, all_days)
    # m6 = get_due_res(6, all_days)
    # m12 = get_due_res(12, all_days)
    y, m, d = all_days[0], all_days[1], all_days[2]

    m1 = get_order_due_date.getExpirationDate(y, m, d)
    m3 = get_order_due_date.getExpirationDate(y, m, d, 3)
    m6 = get_order_due_date.getExpirationDate(y, m, d, 6)
    m12 = get_order_due_date.getExpirationDate(y, m, d, 12)
    due_res_1m.append(m1)
    due_res_3m.append(m3)
    due_res_6m.append(m6)
    due_res_12m.append(m12)

    test_hit = [2021, 4, 30]
    test_hit = [2021, 9, 30]

    # if m1 == test_hit or \
    #         m3 == test_hit or \
    #         m6 == test_hit or \
    #         m12 == test_hit:
    #     print(all_days)


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
    if value >= 7:
        print(key, value)

# print(cal_count)
