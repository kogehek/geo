import { defineStore } from 'pinia';
import Map from 'ol/Map';
import { View } from 'ol';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const storeID = 'map';

interface IMap {
  map: Map;
  interactionDraw: boolean;
}

export const useMapStore = defineStore({
  id: storeID,

  state: (): IMap => {
    return {
      map: new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([27.534977, 53.871309]),
          maxZoom: 19,
          constrainResolution: true,
          zoom: 15,
        }),
      }),
      interactionDraw: true,
    };
  },

  actions: {
    initMap() {
      this.map.getView().setCenter(fromLonLat([17.534977, 53.871309]));
    },
  },
  getters: {},
});

export type UserStore = ReturnType<typeof useMapStore>;
