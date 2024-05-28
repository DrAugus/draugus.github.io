import re


def extract_links_from_markdown(markdown_content):
    # 正则表达式匹配形如 [text](link) 的链接，并捕获text部分
    pattern = r"\[([^][]+)\]\([^)]+\)"
    matches = re.findall(pattern, markdown_content)

    # matches现在是一个包含所有中括号内文本的列表
    return matches


def replace_markdown_links(markdown_content):
    # 正则表达式匹配形如 [文本](链接) 的模式
    # 捕获中括号内的文本（非贪婪匹配）
    pattern = r"\[([^\]]+)\]\([^\)]+\)"

    # 使用正则表达式替换文本
    replaced_content = re.sub(pattern, lambda m: m.group(1), markdown_content)

    return replaced_content


def remove_html_tags(text):
    clean = re.compile("<.*?>")
    return re.sub(clean, "", text)


def remove_yaml_tags(text):
    clean = re.compile("---.*?---", re.DOTALL)  # 使用 re.DOTALL 标志
    return re.sub(clean, "", text)


def modify_md_content(s: str):
    # title, table, tip tag
    new_s = (
        s.replace("#", "")
        .replace("|", "")
        .replace(":::info", "")
        .replace(":::warning", "")
        .replace(":::tip", "")
        .replace(":::danger", "")
    )
    new_s = remove_html_tags(new_s)
    new_s = remove_yaml_tags(new_s)
    new_s = replace_markdown_links(new_s)
    # 使用正则表达式替换所有两个或以上的连续空格为一个空格
    s_replaced = re.sub(r"\s{2,}", " ", new_s)
    return s_replaced
