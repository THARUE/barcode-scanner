import { WebPlugin } from '@capacitor/core';

import type {
  BarcodeScannerPlugin,
  ScanOptions,
  ScanResult,
  CheckPermissionOptions,
  CheckPermissionResult,
  StopScanOptions,
  TorchStateResult
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
    throw this.unimplemented('Not implemented on web.');
  }
}
