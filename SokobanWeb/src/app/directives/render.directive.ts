import {AfterViewInit, Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {RenderService} from "../services/render.service";
import RenderJob from "../util/RenderJob";
import Renderable from "../util/Renderable";

@Directive({
  selector: '[appRender]'
})
export class RenderDirective<T extends RenderingContext> implements AfterViewInit, OnDestroy {
  static RENDER_ONCE = -1;

  @Input('appRender') set setRenderable(renderable: Renderable<RenderingContext>) {
    this.renderable = renderable;
    if (this.renderJob) {
      this.renderJob.setRenderable(renderable);
      if (this.renderTimeout <= RenderDirective.RENDER_ONCE){
        this.renderJob.renderOnce();
      }
    }
  }

  @Input('renderTimeout') set setRenderTimeout(renderTimeout: number) {
    if(this.renderTimeout != renderTimeout) {
      this.renderTimeout = renderTimeout;
      this.render();
    }
  }

  renderable: Renderable<T>;
  renderTimeout: number;
  renderJob: RenderJob<T>;

  constructor(private elementRef: ElementRef, private renderService: RenderService<T>) { }

  ngAfterViewInit(): void {
    const context = this.elementRef.nativeElement.getContext('2d');
    this.renderJob = this.renderService.createRenderJob(context, this.renderable);
    this.render();
  }

  ngOnDestroy(): void {
    this.renderService.deleteRenderJob(this.renderJob);
  }

  render(): void {
    if(!this.renderJob) {
      return;
    }
    this.renderJob.stopRendering();
    if (this.renderTimeout <= RenderDirective.RENDER_ONCE) {
      this.renderJob.renderOnce();
    } else {
      this.renderJob.startRendering(this.renderTimeout);
    }
  }
}
