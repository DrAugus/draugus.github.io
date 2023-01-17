<template>
    <div class="features">
        <!-- v 0 head v 1 body -->
        <div class="feature" v-for="(v,i) in msg">
            <h2>{{ v[0] }}</h2>
            <p>{{ v[1] }}</p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "HomeFeature",
    props: {
        msg: {
            type: Array,
            required: true,
            default() { return [] }
        },
    },
    data(){
        return{
            msg: this.msg,
        }
    },
})
</script> 
