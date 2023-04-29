import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css'],
})
export class DetailspageComponent {
  constructor(private route: ActivatedRoute) {}

  private getTicker(): string {
    const ticker = this.route.snapshot.paramMap.get('ticker');

    if (!ticker) {
      throw new Error('no ticker found.');
    }

    return ticker;
  }
}
