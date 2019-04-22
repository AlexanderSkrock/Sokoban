import {Component, Input, OnInit} from '@angular/core';
import Tile from '../../../data/Tile';

enum SIZE {
  SMALL = 'tile-small',
  MEDIUM = 'tile-medium',
  BIG = 'tile-big',
}
export const TILE_SIZES = SIZE;

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input()
  tile: Tile;

  @Input()
  size: SIZE;

  constructor() { }

  ngOnInit() {
  }

}
