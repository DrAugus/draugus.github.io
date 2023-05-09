<template>
    <VPHomeFeatures :features="info"></VPHomeFeatures>
</template>

<script>
import { VPHomeFeatures } from 'vitepress/theme'

export default {
    name: "HomeFeature",
    components: {
        VPHomeFeatures,
    },
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
            info: [],
        }
    },
    methods: {
        getMsg() {
            let dynamicFeatures = []
            for (let v of this.msg) {

                let subObj = {
                    title: '',
                    details: ''
                }
                subObj.title = v[0]


                for (let vv of v[1]) {
                    subObj.details += vv + '\n'
                }

                // subObj.details = v[1]
                dynamicFeatures.push(subObj)
            }
            // console.log(dynamicFeatures)
            this.info = dynamicFeatures
        }
    },
    mounted() {
        this.getMsg();
    },
}
</script> 
