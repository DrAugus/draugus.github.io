---
aside: false
---
# 角色

<Characters :CHARACTER=CHARACTER :CITY=City :ELEMENT=Element :WEAPON=Weapon :GAME_NAME=GameName.Genshin />

<script setup>
import { City, Element, Weapon } from "../.vitepress/components/genshin/utils";
import { CHARACTER } from "../.vitepress/components/genshin/characters";
import Characters from "../.vitepress/components/Characters.vue";
import { GameName } from "../.vitepress/components/utils";
</script>
