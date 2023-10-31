import { Column } from "src/app/types/column.types";
import { TodoContainerComponent } from "./todo-container.component";
import { Meta, moduleMetadata, } from "@storybook/angular";
import { TodoModule } from "../todo.module";
import { TodoService } from "../services/todo.service";
import { of } from "rxjs";
import { Priority } from "src/app/types/task.types";
import { ColumnService } from "../services/column.service";
import { MaterialModule } from "../../material/material.module";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { TaskService } from "../services/task.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


const columnMock: Column[] = [
    {id: 1, name: 'example1', tasks: [{id: '1',title: 'exampletask1',description: 'example',done: true, priority: Priority.HIGH},{id: '2',title: 'exampletask2',description: 'example',done: false, priority: Priority.MEDIUM}]},
    {id: 2, name: 'example2', tasks: [{id: '2',title: 'exampletask2',description: 'example',done: false, priority: Priority.MEDIUM}]}
  ]


export default {
    title: 'TODO',
    component: TodoContainerComponent,
    decorators: [
        moduleMetadata({
            imports: [
                TodoModule,
                MaterialModule,
                MatIconModule,
                MatMenuModule,
                BrowserAnimationsModule
            ],
            providers: [
                {
                    provide: TodoService,
                    useValue: {
                        data$: of(columnMock)
                    }
                },
                {
                    provide: ColumnService,
                    useValue: {}
                },
                {
                    provide: TaskService,
                    useValue: {}
                },

            ]   
        })
    ]
} as Meta<TodoContainerComponent>


export const Default = () => ({
    component: TodoContainerComponent, // Komponent, który chcesz wyświetlić
    template: `<app-todo-container></app-todo-container>`, // Szablon do wyrenderowania komponentu,
    import: [MaterialModule]
});