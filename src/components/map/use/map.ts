import { useMapStore } from 'src/store/map/map';
// import { Draw, Modify, Snap } from 'ol/interaction';
import { Draw } from 'ol/interaction';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

export function useMap(): void {
  const { map, drawPolygon } = useMapStore();
  autoUpdateMapSize(map as Map);
  initDrawInteraction(map as Map, drawPolygon as Draw);
}

function initDrawInteraction(map: Map, drawPolygon: Draw) {
  const drawSource = new VectorSource({ wrapX: false });
  const drawLayer = new VectorLayer({
    source: drawSource,
  });

  map.addLayer(drawLayer);
  map.addInteraction(drawPolygon);
  drawPolygon.setActive(false);

  drawPolygon.on('drawend', (d) => {
    drawSource.addFeature(d.feature);
  });
}
function autoUpdateMapSize(map: Map) {
  function outputsize() {
    map.updateSize();
  }
  outputsize();
  new ResizeObserver(outputsize).observe(map.getTargetElement());
}
