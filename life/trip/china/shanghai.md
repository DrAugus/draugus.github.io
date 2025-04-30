# 上海

| 景点 | 交通 | 游玩 | 开放 | 预约 | 票价 | 平台 | 推荐 |
|:----|:----|:----|:----|:----:|----:|----:|----:|
|甜爱路|地铁3/8号线虹口足球场站1号口步行约800米|1h|24h|-|免费|-|是|
|武康路|地铁10号线上海图书馆站3号口步行约500米|1h|24h|-|免费|-|是|
|愚园路|地铁2/7号线静安寺站1号口步行约300米|1h|24h|-|免费|-|是|
|上海迪士尼乐园|地铁11号线迪士尼站1号口步行约700米 建议打车或开车|2d|8:30-20:30|是|¥329起||是|
|1933老场坊|地铁4/10号线海伦路站2号口步行约700米|3h|9:00-21:00 21:00停止入场 |-|免费||是|
|静安寺|地铁2/7号线静安寺站1号口步行约400米|2h|7:30-17:00|-|¥50|||
|上海奇迹花园|地铁下来后步行近2公里 建议驾车或打车前往|4h|8:30-17:30 17:00停止入场|-|¥50|||
|上海之巅观光厅|地铁2号线陆家嘴站6号口步行约600米|3h|08:30-22:00 21:30停止入场 ||¥180||可以尝鲜 登高望远而已|
|外滩|地铁10号线豫园站1号口步行约800米|-|24h|-|免费||是|
|豫园|地铁10号线豫园站3号口步行约700米|2h|9:00-16:30 16:00停止入园 |-|¥40||是|
|新天地|地铁1号线黄陂南路站2号口步行约500米|3h|24h|-|免费|||
|上海自然博物馆|地铁13号线自然博物馆站1号口步行约100米|5h|9:00-17:00 最晚16:00入园 周一不开放 |-|¥30||是|
|中国证券博物馆|地铁10/12号线天潼路站3号口步行约800米|3h|周二-周五 10:00-11:30,14:00-15:30 周六 9:30-11:30,13:30-16:00 周一周日不开放 国家法定节假日闭馆|是|免费|||
|同济大学博物馆||||||||
|上海玻璃博物馆||||||||
|广富林文化遗址||||||||
|上海植物园|地铁不方便 公交56路区间,770路,824路比较近 或开车/打车前往|5h|7:00-17:00 16:00停止入场|-|¥15 联票¥40|||

## 游玩计划

> **每行**为一天

- 新天地 → 豫园 → 外滩 → 上海之巅观光厅
- 武康路历史文化名街 → 静安寺 → 1933老场坊 → 甜爱路
- 上海迪士尼乐园
- 愚园路 → 圣约翰大学 → 新华路 → 武康路 → 新天地
- 武康路历史文化名街 → 愚园路 → 上海自然博物馆
- 上海奇迹花园
- 花开海上生态园
- M50创意园 → 中国证券博物馆
- 上海天文馆 → 清溪老街
- 上海玻璃博物馆 → 同济大学博物馆
- 广富林文化遗址 → 上海大观园

## 游玩

不推荐

- 田子坊

## 游记

[2023/03/11](../travelogue/20230311)

## 美食

推荐

<Food :foods="foodSH" />

没吃过的 TODO

- GREEN & SAFE(新天地店)   <Badge type="warning" text="人均 ¥200" />  <Badge type="tip" text="西餐" />
- Va Bene贝尼西餐厅   <Badge type="warning" text="人均 ¥368" />  <Badge type="tip" text="牛排" />
- 豪生酒家(徐汇区广元路156号)  <Badge type="warning" text="人均 ¥200" /> <Badge type="tip" text="本帮菜" />
- 泰廊餐厅 <Badge type="warning" text="人均 ¥179" /> <Badge type="tip" text="泰国菜" /><Badge type="tip" text="越南菜" />
- simply thai 天泰 <Badge type="warning" text="人均 ¥110" /> <Badge type="tip" text="泰国菜" /><Badge type="tip" text="越南菜" />
- 旧款宁波饭店 <Badge type="warning" text="人均 ¥173" /> <Badge type="tip" text="中餐厅" />
- 提篮桥一号葱油饼 <Badge type="warning" text="人均 ¥10" /> <Badge type="tip" text="小吃" />
- 水丰锅贴 <Badge type="warning" text="人均 ¥19" /> <Badge type="tip" text="小吃" />
- 味香斋 <Badge type="warning" text="人均 ¥31" /> <Badge type="tip" text="面馆" />
- 金泽咖喱 <Badge type="warning" text="人均 ¥54" /> <Badge type="tip" text="日料" />
- 沪西老弄堂面馆<Badge type="warning" text="人均 ¥44" /> <Badge type="tip" text="面馆" />
- 阿姐炸道 <Badge type="warning" text="人均 ¥37" /> <Badge type="tip" text="炸串" />

--------

TODO

<table>
    <thead >
        <tr>
            <td v-for="(v, i) in TableHead" >
                {{ v }}</td>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(v, i) in attractionsSH">
            <td>{{v.name}}</td>
            <td>{{v.transportation}}</td>
            <td>{{v.playDuration}}</td>
            <td>{{v.openingHours}}</td>
            <td>{{v.needReservation}}</td>
            <td>{{v.ticketPrice}}</td>
            <td>{{v.platform}}</td>
            <td>{{v.recommendation}}</td>
        </tr>
    </tbody>
</table>

<script setup>
import { attractionsSH, TableHead } from "../../.vitepress/data/trip/attraction";
import { foodSH } from "../../.vitepress/data/trip/food";
import Food from "../../.vitepress/components/trip/Food.vue";
</script>
