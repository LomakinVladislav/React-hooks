import { useState, useCallback } from 'react';
import Buttons from './Buttons';
import ItemsList from './ItemsList';
import UnoptimizedButton from './UnoptimizedButton';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  const incrementWithoutCallback = () => {
    setCount(c => c + 1);
  };

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  const addItem = useCallback(() => {
    setItems(i => [...i, `Item ${i.length + 1}`]);
  }, []);

  return (
    <div>
      <h2>Счетчик: {count}</h2>
      <Buttons
        increment={increment}
        decrement={decrement}
        addItem={addItem}
      />
      <ItemsList items={items} />


      <UnoptimizedButton onClick={incrementWithoutCallback} />
    </div>
  );
};

export default Counter;