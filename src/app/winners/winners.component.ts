import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Formula1Service } from '../services/formula1.service';


@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {

  @Output() onYearChange = new EventEmitter<string>();

  public Drivers: [];

  constructor(
    private formula1Service: Formula1Service
  ) { }

  ngOnInit(): void {

  }

  public changeYear(e: MatSelectChange): void {
    this.onYearChange.emit(e.value);
    let year = '' + e; //e was type matselectchange converted to string
    this.formula1Service.perYearDrivers(year).subscribe((resp) => {

      this.Drivers = resp.MRData.StandingsTable.StandingsLists.DriverStandings[0].position.map( data => {
        return {
          position: data.DriverStandings[0].position,
          points: data.DriverStandings[0].points,
          driverName: data.DriverStandings[0].Driver.givenName + ' ' + data.DriverStandings[0].Driver.familyName,
          constructorName: data.DriverStandings[0].Constructors[0].name
        }
      })
      console.log(this.Drivers)
      // this is wrong because it will return only the first position per year. I was planning to populate the Drivers array with all the positions per year
      // and then represent it with a table
    })

  }
}
