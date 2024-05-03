import { COLORS } from 'consts/colors';
import { LOCAL_STORAGE_KEYS } from 'consts/storageKeys';
import { useEffect } from 'react';

type Theme = 'DARK' | 'LIGHT';

export const DarkModeButton = () => {
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

  return (
    <button
      className="font-noto-sans text-fb2 interactive-color"
      onClick={toggleDarkMode}
    >
      dark mode
    </button>
  );
};
