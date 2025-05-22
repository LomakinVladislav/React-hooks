import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme}
      className={`theme-switcher ${theme}`}
    >
      Переключить на {theme === 'light' ? 'тёмную' : 'светлую'} тему
    </button>
  );
};

export default ThemeSwitcher;