import React, { memo } from 'react';

const CallbackDependentChild = ({ callbackProp, callback }) => {
  console.log('Рендер CallbackDependentChild');
  return (
    <div style={{ padding: '10px', border: '1px solid blue' }}>
      <h3>Callback Dependent Child</h3>
      <p>Получает callbackProp: {callbackProp}</p>
      <p>Рендерится только при изменении callbackProp или callback</p>
      <button onClick={callback} style={{ marginTop: '10px' }}>
        Вызвать callback
      </button>
    </div>
  );
};

export default memo(CallbackDependentChild);