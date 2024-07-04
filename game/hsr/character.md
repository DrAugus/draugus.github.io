---
aside: false
---
# 角色

<Characters :CHARACTER=CHARACTER :CITY=City :ELEMENT=Element :WEAPON=Weapon :GAME_NAME=GameName.HSR />

<script setup>
import { City, Element, Weapon } from "../.vitepress/components/hsr/utils";
import { CHARACTER } from "../.vitepress/components/hsr/characters";
import Characters from "../.vitepress/components/Characters.vue";
import { GameName } from "../.vitepress/components/utils";
</script>
