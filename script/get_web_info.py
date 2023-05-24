from bs4 import BeautifulSoup
import requests

# 获取网页内容
url = ''
html = requests.get(url).text

# 解析网页内容
soup = BeautifulSoup(html, 'html.parser')


res_obj = {}

# 获取所有的table标签
tables = soup.find_all('table')
# tables = soup.find_all('table', {'class': 'table'})

print(tables)

# 遍历所有的table标签，获取其内容
for table in tables:
    # 获取所有的行
    rows = table.find_all('tr')
    # rows = table.find_all('tr', {'class': 'tr'})
    for row in rows:
        # 获取所有的单元格
        cells = row.find_all('td')
        # cells = row.find_all('td', {'class': 'td'})

        if len(cells) == 0:
            continue

        key = cells[0].text
        val1 = cells[1].text
        val2 = cells[2].text
        val3 = cells[3].text
        if val2 == '\xa0':
            val2 = ''

        # res_obj[key] = {
        #     'birth': val1,
        #     'death': '',
        #     'info': ''
        # }
        res_obj[key] = val1

        # for idx in range(len(cells)):
        #     # 输出单元格的文本内容
        #     print(cells[idx].text)

print(res_obj)
print(res_obj.values())
