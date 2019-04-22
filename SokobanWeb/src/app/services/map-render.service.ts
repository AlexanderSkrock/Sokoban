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
    }, 600);
  }

  renderAt(drawable, point: Point) {
    const computed = getComputedStyle(this.renderContext.canvas);
    const computedCanvasWidth = parseFloat(computed.getPropertyValue("width"));
    const computedCanvasHeight = parseFloat(computed.getPropertyValue("height"));
    const sizeX = computedCanvasWidth / this.map.getWidth();
    const sizeY = computedCanvasHeight / this.map.getHeight();
    const x = point.x * sizeX;
    const y = point.y * sizeY;
    this.renderContext.drawImage(drawable, x, y, sizeX, sizeY);
  }

  clear(): void {
    this.renderContext.clearRect(0, 0, this.renderContext.canvas.width, this.renderContext.canvas.height);
  }

  renderTiles(): void {
    for (let i = 0; i < this.map.getHeight(); i++) {
      for (let j = 0; j < this.map.getWidth(); j++) {
        const tilePosition = new Point(j, i);
        const tile = this.map.getTileAt(tilePosition);
        if (tile) {
          const image = new Image();
          image.src = tile.sprite;
          this.renderAt(image, tilePosition)
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
    this.map.collectibles.forEach(collectiblePosition => {
      const image = new Image();
      image.src = '../favicon.ico';
      this.renderAt(image, collectiblePosition);
    });
  }

  renderPlayer(): void {
    if(this.map.playerPosition) {
      const image = new Image();
      image.src = '../favicon.ico';
      this.renderAt(image, this.map.playerPosition);
    }
  }
}
