import {Component, Input, OnInit} from '@angular/core';
import Tile from '../../data/Tile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input()
  tile: Tile;

  constructor() { }

  ngOnInit() {
  }

}
