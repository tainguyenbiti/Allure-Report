import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ICategoriesTrend, categoriesTrend } from 'src/app/model/categories-trend';

@Component({
  selector: 'app-categories-trend',
  templateUrl: './categories-trend.component.html',
  styleUrls: ['./categories-trend.component.scss']
})
export class CategoriesTrendComponent {
  categoriesTrend = categoriesTrend.sort((a, b) => {
    return (a.buildOrder || 0) - (b.buildOrder || 0);
  });
  chart: any;
  ngOnInit(): void {
    this.createChart();

  }
  createChart() {
    const buildOrder: any = [];
    const dataArrayDuration: any = [];
    const maxDuration = Math.max(...buildOrder);
    this.categoriesTrend.forEach((element: ICategoriesTrend) => {
      buildOrder.push('#' + element.buildOrder);

      element.data?.productDefects ? dataArrayDuration.push(element.data?.productDefects) : dataArrayDuration.push(0)
    })

    this.chart = new Chart('categoriesTrend', {
      type: 'line',
      data: {
        labels: buildOrder,
        datasets: [
          {
            label: 'Product Defects',
            data: dataArrayDuration, // Cumulative values for failed
            backgroundColor: '#932646',
            fill: true,
            spanGaps: true,
          },
        ],
      },
      options: {
        scales: {
          y: {
            suggestedMin: 0
          },
        }
      }
    });

  }
}
