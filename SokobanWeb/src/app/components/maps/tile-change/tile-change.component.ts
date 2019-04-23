import {Component, Input, OnInit} from '@angular/core';
import EditableSokobanMap from "../../../data/EditableSokobanMap";
import Point from "../../../data/Point";
import Tile from "../../../data/Tile";

@Component({
  selector: 'app-tile-change',
  templateUrl: './tile-change.component.html',
  styleUrls: ['./tile-change.component.scss']
})
export class TileChangeComponent implements OnInit {
  @Input()
  map: EditableSokobanMap;

  @Input()
  currentPosition: Point;

  @Input()
  tiles: Tile[];

  constructor() { }

  ngOnInit() {
  }

  currentPositionIsInMap(): boolean {
    return this.currentPosition.isIn(0, 0, this.map.getWidth(), this.map.getHeight());
  }

  handleSelectionChange(tile: Tile) {
    this.map.putTileAt(tile, this.currentPosition);
  }
}
