import React, { useState, useEffect, memo } from 'react';
import Icon from './Icon';

export type DarkModeTogglerProps = {
  className?: string;
}

const DarkModeToggler = memo(function DarkModeToggler({ className='' }: DarkModeTogglerProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const ariaLabel = `Switch to ${isDarkMode ? 'Light Mode' : 'Dark Mode'}`;

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  function handleOnClick(event: React.MouseEvent<HTMLButtonElement>) {
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  return (
    <button
      aria-label={ ariaLabel }
      onClick={ handleOnClick }
      className={`
        flex items-center justify-center
        absolute top-8 right-8
        ${ className }
      `}
    >
      { 
        isDarkMode ? 
        <Icon type='darkMode' /> : 
        <Icon type='lightMode' /> 
      }
    </button>
  )
});

export default DarkModeToggler;