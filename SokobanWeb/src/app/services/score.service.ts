import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_PATH} from '../../config';
import Score from '../data/Score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  static SCORES_PATH = `${API_PATH}/scores`;

  constructor(private http: HttpClient) { }

  getScore(mapId: number): Observable<Score[]> {
    return this.http.get<Score[]>(`${ScoreService.SCORES_PATH}/${mapId}`);
  }

  putScore(mapId: number, score: Score) {
    this.http.post(`${ScoreService.SCORES_PATH}/${mapId}`, score);
  }
}
