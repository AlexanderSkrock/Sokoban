import SokobanMap from './SokobanMap';
import Point from './Point';
import Tile from './Tile';

export default class EditableSokobanMap extends SokobanMap {
  static fromSokobanMap(map: SokobanMap): EditableSokobanMap {
    const result = new EditableSokobanMap();
    result.id = map.id;
    result.playerStartPosition = map.playerStartPosition;
    result.tiles = map.tiles;
    result.boxes = map.boxes;
    result.collectibles = map.collectibles;
    return result;
  }

  putTileAt(tile: Tile, point: Point): void  {
    if (point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      this.tiles[point.y][point.x] = tile;
    }
  }

  removeTileAt(point: Point): void {
    if (point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      this.tiles[point.y][point.x] = undefined;
    }
  }

  putBoxAt(point: Point): void  {
    if (point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      const existsAlready = this.boxes.some(point.equals);
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

  putCollectibleAt(point: Point): void  {
    if (point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      const existsAlready = this.collectibles.some(point.equals);
      if (!existsAlready) {
        this.collectibles.push(point);
      }
    }
  }

  removeCollectibleAt(point: Point): void {
    if (point.isIn(0, 0, this.getWidth(), this.getHeight())) {
      this.collectibles.filter(jewelPoint => !jewelPoint.equals(point));
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
