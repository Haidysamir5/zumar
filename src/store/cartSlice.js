import { createSlice} from '@reduxjs/toolkit';

const initialCartState  = {
  cart : [],
  cartCount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState : initialCartState,
    reducers: {
        placeOrder(state, action){
          var totalQuantity = action.payload;
          state.cartCount = totalQuantity ;          
        }
    }
})

export const cartActions = cartSlice.actions ;

export default cartSlice.reducer;

