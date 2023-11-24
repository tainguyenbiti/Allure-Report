import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { IRetriesTrend, retriesTrend } from 'src/app/model/retries-trend';

@Component({
  selector: 'app-retries-trend',
  templateUrl: './retries-trend.component.html',
  styleUrls: ['./retries-trend.component.scss']
})
export class RetriesTrendComponent {
  retriesTrend = retriesTrend.sort((a, b) => {
    return a.buildOrder - b.buildOrder;
  });
  chart: any;
  ngOnInit(): void {
    this.createChart();

  }
  createChart() {
    const buildOrder: any = [];
    const dataArrayDuration: any = [];
    const maxDuration = Math.max(...this.retriesTrend.map(item => item.buildOrder));
    this.retriesTrend.forEach((element: IRetriesTrend) => {
      buildOrder.push('#' + element.buildOrder);
      dataArrayDuration.push(element.data.run);
    })

    this.chart = new Chart('retriesTrend', {
      type: 'line',
      data: {
        labels: buildOrder,
        datasets: [
          {
            label: 'run',
            data: dataArrayDuration, // Cumulative values for failed
            backgroundColor: '#6194BF',
            fill: true,
            spanGaps: true,
          },
        ],
      },
    });

  }
}
