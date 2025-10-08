import type { FC } from 'react';
import { ChromePicker } from 'react-color';
import type { Color } from '@/types/color.ts';
import toColorPart from '@/utils/toColorPart.ts';

export type ColorPickerProps = {
  color: Color;
  onChange: (color: Color) => void;
};

const ColorPicker: FC<ColorPickerProps> = ({ color, onChange }) => {
  const pickerColor = { r: color.R, g: color.G, b: color.B, a: color.A / 255 };
  const handleChange = (color: {
    r?: number;
    g?: number;
    b?: number;
    a?: number;
  }) => {
    const r = toColorPart(color.r);
    const g = toColorPart(color.g);
    const b = toColorPart(color.b);
    const a = toColorPart((color.a ?? 0) * 255);
    onChange({
      R: r,
      G: g,
      B: b,
      A: a,
    });
  };
  return (
    <ChromePicker color={pickerColor} onChange={e => handleChange(e.rgb)} />
  );
};

export default ColorPicker;
