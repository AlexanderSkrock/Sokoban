import Renderable from "./Renderable";

export default class RenderJob<T extends RenderingContext> {
  private jobId;

  constructor(private context: T, private renderable: Renderable<T> = undefined) { }

  startRendering(timeout: number = 1000) {
    if(this.jobId) {
      this.stopRendering();
    }
    this.jobId = setInterval(() => this.renderOnce(), timeout);
  }

  stopRendering() {
    if (this.jobId) {
      clearInterval(this.jobId);
      this.jobId = undefined;
    }
  }

  renderOnce() {
    if (this.renderable && this.context) {
      this.renderable.render(this.context);
    }
  }

  setContext(context: T) {
    this.context = context;
  }

  setRenderable(renderable: Renderable<T>) {
    this.renderable = renderable;
  }
}
