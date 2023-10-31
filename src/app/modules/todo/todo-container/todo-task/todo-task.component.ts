import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Task, TaskDialogData } from 'src/app/types/task.types';
import { TodoService } from '../../services/todo.service';
import { ItemDialogComponent } from '../../dialogs/item-dialog/item-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { LoggerService } from 'src/app/services/logger.service';

@UntilDestroy()
@Component({
  selector: 'app-todo-task[columnId]', //required better - angular 16
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoTaskComponent implements OnInit {

  @Input({required: true}) data!: Task;
  @Input({required: true}) index!: number;
  @Input() columnId!: number;

  constructor(
              private dialog: MatDialog,
              private taskService: TaskService
              ){}
  ngOnInit(): void {
    console.log(this.data)
  }

  changeState(){
    this.taskService.changeState(this.columnId,this.index);
  }

  edit(){
    const dialogRef = this.dialog.open(ItemDialogComponent, {width: '400px', height:'500px', data: {editMode: true, data: this.data} as TaskDialogData })

    dialogRef.afterClosed().pipe(
      untilDestroyed(this),
      filter(Boolean), // {} // najlepiej true i false
    ).subscribe((updatedData: Task) => this.taskService.edit(this.columnId,this.index,updatedData));

  }

  delete(){
    this.taskService.delete(this.columnId,this.index)
  }
}
