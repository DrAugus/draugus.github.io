<template>
    <div class="event-info">
        <div>
            <GenshinWish />
        </div>
        <div>
            <HsrWish />
        </div>
    </div>
</template>

<script setup>
import GenshinWish from "./genshin/WishRecent.vue";
import HsrWish from "./hsr/WishRecent.vue";
</script>

<style scoped>
.event-info {
    display: flex;
    flex-wrap: wrap;
}

.event-info>div {
    width: 50%;
}

@media screen and (max-width: 767px) {
    .event-info {
        flex-direction: column;
    }
}

.event-info {
    margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 48px;
}

@media (min-width: 640px) {
    .event-info {
        padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 48px 64px;
    }
}

@media (min-width: 960px) {
    .event-info {
        padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 64px 64px;
    }
}
</style>