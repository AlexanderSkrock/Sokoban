import { Component, OnInit } from '@angular/core';
import Tile from '../../data/Tile';
import {TileService} from '../../services/tile.service';
import _ from "../../../../node_modules/lodash";

@Component({
  selector: 'app-tile-editor',
  templateUrl: './tile-editor.component.html',
  styleUrls: ['./tile-editor.component.scss']
})
export class TileEditorComponent implements OnInit {
  static NEW_TILE_PLACEHOLDER = TileEditorComponent.createNewTilePlaceholder();
  static createNewTilePlaceholder(): Tile {
    const placeholder = new Tile();
    placeholder.sprite = '../../../assets/add-icon.svg';
    return placeholder;
  }

  tiles: Tile[];
  currentTile: Tile;

  helpTitle: string = "Hilfe zum Tile-Editor";
  helpText: string = "Hier können über das '+' neue Tiles erstellt werden. Bereits erstellte Tiles können durch einfaches Anklicken in der Übersicht bearbeitet werden.";

  constructor(private tileService: TileService) {
    this.tiles = [ TileEditorComponent.NEW_TILE_PLACEHOLDER ];
  }

  ngOnInit() {
    this.loadTiles();
  }

  setCurrentTile(tile: Tile): void {
    if(tile === TileEditorComponent.NEW_TILE_PLACEHOLDER) {
      this.currentTile = new Tile();
    } else {
      this.currentTile = _.cloneDeep(tile);
    }
  }

  loadTiles(): void {
    this.tileService.getTiles().subscribe(tiles => {
      if (tiles) {
        this.tiles = [ ...tiles, TileEditorComponent.NEW_TILE_PLACEHOLDER ];
      } else {
        this.tiles = [ TileEditorComponent.NEW_TILE_PLACEHOLDER ];
      }
      this.setCurrentTile(undefined);
    });
  }

  saveTile(tile: Tile): void {
    if (tile) {
      this.tileService.putTile(tile).subscribe(() => this.loadTiles());
    }
  }

  deleteTile(tile: Tile): void {
    if (tile && tile.id) {
      this.tileService.deleteTile(tile.id).subscribe(() => this.loadTiles());
    }
  }
}
