import { Component, OnInit } from '@angular/core';
import SokobanMap from "../../data/SokobanMap";
import {MapService} from "../../services/map.service";
import Tile from "../../data/Tile";
import {create2DArrayWithDefaultValues} from "../../util/Arrays";
import {TileService} from "../../services/tile.service";

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss']
})
export class MapEditorComponent implements OnInit {
  static DEFAULT_MAP_WIDTH = 10;
  static DEFAULT_MAP_HEIGHT = 10;
  static createNewMapPlaceholder(): SokobanMap {
    const map = SokobanMap.createBlankSokobanMap(MapEditorComponent.DEFAULT_MAP_WIDTH, MapEditorComponent.DEFAULT_MAP_HEIGHT);
    map.tiles = create2DArrayWithDefaultValues(MapEditorComponent.DEFAULT_MAP_WIDTH, MapEditorComponent.DEFAULT_MAP_HEIGHT, (i, j) => {
      const result = new Tile();
      if ((j > 1 && j < 8 && (i == 4 || i == 5)) || ((j == 4 || j == 5) && i > 1 && i < 8)) {
        result.sprite = "../../../assets/black.png";
      } else {
        result.sprite = "../../../assets/white.png";
      }
      return result;
    });
    return map;
  }
  static NEW_MAP_PLACEHOLDER = MapEditorComponent.createNewMapPlaceholder();

  maps: SokobanMap[];
  currentMap: SokobanMap;
  hideMapSelector = false;
  tiles: Tile[];

  constructor(private mapService: MapService, private tileService: TileService) {
    this.maps = [ MapEditorComponent.NEW_MAP_PLACEHOLDER ];
    this.tiles = [];
  }

  ngOnInit() {
    this.loadMaps();
    this.loadTiles();
  }

  setCurrentMap(map: SokobanMap) {
    if(map === MapEditorComponent.NEW_MAP_PLACEHOLDER) {
      this.currentMap = SokobanMap.createBlankSokobanMap(MapEditorComponent.DEFAULT_MAP_WIDTH, MapEditorComponent.DEFAULT_MAP_HEIGHT);
    } else {
      this.currentMap = map;
    }
    this.hideMapSelector = true;
  }

  loadTiles(): void {
    this.tileService.getTiles().subscribe(tiles => this.tiles = tiles);
  }

  loadMaps(): void {
    this.mapService.getMaps().subscribe(maps => {
      if (maps) {
        this.maps = [...maps, MapEditorComponent.NEW_MAP_PLACEHOLDER ];
      } else {
        this.maps = [ MapEditorComponent.NEW_MAP_PLACEHOLDER ];
      }
      this.currentMap = undefined;
    });
  }

  saveMap(map: SokobanMap) {
    if (map) {
      this.mapService.putMap(map).subscribe(() => this.loadMaps());
    }
  }

  deleteMap(map: SokobanMap) {
    if (map && map.id) {
      this.mapService.deleteMap(map.id).subscribe(() => this.loadMaps());
    }
  }

  handleMapSelectorToggle(): void {
    this.hideMapSelector = !this.hideMapSelector;
  }
}
