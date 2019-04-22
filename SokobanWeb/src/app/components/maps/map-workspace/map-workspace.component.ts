import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MapRenderService} from "../../../services/map-render.service";
import Point from "../../../data/Point";
import EditableSokobanMap from "../../../data/EditableSokobanMap";

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

  constructor(private mapRenderService: MapRenderService) { }

  ngAfterViewInit() {
    const canvasElement = this.canvas.nativeElement;
    this.mapRenderService.initArea(canvasElement, this.map);
    this.mapRenderService.startRendering();
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
