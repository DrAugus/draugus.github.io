<template>
    <UpTable :WISH=WISH :CHARACTER=CHARACTER :WISH_TEXT=GameName.ZZZ />
</template>
  
<script setup>

// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// utils
import { GameName } from "../utils";

import UpTable from "../UpTable.vue";


</script>
  