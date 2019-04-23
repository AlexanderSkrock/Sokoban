import Point from './Point';
import Tile from './Tile';
import {createEmpty2DArray} from "../util/Arrays";

export default class SokobanMap {
  static createBlankSokobanMap(width: number, height: number): SokobanMap {
    const map = new SokobanMap();
    map.id = undefined;
    map.tiles = createEmpty2DArray(width, height);
    map.playerPosition = undefined;
    map.boxes = [];
    map.collectibles = [];
    return map;
  }

  id: number;
  playerPosition: Point;
  tiles: Tile[][];
  collectibles: Point[];
  boxes: Point[];

  constructor(map: SokobanMap = undefined) {
    if(map) {
      this.id = map.id;
      this.playerPosition = map.playerPosition ? new Point(map.playerPosition.x, map.playerPosition.y) : undefined;
      this.tiles = map.tiles.map(row => row.map(tile => tile ? new Tile(tile) : undefined));
      this.boxes = map.boxes ? map.boxes.map(boxPoint => new Point(boxPoint.x, boxPoint.y)) : [];
      this.collectibles = map.collectibles ? map.collectibles.map(collectiblePoint => new Point(collectiblePoint.x, collectiblePoint.y)) : [];
    }
  }

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
