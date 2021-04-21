import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';


import { ResultsComponent } from './results/results.component';
import { WinnersComponent } from './winners/winners.component';
import { ContactComponent } from './contact/contact.component';
import { YearSelectionComponent } from './year-selection/year-selection.component';
import { SeasonService } from './services/season.service';
import { DriverListComponent } from './driver-list/driver-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    WinnersComponent,
    ContactComponent,
    YearSelectionComponent,
    DriverListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatInputModule

  ],
  providers: [SeasonService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
