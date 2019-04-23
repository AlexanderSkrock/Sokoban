import { Injectable } from '@angular/core';
import Renderable from "../data/Renderable";

@Injectable({
  providedIn: 'root'
})
export class RenderService<T extends RenderingContext> {
  renderContext: T;
  renderable: Renderable<T>;

  constructor() { }

  initRenderService(renderContext: T, renderable: Renderable<T>) {
    this.setRenderContext(renderContext);
    this.setRenderable(renderable);
  }

  setRenderContext(renderContext: T) {
    this.renderContext = renderContext;
  }

  setRenderable(renderable: Renderable<T>) {
    this.renderable = renderable;
  }

  startRendering(timeout: number = 1000) {
    setInterval(() => this.render(), timeout);
  }

  render() {
    if(!this.renderContext) {
      return;
    }
    this.renderable.render(this.renderContext);
  }
}
