import { Component } from '@angular/core';
import { YahooFinanceService } from '../../services/yahoo/yahoo-finance.service';
import NewsDetails from 'src/app/services/yahoo/types/NewsDetails';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {
  isLoading:boolean = true;
  newsData:NewsDetails | null = null;

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
