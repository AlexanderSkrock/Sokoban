import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Tile from '../../data/Tile';

@Component({
  selector: 'app-tile-selector',
  templateUrl: './tile-selector.component.html',
  styleUrls: ['./tile-selector.component.scss']
})
export class TileSelectorComponent implements OnInit {
  @Input()
  tiles: Tile[];

  @Output()
  selectionChangedEmitter: EventEmitter<Tile>;

  lastSelection: Tile;

  constructor() {
    this.selectionChangedEmitter = new EventEmitter();
  }

  ngOnInit() {
  }

  selectTile(tile: Tile) {
    if (this.lastSelection !== tile) {
      this.lastSelection = tile;
      this.selectionChangedEmitter.emit(tile);
    }
  }
}
