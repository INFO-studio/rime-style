import type { ColorPart } from '@/types/color.ts';
import { match } from 'ts-pattern';

const toColorPart = (part: number = 0): ColorPart =>
  match(part)
    .when(
      part => part > 255,
      () => 255 as const
    )
    .when(
      part => part < 0,
      () => 0 as const
    )
    .otherwise(part => Number(part.toFixed(0)) as ColorPart);

export default toColorPart;
