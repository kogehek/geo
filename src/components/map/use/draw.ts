import { useMapStore } from 'src/store/map/map';

export function useDrawActive(active: boolean): void {
  const { drawPolygon } = useMapStore();
  drawPolygon.setActive(active);
}
