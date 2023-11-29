import { Component } from '@angular/core';
import { IStatistic } from 'src/app/model/statistic';
import { WidgetsService } from 'src/app/service/widgets.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent {
  public statistic!: IStatistic;
  constructor(private widgetService: WidgetsService) { }
  ngOnInit(): void {
    this.widgetService.getData('summary').subscribe(
      (response: any) => {
        this.statistic = response.statistic;
      },
      (error: any) => { }
    )
  }
}
