<template>
  <button class="start" @click="startDraw">start</button>
  <button class="stop" @click="stopDraw">stop</button>
  <div id="map" ref="maps"></div>
</template>

<script lang="ts">
import 'ol/ol.css';
import { defineComponent, onMounted } from 'vue';
import { useMap } from './use/map';
import { useDrawActive } from './use/draw';

export default defineComponent({
  name: 'Map',
  setup() {
    function startDraw() {
      useDrawActive(true);
    }
    function stopDraw() {
      useDrawActive(false);
    }
    onMounted(() => {
      useMap();
    });
    return {
      startDraw,
      stopDraw,
    };
  },
});
</script>

<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100%;
  position: absolute;
}
button {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
}
.stop {
  top: 40px;
}
</style>
