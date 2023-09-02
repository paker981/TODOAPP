import { Injectable } from '@angular/core';
import { DataProviderService } from 'src/app/services/dataProvider/data-provider.service';
import { Column } from 'src/app/types/column.types';

@Injectable()
export class ColumnService {

  constructor(private dataProviderService: DataProviderService) { }

  add(column: Column): void {
    const columns = this.dataProviderService.getData();
    column.tasks =[];
    column.id = columns.length;
    columns.push(column);
    this.dataProviderService.saveData(columns);
  }

  remove(index: number): void {
    const columns = this.dataProviderService.getData();
    columns.splice(index, 1);
    columns.forEach((column,index)=>column.id=index)
    this.dataProviderService.saveData(columns);
  }

  edit(updatedColumn: Column,columnIndex: number){
    const columns = this.dataProviderService.getData();
    columns[columnIndex].name = updatedColumn.name;
    this.dataProviderService.saveData(columns);
  }
}
