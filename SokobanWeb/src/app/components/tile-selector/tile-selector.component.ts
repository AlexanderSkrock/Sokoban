import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Tile from '../../data/Tile';
import {TILE_SIZES} from "../tile/tile.component";

@Component({
  selector: 'app-tile-selector',
  templateUrl: './tile-selector.component.html',
  styleUrls: ['./tile-selector.component.scss']
})
export class TileSelectorComponent implements OnInit {
  @Input()
  tiles: Tile[];

  @Output()
  selection: EventEmitter<Tile>;

  tileSize = TILE_SIZES.SMALL;

  constructor() {
    this.selection = new EventEmitter();
  }

  ngOnInit() {
  }

  selectTile(tile: Tile) {
    this.selection.emit(tile);
  }
}
