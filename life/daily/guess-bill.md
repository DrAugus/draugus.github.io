# 猜价

:::danger 今天是谁来挑选餐厅呢？

<input type="radio" id="AUG" value="AUG" v-model="picked" />
<label for="AUG">AUG</label>

<input type="radio" id="JOY" value="JOY" v-model="picked" />
<label for="JOY">JOY</label>

:::

价格大侦探，由 **{{ personChose }}** 挑选餐厅，**{{ personGuess }}** 来猜价

|猜价与实际价格误差|{{ personGuess }} 支付给 {{ personChose }} 的金额|
|:---:|:---:|
|误差 **5%** 及以内|本餐由 {{ personChose }} 买单|
|误差 **10%** 及以内|{{ personGuess }} 支付实际价格的 **50%**|
|误差 **20%** 及以内|{{ personGuess }} 猜多少支付多少|
|误差 **30%** 及以内|{{ personGuess }} 支付实际价格的 **150%**|
|误差 **30%** 以上|{{ personGuess }} 支付实际价格的 **200%**|

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';

type Players = "AUG" | "JOY"
const getAnother = (player: Players) => player === "AUG" ? "JOY": "AUG";

const defaultGuess = "JOY";
const defaultChose = getAnother(defaultGuess);

const picked = ref<Players>("");
const personGuess = ref(defaultGuess);
const personChose = ref(defaultChose);

// 使用 watch 监听 picked 的变化
watch(picked, (newChoose) => {
    if (newChoose) {
        personChose.value = newChoose;
        personGuess.value = getAnother(newChoose);
    }
});

// 如果需要在组件挂载时执行某些操作，可以使用 onMounted
onMounted(() => {
    // console.log("组件已挂载");
    picked.value = defaultChose;

    personGuess.value = defaultGuess;
    personChose.value = defaultChose;
});

</script>
