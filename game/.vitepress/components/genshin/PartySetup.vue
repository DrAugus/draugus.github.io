<template>

  <div v-for="(party_info, index) in json">

    <h3>{{ party_info.name }}</h3>

    <p>
      <span v-for="(party_item, index) in party_info.party">
        {{ party_item }}[{{ party_info.constellation[index] }}]
      </span>
      <br>
      <span v-if="party_info.weapon">
        武器推荐：{{ party_info.weapon }}<br></span>
      <span v-if="party_info.advantage">
        队伍优势：{{ party_info.advantage }}<br></span>
      <span v-if="party_info.disadvantage">
        队伍缺陷：<u>{{ party_info.disadvantage }}</u></span>
    </p>

  </div>

</template>

<script setup lang="ts">
import json from "../../data/genshin/party-setup.json";

</script>

<style scoped></style>