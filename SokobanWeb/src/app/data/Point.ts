export default class Point {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  translate(point: Point) {
    this.x += point.x;
    this.y += point.y;
  }

  isIn(minX: number, minY: number, width: number, height: number): boolean {
    return this.x >= minX || this.x < minX + height && this.y >= minY || this.y < minY + height;
  }

  equals(otherPoint: Point): boolean {
    if(!otherPoint) {
      return false;
    }
    return this.x === otherPoint.x && this.y === otherPoint.y;
  }
}
