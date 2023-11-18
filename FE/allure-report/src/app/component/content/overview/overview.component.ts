import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBehaviors } from 'src/app/model/behaviors';
import { ICategories } from 'src/app/model/categories';
import { IEnvironment } from 'src/app/model/environment';
import { IExecutors } from 'src/app/model/executors';
import { IItem } from 'src/app/model/item';
import { IStatistic } from 'src/app/model/statistic';
import { ITime } from 'src/app/model/time';
import { WidgetsService } from 'src/app/service/widgets.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  data: any;
  options: any;
  plugin: any;
  statistic!: IStatistic;
  time!: ITime;
  reportName!: string;
  items!: IItem[];
  totalItems!: number;
  environment!: IEnvironment[];
  behaviors!: IBehaviors;
  categories!: ICategories;
  executors!: IExecutors[];
  constructor(private widgetsService: WidgetsService) { }
  ngOnInit(): void {
    this.widgetsService.getData('summary').subscribe(
      (response: any) => {
        this.statistic = response.statistic;
        this.time = response.time;
        this.reportName = response.reportName;
      },
      (error) => {
      }
    )
    this.widgetsService.getData('suites').subscribe(
      (response: any) => {
        this.totalItems = response.total;
        this.items = response.items;
      },
      (error) => {
      }
    )
    this.widgetsService.getData('environment').subscribe(
      (response: any) => {
        this.environment = response;
      },
      (error) => {
      }
    )
    this.widgetsService.getData('categories').subscribe(
      (response: any) => {
        this.categories = response;
      },
      (error) => {
      }
    )
    this.widgetsService.getData('executors').subscribe(
      (response: any) => {
        this.executors = response;
      },
      (error) => {
      }
    )
  }
}