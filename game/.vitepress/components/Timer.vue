<template>
  <span :style="style">{{ deadline }}</span>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { getTimeLeft, getSecondDiff } from './utils';
import dayjs from "dayjs";
import "dayjs/locale/zh";

enum WarningLevel {
  None = -1,
  Lv1 = 0,
  Lv2,
}

const warningColor = ['#FF5733', '#30a1c5'];

const props = defineProps<{
  startTime?: string | Date, // 什么也没传就是 today
  endTime?: string | Date,
  dayWarningLv1?: number,
  dayWarningLv2?: number,
}>();

let deadline = ref('');
let style = ref({});
let ddlSecond = ref(0);

let checkLv = true;
if (props.dayWarningLv1 && props.dayWarningLv2 && props.dayWarningLv1 > props.dayWarningLv2) {
  checkLv = false;
}

const day2second = (days: number) => days * 24 * 60 * 60;

let timer1: number = -1;

onMounted(async () => {
  timer1 = setInterval(() => {
    deadline.value = getTimeLeft(dayjs(props.startTime), dayjs(props.endTime));

    if (checkLv) {
      ddlSecond.value = getSecondDiff(dayjs(props.startTime), dayjs(props.endTime));

      if (props.dayWarningLv2 && ddlSecond.value <= day2second(props.dayWarningLv2)) {
        style.value = {
          color: warningColor[WarningLevel.Lv2],
        };
      }
      if (props.dayWarningLv1 && ddlSecond.value <= day2second(props.dayWarningLv1)) {
        style.value = {
          color: warningColor[WarningLevel.Lv1],
        };
      }
    }
  }, 1000);


});

onUnmounted(() => {
  if (timer1) clearInterval(timer1);
});
</script>
