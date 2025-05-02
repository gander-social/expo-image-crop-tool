import * as React from 'react';

import { ExpoImageCropPickerViewProps } from './ExpoImageCropPicker.types';

export default function ExpoImageCropPickerView(props: ExpoImageCropPickerViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
