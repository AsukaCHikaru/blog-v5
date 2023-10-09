import { useEffect } from 'react';

const THEME_STORAGE_KEY = 'ASUKACHIKARU_THEME';
type Theme = 'DARK' | 'LIGHT';

export const useDarkMode = () => {
  const setDarkMode = (mode: Theme) => {
    if (mode === 'LIGHT') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      console.log('window not defined');
      return;
    }
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme;
    if (savedTheme) {
      setDarkMode(savedTheme);
      return;
    }

    const systemTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'DARK'
      : 'LIGHT';
    setDarkMode(systemTheme);
  }, []);

  const toggleDarkMode = () =>
    setDarkMode(
      document.documentElement.classList.contains('dark') ? 'LIGHT' : 'DARK',
    );

  return { toggleDarkMode };
};
