import { memo } from 'react';

const UnoptimizedButton = memo(({ onClick}) => {
  console.log('Рендер UnoptimizedButton');
  return <button onClick={onClick}>Увеличить без useCallback</button>;
});

  export default UnoptimizedButton