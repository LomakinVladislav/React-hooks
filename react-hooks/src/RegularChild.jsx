import React from 'react';

const RegularChild = ({ parentState }) => {
  console.log('Рендер RegularChild');
  return (
    <div style={{ padding: '10px', border: '1px solid red' }}>
      <h3>Regular Child</h3>
      <p>Получает parentState: {parentState}</p>
      <p>Рендерится при каждом изменении родителя</p>
    </div>
  );
};

export default RegularChild;