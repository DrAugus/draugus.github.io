---
aside: false
---
# {{ getWishNameStr(GameName.Genshin) }}列表

<GenshinWishList />

<script setup lang="ts">
import GenshinWishList from "../.vitepress/components/genshin/WishList.vue";
import { GameName, getWishNameStr } from "../.vitepress/components/utils";
</script>
