import { WebPlugin } from '@capacitor/core';

import type {
  BarcodeScannerPlugin,
  ScanOptions,
  ScanResult,
  CheckPermissionOptions,
  CheckPermissionResult,
  StopScanOptions,
  TorchStateResult,
} from './definitions';

export class BarcodeScannerWeb
  extends WebPlugin
  implements BarcodeScannerPlugin {
  async prepare(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async hideBackground(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async showBackground(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async startScan(_options: ScanOptions): Promise<ScanResult> {
    throw this.unimplemented('Not implemented on web.');
  }

  async startScanning(_options: ScanOptions, _callback: any): Promise<string> {
    throw this.unimplemented('Not implemented on web.');
  }

  async pauseScanning(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async resumeScanning(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async stopScan(_options?: StopScanOptions): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async checkPermission(
    _options: CheckPermissionOptions,
  ): Promise<CheckPermissionResult> {
    throw this.unimplemented('Not implemented on web.');
  }

  async openAppSettings(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
<<<<<<< HEAD
  
  disableTorch(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  enableTorch(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  toggleTorch(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  getTorchState(): Promise<TorchStateResult> {
=======

  async disableTorch(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async enableTorch(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async toggleTorch(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async getTorchState(): Promise<TorchStateResult> {
>>>>>>> 2a837bbdd7a6794f096c3d84f2423c041981509e
    throw this.unimplemented('Not implemented on web.');
  }
}
