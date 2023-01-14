import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';
import NewsDetailsResponse from './types/NewsDetailsResponse';

@Injectable({
  providedIn: 'root',
})
export class YahooFinanceService {
  private headers = {
    'X-RapidAPI-Key': environment.YAHOO_FINANCE_API_KEY,
    'X-RapidAPI-Host': environment.YAHOO_FINANCE_API_HOST
  };


  constructor(private http: HttpClient) {}

  public getNewsDetails() {
    return this.http
      .get<NewsDetailsResponse>('https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details', {
        params: {uuid: environment.YAHOO_FINANCE_API_UUID, region: 'US'},
        headers: this.headers
      })
      .pipe(map((res) => res.data.contents[0].content));
  }
}
