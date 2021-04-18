import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Formula1Service {

  constructor(private http: HttpClient) {}

  public getDrivers(): Observable<any> {
    return this.http.get(`http://ergast.com/api/f1/drivers.json`)
  }

  //fake post
  public sendMessage(id: string, message: string): Observable<any> { //and subject of the message too
    return this.http.post(`http://ergast.com/api/f1/drivers/${id}`, message)
  }
  //

  public perYearDrivers(year: string): Observable<any> {
    return this.http.get(`http://ergast.com/api/f1/${year}/driverStandings.json?limit=400&offset=0`)
  }

  //another one get()....
}
