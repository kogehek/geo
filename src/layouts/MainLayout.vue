<template>
  <!-- hard fix vertical scroll -->
  <q-layout view="lHh Lpr lFf" style="margin-top: -1px;">
    <MapMenu />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import  MapMenu from '../components/map/menu/MapMenu.vue';

export default defineComponent({
  name: 'MainLayout',
  components: { MapMenu },
});
</script>
