import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ISeverity } from 'src/app/model/severity';
import { WidgetsService } from 'src/app/service/widgets.service';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.scss']
})
export class SeverityComponent {
  public chart: any;
  public severity!: ISeverity[];
  constructor(private widgetsService: WidgetsService) { }
  ngOnInit(): void {
    this.widgetsService.getData('severity').subscribe(
      (response: any) => {
        this.severity = response;
        this.processChartData()
      },
      (error) => {
        console.error(error);
      }
    )
  }
  processChartData() {
    const failedData: number[] = [0, 0, 0, 0, 0];
    const brokenData: number[] = [0, 0, 0, 0, 0];
    const passData: number[] = [0, 0, 0, 0, 0];
    const skipperData: number[] = [0, 0, 0, 0, 0];
    const unknownData: number[] = [0, 0, 0, 0, 0];

    this.severity.forEach(result => {
      const index = this.getLabelIndex(result.severity);
      switch (result.status) {
        case 'failed':
          failedData[index]++;
          break;
        case 'broken':
          brokenData[index]++;
          break;
        case 'passed':
          passData[index]++;
          break;
        case 'skipper':
          skipperData[index]++;
          break;
        case 'unknown':
          unknownData[index]++;
          break;
        default:
          break;
      }
    });

    this.chart = new Chart("severity", {
      type: 'bar',
      data: {
        labels: ['blocker', 'critical', 'normal', 'minor', 'trivial'],
        datasets: [
          {
            label: 'Failed',
            data: failedData,
            borderWidth: 1,
            backgroundColor: '#FD5A3E'
          },
          {
            label: 'Broken',
            data: brokenData,
            borderWidth: 1,
            backgroundColor: '#FFD050'
          },
          {
            label: 'Pass',
            data: passData,
            borderWidth: 1,
            backgroundColor: '#97CC64'
          },
          {
            label: 'Skipper',
            data: skipperData,
            borderWidth: 1,
            backgroundColor: '#AAAAAA'
          },
          {
            label: 'Unknown',
            data: unknownData,
            borderWidth: 1,
            backgroundColor: '#D35EBE'
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
  getLabelIndex(severity: string): number {
    switch (severity) {
      case 'blocker':
        return 0;
      case 'critical':
        return 1;
      case 'normal':
        return 2;
      case 'minor':
        return 3;
      case 'trivial':
        return 4;
      default:
        return -1;
    }
  }
}
