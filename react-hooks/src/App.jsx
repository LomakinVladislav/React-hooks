import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import Content from './Content';
import Counter from './Counter';
import NumberList from './NumberList';
import FocusInput from './FocusInput';
import TodoList from './ToDoList';
import ParentComponent from './ParentComponent';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeSwitcher />
        <h1>React Hooks</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <Content />
            <Counter />
            <NumberList />
          </div>
          <div>
            <FocusInput />
            <TodoList />
            <ParentComponent />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;