import { Event, PermanentEvent } from "./type";
import { GameName } from "./utils";

export const PERMANENT_EVENTS: PermanentEvent[] = [
    {
        name: "逐光捡金·末日幻影",
        first: "2025/01/20 04:00:00 +0800",
        duration: {
            value: 42,
            unit: 'day',
        },
        backspace: 1,
        game: GameName.HSR,
        completedDate: [new Date("2025/02/27")],
    }, {
        name: "逐光捡金·虚构叙事",
        first: "2025/02/03 04:00:00 +0800",
        duration: {
            value: 42,
            unit: 'day',
        },
        backspace: 1,
        game: GameName.HSR
    }, {
        name: "逐光捡金·混沌回忆",
        first: "2025/02/17 04:00:00 +0800",
        duration: {
            value: 42,
            unit: 'day',
        },
        backspace: 1,
        game: GameName.HSR
    }, {
        name: "商店·戏言成真",
        first: "2025/02/17 04:00:00 +0800",
        duration: {
            value: 42,
            unit: 'day',
        },
        backspace: 1,
        game: GameName.HSR
    }, {
        name: "无名勋礼",
        first: "2025/02/26 06:00:00 +0800",
        duration: {
            value: 40,
            unit: 'day',
        },
        backspace: 7201, // 2h1s
        game: GameName.HSR
    }, {
        name: "余烬兑换",
        first: "2025/02/01 04:00:00 +0800",
        duration: {
            value: 1,
            unit: 'month',
        },
        backspace: 1,
        game: GameName.HSR,
        completedDate: [new Date("2025/03/01 18:00:00 +0800")],
    }, {
        name: "尘辉兑换·星尘兑换",
        first: "2025/02/01 04:00:00 +0800",
        duration: {
            value: 1,
            unit: 'month',
        },
        backspace: 1,
        game: GameName.Genshin
    }, {
        name: "幻想真境剧诗",
        first: "2025/02/01 04:00:00 +0800",
        reward: 620,
        game: GameName.Genshin,
        duration: {
            value: 1,
            unit: 'month',
        },
        backspace: 1,
        completedDate: [new Date("2025/02/27")],
    }, {
        name: "深境螺旋",
        first: "2025/02/16 04:00:00 +0800",
        reward: 800,
        game: GameName.Genshin,
        duration: {
            value: 1,
            unit: 'month',
        },
        backspace: 1,
    }, {
        name: "深境再临",
        first: "2025/02/03 04:00:00 +0800",
        reward: 700,
        game: GameName.WW,
        duration: {
            value: 28,
            unit: 'day',
        },
        backspace: 1,
    }, {
        name: "冥歌海墟",
        first: "2025/03/17 04:00:00 +0800",
        reward: 800,
        game: GameName.WW,
        duration: {
            value: 28,
            unit: 'day',
        },
        backspace: 1,
    }, {
        name: "全息战略·幻痛",
        first: "2025/04/29 12:00:00 +0800",
        game: GameName.WW,
        duration: {
            value: 43,
            unit: 'day',
        },
        backspace: 1,
    }, {
        name: "千道门扉的异想",
        first: "2025/02/17 04:00:00 +0800",
        reward: 160,
        game: GameName.WW,
        duration: {
            value: 7,
            unit: 'day',
        },
        backspace: 1,
        completedDate: [new Date("2025/03/02")],
    }, {
        name: "海市兑换·残振珊瑚",
        first: "2025/02/13 04:00:00 +0800",
        game: GameName.WW,
        duration: {
            value: 42,
            unit: 'day',
        },
        backspace: 57600,
    }, {
        name: "静谧水滴兑换",
        first: "2025/02/01 04:00:00 +0800",
        duration: {
            value: 1,
            unit: 'month',
        },
        backspace: 1,
        game: GameName.IN,
        completedDate: [new Date("2025/03/01 18:00:00 +0800")],
    }, {
        name: "奇迹之旅",
        first: "2025/02/26 11:00:00 +0800",
        duration: {
            value: 1,
            unit: 'month',
        },
        backspace: 25200,
        game: GameName.IN
    },
]

export const EVENTS: Event[] = [
    {
        name: "嗷呜嗷呜事务所",
        description: "生命花园培育出的奇美拉，竟然是奥赫玛居民的好帮手?成为这群小家伙的管理员，为有需要的人们解决更多麻烦吧!",
        start: "2025/02/28 12:00:00 +0800",
        end: "2025/04/07 03:59:59 +0800",
        game: GameName.HSR,
    }, {
        name: "圣城鉴宝",
        description: "近日奥赫玛市集上假货古玩猖獗，古玩店老板西塔罗斯急需一名鉴宝学徒协助他进行鉴定",
        start: "2025/03/19 12:00:00 +0800",
        end: "2025/04/07 03:59:59 +0800",
        game: GameName.HSR,
    }, {
        name: "春曦画桃符",
        description: "海灯节活动",
        start: "2025/01/24 10:00:00 +0800",
        end: "2025/02/09 03:59:59 +0800",
        game: GameName.Genshin
    }, {
        name: "游逸旅闻·诗汇之章",
        description: "",
        start: "2025/02/11 10:00:00 +0800",
        end: "2025/03/25 14:59:59 +0800",
        reward: 120,
        game: GameName.Genshin
    }, {
        name: "三川游艺绮梦谭",
        description: "",
        start: "2025/02/14 10:00:00 +0800",
        end: "2025/03/03 03:59:59 +0800",
        reward: 970,
        completed: true,
        game: GameName.Genshin
    }, {
        name: "征战勇者淬炼之界",
        description: "",
        start: "2025/02/24 10:00:00 +0800",
        end: "2025/03/10 03:59:59 +0800",
        reward: 420,
        game: GameName.Genshin
    }, {
        name: "异域鱼鱼追渔行动",
        description: "",
        start: "2025/03/05 10:00:00 +0800",
        end: "2025/03/17 03:59:59 +0800",
        reward: 420,
        game: GameName.Genshin
    }, {
        name: "剪影辑帧",
        description: "",
        start: "2025/03/12 10:00:00 +0800",
        end: "2025/03/24 03:59:59 +0800",
        reward: 420,
        game: GameName.Genshin
    }, {
        name: "鸣鸣企划·出山",
        start: "2025/01/30 06:00:00 +0800",
        end: "2025/02/13 03:59:59 +0800",
        game: GameName.WW
    }, {
        name: "刃舞候春归",
        start: "2025/01/23 06:00:00 +0800",
        end: "2025/02/13 03:59:59 +0800",
        game: GameName.WW
    }, {
        name: "疾速追债V:老无所倚",
        start: "2025/01/23 06:00:00 +0800",
        end: "2025/02/10 03:59:59 +0800",
        reward: 500,
        game: GameName.WW
    }, {
        name: "钳形激战无双版IV",
        start: "2025/01/23 06:00:00 +0800",
        end: "2025/02/13 03:59:59 +0800",
        reward: 300,
        game: GameName.WW
    }, {
        name: "潮心循迹",
        start: "2025/01/02 06:00:00 +0800",
        end: "2025/02/13 03:59:59 +0800",
        reward: 270,
        game: GameName.WW
    }, {
        name: "全息战略·幻痛",
        start: "2025/01/02 06:00:00 +0800",
        end: "2025/02/13 03:59:59 +0800",
        game: GameName.WW
    }, {
        name: "晨昏卷隐",
        start: "2025/01/15 06:00:00 +0800",
        end: "2025/02/24 03:59:59 +0800",
        game: GameName.HSR
    }, {
        name: "地宫迷踪",
        start: "2025/01/15 06:00:00 +0800",
        end: "2025/02/24 03:59:59 +0800",
        game: GameName.HSR
    }, {
        name: "伊利亚游记",
        start: "2025/01/15 06:00:00 +0800",
        end: "2025/02/24 03:59:59 +0800",
        game: GameName.HSR
    }, {
        name: "花焰飘游嘉年华·飘游的奇想",
        start: "2025/01/24 06:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "花焰飘游嘉年华·花焰随行",
        description: "花焰飘游嘉年华快讯",
        start: "2025/01/24 06:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "朝岁节·灯火福满盈",
        description: "签到送豆",
        start: "2025/01/24 06:00:00 +0800",
        end: "2025/02/14 03:59:59 +0800",
        game: GameName.IN
    }, {
        name: "朝岁节·萦音怀古",
        start: "2025/01/24 06:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "朝岁节·朝岁共赏",
        start: "2025/01/24 06:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "朝岁节·朝岁留影",
        start: "2025/01/24 06:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "朝岁节·心巧手巧奇巧板",
        start: "2025/01/24 06:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "朝岁节·朝岁游艺",
        start: "2025/01/24 06:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "朝岁节·弦歌共岁",
        start: "2025/01/24 06:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "俯瞰日·自在飘游的俯噉时光",
        start: "2025/01/24 06:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "俯瞰日·艾莉森的旅行小铺",
        start: "2025/02/14 11:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "俯瞰日·晴日时光",
        start: "2025/02/14 11:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "当期奇旅·深度突破",
        start: "2025/01/24 06:00:00 +0800",
        end: "2025/02/17 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "当期奇旅·搭配天王再临!",
        start: "2025/01/24 06:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        completed: true,
        game: GameName.IN
    }, {
        name: "当期奇旅·奇迹之冠",
        start: "2025/02/14 06:00:00 +0800",
        end: "2025/02/26 03:59:59 +0800",
        reward: 900,
        completed: true,
        game: GameName.IN
    }, {
        name: "冥歌海墟",
        start: "2025/02/13 04:00:00 +0800",
        end: "2025/03/17 03:59:59 +0800",
        game: GameName.WW
    }, {
        name: "千道门扉的异想",
        start: "2025/02/13 04:00:00 +0800",
        end: "2025/02/23 03:59:59 +0800",
        game: GameName.WW
    }, {
        name: "全息战略·幻痛",
        start: "2025/02/13 04:00:00 +0800",
        end: "2025/03/27 03:59:59 +0800",
        game: GameName.WW
    }, {
        name: "貘枕之章",
        start: "2025/02/12 04:00:00 +0800",
        end: "2025/03/04 17:59:59 +0800",
        completed: true,
        reward: 700,
        game: GameName.Genshin
    }, {
        name: "旧日日遗梦之歌·「女王赠礼」限时签到",
        start: "2025/02/26 11:00:00 +0800",
        end: "2025/03/12 09:59:59 +0800",
        reward: 1200,
        game: GameName.IN
    }, {
        name: "当期奇旅·奇迹之冠",
        start: "2025/02/26 11:00:00 +0800",
        end: "2025/03/12 09:59:59 +0800",
        reward: 900,
        game: GameName.IN
    }, {
        name: "旧日日遗梦之歌·幽歌吟咏的遗愿",
        start: "2025/02/26 11:00:00 +0800",
        end: "2025/03/26 03:49:59 +0800",
        game: GameName.IN
    }, {
        name: "旧日日遗梦之歌·「诡秘奇闻」",
        start: "2025/02/26 11:00:00 +0800",
        end: "2025/03/26 03:49:59 +0800",
        game: GameName.IN
    }, {
        name: "旧日日遗梦之歌·旧日幽歌纪念册",
        start: "2025/02/26 11:00:00 +0800",
        end: "2025/03/26 03:49:59 +0800",
        game: GameName.IN
    }, {
        name: "旧日日遗梦之歌·寻梦于迷途之中",
        start: "2025/02/26 11:00:00 +0800",
        end: "2025/03/26 03:49:59 +0800",
        game: GameName.IN
    }, {
        name: "旧日日遗梦之歌·幻花迷境",
        start: "2025/02/26 11:00:00 +0800",
        end: "2025/03/26 03:49:59 +0800",
        game: GameName.IN
    }, {
        name: "旧日日遗梦之歌·行宫寻珍",
        start: "2025/03/05 04:00:00 +0800",
        end: "2025/03/26 03:49:59 +0800",
        game: GameName.IN
    }, {
        name: "宴席白牛关爱日·宴席白牛关爱行动",
        start: "2025/02/26 11:00:00 +0800",
        end: "2025/03/26 03:49:59 +0800",
        game: GameName.IN
    }, {
        name: "宴席白牛关爱日·宴席白牛染色",
        start: "2025/02/26 11:00:00 +0800",
        end: "2025/03/26 03:49:59 +0800",
        game: GameName.IN
    }, {
        name: "老人鱼海",
        description: "航海主题。跟随菲比体验一段惊奇的航海之旅，在黎乔利群岛海域，漂泊者可以驾驶名为「拉结号」的贡多拉，捕捞当地各种特有的鱼类，通过不断获得捕鱼声誉成为捕鱼高手!",
        start: "2025/02/13 11:00:00 +0800",
        end: "2025/03/26 03:49:59 +0800",
        game: GameName.WW,
    }, {
        name: "碧海赠礼",
        description: "七日签到活动!",
        start: "2025/02/13 11:00:00 +0800",
        end: "2025/03/26 03:49:59 +0800",
        completed: true,
        game: GameName.WW,
    }, {
        name: "极限拉古那",
        description: "限时联机跑酷!",
        start: "2025/02/20 10:00:00 +0800",
        end: "2025/03/10 03:49:59 +0800",
        game: GameName.WW,
    }, {
        name: "仿声战略III",
        description: "漂泊者将可进入特殊的模拟领域，在特殊增益的加持下连续挑战多个强大的敌人!",
        start: "2025/02/27 10:00:00 +0800",
        end: "2025/03/13 03:49:59 +0800",
        game: GameName.WW,
    }, {
        name: "海算模演II",
        description: "海算沙盘领域内，通过击败敌人，开启奇藏来尽可能获得更多【战略数据】积分及【低容变量】增益。",
        start: "2025/03/06 10:00:00 +0800",
        end: "2025/03/27 03:49:59 +0800",
        game: GameName.WW,
    }, {
        name: "踏潮探历",
        description: "限时探索委托!参与活动并于鸣鸣物流车处上传探历札记，即可获得奖励丰厚的“探历补给”!",
        start: "2025/03/13 04:00:00 +0800",
        end: "2025/03/27 03:49:59 +0800",
        game: GameName.WW,
    }, {
        name: "荣花竞捷之争",
        description: "限时探索委托!参与邀请「深黯的谜烟·欧洛伦(雷)」",
        start: "2025/03/28 10:00:00 +0800",
        end: "2025/04/14 03:59:59 +0800",
        game: GameName.Genshin,
    }, {
        name: "蘑境菌奇",
        description: "限时探索委托!时限内完成部族纪闻任务，可额外获得原石、角色突破素材等奖励",
        start: "2025/03/26 06:00:00 +0800",
        end: "2025/04/15 17:59:59 +0800",
        reward: 60,
        game: GameName.Genshin,
    }, {
        name: "圣山所在是安饶之陆",
        description: "在时限内完成相应探索任务，可获得额外奖励",
        reward: 400,
        start: "2025/03/26 06:00:00 +0800",
        end: "2025/06/17 14:59:59 +0800",
        game: GameName.Genshin,
    }, {
        name: "无极限超激格斗赛",
        description: "地下激斗挑战赛",
        start: "2025/04/07 10:00:00 +0800",
        end: "2025/04/21 03:59:59 +0800",
        game: GameName.Genshin,
    }, {
        name: "奇逸角技隆隆擂台",
        description: "趣味多人挑战",
        start: "2025/04/21 10:00:00 +0800",
        end: "2025/05/02 03:59:59 +0800",
        game: GameName.Genshin,
    }, {
        name: "「节拍撞球·梅兹特利篇」活动：元素击球挑战",
        start: "2025/04/28 10:00",
        end: "2025/05/06 03:59",
        game: GameName.Genshin,
    },
    {
        name: "「奇逸角技隆隆擂台」活动：趣味多人挑战",
        start: "2025/04/21 10:00",
        end: "2025/05/02 03:59",
        game: GameName.Genshin,
    },
    {
        name: "「祝圣移涌」活动：圣遗物双倍掉落",
        start: "2025/04/14 04:00",
        end: "2025/04/21 03:59",
        game: GameName.Genshin,
    },
    {
        name: "「无极限超激格斗赛」活动：地下激斗挑战赛",
        start: "2025/04/07 10:00",
        end: "2025/04/21 03:59",
        game: GameName.Genshin,
    },
    {
        name: "「荣花纪行」活动说明",
        start: "2025/5/5 03:59",
        end: "2025/5/5 02:59",
        game: GameName.Genshin,
    },
    {
        name: "「地脉移涌」活动：「藏金之花」「启示之花」双倍掉落",
        start: "2025/03/17 04:00",
        end: "2025/03/24 03:59",
        game: GameName.Genshin,
    }, {
        name: "「异器盈界300%」活动：隧洞遗器限时三倍掉落",
        start: "2025/05/09 04:00:00 +0800",
        end: "2025/05/19 03:59:59 +0800",
        game: GameName.HSR
    },
    {
        name: "3.2版本活动跃迁（其二）",
        start: "2025/04/30 12:00:00 +0800",
        end: "2025/05/20 15:00:00 +0800",
        game: GameName.HSR
    },
    {
        name: "听歌领80星琼！星穹铁道新歌《不虚此行》已上线音乐平台",
        start: "2025/4/27 12:00:00 +0800",
        end: "2025/5/10 23:59:59 +0800",
        game: GameName.HSR
    },
    {
        name: "「星芒启明」：完成挑战获得命运的足迹、星琼等奖励！",
        start: "2025/04/28 12:00:00 +0800",
        end: "2025/05/19 03:59:59 +0800",
        game: GameName.HSR
    },
]