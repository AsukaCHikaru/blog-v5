import { useDarkMode } from 'hooks/useDarkMode';

export const DarkModeButton = () => {
  const { toggleDarkMode } = useDarkMode();

  return (
    <button
      className="whitespace-pre text-right text-xs lg:text-sm leading-4"
      onClick={toggleDarkMode}
    >
      dark{`\n`}mode
    </button>
  );
};
