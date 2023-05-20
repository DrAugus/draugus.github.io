
# 快速查询升级所需经验值

<LevelExp :EXP="EXP" :dailyTask="DAILY_TASK" :renew="RENEW" :pay2win="PAY2WIN" :expChange="EXP_CHANGE" :consumeName="consumeName" />

<script setup>
import {EXP,RENEW,DAILY_TASK,PAY2WIN,EXP_CHANGE,consumeName} from "../.vitepress/components/hsr/exp.ts";

import LevelExp from "../.vitepress/components/LevelExp.vue";
</script>
