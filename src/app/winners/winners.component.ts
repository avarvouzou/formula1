import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Formula1Service } from '../services/formula1.service';


@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {

  public drivers: [];

  constructor(
    private formula1Service: Formula1Service
  ) { }

  ngOnInit(): void {

  }

  public changeYear(e: MatSelectChange): void {
    let year = '' + e;
    this.formula1Service.perYearDrivers(year).subscribe((resp) => {

      this.drivers = resp.map( data => {
        return {
          position: data.position,
          points: data.points,
          driverName: data.Driver.givenName + ' ' + data.Driver.familyName,
          constructorName: data.Constructors[0].name
        }
      })
      console.log(this.drivers)

    })

  }
}
