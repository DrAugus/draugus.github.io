"""
生成福报日历 fubao.ics - 可订阅到手机/电脑日历

用法: python scripts/gen_fubao_ics.py
输出: public/fubao.ics
数据: 直接从 CDN 下载 chinese-days.json

逻辑完全对齐 Calendar.vue:
  - getDayDetail(date).work: 是否需要上班
  - getDayDetail(date).name: 节假日名称
  - isInLieu(date): 是否调休休息日
  - getFubao(date): 判断本周周六是否福报
  - isFubaoDay(date): 递归判断周六是否福报
"""

import json
import os
import urllib.request
from datetime import date, timedelta

CDN_URL = "https://cdn.jsdelivr.net/npm/chinese-days/dist/chinese-days.json"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
OUTPUT_DIR = os.path.join(PROJECT_DIR, "life", "public")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "fubao.ics")


def load_data() -> dict:
    with urllib.request.urlopen(CDN_URL) as resp:
        return json.loads(resp.read().decode("utf-8"))


# --- 对齐 Calendar.vue 的 getDayDetail ---


def day_work(d: date, data: dict) -> bool:
    """对应 getDayDetail(date).work: 这天是否需要上班"""
    key = d.strftime("%Y-%m-%d")
    if key in data["workdays"]:
        return True
    if key in data["holidays"]:
        return False
    return d.weekday() < 5


def day_name(d: date, data: dict) -> str:
    """对应 getDayDetail(date).name: 节假日名称（英文名,中文名,编号）"""
    key = d.strftime("%Y-%m-%d")
    if key in data["holidays"]:
        return data["holidays"][key]
    if key in data["workdays"]:
        return data["workdays"][key]
    return ""


def day_holiday_name(d: date, data: dict) -> str | None:
    """对应 dayDetail.name.split(',')[1]: 节假日中文名"""
    name = day_name(d, data)
    if not name:
        return None
    parts = name.split(",")
    return parts[1] if len(parts) > 1 else None


def day_in_lieu(d: date, data: dict) -> bool:
    """对应 isInLieu(date): 是否调休休息日"""
    return d.strftime("%Y-%m-%d") in data["inLieuDays"]


# --- 对齐 Calendar.vue 的福报逻辑 ---


def is_fubao_day(d: date, data: dict, cache: dict) -> bool:
    """对应 isFubaoDay(date): 递归判断某天是否是福报日"""
    key = d.strftime("%Y-%m-%d")
    if key in cache:
        return cache[key]

    # 不是周六 → 不是福报
    if d.weekday() != 5:
        cache[key] = False
        return False

    # 是调休上班日 → 不是福报
    if day_work(d, data):
        cache[key] = False
        return False

    # 有节假日名称 → 不是福报
    if day_holiday_name(d, data):
        cache[key] = False
        return False

    # 本周周日被调休上班 → 周六不能福报（对应 Vue: getFubao 中 thisSunday 检查）
    this_sunday = d + timedelta(days=1)
    if day_work(this_sunday, data):
        cache[key] = False
        return False

    # 数据范围外 → 不是福报
    if d.year < 2004 or d.year > 2026:
        cache[key] = False
        return False

    # 递归前标记，防无限递归
    cache[key] = False

    prev_saturday = d - timedelta(days=7)
    prev_sunday = d - timedelta(days=6)

    # 上上周周末有加班（调休 or 福报）→ 上周双休（不是福报）
    # 上上周全休息 → 上周周六福报
    prev_sat_work = day_work(prev_saturday, data)
    prev_sun_work = day_work(prev_sunday, data)
    prev_sat_fubao = is_fubao_day(prev_saturday, data, cache)

    result = not (prev_sat_work or prev_sun_work or prev_sat_fubao)
    cache[key] = result
    return result


# --- ICS 生成 ---


def format_ics_date(d: date) -> str:
    return d.strftime("%Y%m%d")


def generate_ics(events: list[dict]) -> str:
    lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//fubao//CN",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "X-WR-CALNAME:福报日历",
        "X-WR-TIMEZONE:Asia/Shanghai",
        "REFRESH-INTERVAL;VALUE=DURATION:P7D",
    ]

    for ev in events:
        d = ev["date"]
        lines.extend(
            [
                "BEGIN:VEVENT",
                f"DTSTART;VALUE=DATE:{format_ics_date(d)}",
                f"DTEND;VALUE=DATE:{format_ics_date(d + timedelta(days=1))}",
                f"SUMMARY:{ev['summary']}",
                f"DESCRIPTION:{ev['description']}",
                f"UID:fubao-{d.strftime('%Y%m%d')}",
                "END:VEVENT",
            ]
        )

    lines.append("END:VCALENDAR")
    return "\r\n".join(lines) + "\r\n"


def main():
    data = load_data()
    cache: dict = {}
    events = []

    start = date(2024, 1, 1)
    end = date(2026, 12, 31)
    current = start

    while current <= end:
        work = day_work(current, data)
        holiday_name = day_holiday_name(current, data)
        in_lieu = day_in_lieu(current, data)

        # 福报日: 对齐 Vue 的 isFubao() — 只有周六才判断
        fubao = False
        if current.weekday() == 5 and not work and not holiday_name:
            fubao = is_fubao_day(current, data, cache)

        # 调休上班日: work=True 且有节假日名称 (对应 Vue: dayDetail.work && holidayName)
        # if work and holiday_name:
        #     events.append({
        #         "date": current,
        #         "summary": f"补班 - {holiday_name}",
        #         "description": f"调休补班日，因{holiday_name}调休需要上班",
        #     })

        # 福报日: 对应 Vue 的 isFubao
        if fubao:
            events.append(
                {
                    "date": current,
                    "summary": "福报日",
                    "description": "上周周末全休息，本周周六福报上班",
                }
            )

        # 调休休息日: inLieu=True 且不是调休上班日 (对应 Vue: isInLieu && !work)
        # if in_lieu and not work:
        #     events.append({
        #         "date": current,
        #         "summary": f"调休 - {holiday_name or '休息'}",
        #         "description": f"调休休息日（{holiday_name or '节假日'}调休）",
        #     })

        current += timedelta(days=1)

    ics_content = generate_ics(events)

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8", newline="") as f:
        f.write(ics_content)

    print(f"生成 {len(events)} 个事件，写入 {OUTPUT_FILE}")

    fubao_count = sum(1 for e in events if "福报日" in e["summary"])
    work_count = sum(1 for e in events if "补班" in e["summary"])
    lieu_count = sum(
        1 for e in events if "调休" in e["summary"] and "补班" not in e["summary"]
    )
    print(f"  福报日: {fubao_count}, 补班日: {work_count}, 调休日: {lieu_count}")


if __name__ == "__main__":
    main()
