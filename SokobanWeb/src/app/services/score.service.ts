import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_URL} from '../../config';
import Score from '../data/Score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  static SCORES_PATH = `${SERVER_URL}/scores`;

  constructor(private http: HttpClient) { }

  getScore(mapId: number): Observable<Score[]> {
    return this.http.get<Score[]>(`${ScoreService.SCORES_PATH}/${mapId}`);
  }

  putScore(mapId: number, score: Score) {
    this.http.post(`${ScoreService.SCORES_PATH}/${mapId}`, score);
  }
}
