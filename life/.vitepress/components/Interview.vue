<template>
    <div class="card-info" shadow="hover" v-for="(q, index) in INTERVIEW" :key="index">
        <details class="details custom-block">
            <summary> <span>{{ q.question }}</span></summary>
            <p> <span>{{ q.solution }}</span></p>
        </details>
    </div>
</template>

<script setup lang="ts">
import { INTERVIEW } from '../data/code/interview';
</script>

<style scoped></style>