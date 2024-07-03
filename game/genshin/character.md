---
aside: false
---
# 角色

<Characters :Character=CHARACTER :City=City :Element=Element :Weapon=Weapon :Game=GameName.Genshin />

<script setup>
import { City, Element, Weapon } from "../.vitepress/components/genshin/utils";
import { CHARACTER } from "../.vitepress/components/genshin/characters";
import Characters from "../.vitepress/components/Characters.vue";
import { GameName } from "../.vitepress/components/utils";
</script>
