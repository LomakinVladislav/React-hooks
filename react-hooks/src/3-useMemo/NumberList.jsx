import React, { useState, useMemo } from 'react';
import '../App.css';

const NumberList = () => {
  const [numbers, setNumbers] = useState(() => generateRandomNumbers(10));
  const [filter, setFilter] = useState('all');

  // Генерация случайных чисел
  function generateRandomNumbers(count) {
    console.log('Генерация новых чисел');
    return Array.from({ length: count }, () => Math.floor(Math.random() * 100) + 1);
  }

  // Оптимизированное вычисление суммы
  const sum = useMemo(() => {
    console.log('Вычисление суммы...');
    return numbers.reduce((totalSum, num) => totalSum + num, 0);
  }, [numbers]);

  // Фильтрация чисел. При нажатии на кнопки фильтрации не происходит ререндера, пересчета суммы
  const filteredNumbers = filter === 'even'
    ? numbers.filter(num => num % 2 === 0)
    : filter === 'odd'
      ? numbers.filter(num => num % 2 !== 0)
      : numbers;

  return (
    <div className="number-list">
      <h2>Список чисел ({filter === 'all' ? 'все' : filter === 'even' ? 'чётные' : 'нечётные'}):</h2>
      <ul>
        {filteredNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      
      <h3>Сумма всех чисел: {sum}</h3>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button onClick={() => setNumbers(generateRandomNumbers(10))}>
          Новые числа
        </button>
        
        <button 
          onClick={() => setFilter('even')}
          style={{ fontWeight: filter === 'even' ? 'bold' : 'normal' }}
        >
          Чётные
        </button>
        
        <button 
          onClick={() => setFilter('odd')}
          style={{ fontWeight: filter === 'odd' ? 'bold' : 'normal' }}
        >
          Нечётные
        </button>
        
        <button 
          onClick={() => setFilter('all')}
          style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
        >
          Все числа
        </button>
      </div>
    </div>
  );
};

export default NumberList;