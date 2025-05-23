import React, { memo } from 'react';

const MemoizedChild = ({ memoProp }) => {
  console.log('Рендер MemoizedChild');
  return (
    <div style={{ padding: '10px', border: '1px solid green' }}>
      <h3>Memoized Child</h3>
      <p>Получает memoProp: {memoProp}</p>
      <p>Рендерится только при изменении memoProp</p>
    </div>
  );
};

export default memo(MemoizedChild);