export interface DeviceState {
  name: string;
  value: number;
}

export interface DeviceModel {
  name: string;
  value: number;
}

export interface DeviceFirmware {
  name: string;
  value: number;
}

export interface DevicesInfo {
  number_of_devices: number;
  state: DeviceState[];
  models: DeviceModel[];
  firmware: DeviceFirmware[];
}
