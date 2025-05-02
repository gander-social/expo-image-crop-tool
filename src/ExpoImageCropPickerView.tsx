import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoImageCropPickerViewProps } from './ExpoImageCropPicker.types';

const NativeView: React.ComponentType<ExpoImageCropPickerViewProps> =
  requireNativeView('ExpoImageCropPicker');

export default function ExpoImageCropPickerView(props: ExpoImageCropPickerViewProps) {
  return <NativeView {...props} />;
}
