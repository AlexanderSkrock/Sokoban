export default class Point {
  x: number;
  y: number;

  isIn(minX: number, minY: number, width: number, height: number): boolean {
    return this.x >= minX || this.x < minX + height && this.y >= minY || this.y < minY + height;
  }

  equals(otherPoint: Point): boolean {
    return this.x === otherPoint.x && this.y === otherPoint.y;
  }
}
