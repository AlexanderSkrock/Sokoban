import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_PATH} from '../../config';
import SokobanMap from '../data/SokobanMap';
import {map} from "rxjs/operators";
import _ from "../../../node_modules/lodash";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  static MAPS_PATH = `${API_PATH}/maps`;

  constructor(private http: HttpClient) { }

  getMaps(): Observable<SokobanMap[]> {
    return this.http.get<SokobanMap[]>(MapService.MAPS_PATH).pipe(map(items => items.map(item => new SokobanMap(item))));
  }

  getMap(mapId: number): Observable<SokobanMap> {
    return this.http.get<SokobanMap>(`${MapService.MAPS_PATH}/${mapId}`).pipe(map(item => new SokobanMap(item)));
  }

  putMap(map: SokobanMap): Observable<Object> {
    return this.http.post(MapService.MAPS_PATH, map);
  }

  deleteMap(mapId: number): Observable<Object> {
    return this.http.delete(`${MapService.MAPS_PATH}/${mapId}`);
  }
}
