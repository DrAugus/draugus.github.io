"""扫描 docs 下所有 md 文件，提取路径和标题，输出 sidebar 格式。"""

import os
import re
import sys


def extract_title(filepath):
    """从 md 文件提取标题：优先取第一个 # 行，其次取 yaml front matter 的 title。"""
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()

    # 解析 yaml front matter
    in_yaml = False
    yaml_title = None
    for line in lines:
        stripped = line.strip()
        if stripped == "---":
            if not in_yaml:
                in_yaml = True
                continue
            else:
                break
        if in_yaml:
            m = re.match(r"^title:\s*(.+)", stripped)
            if m:
                yaml_title = m.group(1).strip()

    # 找 yaml 区结束位置
    yaml_end = 0
    if lines and lines[0].strip() == "---":
        for i, line in enumerate(lines[1:], start=1):
            if line.strip() == "---":
                yaml_end = i + 1
                break

    # 找第一个单 # 行
    for line in lines[yaml_end:]:
        m = re.match(r"^#\s+(.+)", line)
        if m:
            h1_title = m.group(1).strip()
            # 去掉 VitePress 的 <Badge .../> 或 <Badge ...>...</Badge>
            h1_title = re.sub(r"<Badge[^/>]*(?:/>|>.*?</Badge>)", "", h1_title).strip()
            return h1_title

    return yaml_title


def main():
    docs_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
    docs_dir = os.path.normpath(docs_dir)

    results = []
    for root, dirs, files in os.walk(docs_dir):
        dirs[:] = [d for d in dirs if d not in ("node_modules", ".vitepress")]
        for fname in sorted(files):
            if not fname.endswith(".md"):
                continue
            filepath = os.path.join(root, fname)
            rel_path = os.path.relpath(filepath, docs_dir)
            link = "/" + rel_path.replace(os.sep, "/").removesuffix(".md")
            title = extract_title(filepath)
            if title is None:
                title = os.path.splitext(fname)[0]
            results.append(f"{{ text: '{title}', link: '{link}' }},")

    # 强制 utf-8 输出，避免 Windows 终端编码问题
    sys.stdout.reconfigure(encoding="utf-8")
    for r in results:
        print(r)


if __name__ == "__main__":
    main()
