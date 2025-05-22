import { memo } from 'react';

const OptimizedButton = memo(({ onClick, label }) => {
    console.log('Рендер OptimizedButton');
    return <button onClick={onClick}>{label}</button>;
});

  export default OptimizedButton