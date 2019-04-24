import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import Point from "../../../data/Point";
import EditableSokobanMap from "../../../data/EditableSokobanMap";
import {RenderService} from "../../../services/render.service";
import {createRenderableFromSokobanMap} from "../../../util/MapRenderable";
import {MapService} from "../../../services/map.service";
import SokobanMap from "../../../data/SokobanMap";
import _ from "../../../../../node_modules/lodash"
import Tile from "../../../data/Tile";
import RenderJob from "../../../util/RenderJob";
import Renderable from "../../../util/Renderable";

@Component({
  selector: 'app-map-workspace',
  templateUrl: './map-workspace.component.html',
  styleUrls: ['./map-workspace.component.scss']
})
export class MapWorkspaceComponent implements AfterViewInit {
  @Input('map') set setMap(map: SokobanMap) {
    const mapClone = _.cloneDeep(map);
    this.map = new EditableSokobanMap(mapClone);
    this.setCanvasSize();
    this.mapRenderable = createRenderableFromSokobanMap(this.map);
  }

  @Input()
  tiles: Tile[];

  @Output()
  onSave: EventEmitter<SokobanMap>;

  @Output()
  onDelete: EventEmitter<SokobanMap>;

  @ViewChild('canvas')
  canvas: ElementRef;

  map: EditableSokobanMap;
  currentSelection: Point;
  mapRenderable: Renderable<CanvasRenderingContext2D>;
  renderTimeout: 500;

  constructor(private mapService: MapService) {
    this.onSave = new EventEmitter();
    this.onDelete = new EventEmitter();
  }

  ngAfterViewInit(): void {
    this.setCanvasSize();
  }

  setCanvasSize() {
    if(this.canvas && this.map) {
      const tileSize = 64;
      const canvasElement = this.canvas.nativeElement;
      canvasElement.width = this.map.getWidth() * tileSize;
      canvasElement.height = this.map.getHeight() * tileSize;
    }
  }

  handleCanvasClick(event: MouseEvent): void {
    const computed = getComputedStyle(this.canvas.nativeElement);
    const computedCanvasWidth = parseFloat(computed.getPropertyValue("width"));
    const computedCanvasHeight = parseFloat(computed.getPropertyValue("height"));
    const tileX = Math.trunc(this.map.getWidth() * event.offsetX / computedCanvasWidth);
    const tileY = Math.trunc(this.map.getHeight() * event.offsetY / computedCanvasHeight);
    this.currentSelection = new Point(tileX, tileY);
  }

  emitSave() {
    this.onSave.emit(this.map);
  }

  emitDelete() {
    this.onDelete.emit(this.map);
  }
}
