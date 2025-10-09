import type { FC } from 'react';
import type { Color } from '@/types/color.ts';
import rgba from '@/utils/rgba.ts';

export type ColorCheckerProps = {
  color: Color;
};

const ColorChecker: FC<ColorCheckerProps> = ({ color }) => {
  const transparentGridSVG = (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="checkerPattern"
          x="0"
          y="0"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <rect x="4" y="0" width="4" height="4" fill="#cccccc" />
          <rect x="0" y="0" width="4" height="4" fill="#ffffff" />
          <rect x="0" y="4" width="4" height="4" fill="#cccccc" />
          <rect x="4" y="4" width="4" height="4" fill="#ffffff" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#checkerPattern)" />
    </svg>
  );

  return (
    <div
      className={
        'w-8 h-8 shrink-0 rounded-md border-2 dark:border-input relative overflow-hidden'
      }
    >
      <div className="absolute inset-0">{transparentGridSVG}</div>
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: rgba(color),
        }}
      />
    </div>
  );
};

export default ColorChecker;
