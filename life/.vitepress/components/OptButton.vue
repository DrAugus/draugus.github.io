
<template>
    <div v-if="text" class="bt-info">
        <div class="opt-bt">
            <a v-if="link" class="opt-bt-link" :href="link">
                <span class="bt-head">{{ head }}</span>
                <span class="bt-info">{{ text }}</span>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    text?: string
    link?: string
    head?: string
}>()
</script>

<style scoped>


@media (min-width: 640px) {
    .bt-info {
        display: flex;
    }
}


@media (min-width: 640px) {
    .opt-bt {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        width: 50%;
    }
}

.opt-bt-link {
    display: block;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    padding: 11px 16px 13px;
    width: 100%;
    height: 100%;
    transition: border-color 0.25s;
}

.opt-bt-link:hover {
    border-color: var(--vp-c-brand);
}

.bt-head {
    display: block;
    line-height: 20px;
    font-size: 12px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.bt-info {
    display: block;
    line-height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-brand);
    transition: color 0.25s;
}
</style>