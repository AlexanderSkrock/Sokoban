import { Injectable } from '@angular/core';
import Renderable from "../util/Renderable";
import RenderJob from "../util/RenderJob";

@Injectable({
  providedIn: 'root'
})
export class RenderService<T extends RenderingContext> {
  private renderJobs: RenderJob<T>[];

  constructor() {
    this.renderJobs = [];
  }

  createRenderJob(renderContext: T, renderable: Renderable<T> = undefined): RenderJob<T> {
    const job = new RenderJob(renderContext, renderable);
    this.renderJobs.push(job);
    return job;
  }

  deleteRenderJob(jobToDelete: RenderJob<T>) {
    jobToDelete.stopRendering();
    this.renderJobs.filter(job => job !== jobToDelete);
  }
}
