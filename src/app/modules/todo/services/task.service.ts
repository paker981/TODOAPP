import { Injectable } from '@angular/core';
import { DataProviderService } from 'src/app/services/dataProvider/data-provider.service';
import { Column } from 'src/app/types/column.types';
import { Task } from 'src/app/types/task.types';

@Injectable()
export class TaskService {

  constructor(private dataProviderService: DataProviderService) { }

  changeState(columnId: number, taskIndex: number){
    const columns = this.dataProviderService.getData();
    const index = columns.findIndex((column)=> column.id === columnId)
    if(index === -1){
      return;
    }
    const itemToChange = columns[index].tasks[taskIndex].done;
    columns[index].tasks[taskIndex].done = !itemToChange; 
    this.dataProviderService.saveData(columns);
  }

  edit(columnId: number, taskIndex: number, data: Task){
    const columns = this.dataProviderService.getData();
    const index = columns.findIndex((column)=> column.id === columnId)
    if(index === -1){
      return;
    }
    columns[index].tasks[taskIndex] = data; 
    this.dataProviderService.saveData(columns);
  }

  delete(columnId: number, taskIndex: number){
    const columns = this.dataProviderService.getData();
    const index = columns.findIndex((column)=> column.id === columnId)
    if(index === -1){
      return;
    }
    columns[index].tasks.splice(taskIndex,1); 
    this.dataProviderService.saveData(columns);
  }

  
}
