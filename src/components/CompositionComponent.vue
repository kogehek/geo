<template>
    <!-- <div id="ttt"></div> -->
    <div id="map"></div>
</template>

<script lang="ts">
import 'ol/ol.css';
import { defineComponent } from 'vue';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Point from 'ol/geom/Point';
// import Polygon from 'ol/geom/Polygon';
import Feature from 'ol/Feature';
import { fromLonLat } from 'ol/proj';
import {
  Fill, Stroke, Circle, Style,
} from 'ol/style';
import { Draw, Modify, Snap } from 'ol/interaction';
// import UserMap from '@/entity/Map';

export default defineComponent({
  name: 'Map',
  data() {
    return {
      maps: null as unknown as Map,
      stop: false,
    };
  },

  mounted() {
    const fill = new Fill({
      color: 'rgba(125,0,255,1)',
    });
    const stroke = new Stroke({
      color: '#3399CC',
      width: 1.25,
    });
    const styles = [
      new Style({
        image: new Circle({
          fill,
          stroke,
          radius: 5,
        }),
        fill,
        stroke,
      }),
    ];

    const place = fromLonLat([27.534977, 53.871309]);

    const point = new Point(place);

    const iconFeature = new Feature({
      geometry: point,
      name: 'A point',
      population: 4000,
      rainfall: 500,
    });
    iconFeature.setStyle(styles);

    const source = new VectorSource({ wrapX: false });

    const vector = new VectorLayer({
      source,
    });

    this.maps = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vector,
      ],
      view: new View({
        center: fromLonLat([27.534977, 53.871309]),
        maxZoom: 19,
        constrainResolution: true,
        zoom: 15,
      }),
    });
    
    this.maps.updateSize()

    let draw = new Draw({ type: 'Polygon' });
    const modify = new Modify({ source, pixelTolerance: 10 });
    this.maps.addInteraction(modify);
    const addInteraction = () => {
      if (!this.stop) {
        // console.log(this.stop);
        const value = 'Polygon';
        draw = new Draw({
          source,
          type: value,
        });
        this.maps.addInteraction(draw);
        const snap = new Snap({ source });
        this.maps.addInteraction(snap);
        // this.maps.myGet(draw, snap, modify);

        // console.log(snap);
        // console.log(this.maps.myGet(draw, snap));
        // this.maps.getInteractions().forEach((interaction) => {
        //   // if (interaction instanceof Snap) {
        //   console.log(interaction.constructor.name);
        //   // }
        // });

        draw.on('drawend',
          () => {
            this.stop = true;
            draw.setActive(false);
            snap.setActive(false);
            modify.setActive(false);
            // console.log(evt.feature);
            addInteraction();
          });
      }
    };

    addInteraction();

    // const vectorSource = new VectorSource({
    //   features: [iconFeature],
    // });

    // const vectorLayer = new VectorLayer({
    //   source: vectorSource,
    // });
    // this.maps.addLayer(vectorLayer);
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

function addInteraction() {
  throw new Error('Function not implemented.');
}
