<template>
    <UpTable :WISH=WISH :CHARACTER=CHARACTER :WISH_TEXT=GameName.HSR />
</template>
  
<script setup>

// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// utils
import UpTable from "../UpTable.vue";
import { GameName } from "../utils";

</script>
  