import { createGlobalStore } from 'hox';
import { useState } from 'react';
import type { ColorScheme, RimeStyle } from '@/types/rimeStyle.ts';
import defaultStyle from '@/const/defaultStyle.ts';

const [useStyleStore] = createGlobalStore(() => {
  const [style, setStyle] = useState<RimeStyle>(defaultStyle);
  const setStyleColorScheme = (colorScheme: ColorScheme) =>
    setStyle({ ...style, colorScheme });
  const setStyleColorSchemeValue = <T extends keyof ColorScheme>(
    key: T,
    value: ColorScheme[T]
  ) => setStyleColorScheme({ ...style.colorScheme, [key]: value });
  return {
    style,
    setStyle,
    setStyleColorScheme,
    setStyleColorSchemeValue,
  };
});

export default useStyleStore;
