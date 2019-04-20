import { Component, OnInit } from '@angular/core';
import Tile from '../../data/Tile';
import {TileService} from '../../services/tile.service';

@Component({
  selector: 'app-tile-editor',
  templateUrl: './tile-editor.component.html',
  styleUrls: ['./tile-editor.component.scss']
})
export class TileEditorComponent implements OnInit {
  tiles: Tile[];
  currentTile: Tile;
  newTilePlaceholder: Tile;

  constructor(private tileService: TileService) {
    this.newTilePlaceholder = new Tile();
    this.newTilePlaceholder.sprite = '../../../favicon.ico';
    this.tiles = [ this.newTilePlaceholder ];
    this.loadTiles();
  }

  ngOnInit() {
  }

  setCurrentTile(tile: Tile): void {
    this.currentTile = tile;
  }

  loadTiles(): void {
    this.tileService.getTiles().subscribe(tiles => {
      if (tiles) {
        this.tiles = [ ...tiles, this.newTilePlaceholder ];
      } else {
        this.tiles = [ this.newTilePlaceholder ];
      }
    });
  }
}
