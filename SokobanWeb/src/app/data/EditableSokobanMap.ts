import SokobanMap from './SokobanMap';
import Point from './Point';
import Tile from './Tile';

export default class EditableSokobanMap extends SokobanMap {
  putTileAt(tile: Tile, point: Point): void  {
    if (this.isInMapArea(point)) {
      this.tiles[point.y][point.x] = tile;
    }
  }

  removeTileAt(point: Point): void {
    if (this.isInMapArea(point)) {
      this.tiles[point.y][point.x] = undefined;
    }
  }

  putBoxAt(point: Point): void  {
    if (this.canPlaceBoxAt(point)) {
      this.boxes.push(point);
    }
  }

  removeBoxAt(point: Point): void {
    this.boxes = this.boxes.filter(boxPoint => !boxPoint.equals(point));
  }

  putCollectibleAt(point: Point): void  {
    if (this.canPlaceCollectibleAt(point)) {
      this.collectibles.push(point);
    }
  }

  removeCollectibleAt(point: Point): void {
    this.collectibles = this.collectibles.filter(jewelPoint => !jewelPoint.equals(point));
  }

  placePlayer(point: Point): void {
    if (this.isInMapArea(point)) {
      this.playerPosition = point;
    }
  }

  removePlayer(): void {
    this.playerPosition = undefined;
  }

  canPlaceBoxAt(point: Point) {
    return this.isPlaceablePoint(point) && !this.hasBoxAt(point) && !this.hasCollectibleAt(point) && !this.hasPlayerAt(point);
  }

  canPlaceCollectibleAt(point: Point) {
    return this.isPlaceablePoint(point) && !this.hasBoxAt(point) && !this.hasCollectibleAt(point);
  }

  canPlacePlayerAt(point: Point) {
    return this.isPlaceablePoint(point) && !this.hasBoxAt(point) && !this.hasPlayerAt(point);
  }

  isPlaceablePoint(point: Point) {
    const tileAtPoint = this.getTileAt(point);
    return tileAtPoint && !tileAtPoint.solid;
  }
}
