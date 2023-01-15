import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import NewsDetailsResponse from './types/NewsDetailsResponse';
import TrendingTickerResponse from './types/TrendingTickersResponse';

@Injectable({
  providedIn: 'root',
})
export class YahooFinanceService {
  private headers = {
    'X-RapidAPI-Key': environment.YAHOO_FINANCE_API_KEY,
    'X-RapidAPI-Host': environment.YAHOO_FINANCE_API_HOST
  };


  constructor(private http: HttpClient) {}

  public getNewsDetails():Observable<NewsDetailsResponse> {
    return this.http
      .get<any>('https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details', {
        params: {uuid: environment.YAHOO_FINANCE_API_UUID, region: 'US'},
        headers: this.headers
      })
      .pipe(map((res) => res.data.contents[0].content));
  }

  public getTrendingTickers():Observable<TrendingTickerResponse> {
    return this.http
      .get<any>('https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers', {
        params: {region: 'US'},
        headers: this.headers
      })
      .pipe(map((res) => res.finance.result[0].quotes));
  }

}
