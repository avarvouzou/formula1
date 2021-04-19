import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Formula1Service } from '../services/formula1.service';
import { MatSelectChange } from '@angular/material/select';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
