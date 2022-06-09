<template>


  <ul>
    <li v-for="(party_info,index) in json">

      <span>{{ party_info.name }}</span>

      <p>
          <span v-for="(party_item,index) in party_info.party">
            {{ party_item }}[{{ party_info.constellation[index] }}]
          </span>
      </p>

      <p v-if="party_info.weapon">武器推荐：{{ party_info.weapon }}</p>
      <p v-if="party_info.advantage">队伍优势：{{ party_info.advantage }}</p>
      <p v-if="party_info.disadvantage">队伍缺陷：<u>{{ party_info.disadvantage }}</u></p>

    </li>

  </ul>

</template>

<script>
import json from "../../data/genshin/party-setup.json";

export default {
  name: "PartySetup",
  data() {
    return {
      json,
    };
  }
};
</script>

<style scoped>

</style>