import { Component } from '@angular/core';
import { YahooFinanceService } from '../../services/yahoo/yahoo-finance.service';
import NewsDetailsResponse from 'src/app/services/yahoo/types/NewsDetailsResponse';
import TrendingTickerResponse from 'src/app/services/yahoo/types/TrendingTickersResponse';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})

export class LandingpageComponent {
  isLoading:boolean = true;
  newsData:NewsDetailsResponse | null = null;
  trendingTickersData:TrendingTickerResponse | null = null;

  constructor(private yahooService: YahooFinanceService){}

  // ngOnInit() {
  //   this.getNews()
  //   this.getTrendingTickers();
  //   this.isLoading = false;
  // }


  private getNews():void{
    this.yahooService.getNewsDetails().subscribe((response)=> {
      this.newsData = response;
      console.log(response);
     // this.isLoading = false;
    });
  }

  private getTrendingTickers():void{
    this.yahooService.getTrendingTickers().subscribe((response)=> {
      this.trendingTickersData = response;
      console.log(response);
     // this.isLoading = false;
    });
  }


}
