<template>
    <p>
        已消费<br>
        <span v-for="(v, k, i) in sum">
            <b>{{ k + ' ' }}</b>当前已消费<b>{{ ' ¥' + v }}</b>
        </span>
    </p>


    <p v-for="(v, i) in vTrip">
        <b>{{ v.name }}</b> <br>
        <span class="italic">{{ v.start + ' ~ ' + v.end }}</span><br>
        <span>总计<b>{{ v.sum }}</b>. </span> {{ ' 其中' + v.intro }}
    </p>

    <p>
        <span class="underline"><b>其他额外开支</b></span>
    </p>
    <ul>
        <li v-for="(v, i) in other">
            {{ v.name }}: {{ v.sum }}
        </li>
    </ul>

</template>
  
<script>

import cost from "../../data/trip/cost.json";

const other = cost.other
const trip = cost.trip
const vTrip = Object.values(trip)

let time = [];
let sum = {};
Object.values(trip).forEach((arr) => {
    let t = arr.start.split('/')[0]
    if (!sum[t]) sum[t] = 0
    sum[t] += parseInt(arr.sum)
    console.log(t)
    console.log(arr.sum)
    time.push(t)
});
other.forEach((arr) => {
    let t = arr.year
    sum[t] += parseInt(arr.sum)
    time.push(t)
});
time = [...new Set(time)]
console.log(time)
console.log(sum)


const getSum = () => {
    let sum = 0

}

export default {
    name: "Cost",
    components: {
    },
    data() {
        return {
            other,
            vTrip,
            sum,
        };
    },
    methods: {
    },
};

</script>
  
<style scoped>
.italic {
    font-style: italic;
}

.underline {
    text-decoration: underline;
}
</style>
  