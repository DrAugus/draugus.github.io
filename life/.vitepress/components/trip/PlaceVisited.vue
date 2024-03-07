<script setup>
import { onMounted, onUnmounted, ref } from "vue";
// import AMapLoader from "@amap/amap-jsapi-loader";

import { citiesData } from "../../data/trip/cities";
import { CHINA_VISITED_DATA } from "../../data/trip/china";

let map = null;


let icon = {
  type: 'image',
  image: 'https://a.amap.com/jsapi_demos/static/demo-center/marker/express2.png',
  size: [64, 30],
  anchor: 'center',
};
let textStyle = {
  fontSize: 12,
  fontWeight: 'normal',
  fillColor: '#fff',
  // fillColor: 'rgb(255, 215, 0)',
  // strokeColor: '#fff',
  // strokeWidth: 2,
  // fold: true,
  padding: '2, 5',
  backgroundColor: 'rgb(246,137,38)',
  borderColor: '#fff',
  borderWidth: 1,
};
let LabelsData = [
  {
    name: '自提点1',
    position: [116.461009, 39.991443],
    zooms: [10, 20],
    opacity: 1,
    zIndex: 10,
    icon,
    text: {
      content: '中邮速递易',
      direction: 'right',
      offset: [-20, -5],
      style: textStyle
    }
  },
];

const findInCities = (name) => {
  for (const city of citiesData) {
    if (name === city.name) {
      return city;
    }
  }
};

let colorLegend = {
  // 10: '#fde7a9',
  3: '#f9c02f',
  // 5: '#f5a54f',
  5: '#f18334',
  10: '#cc5f42',
  5000: '#a94d36',
  100000: '#792a17',
};

const visitedData = CHINA_VISITED_DATA;

function extractCityAndTimes(data) {
  return data.reduce((acc, item) => {
    // 检查当前项是否有 info 字段  
    if (item.info) {
      acc.push({ city: item.id, times: item.info.length });
    }
    // 检查当前项是否有 items 字段，并遍历 items  
    if (item.items) {
      item.items.forEach(subItem => {
        // 检查子项是否有 info 字段  
        if (subItem.info && subItem.info.length) {
          acc.push({ city: subItem.id, times: subItem.info.length });
        }
      });
    }
    return acc;
  }, []);
}

const cityVisitedTimes = extractCityAndTimes(visitedData);
console.log(cityVisitedTimes);

const getMarkers = (AMap) => {
  let markers = [];
  for (let cityInfo of cityVisitedTimes) {

    const city = cityInfo.city;

    let curCityData = findInCities(city);
    let number = 100;
    if (curCityData && number) {
      let color = getColorByNumber(number);
      textStyle.backgroundColor = color;
      let marker = new AMap.LabelMarker({
        name: city,
        position: [curCityData.x, curCityData.y],
        zIndex: number,
        text: {
          content: city + ': ' + cityInfo.times,
          direction: 'center',
          style: textStyle,
        }
      });
      markers.push(marker);
    }
  }
  return markers;
};

function getColorByNumber(number) {
  let color;

  for (let key in colorLegend) {
    if (colorLegend.hasOwnProperty(key)) {
      if (number < parseInt(key)) {
        color = colorLegend[key];
        break;
      }
    }
  }

  return color;
}

const aMapLoader = ref(null);

onMounted(async () => {

  // 检查 window 对象是否存在  
  if (typeof window !== 'undefined') {
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
          map = new AMap.Map("container", {
            zoom: 4.5,
            center: [109.610747, 35.15261],
            viewMode: '3D',
            // pitch: 60,
            // mapStyle: 'amap://styles/whitesmoke',
            showIndoorMap: false,
            showLabel: false,
            // mapStyle: 'amap://styles/dark',
            mapStyle: 'amap://styles/fresh',
          });
          let layer = new AMap.LabelsLayer({
            zooms: [3, 20],
            zIndex: 1000,
            collision: false,
            allowCollision: false,
          });
          layer.add([]);
          // 图层添加到地图
          map.add(layer);
          let mark = getMarkers(AMap);
          layer.add(mark);
          // console.log(mark);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.error('Failed to load AMapLoader:', error);
    }
  } else {
    console.log('Window object is not available, skipping AMapLoader import.');
  }

});

onUnmounted(() => {
  map?.destroy();
});
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>
