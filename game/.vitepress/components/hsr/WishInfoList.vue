<template>
  <WishInfo :WISH=WISH :CHARACTER=CHARACTER :GAME_NAME=GameName.HSR :DISPLAY=WishInfoType.List />
</template>

<script setup>

// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// utils
import WishInfo from "../WishInfo.vue";
import { GameName, WishInfoType } from "../utils";

</script>
