import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import Content from './Content';
import Counter from './Counter';
import NumberList from './NumberList';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeSwitcher />
        <Content />
        <Counter />
        <NumberList />
      </div>
    </ThemeProvider>
  );
}

export default App;