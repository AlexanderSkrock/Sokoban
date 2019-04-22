import { Injectable } from '@angular/core';
import SokobanMap from "../data/SokobanMap";
import EditableSokobanMap from "../data/EditableSokobanMap";
import Point from "../data/Point";

@Injectable({
  providedIn: 'root'
})
export class MapRenderService {
  static TILE_SIZE = 64;

  map: SokobanMap;
  renderContext: CanvasRenderingContext2D;

  constructor() { }

  initArea(canvasElement: HTMLCanvasElement, map: SokobanMap) {
    this.map = map;
    this.renderContext = canvasElement.getContext('2d');
    canvasElement.width = this.map.getWidth() * MapRenderService.TILE_SIZE;
    canvasElement.height = this.map.getHeight() * MapRenderService.TILE_SIZE;
  }

  startRendering(): void {
    setInterval(() => {
      this.clear();
      this.renderTiles();
      this.renderBoxes();
      this.renderCollectibles();
      this.renderPlayer();
    }, 1000);
  }

  renderAt(drawable, point: Point) {
    const x = point.x * MapRenderService.TILE_SIZE;
    const y = point.y * MapRenderService.TILE_SIZE;
    this.renderContext.drawImage(drawable, x, y, MapRenderService.TILE_SIZE, MapRenderService.TILE_SIZE);
  }

  clear(): void {
    this.renderContext.clearRect(0, 0, this.renderContext.canvas.width, this.renderContext.canvas.height);
  }

  renderTiles(): void {
    for (let i = 0; i < this.map.getHeight(); i++) {
      for (let j = 0; j < this.map.getWidth(); j++) {
        const tile = this.map.getTileAt(new Point(i, j));
        if (tile) {
          const image = new Image();
          image.src = tile.sprite;
          this.renderAt(image, new Point(j, i))
        }
      }
    }
  }

  renderBoxes(): void {
    this.map.boxes.forEach(boxPosition => {
      const image = new Image();
      image.src = '../favicon.ico';
      this.renderAt(image, boxPosition);
    });
  }

  renderCollectibles(): void {
    this.map.boxes.forEach(boxPosition => {
      const image = new Image();
      image.src = '../favicon.ico';
      this.renderAt(image, boxPosition);
    });
  }

  renderPlayer(): void {
    const image = new Image();
    image.src = '../favicon.ico';
    this.renderAt(image, this.map.playerStartPosition);
  }
}
