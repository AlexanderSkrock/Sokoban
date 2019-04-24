import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MapService} from "../../services/map.service";
import SokobanMap from "../../data/SokobanMap";
import PlayableSokobanMap from "../../data/PlayableSokobanMap";
import {RenderService} from "../../services/render.service";
import RenderJob from "../../util/RenderJob";
import {createRenderableFromSokobanMap} from "../../util/MapRenderable";
import {EAST, NORTH, SOUTH, WEST} from "../../data/Direction";
import _ from "../../../../node_modules/lodash";
import Renderable from "../../util/Renderable";

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
export class GameComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  canvas: ElementRef;

  maps: SokobanMap[];
  currentMap: PlayableSokobanMap;
  mapRenderable: Renderable<CanvasRenderingContext2D>;
  renderTimeout = 250;

  constructor(private mapService: MapService) {
    this.maps = [];
  }

  ngOnInit() {
    this.mapService.getMaps().subscribe(maps => this.maps = maps)
  }

  ngAfterViewInit() {
    this.setCanvasSize();
  }

  setCurrentMap(map: SokobanMap) {
    const mapClone = _.cloneDeep(map);
    this.currentMap = new PlayableSokobanMap(mapClone);
    this.mapRenderable = createRenderableFromSokobanMap(this.currentMap);
    this.setCanvasSize();
  }

  setCanvasSize() {
    if(this.canvas && this.currentMap) {
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
      case (KEY.UP): { direction = NORTH; break }
      case (KEY.DOWN): { direction = SOUTH; break }
      case (KEY.LEFT): { direction = WEST; break }
      case (KEY.RIGHT): { direction = EAST; break }
    }
    if(direction) {
      this.currentMap.translatePlayer(direction);
      if(this.currentMap.checkWinningCondition()) {
        alert("Gewonnen");
        // TODO
      }
    }
  }
}
