import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
})
export class LineComponent {
  public chart: any;

  private data = {
    // values on X-Axis
    labels: [
      '2022-05-10',
      '2022-05-11',
      '2022-05-12',
      '2022-05-13',
      '2022-05-14',
      '2022-05-15',
      '2022-05-16',
      '2022-05-17',
    ],
    datasets: [
      {
        label: 'Sales',
        data: ['467', '576', '572', '79', '92', '574', '573', '576'],
        backgroundColor: 'blue',
      },
      {
        label: 'Profit',
        data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
        backgroundColor: 'limegreen',
      },
    ],
  };


  ngOnInit(): void {
    this.createChart();
  }

  private createChart() {
    this.chart = new Chart('MyChart', {
      type: 'line',
      data: this.data,
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
