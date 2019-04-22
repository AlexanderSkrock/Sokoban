import Point from './Point';
import Tile from './Tile';

export default class SokobanMap {
  id: number;
  playerPosition: Point;
  tiles: Tile[][];
  collectibles: Point[];
  boxes: Point[];

  getWidth(): number {
    if (!this.tiles || !this.tiles[0]) {
      return 0;
    }
    return this.tiles[0].length;
  }

  getHeight(): number {
    return this.tiles ? this.tiles.length : 0;
  }

  getTileAt(point: Point): Tile {
    if (this.isInMapArea(point)) {
      return this.tiles[point.y][point.x];
    }
    console.error('coordinates out of map');
    return undefined;
  }

  isInMapArea(point: Point) {
    return point && point.isIn(0, 0, this.getWidth(), this.getHeight());
  }

  isOpen(point: Point): boolean {
    const isInMap = this.isInMapArea(point);
    const tileIsNotSolid = this.getTileAt(point) && !this.getTileAt(point).solid;
    const hasNoBox = !this.hasBoxAt(point);
    return isInMap && tileIsNotSolid && hasNoBox;
  }

  hasCollectibleAt(point: Point): boolean {
    return this.collectibles.some(colletiblePoint => colletiblePoint.equals(point));
  }

  hasBoxAt(point: Point): boolean {
    return this.boxes.some(boxPoint => boxPoint.equals(point));
  }

  hasPlayerAt(point: Point): boolean {
    return this.playerPosition && this.playerPosition.equals(point);
  }
}
