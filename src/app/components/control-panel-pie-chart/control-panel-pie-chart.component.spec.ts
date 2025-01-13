import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelPieChartComponent } from './control-panel-pie-chart.component';

describe('ControlPanelPieChartComponent', () => {
  let component: ControlPanelPieChartComponent;
  let fixture: ComponentFixture<ControlPanelPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlPanelPieChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPanelPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
