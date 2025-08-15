import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes'

const ThemeToggleButton = () => {

    const { theme, setTheme } = useTheme()

    const handleThemeToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

  return (
    <button
      className="p-2 cursor-pointer items-center justify-center border-gray-300 rounded-lg z-99999 dark:border-gray-700 flex border dark:hover:bg-gray-700 hover:bg-gray-300"
      onClick={handleThemeToggle}
    >
      <SunIcon className="hidden dark:block dark:text-gray-300 text-gray-600 size-6" />
      <MoonIcon className="dark:hidden dark:text-gray-300 text-gray-600 size-6" />
    </button>
  );
}
export default ThemeToggleButton;