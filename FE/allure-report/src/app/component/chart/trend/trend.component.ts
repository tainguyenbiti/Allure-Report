import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { IHistoryTrends, historyTrends } from 'src/app/model/history-trend';
import { WidgetsService } from 'src/app/service/widgets.service';
@Component({
  selector: 'app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent {
  dataArray: any = [];
  historyTrends: IHistoryTrends[] = historyTrends.sort((a, b) => {
    return a.buildOrder - b.buildOrder;
  });
  constructor(private widgetsService: WidgetsService) { }
  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    const buildOrder: any = [];
    const dataArrayPass: any = [];
    const dataArrayFailed: any = [];
    const dataArrayBroken: any = [];
    const dataArraySkipped: any = [];
    const dataArrayUnknown: any = [];

    this.historyTrends.forEach((element: IHistoryTrends) => {
      buildOrder.push('#' + element.buildOrder);

      dataArrayFailed.push(element.data.failed);
      dataArrayBroken.push(element.data.broken + element.data.failed);
      dataArraySkipped.push(element.data.skipped + element.data.failed + element.data.broken);
      dataArrayUnknown.push(element.data.unknown + element.data.skipped + element.data.failed + element.data.broken)
      dataArrayPass.push(element.data.passed + element.data.unknown + element.data.skipped + element.data.failed + element.data.broken);


    })
    let data: any,
      options: any,
      chart: any;
    data = {
      labels: buildOrder,
      datasets: [
        {
          label: 'failed',
          data: dataArrayFailed, // Cumulative values for failed
          backgroundColor: '#FD725A',
          fill: true,
          spanGaps: true,
        },
        {
          label: 'skipped',
          data: dataArraySkipped,
          backgroundColor: 'gray',
          fill: true,
          spanGaps: true,
        },
        {
          label: 'broken',
          data: dataArrayBroken,
          backgroundColor: 'black',
          fill: true,
          spanGaps: true,
        },
        {
          label: 'broken',
          data: dataArrayUnknown,
          backgroundColor: 'pink',
          fill: true,
          spanGaps: true,
        },
        {
          label: 'passed',
          data: dataArrayPass,
          backgroundColor: '#A6D37B',
          fill: true,
          spanGaps: true,
        },
      ],
    };
    options = {
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 8,
        }
      }
    };
    chart = new Chart('trendChart', {
      type: 'line',
      data: data,
      options: options,
    });
  }
}
