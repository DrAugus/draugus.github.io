<script setup lang="ts">
// import AMapLoader from "@amap/amap-jsapi-loader";
import { ElButton, ElLoading, ElTag } from 'element-plus';
import { onMounted, onUnmounted, ref } from "vue";
import { citiesData } from "../../data/trip/cities";
import japanCities from "../../data/trip/citiesjp.json";
import { isEqualCity, linkTravelogue, sortedLastTravelogue } from '../../data/trip/travelogue';
import { VISITED_CHINA } from "../../data/trip/visited/china";
import { VISITED_JAPAN } from "../../data/trip/visited/japan";
import { ExploreRecord } from "../../type";
import { COLORS, hexToRgba } from "../../utils";

const isShowMark = ref(false);

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

// 蓝色系
let colors = COLORS.PINK[0];
const colorLegend = {
  // 2: '#fde7a9',
  3: colors[1],
  5: colors[2],
  8: colors[3],
  10: colors[4],
  5000: colors[5],
  // 100000: '#792a17',
};


interface CityTimes {
  city: string,
  times: number,
  resident: boolean,
  adcode?: number,
  color?: string,
}

// code: CityTimes
interface CityTimesMap {
  [path: string]: CityTimes,
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
const provinceName = VISITED_CHINA.map(item => item.id);
const provinceCode = provinceName.map(item => {
  for (const city of citiesData) {
    if (item === city.name) {
      return city.adcode;
    }
  }
});
// console.log(provinceCode);

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

  color = hexToRgba(color, 0.9)

  return color;
}

function mapChinaCityTimes() {
  let ctMap = new Map();
  for (let cityInfo of chinaCityVisitedTimes) {
    const city = cityInfo.city;
    const content = city + ': ' + (cityInfo.resident ? "常住" : cityInfo.times);

    let curCityData = findInChinaCities(city);
    let number = cityInfo.times;
    if (cityInfo.resident) number += 100;
    if (curCityData && number) {
      let adcode = Number(curCityData.adcode);
      let color = getColorByNumber(number);
      ctMap[adcode] = {
        city: city,
        times: number,
        resident: cityInfo.resident,
        adcode: adcode,
        color: color,
      };
    }
  }
  return ctMap;
}
const mapChinaCityTimesData = mapChinaCityTimes();
// console.log(mapChinaCityTimesData);

var centers = {
  'RUS': [93.729504, 68.718195],
  'USA': [-113.877655, 52.652266],
  'JPN': [136.824904, 38.00712]
}

const aMapLoader: any = ref(null);

// 创建省份图层
// var disProvince;
function initPro(AMap: any, code: (string | undefined)[], dep: number) {
  let disProvince = new AMap.DistrictLayer.Province({
    zIndex: 12,
    adcode: code,
    depth: dep,
    styles: {
      'fill': function (properties) {
        // properties为可用于做样式映射的字段，包含
        // NAME_CHN:中文名称
        // adcode_pro
        // adcode_cit
        // adcode
        var adcode = properties.adcode;
        let has = mapChinaCityTimesData[adcode]
        if (has) {
          return has.color;
        } else {
          // return 'rgba(255,255,0,0.5)';
        }
      },
      'province-stroke': 'cornflowerblue',
      'city-stroke': 'white', // 中国地级市边界
      'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
    }
  });
  return disProvince;
}

const drawMap = async () => {


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


        var getColorByRandom = function () {
          var rg = Math.random() * 155 + 50;
          return 'rgb(' + rg + ',' + rg + ',255)';
        }
        // var disCountry = new AMap.DistrictLayer.Country({
        //   zIndex: 10,
        //   SOC: 'JPN',
        //   depth: 1,
        //   styles: {
        //     'nation-stroke': '#22ffff',
        //     'coastline-stroke': [0.85, 0.63, 0.94, 1],
        //     'province-stroke': 'white',
        //     'fill': function (props) {
        //       console.log(props);
        //       return getColorByRandom()
        //     }
        //   }
        // })


        // 颜色辅助方法
        var colors = {};
        var getColorByAdcode = function (adcode) {
          if (!colors[adcode]) {
            var gb = Math.random() * 155 + 50;
            colors[adcode] = 'rgb(' + gb + ',' + gb + ',255)';
          }

          return colors[adcode];
        };

        // // 按钮事件
        // function changeAdcode(e) {
        //   var code = e.target.value;
        //   if (code != 100000) {
        //     initPro(code, depth);
        //   }
        // }

        // function changeDepth(e) {
        //   var dep = e.target.value;
        //   initPro(adCode, dep);
        // }

        // TODO 增加右下角图例解释

        map = new AMap.Map("amap-container-aug", {
          zoom: 7,
          center: [119.724457, 30.234375], // 临安
          viewMode: '3D',
          pitch: 0,
          // showIndoorMap: false,
          // showLabel: false,
          // mapStyle: 'amap://styles/whitesmoke',
          // mapStyle: 'amap://styles/dark',
          mapStyle: 'amap://styles/fresh',
        });

        adjustMapLayer(AMap);

      })
      .catch((e) => {
        console.log(e);
      });
  } catch (error) {
    console.error('Failed to load AMapLoader:', error);
  }
}

onMounted(async () => {
  drawMap();
});

onUnmounted(() => {
  map?.destroy();
});

const showMark = () => {
  isShowMark.value = !isShowMark.value;
  drawMap();
}

const adjustMapLayer = (AMap: any) => {
  let layer = new AMap.LabelsLayer({
    zooms: [3, 20],
    zIndex: 1000,
    collision: false,
    allowCollision: false,
  });
  layer.add([]);
  // 图层添加到地图
  map.add(layer);

  if (isShowMark.value) {
    layer.add(getChinaMarkers(AMap));
    layer.add(getGlobalMarkers(AMap));
  } else {
    let adCodes = provinceCode;
    let disProvince = initPro(AMap, adCodes, 1);
    map.add([
      disProvince,
      // disCountry,
      AMap.createDefaultLayer()
    ])
  }
}

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

const openFullScreen = () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close();
    showMark();
  }, 400)
}

const props = defineProps<{
  isFull: Boolean,
}>();
</script>

<template>
  <el-button class="mr-4 mt-4" @click="openFullScreen()">
    {{ isShowMark ? '点亮城市' : '城市探索次数' }}
  </el-button>

  <!-- <div v-if="!isMobile">
    <a :href="isFull ? './explore' : './explore-full'">
      <el-button type="primary" class="mr-4 mt-4">
        {{ isFull ? '退出全屏' : '全屏显示' }}
      </el-button>
    </a>
  </div> -->

  <div v-if="isShowMark">
    <span>
      点击下方地图标签可跳转
      <a href="./travelogue/">旅行游记</a>。
    </span>
  </div>

  <h5>色卡说明</h5>
  <div class="group-tag">
    <el-tag v-for="(color, i) in colorLegend" :color="color">{{ i < 100 ? `小于${i}次` : '常住' }}</el-tag>
  </div>



  <div id="amap-container-aug"></div>
</template>

<style scoped>
#amap-container-aug {
  width: 100%;
  height: 600px;
}

.group-tag {
  margin-bottom: 10px;
}

.group-tag .el-tag {
  color: black;
}
</style>
