import {Component, Input, OnInit} from '@angular/core';
import EditableSokobanMap from "../../../data/EditableSokobanMap";
import Point from "../../../data/Point";

@Component({
  selector: 'app-player-change',
  templateUrl: './player-change.component.html',
  styleUrls: ['./player-change.component.scss']
})
export class PlayerChangeComponent {
  @Input()
  map: EditableSokobanMap;

  @Input()
  currentPosition: Point;

  constructor() { }

  canPlacePlayerAtCurrentPosition(): boolean {
    return this.map.canPlacePlayerAt(this.currentPosition);
  }

  hasPlayerAtCurrentPosition(): boolean {
    return this.map.hasPlayerAt(this.currentPosition)
  }

  putPlayerAtCurrentPosition(): void {
    this.map.placePlayer(this.currentPosition);
  }

  removePlayer(): void {
    this.map.removePlayer();
  }
}
