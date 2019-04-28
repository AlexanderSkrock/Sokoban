import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {MapService} from "../../services/map.service";
import SokobanMap from "../../data/SokobanMap";
import PlayableSokobanMap from "../../data/PlayableSokobanMap";
import {createRenderableFromSokobanMap} from "../../util/MapRenderable";
import {EAST, NORTH, SOUTH, WEST} from "../../data/Direction";
import _ from "../../../../node_modules/lodash";
import Renderable from "../../util/Renderable";
import {GameElementService} from "../../services/game-element.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  @ViewChild('gameWonDialog')
  gameWonDialog: ElementRef;

  maps: SokobanMap[];
  currentMap: PlayableSokobanMap;
  mapRenderable: Renderable<CanvasRenderingContext2D>;
  renderTimeout = 250;

  playerImage: CanvasImageSource;
  boxImage: CanvasImageSource;
  boxTargetImage: CanvasImageSource;

  hideMapSelector = false;

  helpTitle: string = "Hilfe zur Spielen-Übersicht";
  helpText: string = "Über die obere Übersicht kann eine der bereits erstellten Maps ausgewählt werden. Das Spiel wird durch einfaches Anklicken der jeweiligen Map gestartet. Während des Spiels kann die Spielfigur mittels der Pfeiltasten bewegt werden.";

  constructor(private mapService: MapService, private gameElementService: GameElementService, private modalService: NgbModal) {
    this.maps = [];
  }

  ngOnInit() {
    this.mapService.getMaps().subscribe(maps => this.maps = maps);
    this.playerImage = this.gameElementService.getPlayerImage();
    this.boxImage= this.gameElementService.getBoxImage();
    this.boxTargetImage = this.gameElementService.getBoxTargetImage();
    this.buildRenderable();
  }

  ngAfterViewInit() {
    this.setCanvasSize();
  }

  setCurrentMap(map: SokobanMap) {
    const mapClone = _.cloneDeep(map);
    this.currentMap = new PlayableSokobanMap(mapClone);
    this.buildRenderable();
    this.setCanvasSize();
    this.hideMapSelector = true;
  }

  buildRenderable(): void {
    this.mapRenderable = createRenderableFromSokobanMap(this.currentMap, this.playerImage, this.boxImage, this.boxTargetImage);
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
    if(!this.currentMap) {
      return;
    }

    let direction;
    switch (event.key) {
      case (KEY.UP): { direction = NORTH; event.preventDefault(); break }
      case (KEY.DOWN): { direction = SOUTH; event.preventDefault(); break }
      case (KEY.LEFT): { direction = WEST; event.preventDefault(); break }
      case (KEY.RIGHT): { direction = EAST; event.preventDefault(); break }
    }
    if(direction) {
      this.currentMap.translatePlayer(direction);
      if(this.currentMap.checkWinningCondition() && !this.modalService.hasOpenModals()) {
        this.modalService.open(this.gameWonDialog, {
          size: "lg"
        });
      }
    }
  }

  endGame(): void {
    this.currentMap = undefined;
    this.hideMapSelector = false;
  }

  handleMapSelectorToggle(): void {
    this.hideMapSelector = !this.hideMapSelector;
  }

  checkWinningCondition(): boolean {
    return this.currentMap && this.currentMap.checkWinningCondition()
  }

  closeGameWinDialog(modal) {
    modal.close();
    this.endGame();
  }
}
