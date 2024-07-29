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


def remove_markdown(text):
    # 移除标题
    text = re.sub(r"#+ ", "", text)

    # 移除加粗
    text = re.sub(r"\*\*(.*?)\*\*", r"\1", text)
    text = re.sub(r"__(.*?)__", r"\1", text)

    # 移除斜体
    text = re.sub(r"\*(.*?)\*", r"\1", text)
    text = re.sub(r"_(.*?)_", r"\1", text)

    # 移除代码块（简单处理，不包括语言标记）
    text = re.sub(r"```.*?```", "", text, flags=re.DOTALL)
    text = re.sub(r" {4}.*?", "", text, flags=re.DOTALL)  # 移除缩进代码块

    # 移除列表项
    text = re.sub(r"^\s*[-*+] .*", "", text, flags=re.MULTILINE)

    # 移除行内代码
    text = re.sub(r"`(.*?)`", r"\1", text)

    # 移除链接（仅保留链接文本）
    text = re.sub(r"\[(.*?)\]\((.*?)\)", r"\1", text)

    # 移除图片（Markdown图片语法类似于链接，但通常不需要保留图片描述）
    text = re.sub(r"!\[(.*?)\]\((.*?)\)", "", text)

    # 移除表格（简单处理）
    text = re.sub(r"\|.*?\|\n", "", text, flags=re.MULTILINE)

    # 可能还需要处理其他Markdown语法...

    return text


def modify_md_content(s: str):
    # title, table, tip tag
    new_s = (
        s.replace("#", "")
        .replace("|", "")
        .replace(":::info", "")
        .replace(":::warning", "")
        .replace(":::tip", "")
        .replace(":::danger", "")
        .replace(":::", "")
    )
    new_s = remove_html_tags(new_s)
    new_s = remove_yaml_tags(new_s)
    new_s = replace_markdown_links(new_s)
    new_s = remove_markdown(new_s)
    # 使用正则表达式替换所有两个或以上的连续空格为一个空格
    s_replaced = re.sub(r"\s{2,}", " ", new_s)
    return s_replaced
