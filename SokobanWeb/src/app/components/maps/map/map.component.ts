import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';
import SokobanMap from "../../../data/SokobanMap";
import {RenderService} from "../../../services/render.service";
import {createRenderableFromSokobanMap} from "../../../util/MapRenderable";
import RenderJob from "../../../util/RenderJob";
import Renderable from "../../../util/Renderable";
import {RenderDirective} from "../../../directives/render.directive";

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
export class MapComponent {
  @Input('map') set setMap(map: SokobanMap) {
    this.map = map;
    this.mapRenderable = createRenderableFromSokobanMap(map);
  }

  @Input()
  size: SIZE;

  map: SokobanMap;
  mapRenderable: Renderable<CanvasRenderingContext2D>;
  renderTimeout = RenderDirective.RENDER_ONCE;

  constructor() { }
}
