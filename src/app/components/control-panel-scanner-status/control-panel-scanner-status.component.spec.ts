import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelScannerStatusComponent } from './control-panel-scanner-status.component';

describe('ControlPanelScannerStatusComponent', () => {
  let component: ControlPanelScannerStatusComponent;
  let fixture: ComponentFixture<ControlPanelScannerStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlPanelScannerStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPanelScannerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
