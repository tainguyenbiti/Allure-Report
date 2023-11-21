import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { IHistoryTrends } from 'src/app/model/history-trend';
import { WidgetsService } from 'src/app/service/widgets.service';
@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent {
  dataArray: any = [];
  historyTrends!: IHistoryTrends[];
  constructor(private widgetsService: WidgetsService) { }
  ngOnInit() {
    this.widgetsService.getData('history-trend').subscribe(
      (response: any) => {
        this.historyTrends = response;
      },
      (error) => {
      }
    )
  }
  ngAfterViewInit() {
    let data: any,
      options: any,
      chart: any,
      ctx: any = document.getElementById('areaChart') as HTMLElement;
    data = {
      labels: ['Apples', 'Oranges', 'Mixed Fruit'],
      datasets: [
        {
          label: 'Apples',
          data: [0, 50, 45, 100],
          backgroundColor: '#A6D37B',
          fill: true,
          lineTension: 0,
        },
        {
          label: 'Oranges',
          data: [30, 90, 111, 20],
          backgroundColor: '#FD725A',
          fill: true,
          lineTension: 0.2,
        },
      ],
    };
    options = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'top',
        text: 'Apples to Oranges',
        fontSize: 12,
        fontColor: '#666',
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#999',
          fontSize: 14,
        },
      },

    };

    chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }
}
