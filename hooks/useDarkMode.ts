import { LOCAL_STORAGE_KEYS } from 'consts/storageKeys';
import { useEffect } from 'react';

type Theme = 'DARK' | 'LIGHT';

export const useDarkMode = () => {
  const setDarkMode = (mode: Theme) => {
    if (mode === 'LIGHT') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, mode);
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      console.log('window not defined');
      return;
    }
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) as Theme;
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
