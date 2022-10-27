<template>

    <p>
        <span @click="showLang(true, false)">中文</span> |
        <span @click="showLang(false, true)">English</span>
    </p>


    <div v-if="showZH" v-for="(v, k, i) in movie.zh">
        <h3> {{ v.title }} </h3>
        <p> 
            <span class="mcu-date"> {{ v.release_date }} </span>
            <br>
            {{ v.overview }} 
        </p>
    </div>

    <div v-if="showEN" v-for="(v, k, i) in movie.en">
        <h3> {{ v.title }} </h3>
        <p> 
            <span class="mcu-date"> {{ v.release_date }} </span>
            <br>
            {{ v.overview }} 
        </p>
    </div>

</template>
  
<script>
import mcu from "../data/marvel.json";

export default {
    name: "Marvel",
    data() {
        return {
            movie: mcu.moive,
            tv: mcu.tv,
            showZH: false,
            showEN: true,
        };
    },
    methods: {
        showLang(zh, en) {
            this.showZH = zh;
            this.showEN = en;
        },
    },
};
</script>
  
<style scoped>
.mcu-date{
    font-style: italic;
}
</style>
  