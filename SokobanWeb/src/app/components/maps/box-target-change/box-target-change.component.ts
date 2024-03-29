import {Component, Input, OnInit} from '@angular/core';
import EditableSokobanMap from "../../../data/EditableSokobanMap";
import Point from "../../../data/Point";

@Component({
  selector: 'app-box-target-change',
  templateUrl: './box-target-change.component.html',
  styleUrls: ['./box-target-change.component.scss']
})
export class BoxTargetChangeComponent {
  @Input()
  map: EditableSokobanMap;

  @Input()
  currentPosition: Point;

  constructor() { }

  canPlaceBoxTargetAtCurrentPosition(): boolean {
    return this.map.canPlaceBoxTargetAt(this.currentPosition);
  }

  hasBoxTargetAtCurrentPosition(): boolean {
    return this.map.hasBoxTargetAt(this.currentPosition);
  }

  addBoxTargetAtCurrentPosition(): void {
    this.map.putBoxTargetAt(this.currentPosition);
  }

  removeBoxTargetAtCurrentPosition(): void {
    this.map.removeBoxTargetAt(this.currentPosition);
  }
}
