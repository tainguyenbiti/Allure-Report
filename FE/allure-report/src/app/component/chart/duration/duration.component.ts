import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { AnyObject } from 'chart.js/dist/types/basic';
import { Plugin } from 'chart.js/dist/types/index';
import { IDuration } from 'src/app/model/duration';
import { WidgetsService } from 'src/app/service/widgets.service';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent {
  labels: number[] = [];
  countArrays: number[] = [];
  public chart: any;
  duration!: IDuration[];
  constructor(private widgetsService: WidgetsService) { }
  ngOnInit(): void {
    this.widgetsService.getData('duration').subscribe(
      (response: any) => {
        this.duration = response;
        this.createChart()
      },
      (error) => {
        console.error(error);
      }
    )
  }
  getYAxisLabel() {
    const maxDuration = Math.max(...this.duration.map(result => result.time.duration));
    const maxDurationInSeconds = maxDuration / 1000;
    const roundedMaxDurationInSeconds = Math.ceil(maxDurationInSeconds);

    for (let i = 1; i <= roundedMaxDurationInSeconds; i++) {
      this.labels.push(i);
    }
  }
  getXAxisLabels() {
    const countByRange: { [key: number]: number } = {};

    this.duration.forEach(result => {
      const durationInSeconds = Math.ceil(result.time.duration / 1000);

      countByRange[durationInSeconds] = (countByRange[durationInSeconds] || 0) + 1;
    });

    const maxDurationInMilliseconds = Math.max(...this.duration.map(result => result.time.duration));
    const maxDurationInSeconds = Math.ceil(maxDurationInMilliseconds / 1000);

    for (let i = 1; i <= maxDurationInSeconds; i++) {
      this.countArrays.push(countByRange[i] || 0);
    }
  }
  createChart() {
    this.getYAxisLabel();
    this.getXAxisLabels();
    this.chart = new Chart("Duration", {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Test cases',
            data: this.countArrays,
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          },
        }
      },
    });
  }

}
