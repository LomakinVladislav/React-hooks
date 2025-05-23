import { memo } from 'react';

const Buttons = memo(({ increment, decrement, addItem }) => {
  console.log('Рендер Buttons');
  return (
    <div>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
      <button onClick={addItem}>Добавить элемент</button>
    </div>
  );
});

export default Buttons;