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
    this.renderContext = renderContext;
    this.renderable = renderable;
  }

  startRendering(timeout: number = 1000) {
    setInterval(() => this.render(), timeout);
  }

  render() {
    this.renderable.render(this.renderContext);
  }
}
