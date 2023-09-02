import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Priority, TaskDialogData, TaskForm } from 'src/app/types/task.types';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.css']
})
export class ItemDialogComponent {

  protected form: FormGroup<TaskForm>;
  protected priorities = Priority;
  protected isEditable!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: TaskDialogData,
    private dialogRef: MatDialogRef<ItemDialogComponent>
  ){

    this.isEditable = this.data.editMode;

    this.form = new FormGroup<TaskForm>({
      title: new FormControl('', Validators.required) as FormControl<string>,
      description: new FormControl('', Validators.required) as FormControl<string>,
      priority: new FormControl(''as unknown as Priority, Validators.required) as FormControl<Priority>
    })

    if(this.isEditable){
      this.setControlsValue()
    }
  }

  onSubmit(): void{
    if(this.form.invalid){
      return;
    }
    this.dialogRef.close(this.form.value);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  setControlsValue(){
    if(this.data.data){
      this.form.controls.title.setValue(this.data.data.title)
      this.form.controls.description.setValue(this.data.data.description)
      this.form.controls.priority.setValue(this.data.data.priority)
    }
  }
}
