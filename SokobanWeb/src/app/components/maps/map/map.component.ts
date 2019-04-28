import {Component, Input, OnInit} from '@angular/core';
import SokobanMap from "../../../data/SokobanMap";
import {createRenderableFromSokobanMap} from "../../../util/MapRenderable";
import Renderable from "../../../util/Renderable";
import {GameElementService} from "../../../services/game-element.service";
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
export class MapComponent implements OnInit {
  @Input('map') set setMap(map: SokobanMap) {
    this.map = map;
    this.buildRenderable();
  }
  @Input()
  size: SIZE;

  playerImage: CanvasImageSource;

  boxImage: CanvasImageSource;
  boxTargetImage: CanvasImageSource;
  map: SokobanMap;

  mapRenderable: Renderable<CanvasRenderingContext2D>;
  renderTimeout = 500; // RenderDirective.RENDER_ONCE;
  constructor(private gameElementService: GameElementService) { }

  ngOnInit(): void {
    this.playerImage = this.gameElementService.getPlayerImage();
    this.boxImage = this.gameElementService.getBoxImage();
    this.boxTargetImage = this.gameElementService.getBoxTargetImage();
    this.buildRenderable();
  }

  buildRenderable() {
    this.mapRenderable = createRenderableFromSokobanMap(this.map, this.playerImage, this.boxImage, this.boxTargetImage);
  }
}
