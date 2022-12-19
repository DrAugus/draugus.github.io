<template>
  <div style="height: 75vh; width: 50vw;">
    <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[47.41322, -1.219482]"
        @move="log('move')"
    >
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers/>
      <l-marker :lat-lng="[0, 0]" draggable @moveend="log('move end')">
        <l-tooltip>
          我掉海里了
        </l-tooltip>
      </l-marker>

      <l-marker :lat-lng="[47.41322, -1.219482]">
        <l-tooltip>
          我润了
        </l-tooltip>
      </l-marker>

      <l-marker :lat-lng="[50, 50]" draggable @moveend="log('move end')">
        <l-popup>
          temp
        </l-popup>
      </l-marker>

      <l-marker :lat-lng="[30.3, 120.2]" draggable @moveend="log('move end')">
        <l-popup>
          中国？
        </l-popup>
      </l-marker>

      <l-polyline
          :lat-lngs="[
          [47.334852, -1.509485],
          [47.342596, -1.328731],
          [47.241487, -1.190568],
          [47.234787, -1.358337],
        ]"
          color="green"
      ></l-polyline>
      <l-polygon
          :lat-lngs="[
          [46.334852, -1.509485],
          [46.342596, -1.328731],
          [46.241487, -1.190568],
          [46.234787, -1.358337],
        ]"
          color="#41b782"
          :fill="true"
          :fillOpacity="0.5"
          fillColor="#41b782"
      />
      <l-rectangle
          :lat-lngs="[
          [46.334852, -1.509485],
          [46.342596, -1.328731],
          [46.241487, -1.190568],
          [46.234787, -1.358337],
        ]"
          :fill="true"
          color="#35495d"
      />
      <l-rectangle
          :bounds="[
          [46.334852, -1.190568],
          [46.241487, -1.090357],
        ]"
      >
        <l-popup>
          temp
        </l-popup>
      </l-rectangle>
    </l-map>
  </div>
</template>
<script>
// DON'T load Leaflet components here!
// Its CSS is needed though, if not imported elsewhere in your application.
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
  },
  data() {
    return {
      zoom: 2,
    };
  },
  computed: {

  },
  methods: {
    log(a) {
      console.log(a);
    },
  },
};
</script>