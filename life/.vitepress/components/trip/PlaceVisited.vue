<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
// import AMapLoader from "@amap/amap-jsapi-loader";

import { citiesData } from "../../data/trip/cities";
import japanCities from "../../data/trip/citiesjp.json";
import { VISITED_CHINA } from "../../data/trip/visited/china";
import { VISITED_JAPAN } from "../../data/trip/visited/japan";
import { sortedLastTravelogue, isEqualCity, linkTravelogue } from '../../data/trip/travelogue';
import { ExploreRecord } from "../../type";

let map: any = null;

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

const findInChinaCities = (name: string) => {
  for (const city of citiesData) {
    if (name === city.name) {
      return city;
    }
  }
};


interface GlobalCity {
  name: string,
  name_en: string,
  kanji: string,
  kana: string,
  roman: string,
  lat: number,
  lng: number,
}

const findInGlobalCities = (name: string): GlobalCity | null => {
  for (const city of japanCities) {
    if (isEqualCity(name, city.name_en)) {
      return city;
    }
  }
  return null;
};

const colorLegend = {
  // 2: '#fde7a9',
  3: '#f9c02f',
  5: '#f5a54f',
  8: '#f18334',
  10: '#cc5f42',
  5000: '#a94d36',
  // 100000: '#792a17',
};


interface CityTimes {
  city: string,
  times: number,
  resident: boolean,
}

const extractCityAndTimes = (data: ExploreRecord[]) =>
  data.reduce((acc: CityTimes[], item) => {
    // 检查当前项是否有 info 字段  
    if (item.info) {
      let obj: CityTimes = {
        city: item.id,
        times: item.info.length,
        resident: false
      };
      if (item.resident) {
        obj.resident = item.resident;
      }
      acc.push(obj);
    }
    // 检查当前项是否有 items 字段，并遍历 items  
    if (item.items) {
      item.items.forEach(subItem => {
        // 检查子项是否有 info 字段  
        if (subItem.info && subItem.info.length) {

          let obj = {
            city: subItem.id,
            times: subItem.info.length,
            resident: false
          };
          if (subItem.resident) {
            obj.resident = subItem.resident;
          }
          acc.push(obj);
        }
      });
    }
    return acc;
  }, []);

const chinaCityVisitedTimes = extractCityAndTimes(VISITED_CHINA);
// console.log(chinaCityVisitedTimes);
const japanCityVisitedTimes = extractCityAndTimes(VISITED_JAPAN);
// console.log(japanCityVisitedTimes);

const getLastTravelogueLink = (city: string) => {

  let idx = sortedLastTravelogue.findIndex(info => {
    if (Array.isArray(info.city)) {
      let equal = false;
      info.city.forEach(c => {
        if (isEqualCity(c, city)) {
          equal = true;
        }
      });
      return equal;
    } else {
      return isEqualCity(city, info.city);
    }

  });

  if (idx === -1) {
    return '';
  }

  let last = sortedLastTravelogue[idx];
  return linkTravelogue(last.date);
};

const getChinaMarkers = (AMap) => {
  let markers: any[] = [];
  for (let cityInfo of chinaCityVisitedTimes) {

    const city = cityInfo.city;
    const content = city + ': ' + (cityInfo.resident ? "常住" : cityInfo.times);

    let curCityData = findInChinaCities(city);
    let number = cityInfo.times;
    if (cityInfo.resident) number += 100;
    if (curCityData && number) {
      let color = getColorByNumber(number);
      textStyle.backgroundColor = color;
      let marker = new AMap.LabelMarker({
        name: city,
        position: [curCityData.x, curCityData.y],
        zIndex: number,
        text: {
          content: content,
          direction: 'center',
          style: textStyle,
        }
      });
      const link = getLastTravelogueLink(city);
      if (link !== '') {
        marker.on('click', function (e) {
          // 在新标签页打开链接
          window.open(link, '_blank');
        });
      } else {
        marker.on('click', function (e) {
          // 在新标签页打开链接
          window.alert(city + "没有旅行日记，看看其他城市吧");
        });
      }
      markers.push(marker);
    }
  }
  return markers;
};

const getGlobalMarkers = (AMap) => {
  let markers: any[] = [];
  for (let cityInfo of japanCityVisitedTimes) {

    const city = cityInfo.city;
    let curCityData = findInGlobalCities(city);
    const nameCity = curCityData?.name;
    const content = nameCity + ': ' + (cityInfo.resident ? "常住" : cityInfo.times);
    let number = cityInfo.times;
    if (cityInfo.resident) number += 100;
    if (curCityData && number) {
      let color = getColorByNumber(number);
      textStyle.backgroundColor = color;
      let marker = new AMap.LabelMarker({
        name: nameCity,
        position: [curCityData.lng, curCityData.lat],
        zIndex: number,
        text: {
          content: content,
          direction: 'center',
          style: textStyle,
        }
      });
      const link = getLastTravelogueLink(city);
      if (link !== '') {
        marker.on('click', function (e) {
          // 在新标签页打开链接
          window.open(link, '_blank');
        });
      } else {
        marker.on('click', function (e) {
          // 在新标签页打开链接
          window.alert(city + "没有旅行日记，看看其他城市吧");
        });
      }
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

const aMapLoader: any = ref(null);

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
          map = new AMap.Map("amap-container-aug", {
            zoom: 6,
            center: [117.495663, 30.674264],// 池州坐标
            viewMode: '3D',
            // pitch: 60,
            // showIndoorMap: false,
            // showLabel: false,
            // mapStyle: 'amap://styles/whitesmoke',
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
          layer.add(getChinaMarkers(AMap));
          layer.add(getGlobalMarkers(AMap));
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

// 用于存储 VPDoc 元素引用
const vpDocRef = ref<HTMLElement | null>(null);
// 用于存储 amap-container-aug 元素引用
const containerRef = ref<HTMLElement | null>(null);
// 用于存储屏幕宽度
const screenWidth = ref<number>(window.innerWidth);
// 检测是否为移动设备
const isMobile = ref(false);

onMounted(() => {
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

<template>
  <div id="amap-container-aug"></div>
</template>

<style scoped>
#amap-container-aug {
  width: 100%;
  height: 600px;
}
</style>
