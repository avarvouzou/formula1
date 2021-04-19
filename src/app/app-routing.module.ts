import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ResultsComponent } from './results/results.component';
import { WinnersComponent } from './winners/winners.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'winners', component: WinnersComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
