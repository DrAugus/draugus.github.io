<template>

  <h1>{{ ww1.name }}</h1>

  <div class="event-info" v-for="(value, key, index) in ww1.info">
    <div class="event-title">
      {{ value.name }}
    </div>
    <div class="event-date">
      {{ value.date }}
    </div>
    <div class="event-excerpt">
      {{ value.intro }}
    </div>
  </div>

  <h1><a href="{{falklands_war.zh.url}}">{{ falklands_war.zh.name }}</a></h1>

  <p v-for="(item, index) in falklands_war.zh.info">
    {{ item }}
  </p>

  <img :src="falklands_war.zh.img"/>

</template>

<script setup lang="ts">
import data from '../data/war.json'

const ww1 = data.world_war_1;
const falklands_war = data.falklands_war;

</script>

<style scoped>
.event-title {
  display: inline-block;
  font-size: 1.6rem;
  line-height: 1.6rem;
  margin-top: 0.5em;
  color: #404040
}

.event-excerpt {
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.event-date {
  font-family: 'Lora', 'Times New Roman', serif;
  font-style: italic;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1.4rem;
}

@media only screen and (max-width: 600px) {
  .event-title {
    font-size: 0.6rem;
    line-height: 0.6rem;
  }

  .event-excerpt {
    font-size: 0.6rem;
    line-height: 0.6rem;
  }

  .event-date {
    font-size: 0.6rem;
    line-height: 0.6rem;
  }
}
</style>
