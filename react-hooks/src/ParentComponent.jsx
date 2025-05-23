import React, { useState, useCallback } from 'react';
import RegularChild from './RegularChild';
import MemoizedChild from './MemoizedChild';
import CallbackDependentChild from './CallbackDependentChild';

const ParentComponent = () => {
  const [parentState, setParentState] = useState(0);
  const [memoProp, setMemoProp] = useState('Initial memo prop');
  const [callbackProp, setCallbackProp] = useState('Initial callback prop');

  // Функция, которая будет мемоизирована
  const memoizedCallback = useCallback(() => {
    console.log('Callback executed with:', callbackProp);
  }, [callbackProp]);

  console.log('Рендер ParentComponent');

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h2>React.memo</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setParentState(p => p + 1)}>
          Изменить состояние родителя (current: {parentState})
        </button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setMemoProp('New memo prop ' + Math.random().toFixed(4))}>
          Изменить пропс для MemoizedChild
        </button>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setCallbackProp('New callback prop ' + Math.random().toFixed(4))}>
          Изменить пропс для CallbackDependentChild
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
        <RegularChild parentState={parentState} />
        <MemoizedChild memoProp={memoProp} />
        <CallbackDependentChild callbackProp={callbackProp} callback={memoizedCallback} />
      </div>
    </div>
  );
};

export default ParentComponent;