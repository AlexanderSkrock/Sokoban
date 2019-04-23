import SokobanMap from './SokobanMap';
import Point from './Point';
import _ from '../../../node_modules/lodash'

export default class PlayableSokobanMap extends SokobanMap {
  translateBox(boxPosition: Point, direction: Point) {
    if (this.hasBoxAt(boxPosition)) {
      this.boxes.find(boxPosition.equals).translate(direction);
    }
  }

  translatePlayer(direction: Point) {
    if(!this.playerPosition) {
      return;
    }
    const newPlayerPosition = <Point>_.cloneDeep(this.playerPosition);
    newPlayerPosition.translate(direction);

    if(this.isOpen(newPlayerPosition)) {
      this.playerPosition = newPlayerPosition;
    } else if(this.hasBoxAt(newPlayerPosition)) {
      const newBoxPosition =  <Point>_.cloneDeep(newPlayerPosition);
      newBoxPosition.translate(direction);

      if(this.isOpen(newBoxPosition)) {
        this.playerPosition = newPlayerPosition;
        this.boxes.find(boxPosition => boxPosition.equals(newPlayerPosition)).translate(direction);
      }
    }
  }

  checkWinningCondition(): boolean {
    return this.collectibles.reduce((value, collectiblePoint) => {
      return value && this.boxes.some(boxPoint => collectiblePoint.equals(boxPoint));
    }, true);
  }
}
