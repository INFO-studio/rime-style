import { type FC, type ReactNode, useEffect } from 'react';
import { useTheme } from '@/theme';

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useTheme();

  console.log(theme);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
      return;
    } else {
      root.classList.add(theme);
    }
  }, [theme]);
  return children;
};

export default ThemeProvider;
