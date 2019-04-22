import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import SokobanMap from "../../../data/SokobanMap";

enum SIZE {
  SMALL = "map-small",
  MEDIUM = "map-medium",
  BIG = "map-big"
}
export const MAP_SIZES = SIZE;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input()
  map: SokobanMap;

  @Input()
  size: SIZE;

  constructor() { }

  ngOnInit() {
  }
}
