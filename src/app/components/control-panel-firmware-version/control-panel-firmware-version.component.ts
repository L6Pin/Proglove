import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DeviceFirmware, DevicesInfo } from '../../model/devices';

@Component({
  selector: 'app-control-panel-firmware-version',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './control-panel-firmware-version.component.html',
  styleUrl: './control-panel-firmware-version.component.scss',
})
export class ControlPanelFirmwareVersionComponent implements OnChanges {
  @Input() devicesData!: DevicesInfo;
  private labels: string[] = [];
  private values: number[] = [];
  chartData = {};
  options = {};

  ngOnChanges(changes: SimpleChanges): void {

    if(!!this.devicesData){

      this.devicesData.firmware.forEach((element: DeviceFirmware) => {
        this.labels.push(element.name);
        this.values.push(element.value);
      });
  
      this.chartData = {
        labels: this.labels,
        datasets: [
          {
            data: this.values,
          },
        ],
      };
  
      this.options = {
        plugins: {
          legend: {
            display: false,
          },
        },
      };
    }

  }
}
