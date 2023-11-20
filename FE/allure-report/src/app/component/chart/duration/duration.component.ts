import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { AnyObject } from 'chart.js/dist/types/basic';
import { Plugin } from 'chart.js/dist/types/index';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("Duration", {
      type: 'bar',

      data: {
        labels: [
          1, 2, 3, 4, 5, 6, 7
        ],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
  }

}
