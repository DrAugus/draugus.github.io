<template>
  {{ deadline }}
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { getDeadline } from './utils';
import dayjs from "dayjs";
import "dayjs/locale/zh";

const props = defineProps<{
  startTime?: string, // 什么也没传就是 today
  endTime?: string,
}>();

let deadline = ref('');

let timer1: number = -1;

onMounted(async () => {
  timer1 = setInterval(() => {
    deadline.value = getDeadline(dayjs(props.startTime), dayjs(props.endTime));
  }, 1000);
});

onUnmounted(() => {
  if (timer1) clearInterval(timer1);
});
</script>


