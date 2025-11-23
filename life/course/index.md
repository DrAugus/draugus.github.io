# 课程笔记

> 坚持学习，记录学习笔记。

数学学习：[Math is fun](https://www.mathsisfun.com/)  
[香蕉空间](https://www.bananaspace.org/)

学科分类参考[普通高等学校本科专业目录（2024年）](http://www.moe.gov.cn/srcsite/A08/moe_1034/s4930/202403/W020240319305498791768.pdf)

:::warning 学科分类
哲学(Philosophy)、经济学(Economics)、法学(Law)、教育学(Education)、文学(Literature)、历史学(History)、理学(Science)、工学(Engineering)、农学(Agronomy)、医学(Medicine)、军事学(Military Science)、管理学(Management)、艺术学(Art)
:::

课程列表收录：[QSCTech/zju-icicles: 浙江大学课程攻略共享计划](https://github.com/QSCTech/zju-icicles)

## 最近学什么？

:::info 本站近期更新学习笔记

- [离散数学](/course/discrete-math)
- [微积分](/course/calculus)
- [FDBus](/code/framework/fdbus)
- [Abseil](/code/libs/abseil)
:::

- 数学学习：[Math is fun](https://www.mathsisfun.com/)
- [线性代数的本质 3blue1brown](https://www.bilibili.com/video/BV1ys411472E/)
- [微积分的本质](https://www.bilibili.com/video/BV1qW411N7FU/) by 3blue1brown
- [learn OpenGL](https://learnopengl.com/)  
- learn OpenGL 英文网站[中文翻译版](https://learnopengl-cn.github.io/)

<StyledEntryCollection :title="'培养方案'" :items=COURSE_STRUCTURE />
<StyledEntryCollection :title="'科目'" :items=COURSES />
<StyledEntryCollection :title="'散记'" :items=COURSE_NOTES />

<script setup>
import { COURSES, COURSE_NOTES, COURSE_STRUCTURE } from "../.vitepress/data/course.ts";
import StyledEntryCollection from "../.vitepress/components/StyledEntryCollection.vue";

</script>
