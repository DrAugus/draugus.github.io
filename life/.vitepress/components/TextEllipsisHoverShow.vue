<template>
    <div @mouseover="showTooltip = true" @mouseleave="hideTooltip" @touchstart="showTooltip = true"
        @touchend="hideTooltip" ref="textContainer">
        <span v-if="truncatedText !== fullText">{{ truncatedText }}</span>
        <span v-else>{{ fullText }}</span>
        <transition name="tooltip-fade">
            <div v-if="showTooltip" class="tooltip" :style="{ left: tooltipLeft + 'px', top: tooltipTop + 'px' }">
                {{ fullText }}
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
    text: string,
    maxLen?: number,
}>();

let _maxLen = props.maxLen || 10;

const fullText = ref(props.text);
const truncatedText = ref(props.text.length > _maxLen ? props.text.slice(0, _maxLen) + '...' : props.text);
const showTooltip = ref(false);
const tooltipLeft = ref(0);
const tooltipTop = ref(0);
const textContainer = ref<HTMLElement | null>(null);

const hideTooltip = () => {
    showTooltip.value = false;
};

const updateTooltipPosition = () => {
    if (textContainer.value) {
        const rect = textContainer.value.getBoundingClientRect();
        tooltipLeft.value = rect.left + window.scrollX + rect.width / 2 - 50; // Adjust 50 for tooltip width / 2
        tooltipTop.value = rect.bottom + window.scrollY + 10; // Adjust 10 for some spacing
    }
    tooltipLeft.value = 0
};

onMounted(() => {
    window.addEventListener('mousemove', updateTooltipPosition);
    window.addEventListener('resize', updateTooltipPosition);

    // Initial position update
    updateTooltipPosition();
});

onUnmounted(() => {
    window.removeEventListener('mousemove', updateTooltipPosition);
    window.removeEventListener('resize', updateTooltipPosition);
});
</script>

<style scoped>
.tooltip {
    position: absolute;
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
    font-size: 14px;
    z-index: 1000;
}

.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
    transition: opacity 0.3s;
}

.tooltip-fade-enter,
.tooltip-fade-leave-to {
    opacity: 0;
}
</style>