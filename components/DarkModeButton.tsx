import { useDarkMode } from 'hooks/useDarkMode';

export const DarkModeButton = () => {
  const { toggleDarkMode } = useDarkMode();

  return (
    <button
      className="font-noto-sans text-fb2 interactive-color"
      onClick={toggleDarkMode}
    >
      dark mode
    </button>
  );
};
