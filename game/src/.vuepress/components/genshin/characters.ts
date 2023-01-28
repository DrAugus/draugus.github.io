import { City, Element, ElementZH, Weapon, Artifacts } from "./utils";

export interface Cultivate {
  weapons: string
  talent: string
  artifacts: string[]
  main: {}
  sub: string[]
  tips: string
}

export interface Characters {
  id: string,
  name: string
  prefix: string,
  star: number
  event_exclusive: boolean
  intro: string
  city: City
  ele: Element
  weapon: Weapon
  cultivate: Cultivate
}

export const modifyChar = (id: string) => CHARACTER[id].name

export const CHARACTER = {
  kaedehara_kazuha: {
    id: "kaedehara_kazuha",
    name: "枫原万叶",
    prefix: "红叶逐荒波",
    star: 5,
    event_exclusive: true,
    intro: "稻妻出身的浪人武士。为人谦和，个性温顺。年轻潇洒的外表下埋藏着许多往事。看似随性，心中却有独属于自己的行事准则。",
    city: City.Inazuma,
    ele: Element.anemo,
    weapon: Weapon.sword
  },
  yanfei: {
    id: "yanfei",
    name: "烟绯",
    prefix: "智明无邪",
    star: 4,
    event_exclusive: false,
    intro: "烟绯——身负半仙之血，能力一流的律法咨询师。她在循途守辙与通权达变之间寻得了只属于自己的完美平衡点，凭借律法咨询师的独特身份和自成一派的经验手段，悉心守护着璃月的契约天平。",
    city: City.Liyue,
    ele: Element.pyro,
    weapon: Weapon.catalyst
  },
  eula: {
    id: "eula",
    name: "优菈",
    prefix: "浪沫的旋舞",
    star: 5,
    event_exclusive: true,
    intro: "优菈——常年在外作战的「浪花骑士」，反叛的旧贵族末裔。生于旧日宗室，身负罪恶血脉之人，的确需要独特的处世技巧，才能在偏见的高墙下安然行走。当然，这并不妨碍她与家族决裂，作为卓越的「浪花骑士」，在外游猎蒙德的敌人，完成她那意义独特的「复仇」。",
    city: City.Mondstadt,
    ele: Element.cryo,
    weapon: Weapon.claymore
  },
  jean: {
    id: "jean",
    name: "琴",
    prefix: "蒲公英骑士",
    star: 5,
    event_exclusive: false,
    intro: "身为西风骑士团的代理团长，琴一直忠于职守，为人们带来安宁。虽然并非天赋异禀，但通过刻苦训练，如今的她已然能够独当一面。当风魔龙的威胁开始临近，这位可靠的代理团长早已做好了准备，誓要守护蒙德。",
    city: City.Mondstadt,
    ele: Element.anemo,
    weapon: Weapon.claymore
  },
  lisa: {
    id: "lisa",
    name: "丽莎",
    prefix: "蔷薇魔女",
    star: 4,
    event_exclusive: false,
    intro: "她是钟情于睡眠的知性魔女。作为西风骑士团图书馆的管理员，聪明的丽莎总能以最有效的方式将遇到的问题统统解决。虽然看似慵懒，但处变不惊的她似乎早已将一切尽数掌控。",
    city: City.Mondstadt,
    ele: Element.electro,
    weapon: Weapon.catalyst
  },
  barbara: {
    id: "barbara",
    name: "芭芭拉",
    prefix: "闪耀偶像",
    star: 4,
    event_exclusive: false,
    intro: "既是西风教会的祈礼牧师，又是蒙德城的闪耀偶像。对于习惯了传统吟游诗人的蒙德来说，「偶像」是还不习惯的新生事物。但在蒙德，人人都爱芭芭拉。这就是自由之都的自由精神——对大家投来的喜爱，芭芭拉是这样满怀感激地总结的。",
    city: City.Mondstadt,
    ele: Element.hydro,
    weapon: Weapon.catalyst
  },
  kaeya: {
    id: "kaeya",
    name: "凯亚",
    prefix: "寒风剑士",
    star: 4,
    event_exclusive: false,
    intro: "在西风骑士团里，凯亚是代理团长最信任的副手。凡是交托于他的任务，总能得到解决。在蒙德城中，风趣幽默的他同样深受人们的喜爱，然而这位谈吐不凡的骑士隐约有着什么不为人知的秘密。",
    city: City.Mondstadt,
    ele: Element.cryo,
    weapon: Weapon.sword
  },
  diluc: {
    id: "diluc",
    name: "迪卢克",
    prefix: "晨曦的暗面",
    star: 5,
    event_exclusive: false,
    intro: "身为蒙德城第一富豪，风度翩翩的迪卢克总是以完美的贵公子形象示人。然而他真实的一面，是秉承坚定信念的战士，他那「不惜一切守护蒙德」的意志犹如火焰般炽热，令他能以恐怖的攻势，毫不留情地将一切敌人击溃。",
    city: City.Mondstadt,
    ele: Element.pyro,
    weapon: Weapon.claymore
  },
  razor: {
    id: "razor",
    name: "雷泽",
    prefix: "狼少年",
    star: 4,
    event_exclusive: false,
    intro: "在蒙德坊间的传闻里，有人说他是被狼收养的弃婴，有人说他是狼灵的化身…利爪与苍雷在飞驰，狼永远与荒野为伴。时至今日，狼少年仍凭借他野兽般的直觉，在林间与狼群一起奔猎。",
    city: City.Mondstadt,
    ele: Element.electro,
    weapon: Weapon.claymore
  },
  amber: {
    id: "amber",
    name: "安柏",
    prefix: "飞行冠军",
    star: 4,
    event_exclusive: false,
    intro: "活泼率直的少女，是蒙德城中唯一的侦察骑士。擅长使用风之翼的安柏，连续三年蝉联蒙德城的「飞行冠军」。作为西风骑士团的新星，今天的安柏依然活跃在第一线。",
    city: City.Mondstadt,
    ele: Element.pyro,
    weapon: Weapon.bow
  },
  venti: {
    id: "venti",
    name: "温迪",
    prefix: "风色诗人",
    star: 5,
    event_exclusive: true,
    intro: "来路不明的吟游诗人，有时唱一些老掉牙的旧诗，有时又会唱出谁也没听过的新歌。喜欢苹果和热闹的气氛，讨厌奶酪和一切黏糊糊的物质。在引导「风」的元素力时，元素的塑形往往外显为羽毛，因为他很中意看上去轻飘飘的东西。",
    city: City.Mondstadt,
    ele: Element.anemo,
    weapon: Weapon.bow
  },
  xiangling: {
    id: "xiangling",
    name: "香菱",
    prefix: "万民百味",
    star: 4,
    event_exclusive: false,
    intro: "「万民堂」的新任大厨兼跑堂，对料理之道极具热情，最拿手的是麻辣菜肴。年纪尚轻，但厨艺精湛，在吃虎岩的老饕之中颇有名气。如果她要请你进行新品试吃，大可放心品尝，绝不会辜负你的期待，真的。",
    city: City.Liyue,
    ele: Element.pyro,
    weapon: Weapon.polearm,
    cultivate: {
      weapons: "",
      talent: "",
      artifacts: [
        "绝缘之旗印4件"
      ],
      main: {
        sands: "",
        goblet: "",
        circlet: ""
      },
      sub: "",
      tips: ""
    }
  },
  beidou: {
    id: "beidou",
    name: "北斗",
    prefix: "无冕的龙王",
    star: 4,
    event_exclusive: false,
    intro: "「南十字」船队头领，在璃月有着相当的声望。有人说她能开山劈海，有人说她善举剑引雷，还有人说，连可怖的冥海巨兽都不是北斗的一合之敌。外人也许会把这些话当做夸张的玩笑，但那些曾与北斗同航的人却会说——「世上若真有什么冥海巨兽，那北斗一定能将它劈作两截。」",
    city: City.Liyue,
    ele: Element.electro,
    weapon: Weapon.claymore
  },
  xingqiu: {
    id: "xingqiu",
    name: "行秋",
    prefix: "少年春衫薄",
    star: 4,
    event_exclusive: false,
    intro: "璃月港飞云商会的二少爷，自幼便以勤奋好学、待人礼貌闻名。不过，即使是如此文雅的少年人，也有着动若脱兔的一面。",
    city: City.Liyue,
    ele: Element.hydro,
    weapon: Weapon.sword
  },
  xiao: {
    id: "xiao",
    name: "魈",
    prefix: "护法夜叉",
    star: 5,
    event_exclusive: true,
    intro: "守护璃月港的「三眼五显仙人」之一，妙称「护法夜叉大将」。虽然外表看起来是一个少年人，但一些有关他的传说，已在古卷中流传千年。对望舒客栈中一道名为「杏仁豆腐」的菜颇为喜爱。究其原因，是因为「杏仁豆腐」的味道，与他曾经吞噬过的「美梦」十分相似。",
    city: City.Liyue,
    ele: Element.anemo,
    weapon: Weapon.polearm
  },
  ningguang: {
    id: "ningguang",
    name: "凝光",
    prefix: "掩月天权",
    star: 4,
    event_exclusive: false,
    intro: "坐拥空中宫殿，有着大量传言的璃月权贵，脸上总是挂着优雅神秘的笑容。作为「璃月七星」中的天权星，她不仅象征着权力与律法，也代表着财富与才智。",
    city: City.Liyue,
    ele: Element.geo,
    weapon: Weapon.catalyst
  },
  klee: {
    id: "klee",
    name: "可莉",
    prefix: "逃跑的太阳",
    star: 5,
    event_exclusive: true,
    intro: "西风骑士团，火花骑士！永远伴随闪光与爆炸出现！——然后在琴团长严厉的目光注视下默默消失。虽然新炸药的配方，很多都是在被关禁闭的时候想出来的……但如果不被关禁闭的话，就更好了。",
    city: City.Mondstadt,
    ele: Element.pyro,
    weapon: Weapon.catalyst
  },
  zhongli: {
    id: "zhongli",
    name: "钟离",
    prefix: "尘世闲游",
    star: 5,
    event_exclusive: true,
    intro: "应「往生堂」邀请而来的神秘客卿。样貌俊美，举止高雅，拥有远超常人的学识。虽说来历不明，却知礼数、晓规矩。坐镇「往生堂」，能行天地万物之典仪。",
    city: City.Liyue,
    ele: Element.geo,
    weapon: Weapon.polearm,
    cultivate: {
      weapons: "",
      talent: "",
      artifacts: [
        "千岩固牢2件 + 宗室2件"
      ],
      main: {
        sands: "生命值",
        goblet: "岩伤",
        circlet: "暴击%/暴伤"
      },
      sub: [
        "暴击",
        "暴伤",
        "生命",
        "攻击"
      ],
      tips: ""
    }
  },
  fischl: {
    id: "fischl",
    name: "菲谢尔",
    prefix: "断罪皇女",
    star: 4,
    event_exclusive: false,
    intro: "自称「断罪之皇女」，与名为奥兹的漆黑夜鸦同行的神秘少女。目前正以调查员身份供职于冒险家协会。通过自己的特殊能力加上奇妙的个性，还有本人不愿意承认的努力，菲谢尔成为了冒险家协会调查员中的新星，且成功赢得了大家的认可。",
    city: City.Mondstadt,
    ele: Element.electro,
    weapon: Weapon.bow
  },
  bennett: {
    id: "bennett",
    name: "班尼特",
    prefix: "命运试金石",
    star: 4,
    event_exclusive: false,
    intro: "蒙德城冒险家协会为数不多的年轻冒险家，一直被莫名的「不幸」所纠缠。他所创立的「班尼冒险团」，在「不幸」的影响下不断有成员长期告假，目前仅有团长一人在队活动，已处于解散边缘。但在班尼特诚恳的请求下，蒙德城冒险家协会接待员凯瑟琳小姐为他保留了「班尼冒险团」的编制，同时，也向他隐瞒了其他成员早已跳槽的事实。",
    city: City.Mondstadt,
    ele: Element.pyro,
    weapon: Weapon.sword,
    cultivate: {
      weapons: "",
      talent: "",
      artifacts: [
        "宗室4件"
      ],
      main: {
        sands: "充能",
        goblet: "生命",
        circlet: "治疗"
      },
      sub: [
        "充能",
        "攻击"
      ],
      tips: ""
    }
  },
  tartaglia: {
    id: "tartaglia",
    name: "达达利亚",
    prefix: "「公子」",
    star: 5,
    event_exclusive: true,
    intro: "达达利亚——来自寒冰之国，心思变幻莫测的客人。不必猜测他的想法，也无需质疑他的来意。只要记住：这副稚气未脱的外表下暗藏的，是锤炼到极致的战士之躯。",
    city: City.Snezhnaya,
    ele: Element.hydro,
    weapon: Weapon.bow
  },
  noelle: {
    id: "noelle",
    name: "诺艾尔",
    prefix: "未授勋之花",
    star: 4,
    event_exclusive: false,
    intro: "和蒙德城大多数普通年轻人一样，诺艾尔梦想着成为一名光荣的西风骑士。尽管还没有获得骑士资格，她仍以女仆的身份在骑士团里工作，努力学习着骑士的言行礼仪。她始终相信，只要坚持努力，总有一天能穿上那副象征荣耀的甲胄。",
    city: City.Mondstadt,
    ele: Element.geo,
    weapon: Weapon.claymore
  },
  qiqi: {
    id: "qiqi",
    name: "七七",
    prefix: "冻冻回魂夜",
    star: 5,
    event_exclusive: false,
    intro: "药庐「不卜庐」的采药姑娘兼学徒。因「仙缘」而拥有不死之身，行动时需要自己给自己下敕令。七七的记忆力非常差，为了保证日常生活的顺利，她随身携带着一本笔记，写有各种各样的注意事项。但在最不巧的那些日子里，她连「要看笔记」这件事都会忘记……",
    city: City.Liyue,
    ele: Element.cryo,
    weapon: Weapon.sword
  },
  chongyun: {
    id: "chongyun",
    name: "重云",
    prefix: "雪融有踪",
    star: 4,
    event_exclusive: false,
    intro: "以璃月为中心，四处进行驱邪活动的云游方士。作为驱邪世家继承人，他自幼便有过人的绝技。然而，这种绝技并非学自师门，而是与生俱来的异能——「纯阳之体」。",
    city: City.Liyue,
    ele: Element.cryo,
    weapon: Weapon.claymore
  },
  ganyu: {
    id: "ganyu",
    name: "甘雨",
    prefix: "循循守月",
    star: 5,
    event_exclusive: true,
    intro: "璃月七星的秘书，体内流淌着人类与仙兽的血脉。天性优雅娴静，但仙兽「麒麟」温柔的性情与坚定毅重的工作态度毫无冲突。毕竟，甘雨坚信自己所做的一切工作都是为了践行与帝君的契约，谋求璃月众生的最大福祉。",
    city: City.Liyue,
    ele: Element.cryo,
    weapon: Weapon.bow
  },
  albedo: {
    id: "albedo",
    name: "阿贝多",
    prefix: "白垩之子",
    star: 5,
    event_exclusive: true,
    intro: "阿贝多——现定居蒙德的炼金术士，效力于西风骑士团。「天才」、「白垩之子」或「调查队长」…他不怎么在意称号和名望，只专注于研究课题。财富和人脉不是他的目标。他渴望驾驭的，是从古到今深藏于人类头脑中的无上知识。",
    city: City.Mondstadt,
    ele: Element.geo,
    weapon: Weapon.sword
  },
  diona: {
    id: "diona",
    name: "迪奥娜",
    prefix: "猫尾特调",
    star: 4,
    event_exclusive: false,
    intro: "「猫尾酒馆」的超人气调酒师，蒙德酒业的超新星，传统势力的最大挑战者。出身于清泉镇的猫耳猫尾少女，只要经迪奥娜之手调制过的酒类，都会变成难以想象的美味佳酿。然而对于极度厌恶酒类的她来说，这到底是一种「祝福」还是「诅咒」呢？",
    city: City.Mondstadt,
    ele: Element.cryo,
    weapon: Weapon.bow
  },
  mona: {
    id: "mona",
    name: "莫娜",
    prefix: "星天水镜",
    star: 5,
    event_exclusive: false,
    intro: "神秘的少女占星术士，声称自己是「伟大的占星术士莫娜」，拥有与名号相符的不俗实力，博学而高傲。尽管过着拮据、清贫的生活，但她坚决不用占卜来牟利…正是这种坚持，导致莫娜总是在为生计发愁。",
    city: City.Mondstadt,
    ele: Element.hydro,
    weapon: Weapon.catalyst
  },
  keqing: {
    id: "keqing",
    name: "刻晴",
    prefix: "霆霓快雨",
    star: 5,
    event_exclusive: false,
    intro: "璃月七星之一，玉衡星。对「帝君一言而决的璃月」颇有微词——但实际上，神挺欣赏她这样的人。她坚信与人类命运相关的事，应当由人类去做，而且人类一定可以做得更好。为了证明这一点，她比任何人都要努力。",
    city: City.Liyue,
    ele: Element.electro,
    weapon: Weapon.sword
  },
  sucrose: {
    id: "sucrose",
    name: "砂糖",
    prefix: "无害甜度",
    star: 4,
    event_exclusive: false,
    intro: "对世间万物抱有强烈好奇心的炼金术士，隶属于西风骑士团，是阿贝多的助手。研究方向为「生物炼金」。她希望用炼金术改造既有的生命形态，让这个世界更加丰富多彩。虽说改造过程中偶尔会出现一些过于奇异的产物，但总体而言，砂糖在「生物炼金」方面成就斐然。",
    city: City.Mondstadt,
    ele: Element.anemo,
    weapon: Weapon.catalyst
  },
  xinyan: {
    id: "xinyan",
    name: "辛焱",
    prefix: "燥热旋律",
    star: 4,
    event_exclusive: false,
    intro: "在璃月港，摇滚属于新兴艺术，辛焱则是这门艺术身先士卒的践行者。她用音乐和热情歌颂着对「成见」的反抗，想要唤醒劳于世间昏昏沉沉的灵魂。如果有机会，请千万不要错过她的演出。",
    city: City.Liyue,
    ele: Element.pyro,
    weapon: Weapon.claymore
  },
  rosaria: {
    id: "rosaria",
    name: "罗莎莉亚",
    prefix: "棘冠恩典",
    star: 4,
    event_exclusive: false,
    intro: "罗莎莉亚——蒙德城西风教会下属修女。除了打扮哪里都不像神职人员的怪异修女。冷淡、锋利，如刀锋般锐利的女人。行踪叵测，时常不告而别。身负着某种使命，但人们似乎并不明白她究竟代表着什么…",
    city: City.Mondstadt,
    ele: Element.cryo,
    weapon: Weapon.polearm
  },
  hu_tao: {
    id: "hu_tao",
    name: "胡桃",
    prefix: "雪霁梅香",
    star: 5,
    event_exclusive: true,
    intro: "胡桃——「往生堂」第七十七代堂主，掌控着璃月葬仪事务的重要人物。尽心尽力地为人们完成送别之仪，维护着世间阴阳平衡之道。除此以外还是个神奇打油诗人，诸多「杰作」被璃月人口口相传。",
    city: City.Liyue,
    ele: Element.pyro,
    weapon: Weapon.polearm
  },
  yoimiya: {
    id: "yoimiya",
    name: "宵宫",
    prefix: "琉焰华舞",
    star: 5,
    event_exclusive: true,
    intro: "才华横溢的烟花工匠，「长野原烟花店」的现任店主，被誉为「夏祭的女王」。热情似火的少女。未泯的童心与匠人的执着在她身上交织出了奇妙的焰色反应。",
    city: City.Inazuma,
    ele: Element.pyro,
    weapon: Weapon.bow
  },
  sayu: {
    id: "sayu",
    name: "早柚",
    prefix: "忍里之貉",
    star: 4,
    event_exclusive: false,
    intro: "早柚——隶属于秘密组织「终末番」的特别忍者，对睡眠和长高有着异乎常人的追求。掌握一切可用于逃跑、隐蔽的忍术，以此为自己创造偷懒睡觉的机会。如此神奇的手段，或许会有意想不到的用途。",
    city: City.Inazuma,
    ele: Element.anemo,
    weapon: Weapon.claymore
  },
  kamisato_ayaka: {
    id: "kamisato_ayaka",
    name: "神里绫华",
    prefix: "白鹭霜华",
    star: 5,
    event_exclusive: true,
    intro: "稻妻「社奉行」神里家的大小姐。端庄文雅，聪慧坚韧。待人接物真诚又得体，深受稻妻民众爱戴，贵有「白鹭公主」之名。",
    city: City.Inazuma,
    ele: Element.cryo,
    weapon: Weapon.sword
  },
  raiden_shogun: {
    id: "raiden_shogun",
    name: "雷电将军",
    prefix: "一心净土",
    star: 5,
    event_exclusive: true,
    intro: "雷电将军——此世最殊胜威怖的雷霆化身，稻妻幕府的最高主宰。挟威权之鸣雷，逐永恒之孤道的寂灭者。",
    city: City.Inazuma,
    ele: Element.electro,
    weapon: Weapon.polearm,
    cultivate: {
      weapons: [
        "稻光",
        "天空",
        "鱼叉",
        "西风"
      ],
      talent: [
        1,
        8,
        10
      ],
      artifacts: [
        "绝缘之旗印4件"
      ],
      main: {
        sands: "充能",
        goblet: "雷伤",
        circlet: "暴击%/暴伤"
      },
      sub: [
        "充能",
        "暴击",
        "暴伤",
        "攻击"
      ],
      tips: ""
    }
  },
  sangonomiya_kokomi: {
    id: "sangonomiya_kokomi",
    name: "珊瑚宫心海",
    prefix: "真珠之智",
    star: 5,
    event_exclusive: true,
    intro: "心海是海祇岛的「现人神巫女」，也就是现任海祇岛最高领袖。她通读兵法、擅长谋略，在军事上有着独特见解，也能将内政、外交等工作处理得井井有条。不过，这位人们眼中深不可测的领导者，似乎也有不为人知的一面…",
    city: City.Inazuma,
    ele: Element.hydro,
    weapon: Weapon.catalyst
  },
  kujou_sara: {
    id: "kujou_sara",
    name: "九条裟罗",
    prefix: "黑羽鸣镝",
    star: 4,
    event_exclusive: false,
    intro: "天领奉行的将领。行如风，言如誓，是位魄力过人的女性。她有着「神的笃信者」之名，将全部忠心都奉献给了雷电将军。将军所追求的「永恒」，也是她愿意为之而战的信念。",
    city: City.Inazuma,
    ele: Element.electro,
    weapon: Weapon.bow,
    cultivate: {
      weapons: [
        "天空之翼",
        "祭礼弓",
        "绝弦"
      ],
      talent: [
        1,
        8,
        8
      ],
      artifacts: [
        "宗室4件",
        "绝缘之旗印4件"
      ],
      main: {
        sands: "充能",
        goblet: "雷伤",
        circlet: "暴击%/暴伤"
      },
      sub: [
        "暴击",
        "暴伤",
        "攻击",
        "充能"
      ],
      tips: ""
    }
  },
  aloy: {
    id: "aloy",
    name: "埃洛伊",
    prefix: "异界的救世主",
    star: 5,
    event_exclusive: true,
    intro: "来自诺拉的机敏猎手。随时能为正当之事挽弓放箭。",
    city: "Nora",
    ele: Element.cryo,
    weapon: Weapon.bow
  },
  thoma: {
    id: "thoma",
    name: "托马",
    prefix: "渡来介者",
    star: 4,
    event_exclusive: false,
    intro: "社奉行神里家的家政官，同时也是活跃在稻妻的「地头蛇」。为人友善又富有亲和力，不论身处何处都能轻易融入人群。乍看似乎是个非常随性的人，实际上却很有责任感。无论对待工作或人际都有着格外认真的一面。",
    city: City.Inazuma,
    ele: Element.pyro,
    weapon: Weapon.polearm,
    cultivate: {
      weapons: "",
      talent: "",
      artifacts: [
        "千岩固牢2件 + 绝缘之旗印2件"
      ],
      main: {
        sands: "生命值%/充能效率",
        goblet: "生命值%/充能效率",
        circlet: "生命值"
      },
      sub: [
        "充能效率",
        "百分比生命值"
      ],
      tips: "如果选择生命值武器，那么时之沙主属性选择充能效率；如果选择充能武器，那么时之沙主属性选择生命值。"
    }
  },
  arataki_itto: {
    id: "arataki_itto",
    name: "荒泷一斗",
    prefix: "花坂豪快",
    star: 5,
    event_exclusive: true,
    intro: "鬼族后裔，性格豪爽热血的快意男儿。如风一般迅猛，也如雷一般夺目。",
    city: City.Inazuma,
    ele: Element.geo,
    weapon: Weapon.claymore,
    cultivate: {
      weapons: "",
      talent: "",
      artifacts: [
        "华冠梦醒形骸记4件"
      ],
      main: {
        sands: "防御",
        goblet: "岩伤",
        circlet: "暴击%/暴伤"
      },
      sub: [
        "暴击",
        "暴伤",
        "防御",
        "攻击"
      ],
      tips: ""
    }
  },
  gorou: {
    id: "gorou",
    name: "五郎",
    prefix: "戎犬锵锵",
    star: 4,
    event_exclusive: false,
    intro: "海祇军大将。身具领兵者威严的同时，又无高位者的倨傲。 无论何时何地都深受部下信赖，能让人毫无负担地寄托后背与心灵。",
    city: City.Inazuma,
    ele: Element.geo,
    weapon: Weapon.bow
  },
  shenhe: {
    id: "shenhe",
    name: "申鹤",
    prefix: "孤辰茕怀",
    star: 5,
    event_exclusive: true,
    intro: "虽为人类之身，却是仙家弟子。过去曾生活在远离璃月港的山野之间，以红绳缚魂，修身养性。气质淡雅如仙人，身上似乎藏有某些秘密。",
    city: City.Liyue,
    ele: Element.cryo,
    weapon: Weapon.polearm
  },
  yun_jin: {
    id: "yun_jin",
    name: "云堇",
    prefix: "红毹婵娟",
    star: 4,
    event_exclusive: false,
    intro: "「云翰社」现任当家，集剧作与演唱能力于一身的璃月戏曲名角。风格自成一派，雅致柔美，恰如其人。",
    city: City.Liyue,
    ele: Element.geo,
    weapon: Weapon.polearm,
    cultivate: {
      weapons: "决斗、西风、喜多院",
      talent: "1-8-8",
      artifacts: [
        "华冠梦醒形骸记4件"
      ],
      main: {
        sands: "充能",
        goblet: "防御",
        circlet: "防御"
      },
      sub: [
        "防御",
        "充能"
      ],
      tips: "建议充能不低于220%"
    }
  },
  yae_miko: {
    id: "yae_miko",
    name: "八重神子",
    prefix: "浮世笑百姿",
    star: 5,
    event_exclusive: true,
    intro: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。",
    city: City.Inazuma,
    ele: Element.electro,
    weapon: Weapon.catalyst
  },
  kamisato_ayato: {
    id: "kamisato_ayato",
    name: "神里凌人",
    prefix: "磐祭叶守",
    star: 5,
    event_exclusive: true,
    intro: "社奉行神里家现任家主。总有办法以周全的手段实现自身目的。不过，鲜少有人知道他如今最在意的「目的」是什么。",
    city: City.Inazuma,
    ele: Element.hydro,
    weapon: Weapon.sword
  },
  yelan: {
    id: "yelan",
    name: "夜兰",
    prefix: "兰生幽谷",
    star: 5,
    event_exclusive: true,
    intro: "自称供职于总务司的神秘人士，却又是总务司名录里的「不存在之人」。神出鬼没，行踪飘忽，变幻无常，这些都是她的标志。",
    city: City.Liyue,
    ele: Element.hydro,
    weapon: Weapon.bow
  },
  kuki_shinobu: {
    id: "kuki_shinobu",
    name: "久岐忍",
    prefix: "烦恼刈除",
    star: 4,
    event_exclusive: false,
    intro: "「荒泷派」的二把手。脸上戴着一只造型别致的面铠，不苟言笑。很少有人知道，为什么这种级别的人才会跑去混街头帮派。更没有人知道，她面铠下藏着怎样的真容。至少大家表面上都这么说。虽然可能，知情人…也没那么少。",
    city: City.Inazuma,
    ele: Element.electro,
    weapon: Weapon.sword
  },
  shikanoin_heizou: {
    id: "shikanoin_heizou",
    name: "鹿野院平藏",
    prefix: "心朝乂安",
    star: 4,
    event_exclusive: false,
    intro: "天领奉行的天才少年侦探，直觉敏锐，心思巧妙。无论面对何种悬案，都能用出人意料的方式揭开真相。",
    city: City.Inazuma,
    ele: Element.anemo,
    weapon: Weapon.sword
  },
  dori: {
    id: "dori",
    name: "多莉",
    prefix: "梦园藏金",
    star: 4,
    event_exclusive: false,
    intro: "多莉是活跃在须弥的百货商人，最喜欢亮闪闪的摩拉。能靠着精湛话术将手里那些许多奇特又神秘的道具卖出高价。",
    city: City.Sumeru,
    ele: Element.electro,
    weapon: Weapon.sword
  },
  collei: {
    id: "collei",
    name: "柯莱",
    prefix: "萃念初蘖",
    star: 4,
    event_exclusive: false,
    intro: "见习巡林员，师从提纳里。学术方面较同龄人起步稍晚，目前正在努力补习各种知识。她将性格的另一面深深掩藏在阳光善良的表象之下。",
    city: City.Sumeru,
    ele: Element.dendro,
    weapon: Weapon.bow
  },
  tighnari: {
    id: "tighnari",
    name: "提纳里",
    prefix: "浅蔚轻行",
    star: 5,
    event_exclusive: true,
    intro: "道成林的巡林官，毕业于阿弥利多学院的植物学学者。每天都过着巡查雨林、保护生态、教训笨蛋的充实生活。",
    city: City.Sumeru,
    ele: Element.dendro,
    weapon: Weapon.bow
  },
  cyno: {
    id: "cyno",
    name: "赛诺",
    prefix: "缄秘的裁遣",
    star: 5,
    event_exclusive: true,
    intro: "教令院的大风纪官，所有风纪官们的首领。拥有的独特幽默感令人印象深刻。",
    city: City.Sumeru,
    ele: Element.electro,
    weapon: Weapon.polearm
  },
  nilou: {
    id: "nilou",
    name: "妮露",
    prefix: "莲光落舞筵",
    star: 5,
    event_exclusive: true,
    intro: "「祖拜尔剧场」的明星演员，舞姿娉婷，如睡莲初绽，一尘不染。但她绝非高傲清冷之人，即便只是匆匆的旅者，也会对她纯洁质朴的笑容过目不忘。",
    city: City.Sumeru,
    ele: Element.hydro,
    weapon: Weapon.catalyst
  },
  candace: {
    id: "candace",
    name: "坎蒂丝",
    prefix: "浮金的誓愿",
    star: 4,
    event_exclusive: false,
    intro: "阿如村的守护者，为人温柔和善。在她的守护下，几乎没人能够危害阿如村。",
    city: City.Sumeru,
    ele: Element.hydro,
    weapon: Weapon.polearm
  },
  nahida: {
    id: "nahida",
    name: "纳西妲",
    prefix: "白草净华",
    star: 5,
    event_exclusive: true,
    intro: "「小吉祥草王」深居于净善宫内，向来不受重视，也很少被人提及。她身负重任，哪怕目睹漆黑，经历孤独，也不曾停下脚步。",
    city: City.Sumeru,
    ele: Element.dendro,
    weapon: Weapon.catalyst
  },
  layla: {
    id: "layla",
    name: "莱依拉",
    prefix: "绮思晚星",
    star: 4,
    event_exclusive: false,
    intro: "梨多梵谛学院的学生，为学业愁黑了眼眶，总是一副睡眠不足的样子。但无论课业多重，她总能拿出最精彩的推演，叫人不得不怀疑，她是否连做梦都在写论文？",
    city: City.Sumeru,
    ele: Element.cryo,
    weapon: Weapon.catalyst
  },
  faruzan: {
    id: "faruzan",
    name: "珐露珊",
    prefix: "机逐封秘",
    star: 4,
    event_exclusive: false,
    intro: "来自「一百年前」的教令院杰出学者，古典机关术学科奠基人之一。虽然身在知论派，却以机关造诣闻名须弥…尽管这些荣誉，都已先于她本人被岁月遗忘。",
    city: City.Sumeru,
    ele: Element.anemo,
    weapon: Weapon.catalyst
  },
  wanderer: {
    id: "wanderer",
    name: "流浪者",
    prefix: "久世浮倾",
    star: 5,
    event_exclusive: true,
    intro: "若有心者方为人，他不可称之为人。若无心者亦有悲喜苦乐，他便是最像人的人偶。",
    city: City.Inazuma,
    ele: Element.anemo,
    weapon: Weapon.catalyst
  },
  yaoyao: {
    id: "yaoyao",
    name: "瑶瑶",
    prefix: "仙蕊玲珑·",
    star: 4,
    event_exclusive: true,
    intro: "年纪幼小的仙家弟子，个性真诚慷慨，习惯于照顾身边所有人。如今正跟随居住在璃月港的师父修行，时常往返于山岭与城市之间。虽然不曾明说，但比起山中洞天，她还是更爱人间的喧嚣市集。",
    city: City.Liyue,
    ele: Element.dendro,
    weapon: Weapon.polearm
  },
  alhaitham: {
    id: "alhaitham",
    name: "艾尔海森",
    prefix: "诲韬诤言",
    star: 5,
    event_exclusive: true,
    intro: "须弥教令院现任书记官，有过人的智慧与才能。生活得自由自在，一般人基本找不到他。",
    city: City.Inazuma,
    ele: Element.dendro,
    weapon: Weapon.sword
  },
  kaveh: {
    id: "kaveh",
    name: "卡维",
    prefix: "",
    star: 5,
    event_exclusive: true,
    intro: "",
    city: City.Inazuma,
    ele: Element.dendro,
    weapon: Weapon.sword
  },
  dehya: {
    id: "dehya",
    name: "迪希雅",
    prefix: "炽鬃之狮",
    star: 5,
    event_exclusive: true,
    intro: "",
    city: City.Inazuma,
    ele: Element.pyro,
    weapon: Weapon.claymore
  },
}
