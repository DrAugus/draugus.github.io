<script setup lang="ts">
import { onMounted, onUnmounted, ref, version } from "vue";

import { citiesData } from "../../data/trip/cities";
import japanCities from "../../data/trip/citiesjp.json";
import { VISITED_CHINA } from "../../data/trip/visited/china";
import { VISITED_JAPAN } from "../../data/trip/visited/japan";
import { sortedLastTravelogue, isEqualCity, linkTravelogue } from '../../data/trip/travelogue';
import { ExploreRecord } from "../../type";

let map: any = null;
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
        key: "86d5b3834c7e9dd95ac4517948ce435c",  // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0",                           // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [],                              // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        Loca: {                                   // 是否加载 Loca， 缺省不加载
          version: '2.0.0'                        // Loca 版本，缺省 1.3.2
        },
      })
        .then((AMap) => {
          map = new AMap.Map('container', {
            zoom: 5.29,
            // showLabel: false,
            viewMode: '3D',
            pitch: 48,
            center: [104.780269, 34.955403],
            mapStyle: 'amap://styles/45311ae996a8bea0da10ad5151f72979',
          });

          var loca = new Loca.Container({
            map,
          });

          // 呼吸点
          var scatter = new Loca.ScatterLayer({
            loca,
            zIndex: 10,
            opacity: 0.6,
            visible: true,
            zooms: [2, 22],
          });

          var pointGeo = new Loca.GeoJSONSource({
            url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/pulselink-china-city-point.json',
          });
          scatter.setSource(pointGeo);
          scatter.setStyle({
            unit: 'meter',
            size: [100000, 100000],
            borderWidth: 0,
            texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_red.png',
            duration: 2000,
            animate: true,
          });
          loca.add(scatter);

          // 弧线
          var pulseLink = new Loca.PulseLinkLayer({
            // loca,
            zIndex: 10,
            opacity: 1,
            visible: true,
            zooms: [2, 22],
            depth: true,
          });

          var geo = new Loca.GeoJSONSource({
            url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/data-line-out.json',
          });

          pulseLink.setSource(geo);
          pulseLink.setStyle({
            unit: 'meter',
            dash: [40000, 0, 40000, 0],
            lineWidth: function () {
              return [2000, 1000];
            },
            height: function (index, feat) {
              return feat.distance / 3 + 10;
            },
            // altitude: 1000,
            smoothSteps: 30,
            speed: function (index, prop) {
              return 1000 + Math.random() * 200000;
            },
            flowLength: 100000,
            lineColors: function (index, feat) {
              return ['rgb(255,228,105)'];
            },
            maxHeightScale: 0.3, // 弧顶位置比例
            headColor: 'rgba(25, 255, 0, 1)',
            trailColor: 'rgba(255, 25,0,0)',
          });
          loca.add(pulseLink);
          loca.animate.start();

          // 点击事件处理
          var clickInfo = new AMap.Marker({
            anchor: 'bottom-center',
            position: [116.396923, 39.918203, 0],
          });
          clickInfo.setMap(map);
          clickInfo.hide();
          map.on("click", function (e) {
            var feat = pulseLink.queryFeature(e.pixel.toArray());

            if (feat) {
              clickInfo.show();
              var props = feat.properties;
              clickInfo.setPosition(feat.coordinates[1]);
              clickInfo.setContent(
                '<div style="text-align: center; height: 20px; width: 150px; color:#fff; font-size: 14px;">' +
                '速率: ' + feat.properties['ratio'] +
                '</div>'
              );
            } else {
              clickInfo.hide();
            }
          });

          var dat = new Loca.Dat();
          dat.addLayer(pulseLink);

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
  margin: 0;
  padding: 0;
}
</style>
