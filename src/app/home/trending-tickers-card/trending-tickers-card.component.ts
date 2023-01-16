import { Component, Input } from '@angular/core';
import TrendingTicker from 'src/app/services/yahoo/types/TrendingTicker';

@Component({
  selector: 'app-trending-tickers-card',
  templateUrl: './trending-tickers-card.component.html',
  styleUrls: ['./trending-tickers-card.component.css']
})
export class TrendingTickersCardComponent {
  @Input() ticker!: TrendingTicker;


}
