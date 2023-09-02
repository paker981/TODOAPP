import { Injectable, Inject, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { arrayEqual, generateUUID } from 'src/app/helpers/helpers';
import { DataProviderService } from 'src/app/services/dataProvider/data-provider.service';
import { LoggerService } from 'src/app/services/logger.service';
import { Column } from 'src/app/types/column.types';
import { Task } from 'src/app/types/task.types';

@Injectable()
export class TodoService {
  data$: Observable<Column[]> = this.dataProviderService.columns$;

  constructor(
              private dataProviderService: DataProviderService,
              private loggerService: LoggerService 
              ) { 
              this.loggerService.logEnvironment();  
              this.loggerService.log('test Todo');
             }

  // getData(){
  //   return this.data$;
  // }           

  addTaskToColumn(columnIndex: number, task: Task): void {
    task.done = false;
    task.id = generateUUID()
    const columns = this.dataProviderService.getData();
    columns[columnIndex].tasks.push(task);
    this.dataProviderService.saveData(columns);
  }

  removeTaskFromColumn(columnIndex: number, taskIndex: number): void {
    const columns = this.dataProviderService.getData();
    columns[columnIndex].tasks.splice(taskIndex, 1);
    this.dataProviderService.saveData(columns);
  }

  updateColumnTasks(columnTasks: Task[],columnIndex: number): void {
    const columns = this.dataProviderService.getData();
      columns[columnIndex].tasks = [...columnTasks];
      this.dataProviderService.saveData(columns);
  }

  updateItemsInColumn(columnId: number, tasks: Task[]): void {
    const columns = this.dataProviderService.getData();
    const index = columns.findIndex((column)=> column.id === columnId)
    if(index === -1){
      return;
    }
    columns[index].tasks = tasks;
    this.dataProviderService.saveData(columns);
  }
}
