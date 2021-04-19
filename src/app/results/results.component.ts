import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Formula1Service } from '../services/formula1.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  public rounds: [];

  constructor(
    private formula1Service: Formula1Service
  ) { }

  ngOnInit(): void {

  }

  public changeYear(e: MatSelectChange): void {
    let year = '' + e;
    this.formula1Service.perYearResults(year).subscribe((resp) => {

      this.rounds = resp.map( data => {
        return {
          round: data.round,
          date: data.date,
          circuit: data.Circuit.circuitName,
          results: data.Results.map(r => {
            return {
              position: r.position,
              driverName: r.Driver.givenName + ' ' + r.Driver.familyName,
              points: r.points,
              constructorName: r.Constructor.name
            };
          })
        }
      })
      console.log(this.rounds)

    })
  }

}
