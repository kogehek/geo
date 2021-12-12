import { useMapStore } from 'src/store/map/map';
// import { Draw, Modify, Snap } from 'ol/interaction';
import Map from 'ol/Map';

export function useMap(): void {
  const { map } = useMapStore();
  autoUpdateMapSize(map as Map);
}

function autoUpdateMapSize(map: Map) {
  function outputsize() {
    map.updateSize();
  }
  outputsize();
  new ResizeObserver(outputsize).observe(map.getTargetElement());
}
