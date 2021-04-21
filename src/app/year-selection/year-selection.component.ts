import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Subscription } from 'rxjs';
import { SeasonService } from '../services/season.service';

@Component({
  selector: 'app-year-selection',
  templateUrl: './year-selection.component.html',
  styleUrls: ['./year-selection.component.scss']
})
export class YearSelectionComponent implements OnInit {

  @Output() onYearChange = new EventEmitter<string>();

  public seasonYears: string[] = [];
  subscription: Subscription;
  connection: boolean = true;

  constructor(private season: SeasonService) { }

  ngOnInit(): void {
    this.subscription = this.season.getAllSeasonYears().subscribe(
      data => this.seasonYears = data,
      error => this.connection = false

    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); //optional we usually don't have memory leaks
  }

  public changeYear(e: MatSelectChange): void {
    this.onYearChange.emit(e.value);
  }

}
