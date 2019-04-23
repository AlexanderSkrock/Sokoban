import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import SokobanMap from "../../../data/SokobanMap";
import {RenderService} from "../../../services/render.service";
import {createRenderableFromSokobanMap} from "../../../data/MapRenderable";

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
export class MapComponent implements AfterViewInit {
  @Input('map') set setMap(map: SokobanMap) {
    this.map = map;
    this.mapRenderService.setRenderable(createRenderableFromSokobanMap(this.map));
    // this.mapRenderService.render();
  }

  @Input()
  size: SIZE;

  @ViewChild('canvas')
  canvas: ElementRef;

  map: SokobanMap;

  constructor(private mapRenderService: RenderService<CanvasRenderingContext2D>) { }

  ngAfterViewInit() {
    const renderContext = this.canvas.nativeElement.getContext('2d');
    this.mapRenderService.initRenderService(renderContext, createRenderableFromSokobanMap(this.map));
    this.mapRenderService.startRendering();
  }
}
