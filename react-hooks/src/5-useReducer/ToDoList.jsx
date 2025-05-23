import React, { useReducer, useState } from 'react';

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

const TodoList = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd' }}>
      <h3>Todo List (useReducer)</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Новая задача"
        />
        <button type="submit" style={{ marginLeft: '10px' }}>
          Добавить
        </button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              margin: '5px 0',
              textDecoration: todo.completed ? 'line-through' : 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
              style={{ flexGrow: 1, cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;