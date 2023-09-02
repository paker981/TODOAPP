import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticContainerComponent } from './statistic-container/statistic-container.component';
import { ChartComponent } from './statistic-container/chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from '../material/material.module';
import { StatisticService } from './services/statistic.service';
import { MODULE_TOKEN } from 'src/tokens/moduleToken';
import { LoggerService } from 'src/app/services/logger.service';
import { StatisticsRoutingModule } from './statistic-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StatisticContainerComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    MaterialModule,
    StatisticsRoutingModule,
    RouterModule,
  ],
  exports: [
    StatisticContainerComponent
  ],
  providers: [
    {provide: MODULE_TOKEN, useValue: 'Statistic'},
    LoggerService,
    StatisticService
  ]
})
export class StatisticModule { }
