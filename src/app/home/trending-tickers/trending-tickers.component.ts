import { Component } from '@angular/core';
import { YahooFinanceService } from '../../services/yahoo/yahoo-finance.service';
import TrendingTicker from 'src/app/services/yahoo/types/TrendingTicker';

@Component({
  selector: 'app-trending-tickers',
  templateUrl: './trending-tickers.component.html',
  styleUrls: ['./trending-tickers.component.css'],
})
export class TrendingTickersComponent {
  isLoading: boolean = true;
  data: TrendingTicker[] | null = null;

  constructor(private yahooService: YahooFinanceService) {}

  ngOnInit() {
    this.setTrendingTickers();
  }

  private setTrendingTickers(): void {
    this.yahooService.getTrendingTickers().subscribe((response) => {
      this.data = response.slice(0, 6);
      this.isLoading = false;
    });
  }
}
