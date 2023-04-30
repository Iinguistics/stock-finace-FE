import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YahooFinanceService } from '../../services/yahoo/yahoo-finance.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css'],
})
export class DetailspageComponent {
  constructor(private route: ActivatedRoute, private yahooService: YahooFinanceService) {}

  private getTicker(): string {
    const ticker = this.route.snapshot.paramMap.get('ticker');

    if (!ticker) {
      throw new Error('no ticker found.');
    }

    return ticker;
  }
}
