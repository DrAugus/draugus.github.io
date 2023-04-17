<template>
    <!-- <p>{{ odJson }}</p> -->

    <ul>
        <li v-for="(v, i) in similarWords">
            <span v-for="(vv, ii) in v">
                <a :href="'https://wordy-beta.vercel.app/?word=' + vv" target="_blank">{{ vv }}</a>
                {{ ' ' }}
            </span>
        </li>
    </ul>
</template>

<script>
import { defineComponent } from 'vue'
import similarWords from "../data/language/similar.json";

const formatJson = (json) => {
    if (!json.results) {
        console.error("err result")
        return
    }
    let formatRes = []
    let formatLexicalEntries = {
        category: "", // noun verb
        entries: [], //
    }
    let formatEntries = {
        pronounce: {}, // pron
        senses: [] // words and sense
    }
    let formatPronounce = {
        be: "",
        ae: "",
    }
    let formatSense = {
        example: [],
        trans: "",
    }
    let formatExample = {
        text: "",
        trans: "",
    }
    let results = json.results

    let lexicalEntries = results.lexicalEntries
    for (let entry of lexicalEntries) {
        formatLexicalEntries.category = entry.lexicalCategory.id
        formatLexicalEntries.entries = []
        for (let ee of entry.entries) {
            formatPronounce.be = ee.pronunciations[0].phoneticSpelling
            formatPronounce.ae = ee.pronunciations[1].phoneticSpelling
            formatEntries.pronounce = formatPronounce
            formatEntries.senses = []
            for (let ss of ee.senses) {
                formatSense.trans = ss.translations.text

                formatSense.example = []
                for (let eg of ss.examples) {

                    formatExample.text = eg.text
                    formatExample.trans = eg.translations.text
                    formatSense.example.push(formatExample)
                }
                formatEntries.senses.push(formatSense)

            }
            formatLexicalEntries.entries.push(formatEntries)
        }
    }

    let id = json.id;
    // console.log("formatLexicalEntries", formatLexicalEntries)
    return formatLexicalEntries
}

export default defineComponent({
    name: "Similar",
    props: {},
    data() {
        return {
            similarWords,
            mountains: [],
        }
    },
    // https://nuxt.com/docs/getting-started/data-fetching#using-async-setup
    // async setup() {
    //     const [{ data: odJson }, { data: repos }] = await Promise.all([
    //         useFetch('https://od-api.oxforddictionaries.com/api/v2/translations/en/zh/household', {
    //             query: {
    //                 strictMatch: 'false'
    //             },
    //             headers: {
    //                 Accept: "application/json",
    //                 app_id: process.env.OXFORD_APP_ID || "",
    //                 app_key: process.env.OXFORD_APP_KEY || "",
    //             },

    //         }),
    //         useFetch(`https://api.github.com/orgs/nuxt/repos`)
    //     ])
    //     return {
    //         odJson,
    //         repos
    //     }
    // },
})

</script>

<style scoped></style>
