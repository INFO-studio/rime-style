import { createGlobalStore } from 'hox';
import { useEffect, useState } from 'react';
import type {
  ColorScheme,
  ColorSchemeTemp,
  Layout,
  RimeStyle,
  RimeStyleTemp,
  Style,
} from '@/types/rimeStyle.ts';
import defaultStyle from '@/const/defaultStyle.ts';
import toTemp from '@/utils/toTemp.ts';
import type { Color } from '@/types/color.ts';
import toColor from '@/utils/toColor.ts';

const [useStyleStore] = createGlobalStore(() => {
  const localStorageRimeStyleJson = localStorage.getItem('rime_style');
  const getLocalStorageRimeStyle = () => {
    if (localStorageRimeStyleJson) {
      try {
        const local = JSON.parse(localStorageRimeStyleJson);
        return local;
      } catch {
        return defaultStyle;
      }
    } else {
      return defaultStyle;
    }
  };
  const localStorageRimeStyle = getLocalStorageRimeStyle();
  const [style, setStyle] = useState<RimeStyle>(localStorageRimeStyle);
  const [styleTemp, setStyleTemp] = useState<RimeStyleTemp>(toTemp(style));
  useEffect(() => {
    localStorage.setItem('rime_style', JSON.stringify(style));
  }, [style]);

  const setStyleStyle = (styleStyle: Style) =>
    setStyle({ ...style, style: styleStyle });
  const setStyleStyleValue = <T extends keyof Style>(key: T, value: Style[T]) =>
    setStyleStyle({ ...style.style, [key]: value });
  const setStyleStyleLayout = (layout: Layout) =>
    setStyleStyleValue('layout', layout);
  const setStyleStyleLayoutValue = <T extends keyof Layout>(
    key: T,
    value: Layout[T]
  ) => setStyleStyleLayout({ ...style.style.layout, [key]: value });
  const setStyleColorScheme = (colorScheme: ColorScheme) =>
    setStyle({ ...style, colorScheme });
  const setStyleColorSchemeValue = <T extends keyof ColorScheme>(
    key: T,
    value: ColorScheme[T]
  ) => setStyleColorScheme({ ...style.colorScheme, [key]: value });

  const setStyleTempStyle = (styleStyle: Style) =>
    setStyleTemp({ ...styleTemp, style: styleStyle });
  const setStyleTempStyleValue = <T extends keyof Style>(
    key: T,
    value: Style[T]
  ) => setStyleTempStyle({ ...styleTemp.style, [key]: value });
  const setStyleTempStyleLayout = (layout: Layout) =>
    setStyleTempStyleValue('layout', layout);
  const setStyleTempStyleLayoutValue = <T extends keyof Layout>(
    key: T,
    value: Layout[T]
  ) => setStyleTempStyleLayout({ ...styleTemp.style.layout, [key]: value });
  const setStyleTempColorScheme = (colorScheme: ColorSchemeTemp) =>
    setStyleTemp({ ...styleTemp, colorScheme });
  const setStyleTempColorSchemeValue = <T extends keyof ColorSchemeTemp>(
    key: T,
    value: ColorSchemeTemp[T]
  ) => setStyleTempColorScheme({ ...styleTemp.colorScheme, [key]: value });

  const onChangeColor = <
    T extends Extract<
      keyof ColorScheme,
      {
        [K in keyof ColorScheme]: ColorScheme[K] extends Color ? K : never;
      }[keyof ColorScheme]
    >,
  >(
    key: T,
    value: string
  ) => {
    setStyleTempColorSchemeValue(key, value);
    const color = toColor(value);
    if (color.success) {
      setStyleColorSchemeValue(key, color.value);
    }
  };

  return {
    style,
    setStyle,
    setStyleStyle,
    setStyleStyleValue,
    setStyleStyleLayout,
    setStyleStyleLayoutValue,
    setStyleColorScheme,
    setStyleColorSchemeValue,
    styleTemp,
    setStyleTemp,
    setStyleTempStyle,
    setStyleTempStyleValue,
    setStyleTempStyleLayout,
    setStyleTempStyleLayoutValue,
    setStyleTempColorScheme,
    setStyleTempColorSchemeValue,
    onChangeColor,
  };
});

export default useStyleStore;
