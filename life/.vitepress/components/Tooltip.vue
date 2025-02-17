<!-- Tooltip.vue -->
<template>
    <div class="tooltip-wrapper" @mouseover="showTooltip" @mouseleave="hideTooltip" @touchstart="showTooltipOnTouch"
        @touchend="hideTooltip">
        <slot></slot>
        <div v-if="visible" class="tooltip" :style="tooltipStyle">{{ content }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Props
const props = defineProps<{
    content: string;
    delay: number;
}>();

// Reactive state
const visible = ref(false);
const tooltipStyle = ref({});
let timer: ReturnType<typeof setTimeout> | null = null;

// Functions
const showTooltip = (event: MouseEvent | TouchEvent) => {
    clearTimeout(timer as number);
    visible.value = true;
    updateTooltipPosition(event as MouseEvent); // Assuming event is MouseEvent for simplicity

    console.log('showTooltip######', props.content);
};

const hideTooltip = () => {
    clearTimeout(timer as number);
    visible.value = false;
};

const showTooltipOnTouch = (event: TouchEvent) => {
    timer = setTimeout(() => {
        const touch = event.touches[0];
        const simulatedMouseEvent = new MouseEvent('mouseover', {
            bubbles: true,
            cancelable: true,
            view: window,
            screenX: touch.screenX,
            screenY: touch.screenY,
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        showTooltip(simulatedMouseEvent);
    }, props.delay);
};

const updateTooltipPosition = (event: MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    tooltipStyle.value = {
        left: `${event.pageX - window.scrollX + rect.left + 10}px`,
        top: `${event.pageY - window.scrollY + rect.top + 10}px`,
        display: 'block'
    };
};

// Cleanup
onUnmounted(() => {
    clearTimeout(timer as number);
});
</script>

<style scoped>
.tooltip-wrapper {
    position: relative;
    display: inline-block;
}

.tooltip {
    position: absolute;
    background-color: black;
    color: white;
    padding: 5px;
    border-radius: 3px;
    font-size: 12px;
    white-space: nowrap;
    z-index: 1000;
}
</style>