import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export default function Counter({ price, setCosts }) {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [cnt, setCnt] = useState(1);

  useEffect(() => {
    setCosts(prev => prev + price);
  }, [])

  return (
    <div className='counter__root'>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            cnt > 0 && setCnt(prev => prev - 1);
            cnt > 0 && setCosts(prev => prev - price);
          }}
        >
          -
        </button>
        <span className={styles.value}>{cnt}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            setCnt(prev => prev + 1);
            setCosts(prev => prev + price);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
