<template>
    <UpTable :WISH=WISH :CHARACTER=CHARACTER :WISH_TEXT=gameNum />
</template>
  
<script setup>

// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// utils
import UpTable from "../UpTable.vue";

const gameNum = 1

</script>
  