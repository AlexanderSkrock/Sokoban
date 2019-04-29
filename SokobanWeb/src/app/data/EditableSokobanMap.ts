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

  putBoxTargetAt(point: Point): void  {
    if (this.canPlaceBoxTargetAt(point)) {
      this.boxTargets.push(point);
    }
  }

  removeBoxTargetAt(point: Point): void {
    this.boxTargets = this.boxTargets.filter(boxTargetPoint => !boxTargetPoint.equals(point));
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
    return this.isPlaceablePoint(point) && !this.hasBoxAt(point) && !this.hasBoxTargetAt(point) && !this.hasPlayerAt(point);
  }

  canPlaceBoxTargetAt(point: Point) {
    return this.isPlaceablePoint(point) && !this.hasBoxAt(point) && !this.hasBoxTargetAt(point);
  }

  canPlacePlayerAt(point: Point) {
    return this.isPlaceablePoint(point) && !this.hasBoxAt(point) && !this.hasPlayerAt(point);
  }

  isPlaceablePoint(point: Point) {
    const tileAtPoint = this.getTileAt(point);
    return tileAtPoint && !tileAtPoint.solid;
  }
}
