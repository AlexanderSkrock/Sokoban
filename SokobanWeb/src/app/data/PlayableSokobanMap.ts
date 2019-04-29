import SokobanMap from './SokobanMap';
import Point from './Point';
import _ from '../../../node_modules/lodash'

export default class PlayableSokobanMap extends SokobanMap {
  translateBox(boxPosition: Point, direction: Point): boolean {
    const newBoxPosition =  <Point>_.cloneDeep(boxPosition);
    newBoxPosition.translate(direction);

    if(this.isOpen(newBoxPosition)) {
      const box = this.boxes.find(boxPosition => boxPosition.equals(boxPosition));
      if(box){
        box.translate(direction);
        return true;
      }
    }
    return false;
  }

  translatePlayer(direction: Point): boolean {
    if(!this.playerPosition) {
      return;
    }
    const newPlayerPosition = <Point>_.cloneDeep(this.playerPosition);
    newPlayerPosition.translate(direction);

    if(this.isOpen(newPlayerPosition)) {
      this.playerPosition = newPlayerPosition;
      return true;
    } else if(this.hasBoxAt(newPlayerPosition)) {
      const successfullyMovedBox = this.translateBox(newPlayerPosition, direction);
      if(successfullyMovedBox) {
        this.playerPosition = newPlayerPosition;
        return true;
      }
    }
    return false;
  }

  checkWinningCondition(): boolean {
    return this.boxTargets.reduce((value, collectiblePoint) => {
      return value && this.boxes.some(boxPoint => collectiblePoint.equals(boxPoint));
    }, true);
  }
}
