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
  @Input()
  map: SokobanMap;

  @Input()
  size: SIZE;

  @ViewChild('canvas')
  canvas: ElementRef;

  constructor(private mapRenderService: RenderService) { }

  ngAfterViewInit() {
    const renderContext = this.canvas.nativeElement.getContext('2d');
    this.mapRenderService.initArea(renderContext, createRenderableFromSokobanMap(this.map));
    this.mapRenderService.render();
  }
}
