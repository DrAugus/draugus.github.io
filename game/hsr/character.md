---
aside: false
---
# 角色

<Characters :Character=CHARACTER :City=City :Element=Element :Weapon=Weapon :Game=GameName.HSR />

<script setup>
import { City, Element, Weapon } from "../.vitepress/components/hsr/utils";
import { CHARACTER } from "../.vitepress/components/hsr/characters";
import Characters from "../.vitepress/components/Characters.vue";
import { GameName } from "../.vitepress/components/utils";
</script>
