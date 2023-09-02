import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DataProviderService } from 'src/app/services/dataProvider/data-provider.service';
import {  Priority, Task, TaskDialogData } from 'src/app/types/task.types';
import { Column } from 'src/app/types/column.types';
import { MatDialog } from '@angular/material/dialog';
import { ColumnDialogComponent } from '../dialogs/column-dialog/column-dialog.component';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ItemDialogComponent } from '../dialogs/item-dialog/item-dialog.component';
import { TodoService } from '../services/todo.service';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TodoColumnComponent } from './todo-column/todo-column.component';
import { ColumnService } from '../services/column.service';
import { LoggerService } from 'src/app/services/logger.service';
import { MODULE_TOKEN } from 'src/tokens/moduleToken';


@UntilDestroy()
@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
  providers: [
 
  ]
})
export class TodoContainerComponent {

  protected columns$: Observable<Column[]> = this.todoService.data$;

  constructor(
              private dialog: MatDialog,
              private todoService: TodoService,
              private columnService: ColumnService,
              ){}

  onItemDrop(event: CdkDragDrop<Column>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data.tasks, event.previousIndex, event.currentIndex);
      this.todoService.updateItemsInColumn(event.container.data.id, event.container.data.tasks);
    } else {
      transferArrayItem(
        event.previousContainer.data.tasks,
        event.container.data.tasks,
        event.previousIndex,
        event.currentIndex
      );
      this.todoService.updateItemsInColumn(event.previousContainer.data.id, event.previousContainer.data.tasks);
      this.todoService.updateItemsInColumn(event.container.data.id, event.container.data.tasks);
    }
  }

  addColumn(){
    const dialogRef = this.dialog.open(ColumnDialogComponent, {width: '400px', height:'250px', data: {editMode: false}})
    dialogRef.afterClosed().pipe(
      untilDestroyed(this),
      filter(Boolean), // {} // najlepiej true i false
    ).subscribe((data: Column) => this.columnService.add(data));
  }

  trackById(index: number, column: Column){
    return column.id;
  }
}
