import SokobanMap from './SokobanMap';
import Point from './Point';

export default class PlayableSokobanMap extends SokobanMap {
  static fromSokobanMap(map: SokobanMap): PlayableSokobanMap {
    const result = new PlayableSokobanMap();
    result.id = map.id;
    result.playerStartPosition = map.playerStartPosition;
    result.tiles = map.tiles;
    result.boxes = map.boxes;
    result.collectibles = map.collectibles;
    return result;
  }

  removeCollectibleAt(point: Point): void {
    if (point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      this.collectibles.filter(jewelPoint => !jewelPoint.equals(point));
    }
  }

  translateBox(boxPosition: Point, direction: Point) {
    if (this.hasBoxAt(boxPosition)) {
      this.boxes.find(boxPosition.equals).translate(direction);
    }
  }
}
