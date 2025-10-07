import { createGlobalStore } from 'hox';
import { useEffect, useState } from 'react';
import type { Theme } from '@/theme/type.ts';
import { themeList } from '@/theme/const.ts';
import { match } from 'ts-pattern';
import { isString } from 'lodash';

export const [useThemeStore] = createGlobalStore(() => {
  const localStorageTheme = localStorage.getItem('theme');

  const [theme, setTheme] = useState<Theme>(
    isString(localStorageTheme) &&
      (themeList as readonly string[]).includes(localStorageTheme)
      ? (localStorageTheme as Theme)
      : 'system'
  );
  const toggleTheme = () => {
    console.log(theme);
    setTheme(
      match<number, Theme>(themeList.indexOf(theme))
        .with(-1, () => themeList[0])
        .with(themeList.length - 1, () => themeList[0])
        .otherwise(i => themeList[i + 1])
    );
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return {
    theme,
    setTheme,
    toggleTheme,
  };
});
