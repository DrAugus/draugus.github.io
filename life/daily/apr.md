# 年利率

**年利率（Annual Percentage Rate，APR）**：就是**单利**，比如银行说存（贷）款利率10%，你准备存（贷）100，那么一年后本息为110。  
**有效年利率（Effective Annual Rate，EAR）**：按照给定的计息期利率和每年复利次数计算利息时，能够产生相同结果的每年复利一次的年利率。**翻译过来就是复利**，有些银行的金融产品**计息周期是小于一年**的，比如你在年初存（贷）100元，APR10%，半年结一次息，那么6月本息为105，12月本息为110.25，实际利率大于10%，因为**从第二期计算时不但计算了本金的利息，还计算了累计利息的利息。当计息的复利周期小于一年时，EAR会大于APR，等于一年时，EAR=APR**。（[金融术语解析02-APR and EAR - 经融学人的文章 - 知乎](https://zhuanlan.zhihu.com/p/145178003)）

<APR />

<script setup>
import APR from '../.vitepress/components/APR.vue'
</script>
