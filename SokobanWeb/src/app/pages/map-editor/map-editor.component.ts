import { Component, OnInit } from '@angular/core';
import SokobanMap from "../../data/SokobanMap";
import {MapService} from "../../services/map.service";
import Point from "../../data/Point";
import EditableSokobanMap from "../../data/EditableSokobanMap";

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss']
})
export class MapEditorComponent implements OnInit {
  static createNewMapPlaceholder(): SokobanMap {
    const map = new SokobanMap();
    map.tiles = [];
    for(let i = 0; i < 10; i++) {
      map.tiles[i] = new Array(10);
    }
    map.playerPosition = undefined;
    map.boxes = [];
    map.collectibles = [];
    return map;
  }

  maps: SokobanMap[];
  currentMap: EditableSokobanMap;

  constructor(private mapService: MapService) {
    this.maps = [ MapEditorComponent.createNewMapPlaceholder() ];
    this.loadMaps();
  }

  ngOnInit() {
  }

  setCurrentMap(map: SokobanMap) {
    this.currentMap = EditableSokobanMap.fromSokobanMap(map);
  }

  loadMaps(): void {
    this.mapService.getMaps().subscribe(maps => {
      if (maps) {
        this.maps = [...maps, MapEditorComponent.createNewMapPlaceholder()];
      } else {
        this.maps = [ MapEditorComponent.createNewMapPlaceholder() ];
      }
      this.currentMap = undefined;
    });
  }
}
