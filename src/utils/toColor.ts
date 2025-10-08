import type { Color } from '@/types/color.ts';
import toColorPart from '@/utils/toColorPart.ts';

const parseHex = (
  hex: string
): { success: true; value: Color } | { success: false } => {
  let cleanHex = hex.replace(/^#/, '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split('')
      .map(char => char + char)
      .join('');
  }
  if (cleanHex.length === 8) {
    const r = toColorPart(parseInt(cleanHex.substring(0, 2), 16));
    const g = toColorPart(parseInt(cleanHex.substring(2, 4), 16));
    const b = toColorPart(parseInt(cleanHex.substring(4, 6), 16));
    const a = toColorPart(parseInt(cleanHex.substring(6, 8), 16));
    if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a)) {
      return { success: false };
    }
    return {
      success: true,
      value: { R: r, G: g, B: b, A: a },
    };
  }
  if (cleanHex.length === 6) {
    const r = toColorPart(parseInt(cleanHex.substring(0, 2), 16));
    const g = toColorPart(parseInt(cleanHex.substring(2, 4), 16));
    const b = toColorPart(parseInt(cleanHex.substring(4, 6), 16));
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      return { success: false };
    }
    return {
      success: true,
      value: { R: r, G: g, B: b, A: 255 },
    };
  }
  return { success: false };
};
const parseRgba = (
  rgba: string
): { success: true; value: Color } | { success: false } => {
  const match = rgba.match(
    /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)$/i
  );
  if (!match) {
    return { success: false };
  }
  const r = toColorPart(parseInt(match[1]));
  const g = toColorPart(parseInt(match[2]));
  const b = toColorPart(parseInt(match[3]));
  const a = match[4] ? toColorPart(parseInt(match[4])) : 1;
  if (
    isNaN(r) ||
    isNaN(g) ||
    isNaN(b) ||
    isNaN(a) ||
    r < 0 ||
    r > 255 ||
    g < 0 ||
    g > 255 ||
    b < 0 ||
    b > 255 ||
    a < 0 ||
    a > 1
  ) {
    return { success: false };
  }
  return {
    success: true,
    value: { R: r, G: g, B: b, A: a },
  };
};

const toColor = (
  color: string,
  by: 'rgba' | 'hex' = 'hex'
): { success: true; value: Color } | { success: false } => {
  if (by === 'hex') {
    return parseHex(color);
  } else {
    return parseRgba(color);
  }
};

export default toColor;
