<template>
  <WishInfoPic :WISH=WISH :CHARACTER=CHARACTER :WISH_TEXT=GameName.HSR />
</template>

<script setup>

// data
import { WISH } from "./wish";
import { CHARACTER } from "./characters";
// utils
import WishInfoPic from "../WishInfoPic.vue";
import { GameName } from "../utils";

</script>
