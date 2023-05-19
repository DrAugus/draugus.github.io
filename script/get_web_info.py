from bs4 import BeautifulSoup
import requests

# 获取网页内容
url = ''
html = requests.get(url).text

# 解析网页内容
soup = BeautifulSoup(html, 'html.parser')

# 获取所有的table标签
tables = soup.find_all('table')


res_obj = {}


# 遍历所有的table标签，获取其内容
for table in tables:
    # 获取所有的行
    rows = table.find_all('tr')
    for row in rows:
        # 获取所有的单元格
        cells = row.find_all('td')

        if len(cells) == 0:
            continue

        key = cells[0].text
        val1 = cells[1].text
        val2 = cells[2].text
        if val2 == '\xa0':
            val2 = ''
        res_obj[key] = {
            'birth': val1,
            'death': '',
            'info': ''
        }

        # for idx in range(len(cells)):
        #     # 输出单元格的文本内容
        #     print(cells[idx].text)

print(res_obj)
