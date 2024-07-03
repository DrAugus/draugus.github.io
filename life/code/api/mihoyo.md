# mihoyo

## API

官方咨询

- 米游社 API prefix `https://bbs-api.miyoushe.com/post/wapi/getNewsList`
- hoyolab API `https://bbs-api-os.hoyolab.com/community/post/wapi/getNewsList`

参数

| 字段 | 类型 | 内容 | 备注 |
| --- | ---- | ---- | ---- |
| gids | num | 游戏ID | |
| type | num | 资讯类型<br/>1 公告<br/>2 活动<br/>3 资讯 | |
| page_size | num | 每页文章数量<br/>1~50 | 若未指定或超出范围则为每页20篇 |

e.g.  
<https://bbs-api-os.hoyolab.com/community/post/wapi/getNewsList?gids=6&type=1>

文章详细内容

- prefix `https://bbs-api-os.hoyolab.com/community/post/wapi/getPostFull`

参数 `post_id`

e.g.  
<https://bbs-api-os.hoyolab.com/community/post/wapi/getPostFull?post_id=18568299>

官网 API

绝区零

271 阵营  
272 所有角色

<https://api-takumi-static.mihoyo.com/content_v2_user/app/706fd13a87294881/getContentList?iChanId=271&iPageSize=10&iPage=1&sLangKey=zh-cn>

<https://api-takumi-static.mihoyo.com/content_v2_user/app/706fd13a87294881/getContentList?iPageSize=200&iPage=1&sLangKey=zh-cn&iChanId=272>

<https://api-takumi-static.mihoyo.com/content_v2_user/app/706fd13a87294881/getContentList?iPageSize=999&iPage=1&sLangKey=zh-cn&iChanId=309>

286 阵营  
287 所有角色

<https://sg-public-api-static.hoyoverse.com/content_v2_user/app/3e9196a4b9274bd7/getContentList?iChanId=286&iPageSize=10&iPage=1&sLangKey=en-us>

<https://sg-public-api-static.hoyoverse.com/content_v2_user/app/3e9196a4b9274bd7/getContentList?iPageSize=200&iPage=1&iChanId=287&sLangKey=en-us>

<https://sg-public-api-static.hoyoverse.com/content_v2_user/app/3e9196a4b9274bd7/getContentList?iPageSize=999&iPage=1&iChanId=889&sLangKey=en-us>

## ID对照表

### 游戏ID

| ID | 游戏 | 备注 |
| ------ | ---- | --- |
| 1 | 崩坏3 | |
| 2 | 原神 | |
| 3 | 崩坏学园2 | |
| 4 | 未定事件簿 | |
| 5 | 大别野 | |
| 6 | 崩坏：星穹铁道 | |
| 8 | 绝区零 | |

### 论坛ID

#### 崩坏3

| ID | 分区 | 备注 |
| -- | ---- | ---- |
| 1 | 甲板 | |
| 4 | 同人图 | |
| 6 | 官方 | |
| 14 | 攻略 | |
| 41 | 同人文 | |

#### 原神

| ID | 分区 | 备注 |
| -- | ---- | ---- |
| 26 | 酒馆 | |
| 28 | 官方 | |
| 29 | 同人图 | |
| 43 | 攻略 | |
| 49 | COS | |
| 50 | 硬核 | |

#### 崩坏学园2

| ID | 分区 | 备注 |
| -- | ---- | ---- |
| 30 | 学园 | |
| 31 | 官方 | |
| 32 | 反馈 | |
| 40 | 同人图 | |
| 51 | 攻略 | |

#### 未定事件簿

| ID | 分区 | 备注 |
| -- | ---- | ---- |
| 33 | 官方 | |
| 37 | 律所 | |
| 38 | 同人图 | |
| 42 | 同人文 | |
| 60 | 攻略 | |

#### 大别野

| ID | 分区 | 备注 |
| -- | ---- | ---- |
| 34 | 生活 | |
| 35 | ACG | |
| 36 | 公告 | |
| 39 | 同人图 | |
| 47 | COS | |
| 48 | 脑洞 | |
| 54 | 校园 | |
| 55 | 科技 | |

#### 崩坏：星穹铁道

| ID | 分区 | 备注 |
| -- | ---- | ---- |
| 52 | 候车室 | |
| 53 | 官方 | |
| 56 | 同人图 | |
| 61 | 攻略 | |

#### 绝区零

| ID | 分区 | 备注 |
| -- | ---- | ---- |
| 57 | 咖啡馆 | |
| 58 | 官方 | |
| 59 | 同人图 | |

#### 子分区

| ID | 分区 | 备注 |
| -- | ---- | --- |
| 1 | 手工 | |
| 2 | Q版 | |
| 3 | 漫画 | |
| 4 | 插画 | |
| 16 | 综合 | |

#### 视频分区

| ID | 分区 | 备注 |
| ------ | ---- | --- |
| 5 | 官方视频 | |
| 6 | 手作·绘画 | |
| 7 | COS视频 | |
| 8 | 攻略心得 | |
| 9 | 考据杂谈 | |
| 10 | 视频剪辑 | |
| 11 | 舞蹈演奏 | |
| 12 | MMD | |
| 13 | 实况·解说 | |
| 14 | 录屏·演示 | |
| 15 | 生活记录 | |

## 服务器名称

### 原神

| 名称 | 服务器 | 类别 |
| --- | ------ | ---- |
| cn_gf01 | 官服 | 国服 |
| cn_qd01 | 渠道服 | 国服 |
| os_asia | 亚服 | 国际服 |
| os_euro | 欧服 | 国际服 |
| os_usa | 美服 | 国际服 |
| os_cht | 港澳台服 | 国际服 |

### 崩坏：星穹铁道

| 名称 | 服务器 | 类别 |
| --- | ------ | ---- |
| prod_gf_cn | 官服 | 国服 |
| prod_qd_cn | 渠道服 | 国服 |
| prod_official_asia | 亚服 | 国际服 |
| prod_official_euro | 欧服 | 国际服 |
| prod_official_usa | 美服 | 国际服 |
| prod_official_cht | 港澳台服 | 国际服 |
