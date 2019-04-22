import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Point from "../../../data/Point";
import EditableSokobanMap from "../../../data/EditableSokobanMap";
import {RenderService} from "../../../services/render.service";
import {createRenderableFromSokobanMap} from "../../../data/MapRenderable";

@Component({
  selector: 'app-map-workspace',
  templateUrl: './map-workspace.component.html',
  styleUrls: ['./map-workspace.component.scss']
})
export class MapWorkspaceComponent implements AfterViewInit {
  @Input()
  map: EditableSokobanMap;

  @ViewChild('canvas')
  canvas: ElementRef;

  currentSelection: Point;

  constructor(private mapRenderService: RenderService<CanvasRenderingContext2D>) { }

  ngAfterViewInit() {
    const tileSize = 64;
    const canvasElement = this.canvas.nativeElement;
    canvasElement.width = this.map.getWidth() * tileSize;
    canvasElement.height = this.map.getHeight() * tileSize;
    const renderContext = canvasElement.getContext('2d');
    this.mapRenderService.initRenderService(renderContext, createRenderableFromSokobanMap(this.map));
    this.mapRenderService.startRendering(600);
  }

  handleCanvasClick(event: MouseEvent): void {
    const computed = getComputedStyle(this.canvas.nativeElement);
    const computedCanvasWidth = parseFloat(computed.getPropertyValue("width"));
    const computedCanvasHeight = parseFloat(computed.getPropertyValue("height"));
    const tileX = Math.trunc(this.map.getWidth() * event.offsetX / computedCanvasWidth);
    const tileY = Math.trunc(this.map.getHeight() * event.offsetY / computedCanvasHeight);
    this.currentSelection = new Point(tileX, tileY);
  }
}
