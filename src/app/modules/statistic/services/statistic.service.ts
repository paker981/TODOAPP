import { Inject, Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { DataProviderService } from 'src/app/services/dataProvider/data-provider.service';
import { LoggerService } from 'src/app/services/logger.service';
import { Column } from 'src/app/types/column.types';
import { Priority } from 'src/app/types/task.types';

export type StatisticData = {
  name: string,
  dataForChart: ChartData[]
}

export type ChartData = {
  name: string,
  value: number
}



@Injectable()
export class StatisticService {
  readonly columns$: Observable<StatisticData[]>;

  constructor(private dataProviderService: DataProviderService,
              private logger: LoggerService) {
      this.logger.logEnvironment();  
      this.logger.log('data loaded')
      this.columns$ = this.dataProviderService.columns$.pipe(
                      map(data => data.map((column)=>this.prepareDate(column))) // changeDetectionTrigger?
);
  }

  private prepareDate(data: Column): StatisticData{
    const amountOfTasks = data.tasks.length;
    const [amountOfHigh,amountOfMedium,amountOfLow] = this.calculate(data)

    // {name: data.name, dataForChart: }
    return {
      name: data.name,

      dataForChart: [
      {
        name: Priority.HIGH,
        value: amountOfTasks ? Math.round((amountOfHigh/amountOfTasks)*100) : 0, // Procentowy udział
      },
      {
        name: Priority.MEDIUM,
        value: amountOfTasks ? Math.round((amountOfMedium/amountOfTasks)*100) : 0,
      },
      {
        name: Priority.LOW,
        value: amountOfTasks ? Math.round((amountOfLow/amountOfTasks)*100) : 0,
      },
      ]
    };
  }

  private calculate(data: Column): [number,number,number]{
    return data.tasks.reduce((counts, task) => {
      if (task.priority === Priority.HIGH) {
        counts[0]++;
      } else if (task.priority === Priority.MEDIUM) {
        counts[1]++;
      } else if (task.priority === Priority.LOW) {
        counts[2]++;
      }
      return counts;
    }, [0, 0, 0]);
  }


}
