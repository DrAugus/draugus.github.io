<template>

    <div v-for="(v, k, i) in movie">
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
        };
    },
    methods: {

    }
};
</script>
  
<style scoped>
.mcu-date{
    font-style: italic;
}
</style>
  