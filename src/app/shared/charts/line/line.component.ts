import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { LineChart } from '../types';
import { YahooFinanceService } from '../../../services/yahoo/yahoo-finance.service';
import Chart from 'chart.js/auto';
import HistoryChart from '../../../services/yahoo/types/HistoryChart';
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
})
export class LineComponent {
  constructor(
    private yahooService: YahooFinanceService,
    private datePipe: DatePipe,
    private decimalPipe: DecimalPipe
  ) {}
  @Input() ticker!: string;

  public chart: any;
  public isLoading: boolean = true;

  // private data = {
  //   // values on X-Axis
  //   labels: [
  //     this.formatDate(1651377600),
  //     '2022-05-11',
  //     '2022-05-12',
  //     '2022-05-13',
  //     '2022-05-14',
  //     '2022-05-15',
  //     '2022-05-16',
  //     '2022-05-17',
  //   ],
  //   datasets: [
  //     {
  //       label: 'Sales',
  //       data: ['467', '576', '572', '79', '92', '574', '573', '576'],
  //       backgroundColor: 'blue',
  //     },
  //     {
  //       label: 'Profit',
  //       data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
  //       backgroundColor: 'limegreen',
  //     },
  //   ],
  // };

  private data!: LineChart;

  // ngOnInit(): void {
  //   this.setLineChartData();
  // }

  private setLineChartData() {
    this.yahooService
      .getHistoryChart(this.ticker, '1mo')
      .subscribe((response) => {
        this.data = this.mapToLineChart(response);
        this.createChart();
        this.isLoading = false;
      });
  }

  private createChart() {
    this.chart = new Chart('line', {
      type: 'line',
      data: this.data,
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  private mapToLineChart(data: HistoryChart): LineChart {
    const labels = this.getLineChartLabels(data.timestamp);
    const datasets = this.getLineChartDatasets(data.indicators.quote[0]);

    return { labels, datasets };
  }

  private getLineChartLabels(data: number[]): string[] {
    const labels: string[] = [];

    data.map((label) => {
      labels.push(this.formatDate(label));
    });

    return labels;
  }

  private getLineChartDatasets(
    data: HistoryChart['indicators']['quote'][0]
  ): LineChart['datasets'] {
    const datasets: LineChart['datasets'] = [];

    datasets.push(
      {
        label: 'Open',
        data: data.open.map((quote) => this.formatQuote(quote)),
        backgroundColor: 'blue',
      },
      {
        label: 'Close',
        data: data.close.map((quote) => this.formatQuote(quote)),
        backgroundColor: 'limegreen',
      }
    );

    return datasets;
  }

  private formatDate(date: number): string {
    return this.datePipe.transform(date * 1000, 'yyyy-MM-dd') ?? '';
  }

  private formatQuote(quote: number): string {
    return this.decimalPipe.transform(quote, '1.2-2') ?? '';
  }
}
