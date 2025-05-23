<template>
    <DrawAMap title="机场分布图" :func="tr" />
</template>

<script setup lang="ts">
import DrawAMap from './DrawAMap.vue';
import { AIRPORTS } from "../../data/trip/airports";

const tr = async (AMap, map) => {
    const icon = new AMap.Icon({
        // size: new AMap.Size(80, 80), //图标尺寸
        image: '/img/trip/airport.svg',
        // imageOffset: new AMap.Pixel(-9, -3), //图像相对展示区域的偏移量，适于雪碧图等
        imageSize: new AMap.Size(20, 20), //根据所设置的大小拉伸或压缩图片
    });

    AIRPORTS.forEach(item => {

        if (!item.code || item.code === '') return;

        let pos = [item.longitude, item.latitude];

        let marker = new AMap.Marker({
            position: pos,
            icon: icon,
            anchor: 'bottom-center',
            // offset: new AMap.Pixel(0, 0)
        });

        marker.setMap(map);
        // 设置鼠标划过点标记显示的文字提示
        marker.setTitle(item.nameLocal);

        let labelContent = item.abbrZH;
        if (labelContent == '') {
            // labelContent = item.name.split(' ')[0];
        }

        // 设置label标签
        // label默认蓝框白底左上角显示，样式className为：amap-marker-label
        marker.setLabel({
            direction: 'right',
            offset: new AMap.Pixel(5, 0),  //设置文本标注偏移量
            content: labelContent, //设置文本标注内容
        });
    })
}

</script>
