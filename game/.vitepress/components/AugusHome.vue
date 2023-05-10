<template>
    <div class="container">
        <div class="section-a" :style="style">
            <div class="background"></div>
            <div class="title">{{ name }}</div>
            <div class="sub-title">{{ text }}</div>
            <div class="tagline" :style="{ color: textColor }">{{ tagline }}</div>
        </div>
        <div class="section-b">
            <!-- add other components here -->
            <slot></slot>
        </div>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
        };
    },
    props: {
        style: Object,
        name: '',
        text: '',
        tagline: '',
        textColor: ''
    },
    components: {
    },
};
</script>
  
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.section-a {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 200px;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    opacity: 0.5;
}

.title {
    font-size: 32px;
    font-weight: bold;
}

.sub-title {
    font-size: 24px;
    margin-top: 16px;
}

.tagline {
    font-size: 16px;
    margin-top: 8px;
}
</style>
  