import {Component, Input, OnInit} from '@angular/core';
import EditableSokobanMap from "../../../data/EditableSokobanMap";
import Point from "../../../data/Point";

@Component({
  selector: 'app-box-target-change',
  templateUrl: './box-target-change.component.html',
  styleUrls: ['./box-target-change.component.scss']
})
export class BoxTargetChangeComponent implements OnInit {
  @Input()
  map: EditableSokobanMap;

  @Input()
  currentPosition: Point;

  constructor() { }

  ngOnInit() {
  }


  currentPositionIsPlaceable(): boolean {
    return this.map.isPlaceablePoint(this.currentPosition);
  }

  canPlaceBoxTargetAtCurrentPosition(): boolean {
    return this.map.canPlaceCollectibleAt(this.currentPosition);
  }

  hasBoxTargetAtCurrentPosition(): boolean {
    return this.map.hasCollectibleAt(this.currentPosition);
  }

  addBoxTargetAtCurrentPosition(): void {
    this.map.putCollectibleAt(this.currentPosition);
  }

  removeBoxTargetAtCurrentPosition(): void {
    this.map.removeCollectibleAt(this.currentPosition);
  }
}
