import { COLORS } from 'consts/colors';
import { LOCAL_STORAGE_KEYS } from 'consts/storageKeys';
import { useEffect, useState } from 'react';
import styles from '@styles/DarkModeButton.module.css';

type Theme = 'DARK' | 'LIGHT';

const setDarkMode = (mode: Theme) => {
  const html = document.documentElement;
  if (mode === 'LIGHT') {
    html.classList.remove('dark');
    html.style.backgroundColor = COLORS.LIGHT;
  } else {
    html.classList.add('dark');
    html.style.backgroundColor = COLORS.DARK;
  }
  localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, mode);
};

export const DarkModeButton = () => {
  const [mode, setMode] = useState<Theme>('DARK');

  useEffect(() => {
    if (typeof window === 'undefined') {
      console.log('window not defined');
      return;
    }
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) as Theme;
    if (savedTheme) {
      setDarkMode(savedTheme);
      setMode(savedTheme);
      return;
    }

    const systemTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'DARK'
      : 'LIGHT';
    setDarkMode(systemTheme);
    setMode(systemTheme);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(
      document.documentElement.classList.contains('dark') ? 'LIGHT' : 'DARK',
    );
    setMode(
      document.documentElement.classList.contains('dark') ? 'DARK' : 'LIGHT',
    );
  };

  return (
    <button
      className={`${styles.button} interactive-color`}
      onClick={toggleDarkMode}
    >
      {(mode === 'DARK' ? 'light' : 'dark') + ' mode'}
    </button>
  );
};
