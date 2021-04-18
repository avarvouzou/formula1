import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private httpClient: HttpClient) { }

  public getAllSeasonYears(): Observable<string[]> {
    return this.httpClient
      .get(`https://ergast.com/api/f1/seasons.json?limit=500`)
      .pipe(
        map(r => ((r as any).MRData.SeasonTable.Seasons)),
        map(seasons => seasons.map(s => s.season))
      );
  }
}
