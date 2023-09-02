import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { MaterialModule } from '../material/material.module';
import { ItemDialogComponent } from './dialogs/item-dialog/item-dialog.component';
import { ColumnDialogComponent } from './dialogs/column-dialog/column-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { TodoColumnComponent } from './todo-container/todo-column/todo-column.component';
import { TodoTaskComponent } from './todo-container/todo-task/todo-task.component';
import { ColumnService } from './services/column.service';
import { TaskService } from './services/task.service';
import { MODULE_TOKEN } from 'src/tokens/moduleToken';
import { LoggerService } from 'src/app/services/logger.service';
import { TodoRoutingModule } from './todo-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TodoContainerComponent,
    ItemDialogComponent,
    ColumnDialogComponent,
    TodoColumnComponent,
    TodoTaskComponent,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    CdkDrag,
    CdkDropList,
    MaterialModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    RouterModule
  ],
  providers: [
    ColumnService,
    TaskService,
    { provide: MODULE_TOKEN, useValue: 'TODO' },
    LoggerService,
    TodoService
    //{ provide: MODULE_TOKEN, useValue: 'TODO' },
   // LoggerService,
   // TodoService,
  ],
  exports: [
    TodoContainerComponent
  ]
})
export class TodoModule { }
