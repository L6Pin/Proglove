import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DeviceModel, DevicesInfo } from '../../model/devices';

@Component({
  selector: 'app-control-panel-pie-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './control-panel-pie-chart.component.html',
  styleUrl: './control-panel-pie-chart.component.scss',
})
export class ControlPanelPieChartComponent implements OnChanges {
  @Input() devicesData!: DevicesInfo;

  chartData = {};
  private labels: string[] = [];
  private values: number[] = [];
  totalScanners = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (!!this.devicesData) {
      this.devicesData.models.forEach((element: DeviceModel) => {
        this.labels.push(element.name);
        this.values.push(element.value);
        this.totalScanners = this.totalScanners + element.value;
      });

      this.chartData = {
        labels: this.labels,
        datasets: [
          {
            data: this.values,
          },
        ],
      };
    }
  }
}
