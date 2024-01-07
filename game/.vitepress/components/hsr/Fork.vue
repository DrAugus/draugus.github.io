<template>
  <Fork :WISH=WISH :CHARACTER=CHARACTER :WISH_TEXT=GameName.HSR />
</template>

<script setup>

// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// utils
import { GameName } from "../utils";

import Fork from "../Fork.vue";

</script>
