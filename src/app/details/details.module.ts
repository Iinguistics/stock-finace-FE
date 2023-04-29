import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DetailspageComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SharedModule
  ]
})
export class DetailsModule { }
