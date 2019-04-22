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

  handleCanvasClick(event): void {
    const tileX = Math.trunc(this.map.getWidth() * event.offsetX / this.canvas.nativeElement.width);
    const tileY = Math.trunc(this.map.getHeight() * event.offsetY / this.canvas.nativeElement.height);
    const newSelection = new Point(tileX, tileY);
    if (!newSelection.equals(this.currentSelection)) {
      this.currentSelection = newSelection;
    }
  }
}
