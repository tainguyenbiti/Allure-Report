import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarLeftComponent } from './component/side-bar-left/side-bar-left.component';
import { ContentComponent } from './component/content/content.component';
import { OverviewComponent } from './component/content/overview/overview.component';
import { GraphsComponent } from './component/content/graphs/graphs.component';
import { TimelineComponent } from './component/content/timeline/timeline.component';
import { PrimeNGModule } from './primengModule/primeng.module';
import { DoughnutComponent } from './component/chart/doughnut/doughnut.component';
import { SeverityComponent } from './component/chart/severity/severity.component';
import { DurationComponent } from './component/chart/duration/duration.component';
import { RetriesTrendComponent } from './component/chart/retries-trend/retries-trend.component';
import { CategoriesTrendComponent } from './component/chart/categories-trend/categories-trend.component';
import { TrendComponent } from './component/chart/trend/trend.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarLeftComponent,
    ContentComponent,
    OverviewComponent,
    GraphsComponent,
    TimelineComponent,
    DoughnutComponent,
    SeverityComponent,
    DurationComponent,
    RetriesTrendComponent,
    CategoriesTrendComponent,
    TrendComponent,
  ],
  imports: [
    PrimeNGModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
