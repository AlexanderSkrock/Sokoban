import Renderable from "./Renderable";
import SokobanMap from "../data/SokobanMap";
import Point from "../data/Point";

export function createRenderableFromSokobanMap(map: SokobanMap): Renderable<CanvasRenderingContext2D> {
  return new MapRenderable(map);
}

class MapRenderable implements Renderable<CanvasRenderingContext2D> {
  constructor(private map: SokobanMap) { }

  render(renderContext: CanvasRenderingContext2D): void {
    this.clear(renderContext);
    this.renderTiles(renderContext);
    this.renderBoxes(renderContext);
    this.renderCollectibles(renderContext);
    this.renderPlayer(renderContext);
  }

  renderAt(renderContext: CanvasRenderingContext2D, drawable, point: Point) {
    const computed = getComputedStyle(renderContext.canvas);
    const computedCanvasWidth = parseFloat(computed.getPropertyValue("width"));
    const computedCanvasHeight = parseFloat(computed.getPropertyValue("height"));
    const sizeX = computedCanvasWidth / this.map.getWidth();
    const sizeY = computedCanvasHeight / this.map.getHeight();
    const x = point.x * sizeX;
    const y = point.y * sizeY;
    renderContext.drawImage(drawable, x, y, sizeX, sizeY);
  }

  clear(renderContext: CanvasRenderingContext2D): void {
    renderContext.clearRect(0, 0, renderContext.canvas.width, renderContext.canvas.height);
  }

  renderTiles(renderContext: CanvasRenderingContext2D): void {
    for (let i = 0; i < this.map.getHeight(); i++) {
      for (let j = 0; j < this.map.getWidth(); j++) {
        const tilePosition = new Point(j, i);
        const tile = this.map.getTileAt(tilePosition);
        if (tile && tile.sprite) {
          const image = new Image();
          image.src = tile.sprite;
          this.renderAt(renderContext, image, tilePosition)
        }
      }
    }
  }

  renderBoxes(renderContext: CanvasRenderingContext2D): void {
    this.map.boxes.forEach(boxPosition => {
      const image = new Image();
      image.src = '../../assets/favicon.ico';
      this.renderAt(renderContext, image, boxPosition);
    });
  }

  renderCollectibles(renderContext: CanvasRenderingContext2D): void {
    this.map.collectibles.forEach(collectiblePosition => {
      const image = new Image();
      image.src = '../../assets/favicon.ico';
      this.renderAt(renderContext, image, collectiblePosition);
    });
  }

  renderPlayer(renderContext: CanvasRenderingContext2D): void {
    if(this.map.playerPosition) {
      const image = new Image();
      image.src = '../../assets/favicon.ico';
      this.renderAt(renderContext, image, this.map.playerPosition);
    }
  }
}
