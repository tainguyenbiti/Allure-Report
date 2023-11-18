import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './component/content/overview/overview.component';
import { GraphsComponent } from './component/content/graphs/graphs.component';
import { TimelineComponent } from './component/content/timeline/timeline.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'graphs', component: GraphsComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: '**', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
