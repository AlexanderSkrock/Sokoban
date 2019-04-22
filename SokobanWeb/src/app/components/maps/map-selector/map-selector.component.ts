import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import SokobanMap from "../../../data/SokobanMap";

@Component({
  selector: 'app-map-selector',
  templateUrl: './map-selector.component.html',
  styleUrls: ['./map-selector.component.scss']
})
export class MapSelectorComponent implements OnInit {
  @Input()
  maps: SokobanMap[];

  @Output()
  selection: EventEmitter<SokobanMap>;

  constructor() {
    this.selection = new EventEmitter();
  }

  ngOnInit() {
  }

  selectMap(map: SokobanMap) {
    this.selection.emit(map);
  }
}
