import { Component, Input } from '@angular/core';
import { Column } from 'src/app/types/column.types';
import { Priority } from 'src/app/types/task.types';
import { StatisticData } from '../../services/statistic.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  // onPush
})
export class ChartComponent {
  @Input() set data (value: StatisticData) {
    this.chartData = value.dataForChart;
  };

  protected view: [number,number] = [700, 400];
  protected chartData!: any[];
  protected showXAxis = true;
  protected showYAxis = true;
  protected showLegend = true;
  protected showXAxisLabel = true;
  protected showYAxisLabel = true;
  protected xAxisLabel = 'Priority';
  protected yAxisLabel = 'Percentage%';
}
