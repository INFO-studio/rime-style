import type { Color, ColorPart } from '@/types/color.ts';

const hexa = (color: Color): string => {
  const toHexa = (value: ColorPart): string => {
    const hex = value.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const r = toHexa(color.R);
  const g = toHexa(color.G);
  const b = toHexa(color.B);
  const a = toHexa(color.A);

  return `#${r}${g}${b}${a}`;
};

export default hexa;
