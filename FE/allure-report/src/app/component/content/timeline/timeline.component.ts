import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { TestResult } from 'src/app/model/test-result';
import { ExcelService } from 'src/app/service/excel.service';
import { WidgetsService } from 'src/app/service/widgets.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  public chart: any;
  testResult!: TestResult;
  totalTime!: number;
  convertedData!: any[];
  dataToExport: any = [];
  constructor(private widgetsService: WidgetsService, private excelService: ExcelService) { }
  exportData(): void {
    if (this.convertedData.length > 0) {
      this.convertedData.forEach((data: any) => {
        this.dataToExport.push({
          "Test name": data.name,
          "Status": data.status,
          "Duration": data.stopTime - data.startTime,
        });
      });
      this.excelService.exportToExcel(this.dataToExport, 'exported_data');
    }
  }
  ngOnInit() {
    this.widgetsService.getData('timeline').subscribe(
      (response: any) => {
        this.sortNodesByTime(response);
        this.convertedData = this.convertTime(this.extractTimeValues(response));
        this.createChart()
        console.log(this.convertedData);

      },
      (error) => {
        console.error(error);
      }
    )
  }
  sortNodesByTime(node: TestResult) {
    if (node.children) {
      node.children = node.children.sort((a, b) => {
        const startTimeA = a.time ? a.time.start : 0;
        const startTimeB = b.time ? b.time.start : 0;
        return startTimeA - startTimeB;
      });

      node.children.forEach((child) => {
        this.sortNodesByTime(child);
      });
    }
  }
  extractTimeValues(node: TestResult, timeValues: { name: string; status: string; startTime: number; stopTime: number }[] = []) {
    if (node.time) {
      timeValues.push({
        name: node.name,
        status: node.status,
        startTime: node.time.start,
        stopTime: node.time.stop,
      });
    }
    if (node.children) {
      for (const child of node.children) {
        this.extractTimeValues(child, timeValues);
      }
    }
    return timeValues;
  }
  convertTime(data: any[]): any[] {
    const new_array: any = [];
    data.forEach((item, index) => {
      const new_item = {
        name: item.name,
        status: item.status,
        startTime: index === 0 ? 0 : item.startTime - data[0].startTime,
        stopTime: index === 0 ? data[0].stopTime - data[0].startTime : item.stopTime - data[0].startTime,
      };
      new_array.push(new_item);
    });

    return new_array;
  }

  createChart() {
    const formatTime = (milliseconds: any) => {
      const seconds = Math.floor(milliseconds / 1000);
      const remainingMilliseconds = milliseconds % 1000;
      if (remainingMilliseconds === 0) {
        return `${seconds}s`;
      }
      return `${seconds}s ${remainingMilliseconds.toFixed(0)}ms`;
    }
    const data = this.convertedData;
    const minStartTime = Math.min(...data.map(item => item.startTime));
    const maxStopTime = Math.max(...data.map(item => item.stopTime));
    const range = (maxStopTime - minStartTime) / 12;
    const percentMaxDuration = (maxStopTime - minStartTime) / 200;

    const dataSets = data.map(item => {
      return {
        label: item.name,
        data: (item.stopTime - item.startTime > percentMaxDuration) ? [[item.startTime, item.stopTime]] : [[item.startTime, item.startTime + percentMaxDuration]],
        backgroundColor: (item.status === "passed") ? "#A6D37B" : "#FD725A"
      };
    });
    this.chart = new Chart('timeline', {
      type: 'bar',
      data: {
        labels: [""],
        datasets: dataSets
      },
      options: {
        responsive: false,
        indexAxis: 'y',
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  const datasetIndex = context.datasetIndex;
                  const dataItem = data[datasetIndex];
                  label += `${formatTime(dataItem.startTime)} - ${formatTime(dataItem.stopTime)}`;
                }
                return label;
              }
            }
          },
          legend: {
            position: 'top',
            display: false,
          },
        },
        scales: {
          y: {
            stacked: true
          },
          x: {
            ticks: {
              suggestedMin: minStartTime,
              suggestedMax: maxStopTime,
              stepSize: range,
              callback: function (value: any) {
                return formatTime(value);
              }
            } as any,
          }
        },

      }
    });

  }
}

