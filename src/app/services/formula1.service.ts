import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Formula1Service {

  constructor(private http: HttpClient) {}

  public getDrivers(): Observable<any> {
    return this.http.get(`http://ergast.com/api/f1/drivers.json`);
  }

  //fake post
  public sendMessage(id: string, message): Observable<any> {
    const formData = new FormData();

    formData.append('subject', message.subject);
    formData.append('message', message.message);
    return this.http.post(`http://ergast.com/api/f1/drivers/${id}`, formData)
  }
  //

  public perYearDrivers(year: string): Observable<any> {
    return this.http.get(`http://ergast.com/api/f1/${year}/driverStandings.json?limit=400&offset=0`)
    .pipe(
      map(r => ((r as any).MRData.StandingsTable.StandingsLists[0].DriverStandings))
    );
  }

  public perYearResults(year: string): Observable<any> {
    return this.http
      .get(`http://ergast.com/api/f1/${year}/results.json?limit=400&offset=0`)
      .pipe(
        map(r => ((r as any).MRData.RaceTable.Races))
      );
  }


}
