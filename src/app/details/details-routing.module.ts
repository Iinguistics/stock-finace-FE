import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailspageComponent } from './detailspage/detailspage.component';

const routes: Routes = [
  {path: ':ticker', component: DetailspageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
