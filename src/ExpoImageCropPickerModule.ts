import { NativeModule, requireNativeModule } from 'expo';

import { ExpoImageCropPickerModuleEvents } from './ExpoImageCropPicker.types';

declare class ExpoImageCropPickerModule extends NativeModule<ExpoImageCropPickerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoImageCropPickerModule>('ExpoImageCropPicker');
