import { Component } from '@angular/core';
import { YahooFinanceService } from '../../services/yahoo/yahoo-finance.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})

export class LandingpageComponent {
  newsData:any = null;
  isLoading:boolean = true;

  constructor(private yahooService: YahooFinanceService){}

  // ngOnInit() {
  //   this.getNews()
  // }


  private getNews():void{
    this.yahooService.getNewsDetails().subscribe((response)=> {
      this.newsData = response;
      console.log(response);
      this.isLoading = false;
    });
  }

}
