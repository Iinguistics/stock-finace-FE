import { Injectable } from '@angular/core';
import { YahooFinanceService } from '../../services/yahoo/yahoo-finance.service';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private yahooService: YahooFinanceService) {}

  public getLineChartData(ticker: string): void {
    this.yahooService.getHistoryChart(ticker, '1mo').subscribe((response) => {
      console.log(response);
    });
  }
}

// TODO: Create mapper for line chart
