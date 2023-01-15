import { Component } from '@angular/core';
import { YahooFinanceService } from '../../services/yahoo/yahoo-finance.service';
import TrendingTicker from 'src/app/services/yahoo/types/TrendingTicker';

@Component({
  selector: 'app-trending-tickers',
  templateUrl: './trending-tickers.component.html',
  styleUrls: ['./trending-tickers.component.css']
})
export class TrendingTickersComponent {
  isLoading:boolean = true;
  trendingTickersData:TrendingTicker[] | null = null;


  constructor(private yahooService: YahooFinanceService){}

  // ngOnInit() {
  //   this.getTrendingTickers();
  //   this.isLoading = false;
  // }


  private getTrendingTickers():void{
    this.yahooService.getTrendingTickers().subscribe((response)=> {
      this.trendingTickersData = response;
      console.log(response);
     // this.isLoading = false;
    });
  }


}
