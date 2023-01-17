<template>
    <HomeFeature :msg="msg"></HomeFeature>
</template>

<script>
import HomeFeature from '../HomeFeature.vue';
import { defineComponent } from 'vue'

let msg = [
    ["当前祈愿1", "1"],
    ["当前祈愿2", "1"],
    ["未来1", "1"],
    ["未来2", "1"],
    ["复刻期待", "1"],
    ["活动1", "1"],
    ["活动2", "1"],
    ["活动3", "1"],
    ["活动4", "1"],
]

export default defineComponent({
    name: "Events",
    components: {
        HomeFeature,
    },
    data() {
        return {
            msg,
        }
    },
})
</script> 
