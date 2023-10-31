import { Meta, moduleMetadata } from "@storybook/angular";
import { StatisticContainerComponent } from "./statistic-container/statistic-container.component";
import { Column } from "src/app/types/column.types";
import { Priority } from "src/app/types/task.types";
import { StatisticData, StatisticService } from "./services/statistic.service";
import { of } from "rxjs";
import { StatisticModule } from "./statistic.module";
import { Provider } from "@angular/core";


const columnMock: Column[] = [
    {id: 1, name: 'example1', tasks: [{id: '1',title: 'exampletask1',description: 'example',done: true, priority: Priority.HIGH},{id: '2',title: 'exampletask2',description: 'example',done: false, priority: Priority.MEDIUM}]},
    {id: 2, name: 'example2', tasks: [{id: '2',title: 'exampletask2',description: 'example',done: false, priority: Priority.MEDIUM}]}
  ]

const statisticMock: StatisticData[] = [
    {name: 'example1', dataForChart: [{name: Priority.HIGH, value: 60},{name: Priority.MEDIUM, value: 10},{name: Priority.LOW, value: 20}]},
    {name: 'example2', dataForChart: [{name: Priority.HIGH, value: 60},{name: Priority.MEDIUM, value: 90},{name: Priority.LOW, value: 20}]},
    {name: 'example3', dataForChart: [{name: Priority.HIGH, value: 40},{name: Priority.MEDIUM, value: 50},{name: Priority.LOW, value: 70}]}
]  

const statisticMoc2: StatisticData[] = [
    {name: 'example1', dataForChart: [{name: Priority.HIGH, value: 10},{name: Priority.MEDIUM, value: 30},{name: Priority.LOW, value: 20}]},
    {name: 'example2', dataForChart: [{name: Priority.HIGH, value: 60},{name: Priority.MEDIUM, value: 80},{name: Priority.LOW, value: 20}]},
    {name: 'example3', dataForChart: [{name: Priority.HIGH, value: 40},{name: Priority.MEDIUM, value: 50},{name: Priority.LOW, value: 70}]}
]  

export default {
    title: 'Statistic',
    component: StatisticContainerComponent,
    decorators: [
        moduleMetadata({
            imports: [
                StatisticModule
            ],
            providers: [
                {
                    provide: StatisticService,
                    useValue: {
                        columns$: of(statisticMock)
                    }
                }
            ]   
        })
    ]
} as Meta<StatisticContainerComponent>


export const Default = () => ({
    component: StatisticContainerComponent, // Komponent, który chcesz wyświetlić
    template: `<app-statistic-container></app-statistic-container>`, // Szablon do wyrenderowania komponentu
});
