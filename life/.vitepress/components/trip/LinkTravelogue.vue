<template>
    <div v-if="curData.length">
        <a :href="linkTravelogue(curData[0].date)">
            <Badge type="tip" :text="`游记↗`" />
        </a>
    </div>

</template>

<script setup lang="ts">
import { getCityLink, linkTravelogue } from '../../data/trip/travelogue';

const props = defineProps<{
    city: string,
}>();

const curData = getCityLink(props.city);
</script>