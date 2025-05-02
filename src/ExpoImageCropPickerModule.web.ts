import { registerWebModule, NativeModule } from 'expo';

import { ExpoImageCropPickerModuleEvents } from './ExpoImageCropPicker.types';

class ExpoImageCropPickerModule extends NativeModule<ExpoImageCropPickerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoImageCropPickerModule, 'ExpoImageCropPickerModule');
