import {Component, Input, OnInit} from '@angular/core';
import EditableSokobanMap from "../../../data/EditableSokobanMap";
import Point from "../../../data/Point";

@Component({
  selector: 'app-box-change',
  templateUrl: './box-change.component.html',
  styleUrls: ['./box-change.component.scss']
})
export class BoxChangeComponent implements OnInit {
  @Input()
  map: EditableSokobanMap;

  @Input()
  currentPosition: Point;

  constructor() { }

  ngOnInit() {
  }

  currentPositionIsPlaceable(): boolean {
    return this.map.isPlaceablePoint(this.currentPosition)
  }

  canPlaceBoxAtCurrentPosition(): boolean {
    return this.map.canPlaceBoxAt(this.currentPosition)
  }

  hasBoxAtCurrentPosition(): boolean {
    return this.map.hasBoxAt(this.currentPosition);
  }

  addBoxAtCurrentPosition(): void {
    this.map.putBoxAt(this.currentPosition);
  }

  removeBoxAtCurrentPosition(): void {
    this.map.removeBoxAt(this.currentPosition);
  }
}
