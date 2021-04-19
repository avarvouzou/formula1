import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  @Input() results: any[];
  displayedColumns: string[] = ['position', 'points', 'driverName', 'constructorName'];

  constructor() { }

  ngOnInit(): void {
  }

}
