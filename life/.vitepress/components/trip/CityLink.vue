<template>

    <details v-if="links.length" class="details custom-block">
        <summary> {{ props.city }} 其他游记</summary>
        <div v-if="links.length > 1">
            <ul>
                <li v-for="(v, i) in links">
                    <a :href="linkTravelogue(v.date)"> {{ v.title }}</a>
                    (<span>{{ modifyDate1(v.date) }}</span>)
                </li>
            </ul>
        </div>
        <div v-else>
            <a :href="linkTravelogue(links[0].date)"> {{ links[0].title }}</a>
            (<span>{{ modifyDate1(links[0].date) }}</span>)
        </div>

    </details>

</template>

<script setup lang="ts">
import { getCityLink, linkTravelogue } from '../../data/trip/travelogue';
import { modifyDate1 } from '../../utils';

const props = defineProps<{
    city: string;
    date?: Date;
}>();

const links = getCityLink(props.city, props.date);

</script>