<template>
    <div class="VPFeatures VPHomeFeatures">
        <div class="container">
            <div class="items">
                <!-- v 0 head v 1 body -->
                <span class="VPLink VPFeature" v-for="(v, i) in msg">
                    <article class="box">
                        <h2 class="title">{{ v[0] }}</h2>
                        <p class="details" v-for="(vv, ii) in v[1]">{{ vv }}</p>

                    </article>
                </span>
            </div>
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
    data() {
        return {
            // info: this.msg,
        }
    },
})
</script> 
