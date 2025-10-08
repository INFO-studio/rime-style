import type { Color } from '@/types/color.ts';

const rgba = (color: Color): string => {
  return `rgba(${color.R}, ${color.G}, ${color.B}, ${color.A})`;
};

export default rgba;
