<template>
    <UpTimes :WISH=WISH :CHARACTER=CHARACTER :GAME_NAME=GameName.HSR />
</template>
  
<script setup>

// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// utils
import { GameName } from "../utils";

import UpTimes from "../UpTimes.vue";

</script>
  