<template>
  <WishInfo :WISH=WISH :CHARACTER=CHARACTER :GAME_NAME=GameName.ZZZ :DISPLAY=WishInfoType.Table />
</template>

<script setup>

// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// utils
import WishInfo from "../WishInfo.vue";
import { GameName, WishInfoType } from "../utils";

</script>
