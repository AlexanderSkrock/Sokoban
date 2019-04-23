import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MapService} from "../../services/map.service";
import SokobanMap from "../../data/SokobanMap";
import PlayableSokobanMap from "../../data/PlayableSokobanMap";
import {RenderService} from "../../services/render.service";
import RenderJob from "../../util/RenderJob";
import {createRenderableFromSokobanMap} from "../../util/MapRenderable";
import {EAST, NORTH, SOUTH, WEST} from "../../data/Direction";
import _ from "../../../../node_modules/lodash";

enum KEY {
  LEFT = 'ArrowLeft',
  UP = 'ArrowUp',
  RIGHT = 'ArrowRight',
  DOWN = 'ArrowDown',
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas')
  canvas: ElementRef;

  maps: SokobanMap[];
  currentMap: PlayableSokobanMap;
  renderJob: RenderJob<CanvasRenderingContext2D>;

  constructor(private mapService: MapService, private renderService: RenderService<CanvasRenderingContext2D>) {
    this.maps = [];
  }

  ngOnInit() {
    this.mapService.getMaps().subscribe(maps => this.maps = maps)
  }

  ngAfterViewInit() {
    const context = this.canvas.nativeElement.getContext('2d');
    const renderable = this.currentMap ? createRenderableFromSokobanMap(this.currentMap) : undefined;
    this.renderJob = this.renderService.createRenderJob(context, renderable);
    this.renderJob.startRendering(500);
  }

  ngOnDestroy() {
    this.renderService.deleteRenderJob(this.renderJob);
  }

  setCurrentMap(map: SokobanMap) {
    const mapClone = _.cloneDeep(map);
    this.currentMap = new PlayableSokobanMap(mapClone);
    if (this.renderJob) {
      this.renderJob.setRenderable(createRenderableFromSokobanMap(this.currentMap));
    }
    if(this.canvas) {
      const tileSize = 64;
      const canvasElement = this.canvas.nativeElement;
      canvasElement.width = this.currentMap.getWidth() * tileSize;
      canvasElement.height = this.currentMap.getHeight() * tileSize;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyEvent(event: KeyboardEvent) {
    let direction;
    switch (event.key) {
      case (KEY.UP): { direction = NORTH; break; }
      case (KEY.DOWN): { direction = SOUTH; break; }
      case (KEY.LEFT): { direction = WEST; break; }
      case (KEY.RIGHT): { direction = EAST; break; }
    }
    if(direction) {
      this.currentMap.translatePlayer(direction);
      if(this.currentMap.checkWinningCondition()) {
        // TODO
      }
    }
  }
}
