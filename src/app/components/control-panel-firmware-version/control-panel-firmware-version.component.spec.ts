import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelFirmwareVersionComponent } from './control-panel-firmware-version.component';

describe('ControlPanelFirmwareVersionComponent', () => {
  let component: ControlPanelFirmwareVersionComponent;
  let fixture: ComponentFixture<ControlPanelFirmwareVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlPanelFirmwareVersionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPanelFirmwareVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
