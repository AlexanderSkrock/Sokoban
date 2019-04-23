import SokobanMap from './SokobanMap';
import Point from './Point';

export default class PlayableSokobanMap extends SokobanMap {
  translateBox(boxPosition: Point, direction: Point) {
    if (this.hasBoxAt(boxPosition)) {
      this.boxes.find(boxPosition.equals).translate(direction);
    }
  }
}
