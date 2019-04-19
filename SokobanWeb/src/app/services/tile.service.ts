import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Tile from '../data/Tile';
import {SERVER_URL} from '../../config';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TileService {
  static TILES_PATH = `${SERVER_URL}/tiles`;

  constructor(private http: HttpClient) { }

  getTiles(): Observable<Tile[]> {
    return this.http.get<Tile[]>(TileService.TILES_PATH);
  }

  getTile(id: number): Observable<Tile> {
    return this.http.get<Tile>(`${TileService.TILES_PATH}/${id}`);
  }

  putTile(tile: Tile): void {
    this.http.post(`${TileService.TILES_PATH}/${tile.id}`, tile);
  }

  deleteTile(tile: Tile): void {
    this.http.delete(`${TileService.TILES_PATH}/${tile.id}`);
  }
}
