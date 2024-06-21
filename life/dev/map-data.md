# 地图数据集

本站使用了很多地图集，有用到 [ECharts](https://echarts.apache.org/) 和 [Amap](../code/api/amap) 等等。  
具体代码实现可以参考本站实践。  

对于地图集的搜集，全国各地乃至世界地图集经纬度的数据搜寻，还是比较麻烦的。参考了许多网站链接。

:::warning 关于城市地图经纬度信息的获取

**国内**城市地图数据参考 [amap 官方数据](https://a.amap.com/jsapi_demos/static/demo-center-v2/mock_data/cities.js)，本项目中包含该数据。  

全球数据获取，引用了他人的 json 文件，[DrAugus/cities.json](https://github.com/DrAugus/cities.json) (GeoNames Gazetteer extract files: [GeoNames dump](http://download.geonames.org/export/dump/))

**日本**的数据获取找了很多种

- 在 [CJKI](https://www.cjk.org/) 上参考了[一些](https://www.cjk.org/language/ja/data/japanese/proper/japanese-multilingual-place-names-pois-database/)，无法找到全部 json 数据
- 国土交通省：[国土地理院](https://www.gsi.go.jp/)，[地名集日本](https://www.gsi.go.jp/kihonjohochousa/gazetteer.html)，[官方数据集 pdf](https://www.gsi.go.jp/common/000238259.pdf)
- 其中本站用到的 json 数据，先前用的上面的全球数据，因全球数据只有英文，而后改为带汉字的更全面的 json 数据集。[DrAugus/japanese-addresses](https://github.com/DrAugus/japanese-addresses)，[DrAugus/gazetter-of-japan](https://github.com/DrAugus/gazetter-of-japan)，本站选择后者，且增加了新的字段便于使用。（顺带了解了[日本的行政区划划分](../random-notes/divisions-jp)）
:::
