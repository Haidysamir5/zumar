import {configureStore, combineReducers} from '@reduxjs/toolkit';
import productSlice from './productSlice'
import cartSlice from './cartSlice'

const reducer = combineReducers({
  productState: productSlice,
  cartState: cartSlice
});

const store = configureStore({
  reducer
});

export default store;