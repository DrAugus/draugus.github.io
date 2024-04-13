<template>

  <div class="dynasty-info" v-for="(value, key, index) in history">
    <TitleFormat :title="value.name" :number="2"></TitleFormat>
    <div class="dynasty-date">
      {{ value.start }}&nbsp;-&nbsp;{{ value.end }}
    </div>
    <div class="dynasty-excerpt">
      <p v-for="(item, index) in value.info">
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import TitleFormat from "../TitleFormat.vue";
import data from '../../data/history_china.json'
const history = data
</script>

<style scoped>
.dynasty-title {
  display: inline-block;
  font-size: 36px;
  margin-top: 0.5em;
  color: #404040
}

.dynasty-excerpt {
  font-style: italic;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.7rem
}

.dynasty-date {
  font-family: 'Lora', 'Times New Roman', serif;
  font-style: italic;
  font-weight: 300;
  font-size: 20px
}
</style>