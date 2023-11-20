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

  useEffect(() => {
    setCosts(prev => prev + price);
  }, [])

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement())
            count > 0 && setCosts(prev => prev - price);
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment())
            setCosts(prev => prev + price);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
