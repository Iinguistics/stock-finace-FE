import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { YahooFinanceService } from '../../services/yahoo/yahoo-finance.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css'],
})
export class DetailspageComponent {
  constructor(
    private route: ActivatedRoute,
    private yahooService: YahooFinanceService,
  ) {}

  public ticker: string | null = null;

  ngOnInit() {
    this.setTicker();
  }

  private setTicker(): void {
    const ticker = this.route.snapshot.paramMap.get('ticker');

    if (!ticker) {
      throw new Error('no ticker found.');
    }

    this.ticker = ticker;
  }
}
