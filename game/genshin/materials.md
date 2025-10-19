# 材料

## 特产材料

[参考 bili wiki](https://wiki.biligame.com/ys/%E8%A7%92%E8%89%B2%E7%AA%81%E7%A0%B4%E6%9D%90%E6%96%99%E4%B8%80%E8%A7%88)

三日刷新(部分商人售卖的部分商品可能为一个月刷新)  
<span style="color: #db39a0;">
    <Timer :endTime=calFutureDate(remains) />后刷新
</span>

:::tip 蒙德
蒙德城：『「花语」店主』芙萝拉  
风起地：『植物学家』克罗丽丝
:::

:::tip 璃月
璃月港：『「不卜庐」药师』阿桂 『「万有铺子」老板』博来(**每日刷新**) 『商人』长顺 『「解翠行」老板』石头 『「万民堂」老板』卯师傅  
望舒客栈：『「望舒客栈」老板』菲尔戈黛特  
轻策庄：『磨坊主』小白  
遗珑埠：『百货店主』丰泰
:::

:::tip 须弥
化城郭：『「大厨」』阿什帕齐  
须弥城大巴扎：『香料商人』朱特  
奥莫斯港：『商人』秋蔚 『店长』巴巴克  
恒那兰那（紫色天空状态）：商人『兰玛尼』
:::

:::tip 稻妻
离岛：『渔夫』小畑 『「楚瑜商行」分行长』秋月 『正在征集店名的店主』山城健太  
稻妻城：『「九十九物」店主』葵
:::

:::tip 枫丹
枫丹廷一层：欧仁妮『蔬果贩』(露泽咖啡厅西南方向)  
白淞镇：安特曼『鱼贩』
:::

:::tip 纳塔
悠悠集市：穆托莉娜『繁花之语』店主

:::

一周刷新：望泷村 商人清子

## 特产角色

<RscsUnique />

<script setup>
import { durationTodayMillisecond, calFutureDate, d2ms } from "../.vitepress/components/utils.ts";
import Timer from "../.vitepress/components/Timer.vue";
import RscsUnique from "../.vitepress/components/genshin/RscsUnique.vue";

const anchorTime = "2024-10-28 04:00:00 +8000";
const dur = durationTodayMillisecond(anchorTime); // 必定为负值
let modifiedDur = (dur < 0 ? -dur : dur )  % d2ms(3);
let remains = d2ms(3) - modifiedDur;

</script>
