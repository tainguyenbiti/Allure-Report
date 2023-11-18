import { Component, Input } from '@angular/core';
import { IStatistic } from 'src/app/model/statistic';
import { WidgetsService } from 'src/app/service/widgets.service';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})

export class DoughnutComponent {
  statistic!: IStatistic;
  data: any;
  options: any;
  plugin: any;
  constructor(private widgetsService: WidgetsService) { }
  ngOnInit(): void {
    this.widgetsService.getData('summary').subscribe(
      (response: any) => {
        this.statistic = response.statistic;
        this.getChart();
      },
      (error) => {
      }
    )
  }
  getChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      datasets: [
        {
          data: [this.statistic.failed, this.statistic.broken, this.statistic.passed, this.statistic.skipped],
          backgroundColor: [documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--gray-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--gray-400')]
        }
      ]
    };
    this.options = {
      cutout: '80%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        },
        title: {
          display: true,
          align: 'center'
        }
      }
    };
  }

}
