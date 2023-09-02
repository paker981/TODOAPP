import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ColumnDialogData, ColumnForm } from 'src/app/types/column.types';

@Component({
  selector: 'app-column-dialog',
  templateUrl: './column-dialog.component.html',
  styleUrls: ['./column-dialog.component.css']
})
export class ColumnDialogComponent {
  protected form: FormGroup<ColumnForm>;
  protected isEditable!: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) private data: ColumnDialogData,
    private dialogRef: MatDialogRef<ColumnDialogComponent>){
    this.form = new FormGroup<ColumnForm>({
      name: new FormControl('', Validators.required) as FormControl<string>
    })

    this.isEditable = data.editMode;

    if(data.editMode){
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
      this.form.controls.name.setValue(this.data.data.name);
    }
  }

}
