import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SharedModule } from '../shared/shared.module';
import { TrendingTickersComponent } from './trending-tickers/trending-tickers.component';


@NgModule({
  declarations: [
    LandingpageComponent,
    TrendingTickersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
