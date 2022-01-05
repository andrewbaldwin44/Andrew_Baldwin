import { useEffect, useState } from 'react';
import cx from 'classnames';

import DarkModeIcon from 'assets/dark-mode';
import LightModeIcon from 'assets/light-mode';

export default function DarkLightToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.add('dark');
    setIsDarkMode(true);
  };

  const toggleLightMode = () => {
    document.documentElement.classList.remove('dark');
    setIsDarkMode(false);
  };

  useEffect(() => {
    // set dark mode based on local storage
    // or users browser preferences
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      toggleDarkMode();
    } else {
      toggleLightMode();
    }
  }, []);

  const toggleMode = () => {
    if (isDarkMode) {
      localStorage.theme = 'light';
      toggleLightMode();
    } else {
      localStorage.theme = 'dark';
      toggleDarkMode();
    }
  };

  const iconClasses = cx('h-6 w-6 dark:text-gray-100');

  return (
    <button onClick={toggleMode}>
      {isDarkMode ? (
        <LightModeIcon className={iconClasses} />
      ) : (
        <DarkModeIcon className={iconClasses} />
      )}
    </button>
  );
}
