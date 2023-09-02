import { Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Column } from 'src/app/types/column.types';
import { ItemDialogComponent } from '../../dialogs/item-dialog/item-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { Task, TaskDialogData } from 'src/app/types/task.types';
import { ColumnDialogComponent } from '../../dialogs/column-dialog/column-dialog.component';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoTaskComponent } from '../todo-task/todo-task.component';
import { ColumnService } from '../../services/column.service';

@UntilDestroy()
@Component({
  selector: 'app-todo-column',
  templateUrl: './todo-column.component.html',
  styleUrls: ['./todo-column.component.css']
})
export class TodoColumnComponent {
  @Input() data!: Column;
  @Input() index!: number;
  @Output() itemDropped = new EventEmitter<CdkDragDrop<Column>>;

  constructor(
              private dialog: MatDialog,
              private todoService: TodoService,
              private columnService: ColumnService
            ) {}

  onItemDrop(event: CdkDragDrop<Column>): void {
    this.itemDropped.emit(event);
  }  

  addTaskToColumn(columnId: number) {
    const dialogRef = this.dialog.open(ItemDialogComponent, {width: '400px', height:'500px', data: {editMode: false} as TaskDialogData })

    dialogRef.afterClosed().pipe(
      untilDestroyed(this),
      filter(Boolean), // {} // najlepiej true i false
    ).subscribe((data: Task) => this.todoService.addTaskToColumn(columnId,data));
  }

  editColumn(){
    const dialogRef = this.dialog.open(ColumnDialogComponent, {width: '400px', height:'250px', data: {editMode: true, data: this.data}})

    dialogRef.afterClosed().pipe(
      untilDestroyed(this),
      filter(Boolean), // {} // najlepiej true i false
    ).subscribe((updatedData: Column) => this.columnService.edit(updatedData,this.data.id));
  }

  deleteColumn(){
    this.columnService.remove(this.data.id);
  }

  trackById(index: number, task: Task){
    return task.id;
  }

}
