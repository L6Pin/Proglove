import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DevicesInfo } from '../../model/devices';

@Component({
  selector: 'app-control-panel-scanner-status',
  standalone: true,
  imports: [],
  templateUrl: './control-panel-scanner-status.component.html',
  styleUrl: './control-panel-scanner-status.component.scss',
})
export class ControlPanelScannerStatusComponent implements OnChanges {
  @Input() devicesData!: DevicesInfo;

  offlineScanners = 0;

  ngOnChanges(changes: SimpleChanges): void {

    if (this.devicesData.state.length > 0) {
      this.offlineScanners = this.devicesData?.state[0].value;
    }
  }
}
