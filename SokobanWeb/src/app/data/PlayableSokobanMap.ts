import SokobanMap from './SokobanMap';
import Point from './Point';

export default class PlayableSokobanMap extends SokobanMap {
  static fromSokobanMap(map: SokobanMap): PlayableSokobanMap {
    const result = new PlayableSokobanMap();
    result.id = map.id;
    result.playerPosition = map.playerPosition;
    result.tiles = map.tiles;
    result.boxes = map.boxes;
    result.collectibles = map.collectibles;
    return result;
  }

  translateBox(boxPosition: Point, direction: Point) {
    if (this.hasBoxAt(boxPosition)) {
      this.boxes.find(boxPosition.equals).translate(direction);
    }
  }
}
