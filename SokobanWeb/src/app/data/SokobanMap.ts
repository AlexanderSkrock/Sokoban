import Point from './Point';
import Tile from './Tile';

export default class SokobanMap {
  id: number;
  playerStartPosition: Point;
  tiles: Tile[][];
  jewels: Point[];
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
    if (point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      return this.tiles[point.x][point.y];
    }
    console.error('coordinates out of map');
    return undefined;
  }
}
