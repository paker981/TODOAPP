import { FormControl } from "@angular/forms";
import { Task } from "./task.types";

export interface Column {
    id: number,
    name: string,
    tasks: Task[]
}

export type ColumnForm ={
    name: FormControl<string>
}

export type ColumnDialogData = {
    editMode: boolean,
    data?: Column
}