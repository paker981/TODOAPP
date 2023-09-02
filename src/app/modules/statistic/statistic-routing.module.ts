import { RouterModule, Routes } from "@angular/router";
import { StatisticContainerComponent } from "./statistic-container/statistic-container.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      path: '',
      component: StatisticContainerComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class StatisticsRoutingModule {}