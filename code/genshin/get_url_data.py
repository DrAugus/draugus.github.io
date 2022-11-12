import requests
from lxml import etree
from requests.exceptions import ConnectionError
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import os


def get_response(url):
    headers = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                      "Chrome/89.0.4389.114 Safari/537.36 "
    }
    try:
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response
        return None
    except ConnectionError:
        return None


def moc_get(num):
    # 实现无可视化界面
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--disable-gpu')
    # 初始化browser对象
    browser = webdriver.Chrome(executable_path='chromedriver.exe', options=chrome_options)

    url = 'https://genshin.hoyoverse.com/en/news/detail/' + str(num)
    print('url')
    print(url)
    # 模拟浏览器进行访问
    browser.get(url=url)
    # 获取页面的源代码
    page_text = browser.execute_script("return document.documentElement.outerHTML")
    parser_html = etree.HTML(page_text)
    path = '//div[@class="article__content"]/p[2]/br/text()'
    list_p = parser_html.xpath(path)
    print('list')
    print(list_p)


def main(num):
    url = 'https://genshin.hoyoverse.com/en/news/detail/' + str(num)
    print('url')
    print(url)
    resp = get_response(url)
    resp.encoding = 'utf-8'
    # print(resp.text)
    # 将结果集的文本转化为树的结构
    parser_html = etree.HTML(resp.text)
    # print(parser_html)
    # print(etree.tostring(parser_html)[1:])
    path = '/html/body/div[1]/div[2]/div/div[3]/div/div[2]/div/div[2]/div[3]/p[3]/strong[2]/span'
    ele = parser_html.xpath(path)
    print(ele)
    # soup_res = BeautifulSoup(resp.text, 'html.parser')
    # print('==========')
    # print(soup_res)
    # bf = soup_res.find('div', class_='article__content')
    # print(bf)
    # pp = soup_res.select('br')
    # print(pp)


if __name__ == '__main__':
    main(24199)
