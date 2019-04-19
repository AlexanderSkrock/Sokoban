import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_URL} from '../../config';
import SokobanMap from '../data/SokobanMap';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  static MAPS_PATH = `${SERVER_URL}/maps`;

  constructor(private http: HttpClient) { }

  getMaps(): Observable<SokobanMap[]> {
    return this.http.get<SokobanMap[]>(MapService.MAPS_PATH);
  }

  getMap(mapId: number): Observable<SokobanMap> {
    return this.http.get<SokobanMap>(`${MapService.MAPS_PATH}/${mapId}`);
  }

  putMap(map: SokobanMap) {
    this.http.post(MapService.MAPS_PATH, map);
  }

  deleteMap(mapId: number) {
    this.http.delete(`${MapService.MAPS_PATH}/${mapId}`);
  }
}
