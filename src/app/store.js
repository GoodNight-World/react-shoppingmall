import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counter/counterSlice'
import productsReducer from '../reducers/products/productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
  },
});
