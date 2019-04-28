import Renderable from "./Renderable";
import SokobanMap from "../data/SokobanMap";
import Point from "../data/Point";

export function createRenderableFromSokobanMap(map: SokobanMap, playerImage: CanvasImageSource, boxImage: CanvasImageSource, boxTargetImage: CanvasImageSource): Renderable<CanvasRenderingContext2D> {
  return new MapRenderable(map, playerImage, boxImage, boxTargetImage);
}

class MapRenderable implements Renderable<CanvasRenderingContext2D> {
  constructor(private map: SokobanMap, private playerImage: CanvasImageSource, private boxImage: CanvasImageSource, private boxTargetImage: CanvasImageSource) { }

  render(renderContext: CanvasRenderingContext2D): void {
    this.clear(renderContext);
    this.renderTiles(renderContext);
    this.renderBoxTargets(renderContext);
    this.renderBoxes(renderContext);
    this.renderPlayer(renderContext);
  }

  renderAt(renderContext: CanvasRenderingContext2D, drawable, point: Point) {
    if (!renderContext || !drawable) {
      return;
    }
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
    if(renderContext) {
      renderContext.clearRect(0, 0, renderContext.canvas.width, renderContext.canvas.height);
    }
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
      this.renderAt(renderContext, this.boxImage, boxPosition);
    });
  }

  renderBoxTargets(renderContext: CanvasRenderingContext2D): void {
    this.map.boxTargets.forEach(collectiblePosition => {
      this.renderAt(renderContext, this.boxTargetImage, collectiblePosition);
    });
  }

  renderPlayer(renderContext: CanvasRenderingContext2D): void {
    if(this.map.playerPosition) {
      this.renderAt(renderContext, this.playerImage, this.map.playerPosition);
    }
  }
}
