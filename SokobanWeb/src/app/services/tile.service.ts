import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Tile from '../data/Tile';
import {API_PATH} from '../../config';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TileService {
  static TILES_PATH = `${API_PATH}/tiles`;

  constructor(private http: HttpClient) { }

  getTiles(): Observable<Tile[]> {
    return this.http.get<Tile[]>(TileService.TILES_PATH).pipe(map(items => items.map(item => new Tile(item))));
  }

  getTile(tileId: number): Observable<Tile> {
    return this.http.get<Tile>(`${TileService.TILES_PATH}/${tileId}`).pipe(map(item => new Tile(item)));
  }

  putTile(tile: Tile): Observable<Object> {
    return this.http.post(TileService.TILES_PATH, tile);
  }

  deleteTile(tileId: number): Observable<Object> {
    return this.http.delete(`${TileService.TILES_PATH}/${tileId}`);
  }
}
