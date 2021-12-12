import { useMapStore } from 'src/store/map/index';
// import { Draw, Modify, Snap } from 'ol/interaction';
import { Draw } from 'ol/interaction';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';

export function useMap(): void {
  const { map } = useMapStore();
  autoUpdateMapSize(map as Map);

  const drawSource = new VectorSource({ wrapX: false });
  const drawLayer = new VectorLayer({
    source: drawSource,
  });
  map.addLayer(drawLayer);

  let draw = new Draw({ type: 'Polygon' });

  function addInteraction() {
    draw = new Draw({
      source: drawSource,
      type: 'Polygon',
    });
    map.addInteraction(draw);
  }
  addInteraction();
}

function autoUpdateMapSize(map: Map) {
  function outputsize() {
    map.updateSize();
  }
  outputsize();
  new ResizeObserver(outputsize).observe(map.getTargetElement());
}
