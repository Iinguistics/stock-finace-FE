import { Component } from '@angular/core';
import { YahooFinanceService } from '../../services/yahoo/yahoo-finance.service';
import NewsDetailsResponse from 'src/app/services/yahoo/types/NewsDetailsResponse';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})

export class LandingpageComponent {
  isLoading:boolean = true;
  newsData:NewsDetailsResponse | null = null;

  constructor(private yahooService: YahooFinanceService){}

  // ngOnInit() {
  //   this.getNews()
  //   this.isLoading = false;
  // }


  private getNews():void{
    this.yahooService.getNewsDetails().subscribe((response)=> {
      this.newsData = response;
      console.log(response);
     // this.isLoading = false;
    });
  }


}
