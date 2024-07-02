<template>
  <WishList :WISH=WISH :CHARACTER=CHARACTER :WISH_TEXT=GameName.Genshin />
</template>

<script setup>

// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// utils
import WishList from "../WishList.vue";
import { GameName } from "../utils";

</script>
