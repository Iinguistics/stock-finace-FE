import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import NewsDetailsResponse from './types/NewsDetailsResponse';

@Injectable({
  providedIn: 'root',
})
export class YahooFinanceService {
  private headers = {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': ''
  };


  constructor(private http: HttpClient) {}

  public getNewsDetails() {
    return this.http
      .get<NewsDetailsResponse>('', {
        params: {uuid: '', region: 'US'},
        headers: this.headers
      })
      .pipe(map((res) => res.data.contents[0].content));
  }
}
