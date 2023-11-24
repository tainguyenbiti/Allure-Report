import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { IDurationTrend, durationTrend } from 'src/app/model/duration-trend';

@Component({
  selector: 'app-duration-trend',
  templateUrl: './duration-trend.component.html',
  styleUrls: ['./duration-trend.component.scss']
})
export class DurationTrendComponent {
  durationTrend = durationTrend.sort((a, b) => {
    return a.buildOrder - b.buildOrder;
  });
  chart: any;
  ngOnInit(): void {
    this.createChart();

  }
  createChart() {
    const buildOrder: any = [];
    const dataArrayDuration: any = [];
    const maxDuration = Math.max(...this.durationTrend.map(item => item.data.duration));
    this.durationTrend.forEach((element: IDurationTrend) => {
      buildOrder.push('#' + element.buildOrder);
      dataArrayDuration.push(element.data.duration);
    })
    console.log(buildOrder);
    console.log(dataArrayDuration);

    const formatTime = (milliseconds: any) => {
      const seconds = Math.floor(milliseconds / 1000);
      const remainingMilliseconds = milliseconds % 1000;
      if (remainingMilliseconds === 0) {
        return `${seconds}s`;
      }
      return `${seconds}s ${remainingMilliseconds}ms`;
    }
    this.chart = new Chart('durationTrend', {
      type: 'line',
      data: {
        labels: buildOrder,
        datasets: [
          {
            label: 'failed',
            data: dataArrayDuration, // Cumulative values for failed
            backgroundColor: '#262626',
            fill: true,
            spanGaps: true,
          },
        ],
      },
      options: {
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: maxDuration,
            ticks: {
              callback: function (value: any) {
                return formatTime(value);
              }
            } as any,
          },
        }
      }
    });

  }

}
