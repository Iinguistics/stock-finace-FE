import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SharedModule } from '../shared/shared.module';
import { TrendingTickersComponent } from './trending-tickers/trending-tickers.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { TrendingTickersCardComponent } from './trending-tickers-card/trending-tickers-card.component';


@NgModule({
  declarations: [
    LandingpageComponent,
    TrendingTickersComponent,
    NewsDetailsComponent,
    TrendingTickersCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
