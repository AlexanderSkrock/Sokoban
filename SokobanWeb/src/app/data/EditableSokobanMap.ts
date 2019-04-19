import SokobanMap from './SokobanMap';
import Point from './Point';
import Tile from './Tile';

export default class EditableSokobanMap extends SokobanMap {
  isOpen(point: Point): boolean {
    const isInMap = point.isIn(0, 0, this.getWidth(), this.getHeight());
    const tileIsNotSolid = this.getTileAt(point) && !this.getTileAt(point).solid;
    const hasNoBox = !this.hasBoxAt(point);
    return isInMap && tileIsNotSolid && hasNoBox;
  }

  hasCollectableAt(point: Point): boolean {
    return this.jewels.reduce((value, jewelPoint) => value && jewelPoint.equals(point), true);
  }

  hasBoxAt(point: Point): boolean {
    return this.boxes.reduce((value, boxPoint) => value && boxPoint.equals(point), true);
  }

  putTileAt(tile: Tile, point: Point): void  {
    if (!point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      this.tiles[point.x][point.y] = tile;
    }
  }

  removeTileAt(point: Point): void {
    if (point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      this.tiles[point.x][point.y] = undefined;
    }
  }

  putBoxAt(point: Point): void  {
    if (point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      const existsAlready = this.boxes.find(point.equals) || undefined;
      if (!existsAlready) {
        this.boxes.push(point);
      }
    }
  }

  removeBoxAt(point: Point): void {
    if (point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      this.boxes.filter(boxPoint => !boxPoint.equals(point));
    }
  }

  placePlayer(point: Point): void {
    if (point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      this.playerStartPosition = point;
    }
  }

  removePlayer(point: Point): void {
    if (point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      this.playerStartPosition = undefined;
    }
  }
}
