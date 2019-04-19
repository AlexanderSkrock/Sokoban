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

  getTileAt(x: number, y: number): Tile {
    if (x < 0 || x >= this.getHeight() || y < 0 || y >= this.getWidth()) {
      console.error('coordinates out of map');
      return undefined;
    }
    return this.tiles[x][y];
  }
}
