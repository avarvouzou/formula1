import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { SeasonService } from '../services/season.service';

@Component({
  selector: 'app-year-selection',
  templateUrl: './year-selection.component.html',
  styleUrls: ['./year-selection.component.css']
})
export class YearSelectionComponent implements OnInit {

  @Output() onYearChange = new EventEmitter<string>();

  public seasonYears: string[] = [];

  constructor(private season: SeasonService) { }

  ngOnInit(): void {
    this.season.getAllSeasonYears().subscribe((seasonYears) => {
      this.seasonYears = seasonYears;
    });
  }

  public changeYear(e: MatSelectChange): void {
    this.onYearChange.emit(e.value);
  }

}
