import { FormControl } from "@angular/forms"

export enum Priority {
    HIGH = 'high',
    MEDIUM = 'medium',
    LOW = 'low'
}

export interface Task {
    id: string,
    title: string,
    description: string,
    priority: Priority
    done: boolean
}

export type TaskForm = {
    title: FormControl<string>,
    description: FormControl<string>,
    priority: FormControl<Priority>
}

export type TaskDialogData = {
    editMode: boolean,
    data?: Task
}