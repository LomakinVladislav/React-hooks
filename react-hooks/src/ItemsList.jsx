import { memo } from 'react';

const ItemsList = memo(({ items }) => {
  console.log('Рендер ItemsList');
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

export default ItemsList;