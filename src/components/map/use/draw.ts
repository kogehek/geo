import { useMapStore } from 'src/store/map/map';
import { Draw } from 'ol/interaction';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

export function useDrawActive(active: boolean): void {
  const { map } = useMapStore();

  const drawSource = new VectorSource({ wrapX: false });
  const drawLayer = new VectorLayer({
    source: drawSource,
  });
  map.addLayer(drawLayer);

  let draw = new Draw({ type: 'Polygon' });

  function addInteraction() {
    if (active) {
      draw = new Draw({
        source: drawSource,
        type: 'Polygon',
      });

      map.addInteraction(draw);
    } else {
      map.removeInteraction(draw);
      draw.setActive(false);
      map.getInteractions().forEach((interaction) => {
        console.log(interaction);
      });
    }
  }
  addInteraction();
}
