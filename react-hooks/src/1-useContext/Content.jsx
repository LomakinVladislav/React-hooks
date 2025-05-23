import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`content ${theme}`}>
      <h1>Приложение с переключением тем</h1>
      <p>Текущая тема: {theme}</p>
      <p>Я использую useContext для управления темой приложения.</p>
    </div>
  );
};

export default Content;