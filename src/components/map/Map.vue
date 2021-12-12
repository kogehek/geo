<template>
  <div id="map" ref="maps"></div>
</template>

<script lang="ts">
import 'ol/ol.css';
import { defineComponent, onMounted } from 'vue';
import { useMap } from './use/map';
// import { useMapStore } from 'src/store/map/index';

// import { mapActions } from 'vuex';
// import Map from 'ol/Map';
// import TileLayer from 'ol/layer/Tile';
// import View from 'ol/View';
// import OSM from 'ol/source/OSM';
// import VectorSource from 'ol/source/Vector';
// import VectorLayer from 'ol/layer/Vector';
// import { fromLonLat } from 'ol/proj';
// import { Draw, Modify, Snap } from 'ol/interaction';

export default defineComponent({
  name: 'Map',
  setup() {
    onMounted(() => {
      useMap();
      // useMapStore();
      // const { map } = useMapStore();

      // let draw = new Draw({ type: 'Polygon' });
      // const modify = new Modify({ source, pixelTolerance: 10 });
      // map.value.addInteraction(modify);
      // const addInteraction = () => {
      //   function outputsize() {
      //     map.value.updateSize();
      //   }
      //   outputsize();
      //   if (maps.value) {
      //     new ResizeObserver(outputsize).observe(maps.value);
      //   }
      //   if (stop.value) {
      //     const value = 'Polygon';
      //     draw = new Draw({
      //       source,
      //       type: value,
      //     });
      //     map.value.addInteraction(draw);
      //     const snap = new Snap({ source });
      //     map.value.addInteraction(snap);
      //     draw.on('drawend', () => {
      //       stop.value = false;
      //       draw.setActive(false);
      //       snap.setActive(false);
      //       modify.setActive(false);
      //       addInteraction();
      //     });
      //   }
      // };
    });
  },
});
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
