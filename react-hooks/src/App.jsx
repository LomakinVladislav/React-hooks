import React from 'react';
import { ThemeProvider } from './1-useContext/ThemeContext';
import ThemeSwitcher from './1-useContext/ThemeSwitcher';
import Content from './1-useContext/Content';
import Counter from './2-useCallback/Counter';
import NumberList from './3-useMemo/NumberList';
import FocusInput from './4-useRef/FocusInput';
import TodoList from './5-useReducer/ToDoList';
import ParentComponent from './6-React.memo/ParentComponent';
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