import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import SokobanMap from "../../../data/SokobanMap";
import {RenderService} from "../../../services/render.service";
import {createRenderableFromSokobanMap} from "../../../data/MapRenderable";
import RenderJob from "../../../data/RenderJob";

enum SIZE {
  SMALL = "map-small",
  MEDIUM = "map-medium",
  BIG = "map-big"
}
export const MAP_SIZES = SIZE;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @Input('map') set setMap(map: SokobanMap) {
    this.map = map;
    if(this.renderJob) {
      this.renderJob.setRenderable(createRenderableFromSokobanMap(this.map));
    }
  }

  @Input()
  size: SIZE;

  @ViewChild('canvas')
  canvas: ElementRef;

  map: SokobanMap;

  renderJob: RenderJob<CanvasRenderingContext2D>;

  constructor(private mapRenderService: RenderService<CanvasRenderingContext2D>) { }

  ngAfterViewInit() {
    const renderContext = this.canvas.nativeElement.getContext('2d');
    this.renderJob = this.mapRenderService.createRenderJob(renderContext, createRenderableFromSokobanMap(this.map));
    this.renderJob.startRendering();
  }

  ngOnDestroy(): void {
    this.mapRenderService.deleteRenderJob(this.renderJob);
  }
}
