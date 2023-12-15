import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { IStatistic } from 'src/app/model/statistic';
import { WidgetsService } from 'src/app/service/widgets.service';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent {
  public chart: any;
  public statistic!: IStatistic;
  public errorAPI: boolean = true;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit(): void {
    this.widgetsService.getData('summary').subscribe(
      (response: any) => {
        this.statistic = response.statistic;
        this.createChart();
        if (!this.statistic) {
          this.errorAPI = false;
        }
      },
      (error) => {
        console.error('Message' + error);
      }
    );
  }

  createChart() {
    const component = this; // Create a reference to the component
    this.chart = new Chart("Status", {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [this.statistic.broken, this.statistic.failed, this.statistic.passed, this.statistic.skipped, this.statistic.unknown],
            backgroundColor: [
              '#FFD050',
              '#FD725A',
              '#A6D37B',
              '#AAAAAA',
              '#D35EBE',
            ],
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        // cutout: 80,
      },
      plugins: [{
        id: 'text',
        beforeDraw: function (chart, args, options) {
          var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;

          ctx.restore();
          var fontSize = (height / 114).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";

          var text = component.getPercents(); // Access the component method through the reference
          var textX = Math.round((width - ctx.measureText(text).width) / 2);
          var textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }]
    });
  }

  getPercents(): string {
    return (this.statistic.passed / this.statistic.total * 100).toFixed(0) + '%';
  }
}
