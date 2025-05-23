<template>
    <h2>{{ title }}</h2>
    <div id="amap-container-aug"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps<{
    title: string,
    func: Function,
}>();

let map: any = null;
const aMapLoader: any = ref(null);

onMounted(async () => {
    try {
        // 动态导入 AMapLoader  
        const { default: AMapLoader } = await import('@amap/amap-jsapi-loader');
        aMapLoader.value = AMapLoader;
        // 使用 aMapLoader.value 来初始化地图等  
        aMapLoader.value.load({
            key: "86d5b3834c7e9dd95ac4517948ce435c", // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        })
            .then((AMap) => {
                map = new AMap.Map("amap-container-aug", {
                    zoom: 6.5,
                    center: [119, 31],
                    viewMode: '3D',
                    // pitch: 60,
                    // showIndoorMap: false,
                    showLabel: true,
                    // mapStyle: 'amap://styles/whitesmoke',
                    // mapStyle: 'amap://styles/dark',
                    mapStyle: 'amap://styles/fresh',
                });

                const icon = new AMap.Icon({
                    // size: new AMap.Size(80, 80), //图标尺寸
                    image: '/img/trip/airport.svg',
                    // imageOffset: new AMap.Pixel(-9, -3), //图像相对展示区域的偏移量，适于雪碧图等
                    imageSize: new AMap.Size(20, 20), //根据所设置的大小拉伸或压缩图片
                });

                props.func(AMap, map);

            })
            .catch((e) => {
                console.log(e);
            });
    } catch (error) {
        console.error('Failed to load AMapLoader:', error);
    }

});

onUnmounted(() => {
    map?.destroy();
});

// 用于存储 VPDoc 元素引用
const vpDocRef = ref<HTMLElement | null>(null);
// 用于存储 amap-container-aug 元素引用
const containerRef = ref<HTMLElement | null>(null);
// 检测是否为移动设备
const isMobile = ref(false);

onMounted(() => {
    // 用于存储屏幕宽度
    const screenWidth = ref<number>(window.innerWidth);

    // 通过class获取元素，这里假设只有一个class为VPDoc的元素
    const vpDocElements = document.querySelectorAll('.VPDoc');
    if (vpDocElements.length > 0) {
        vpDocRef.value = vpDocElements[0] as HTMLElement;
    }

    containerRef.value = document.getElementById('amap-container-aug');

    const handleResize = () => {
        screenWidth.value = window.innerWidth;
    };
    window.addEventListener('resize', handleResize);

    // 检测是否为移动设备
    isMobile.value = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile.value && vpDocRef.value && containerRef.value) {
        const style = window.getComputedStyle(vpDocRef.value);
        const paddingLeft = parseFloat(style.paddingLeft);

        containerRef.value.style.width = `${screenWidth.value}px`;
        containerRef.value.style.left = `-${paddingLeft}px`;
    }

    return () => {
        window.removeEventListener('resize', handleResize);
    };
});
</script>

<style scoped>
#amap-container-aug {
    width: 100%;
    height: 300px;
}
</style>