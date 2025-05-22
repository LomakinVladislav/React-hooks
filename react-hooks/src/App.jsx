import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import Content from './Content';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeSwitcher />
        <Content />
        <Counter />
      </div>
    </ThemeProvider>
  );
}

export default App;