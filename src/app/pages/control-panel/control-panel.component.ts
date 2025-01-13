import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';
import { ControlPanelPieChartComponent } from '../../components/control-panel-pie-chart/control-panel-pie-chart.component';
import { ControlPanelScannerStatusComponent } from '../../components/control-panel-scanner-status/control-panel-scanner-status.component';
import { ControlPanelFirmwareVersionComponent } from '../../components/control-panel-firmware-version/control-panel-firmware-version.component';
import { DevicesInfo } from '../../model/devices';


@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [
    ChartModule,
    ControlPanelPieChartComponent,
    ControlPanelScannerStatusComponent,
    ControlPanelFirmwareVersionComponent,
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss',
})
export class ControlPanelComponent implements OnInit, OnDestroy {
  private loginService = inject(LoginService);
  private subs = new Subscription();

  devicesData: DevicesInfo = {
    firmware: [],
    models:[],
    number_of_devices: 0,
    state: []
  }

  ngOnInit(): void {
    this.subs.add(
      this.loginService.login().subscribe(res => this.devicesData = res)
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
