import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Tile from '../data/Tile';
import {API_PATH} from '../../config';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TileService {
  static TILES_PATH = `${API_PATH}/tiles`;

  constructor(private http: HttpClient) { }

  getTiles(): Observable<Tile[]> {
    return this.http.get<Tile[]>(TileService.TILES_PATH);
  }

  getTile(tileId: number): Observable<Tile> {
    return this.http.get<Tile>(`${TileService.TILES_PATH}/${tileId}`);
  }

  putTile(tile: Tile): void {
    this.http.post(`${TileService.TILES_PATH}/${tile.id}`, tile);
  }

  deleteTile(tileId: number): void {
    this.http.delete(`${TileService.TILES_PATH}/${tileId}`);
  }
}
