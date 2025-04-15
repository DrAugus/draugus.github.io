<template>
    <div :class="getBg(index)" class="custom-block" v-for="(question, index) in QUESTIONS" :key="index">
        <p class="custom-block-title">
            {{ modifyDate1(question.date) }}
        </p>
        <p>
            {{ question.question }}
        </p>
    </div>

</template>

<script setup lang="ts">
import { QUESTIONS } from '../data/question';
import { modifyDate1 } from '../utils';

const getBg = (index: number) => {
    return index % 2 ? 'tip' : 'warning';
}
</script>