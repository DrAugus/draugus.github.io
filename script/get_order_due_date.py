

import unittest


# 给定订购的年月日 (year, month, day)
# 已知订购时长是一个月
# 返回订单的到期日
# year, month, day 均为整数，输入已保证是正确的日期。
def getExpirationDate(year, month, day):
    leap_year = (year % 4 == 0 and year % 100 != 0) or year % 400 == 0
    big_m = [1, 3, 5, 7, 8, 10, 12]
    small_m = [4, 6, 9, 11]
    next_year = year
    next_month = month + 1
    next_day = day

    next_month_day = 30

    if month == 12:
        next_year = year + 1
        next_month = 1

    if day > 28:
        if next_month == 2:
            if leap_year:
                next_day = 29
            # else:
            #     next_day = 28
        elif next_month in small_m:
            next_month_day = 30
        else:
            next_month_day = 31

        if day > next_month_day:
            next_day = next_month_day

    year = next_year
    month = next_month
    day = next_day

    return [year, month, day]


def getExpirationDate3(year, month, day):
    leap_year = (year % 4 == 0 and year % 100 != 0) or year % 400 == 0
    big_m = [1, 3, 5, 7, 8, 10, 12]
    small_m = [4, 6, 9, 11]
    next_year = year
    next_month = month + 3
    next_day = day

    next_month_day = 30

    if month == 12:
        next_year = year + 1
        next_month = 3
    if month == 11:
        next_year = year + 1
        next_month = 2
    if month == 10:
        next_year = year + 1
        next_month = 1

    if day > 28:
        if next_month == 2:
            if leap_year:
                next_day = 29
            # else:
            #     next_day = 28
        elif next_month in small_m:
            next_month_day = 30
        else:
            next_month_day = 31

        if day > next_month_day:
            next_day = next_month_day

    year = next_year
    month = next_month
    day = next_day

    return [year, month, day]


def getExpirationDate6(year, month, day):
    leap_year = (year % 4 == 0 and year % 100 != 0) or year % 400 == 0
    big_m = [1, 3, 5, 7, 8, 10, 12]
    small_m = [4, 6, 9, 11]
    next_year = year
    next_month = month + 6
    next_day = day

    next_month_day = 30

    if month <= 12 and month >= 7:
        next_year = year + 1
        next_month = month - 6

    if day > 28:
        if next_month == 2:
            if leap_year:
                next_day = 29
            # else:
            #     next_day = 28
        elif next_month in small_m:
            next_month_day = 30
        else:
            next_month_day = 31

        if day > next_month_day:
            next_day = next_month_day

    year = next_year
    month = next_month
    day = next_day

    return [year, month, day]


def getExpirationDate12(year, month, day):
    leap_year = (year % 4 == 0 and year % 100 != 0) or year % 400 == 0
    big_m = [1, 3, 5, 7, 8, 10, 12]
    small_m = [4, 6, 9, 11]
    next_year = year + 1
    next_month = month
    next_day = day

    next_month_day = 30

    if day > 28:
        if next_month == 2:
            if leap_year:
                next_day = 29
            # else:
            #     next_day = 28
        elif next_month in small_m:
            next_month_day = 30
        else:
            next_month_day = 31

        if day > next_month_day:
            next_day = next_month_day

    year = next_year
    month = next_month
    day = next_day

    return [year, month, day]


class TestGetExpirationDate(unittest.TestCase):

    def test_case1(self):
        t_val = [2021, 6, 30]
        res_val = [2021, 7, 30]
        self.assertEqual(getExpirationDate(
            t_val[0], t_val[1], t_val[2]), res_val)

    def test_case2(self):
        t_val = [2021, 7, 31]
        res_val = [2021, 8, 31]
        self.assertEqual(getExpirationDate(
            t_val[0], t_val[1], t_val[2]), res_val)

    def test_case3(self):
        t_val = [2021, 8, 31]
        res_val = [2021, 9, 30]
        self.assertEqual(getExpirationDate(
            t_val[0], t_val[1], t_val[2]), res_val)

    def test_case4(self):
        t_val = [2021, 2, 28]
        res_val = [2021, 3, 28]
        self.assertEqual(getExpirationDate(
            t_val[0], t_val[1], t_val[2]), res_val)

    def test_case5(self):
        t_val = [2020, 2, 29]
        res_val = [2020, 3, 29]
        self.assertEqual(getExpirationDate(
            t_val[0], t_val[1], t_val[2]), res_val)

    def test_case6(self):
        t_val = [2020, 12, 31]
        res_val = [2021, 1, 31]
        self.assertEqual(getExpirationDate(
            t_val[0], t_val[1], t_val[2]), res_val)


# unittest.main()

def modify_date(year, month, day):
    m = str(month)
    d = str(day)
    if len(m) == 1:
        m = '0' + m
    if len(d) == 1:
        d = '0'+d
    res = str(year) + '-' + m + '-' + d
    return res
