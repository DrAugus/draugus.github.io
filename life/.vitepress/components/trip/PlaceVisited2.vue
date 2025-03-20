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

function mapChinaCityTimes() {
  let ctMap = new Map();
  for (let cityInfo of chinaCityVisitedTimes) {
    const city = cityInfo.city;
    const content = city + ': ' + (cityInfo.resident ? "常住" : cityInfo.times);

    let curCityData = findInChinaCities(city);
    let number = cityInfo.times;
    if (cityInfo.resident) number += 100;
    console.log(number)
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

          // 创建省份图层
          // var disProvince;
          function initPro(code: (string | undefined)[], dep: number) {
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
                    return 'rgba(255,255,255,0.5)';
                  }
                },
                'province-stroke': 'cornflowerblue',
                'city-stroke': 'white', // 中国地级市边界
                'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
              }
            });
            return disProvince;
          }
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

          let adCodes = provinceCode
          let disProvince = initPro(adCodes, 1);

          // TODO 增加右下角图例解释

          map = new AMap.Map("container", {
            zoom: 7,
            center: [119.724457,30.234375], // 临安
            viewMode: '3D',
            pitch: 0,
            // showIndoorMap: false,
            // showLabel: false,
            // mapStyle: 'amap://styles/whitesmoke',
            // mapStyle: 'amap://styles/dark',
            mapStyle: 'amap://styles/fresh',
            layers: [
              disProvince,
              // disCountry,
              AMap.createDefaultLayer()
            ],
          });
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

  <h3>色卡说明</h3>
  <div class="flex" v-for="(v, i) in colorLegend">
    <div class="box" :style="{ backgroundColor: v }"> </div>
    <span v-if="i < 100">{{ `小于${i}次` }}</span>
    <span v-else>常住</span>
  </div>

  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 600px;
}

.flex {
  display: flex;
}

.box {
  width: 30px;
  height: 20px;
  border-radius: 5px;
  margin-right: 3px;
}
</style>
