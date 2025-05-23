import React, { useState, useRef, useEffect } from 'react';

const FocusInput = () => {
  const [value, setValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    return () => {
      setPreviousValue(value);
    };
  }, [value]);

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd' }}>
      <h3>Управление фокусом (useRef)</h3>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Введите текст"
      />
      <button onClick={handleFocus} style={{ marginLeft: '10px' }}>
        Фокус на input
      </button>
      {previousValue && (
        <p>Предыдущее значение: {previousValue}</p>
      )}
    </div>
  );
};

export default FocusInput;