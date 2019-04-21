import { Component, OnInit } from '@angular/core';
import Tile from '../../data/Tile';
import {TileService} from '../../services/tile.service';

@Component({
  selector: 'app-tile-editor',
  templateUrl: './tile-editor.component.html',
  styleUrls: ['./tile-editor.component.scss']
})
export class TileEditorComponent implements OnInit {
  static createNewTilePlaceholder(): Tile {
    const placeholder = new Tile();
    placeholder.sprite = '../../../favicon.ico';
    return placeholder;
  }

  tiles: Tile[];
  currentTile: Tile;

  constructor(private tileService: TileService) {
    this.tiles = [ TileEditorComponent.createNewTilePlaceholder() ];
    this.loadTiles();
  }

  ngOnInit() {
  }

  setCurrentTile(tile: Tile): void {
    if(!tile) {
      this.currentTile = undefined;
    } else {
      const duplicate = new Tile();
      duplicate.id = tile.id;
      duplicate.name = tile.name;
      duplicate.solid = tile.solid;
      duplicate.sprite = tile.sprite;
      this.currentTile = duplicate;
    }
  }

  loadTiles(): void {
    this.tileService.getTiles().subscribe(tiles => {
      if (tiles) {
        this.tiles = [ ...tiles, TileEditorComponent.createNewTilePlaceholder() ];
      } else {
        this.tiles = [ TileEditorComponent.createNewTilePlaceholder() ];
      }
      this.setCurrentTile(undefined);
    });
  }
}
