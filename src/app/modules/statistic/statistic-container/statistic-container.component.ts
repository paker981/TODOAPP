import { ObserversModule } from '@angular/cdk/observers';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataProviderService } from 'src/app/services/dataProvider/data-provider.service';
import { Column } from 'src/app/types/column.types';
import { StatisticData, StatisticService } from '../services/statistic.service';
import { LoggerService } from 'src/app/services/logger.service';
import { MODULE_TOKEN } from 'src/tokens/moduleToken';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-statistic-container',
  templateUrl: './statistic-container.component.html',
  styleUrls: ['./statistic-container.component.css'],
  providers: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticContainerComponent {

  protected columns$: Observable<StatisticData[]> = this.statisticService.columns$;

  constructor(private statisticService: StatisticService) {}

}
