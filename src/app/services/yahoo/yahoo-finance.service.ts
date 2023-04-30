import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import NewsDetails from './types/NewsDetails';
import TrendingTicker from './types/TrendingTicker';
import { GetHistoryChart } from './types/Params';
import HistoryChart from './types/HistoryChart';

@Injectable({
  providedIn: 'root',
})
export class YahooFinanceService {
  private headers = {
    'X-RapidAPI-Key': environment.YAHOO_FINANCE_API_KEY,
    'X-RapidAPI-Host': environment.YAHOO_FINANCE_API_HOST,
  };

  constructor(private http: HttpClient) {}

  public getNewsDetails(): Observable<NewsDetails> {
    return this.http
      .get<any>(
        'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details',
        {
          params: { uuid: environment.YAHOO_FINANCE_API_UUID, region: 'US' },
          headers: this.headers,
        }
      )
      .pipe(map((res) => res.data.contents[0].content));
  }

  public getTrendingTickers(): Observable<TrendingTicker[]> {
    return this.http
      .get<any>(
        'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',
        {
          params: { region: 'US' },
          headers: this.headers,
        }
      )
      .pipe(map((res) => res.finance.result[0].quotes));
  }

  public getHistoryChart(
    ticker: string,
    interval: GetHistoryChart['params']['interval']
  ): Observable<HistoryChart> {
    const params = {
      interval,
      symbol: ticker,
      range: '1y',
      region: 'US',
      includePrePost: 'false',
      useYfid: 'true',
      includeAdjustedClose: 'true',
      events: 'capitalGain,div,split',
    };

    try {
      return this.http
        .get<any>(
          'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-chart',
          {
            params,
            headers: this.headers,
          }
        )
        .pipe(map((res) => res.chart.result[0]));
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
