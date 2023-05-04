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
    private yahooService: YahooFinanceService
  ) {}

  public data: any;
  public outlookData: any;
  public isLoading: boolean = false;
  public ticker: string | null = null;

  public bioModalData:any;
  public showBioModal: boolean = false;

  public holdersModalData:any;
  public showHoldersModal: boolean = false;

  public outlookModalData:any;
  public showOutlookModal: boolean = false;


  ngOnInit() {
    this.setTicker();
    this.setSummary()
  }

  private setTicker(): void {
    const ticker = this.route.snapshot.paramMap.get('ticker');

    if (!ticker) {
      throw new Error('no ticker found.');
    }

    this.ticker = ticker;
  }

  private setSummary(): void {
    if (!this.ticker) {
      throw new Error('no ticker found.');
    }

    this.yahooService.getSummary(this.ticker).subscribe((response) => {
      this.data = response;
      this.isLoading = false;
    });
  }

  public setOutlook(): void {
    if (!this.ticker) {
      throw new Error('no ticker found.');
    }

    this.isLoading = true;
    this.yahooService.getOutlook(this.ticker).subscribe((response) => {
      this.outlookModalData = response;
      this.isLoading = false;
      this.showOutlookModal = true;
    });
  }


  public onShowBioModal(): void {
    this.bioModalData = {
      summary: this.data.summaryProfile.longBusinessSummary,
      employees: this.data.summaryProfile.fullTimeEmployees
    }

    this.showBioModal = true;
  }

  public onShowHoldersModal(): void {
    this.holdersModalData = this.data.insiderHolders.holders

    this.showHoldersModal = true;
  }

}
