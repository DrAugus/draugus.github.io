import random
from datetime import datetime, timedelta

# 定义日期范围
start_date = datetime(2021, 9, 1)
end_date = datetime(2021, 12, 25)
# start_date = datetime(2022, 3, 1)
# end_date = datetime(2022, 8, 31)

# 生成随机日期的函数
def generate_random_date(start, end):
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60) + delta.seconds
    random_second = random.randrange(int_delta)
    return start + timedelta(seconds=random_second)


kind_report = ["思想品德",
               "学业水平",
               "身心健康",
               "艺术素养",
               "劳动与社会实践"]


# 生成5组随机日期
for i in range(5):
    dates_for_group = []
    for _ in range(5):
        random_date = generate_random_date(start_date, end_date)
        # 确保日期在指定范围内（排除超出范围的日期）
        while random_date > end_date:
            random_date = generate_random_date(start_date, end_date)
        # 只保留月/日部分
        month_day = random_date.strftime('%Y-%m-%d')
        dates_for_group.append(month_day)
    print(kind_report[i], dates_for_group)
