import { createSlice} from '@reduxjs/toolkit';
import firstImg from '../assets/images/phoneImgs/image1.png';
import secondImg from '../assets/images/phoneImgs/image2.png';
import thirdImg from '../assets/images/phoneImgs/image3.png';
import main from '../assets/images/phoneImgs/main.png';
import blackSrc from '../assets/images/phoneColors/black.png';
import redSrc from '../assets/images/phoneColors/red.png';
import greenSrc from '../assets/images/phoneColors/green.png';

const photosList = [firstImg, secondImg, thirdImg] ;

const product= {
    photos:{ 
      list: photosList,
      active: main
    },
    name : "Single SIM 11 Pro Max Phone Gold 512GB6.5 Inch Hot Selling Phone Wholesale",
    details: {
      code: "578902-00",
      review: {
        rate: 4.6,
        votes: 200
      },
    },
    pricesList: [
        {
          "id":1 ,
          "type": "10-25 Pieces",
          "value": "115050",
          "currency": "AED"
        },
        {
          "id":2,
          "type": "10-19 Pieces",
          "value": "1145",
          "currency": "$"
        },
        {
          "id":3,
          "type": "50+ Pieces",
          "value": "1145",
          "currency": "$"
        },
    ],
    colorsList: [
        {
            "id": 1,
            "name": "black",
            "icon": blackSrc
        },
        {
            "id": 2,
            "name": "red",
            "icon": redSrc
        },
        {
            "id": 3,
            "name": "green",
            "icon": greenSrc
        },
    ],
    storageList: [
        {
            "id": 1,
            "number": "128",
            "price": 1000
        },
        {
            "id": 2,
            "number": "256",
            "price": 1100
        },
        {
            "id": 3,
            "number": "512",
            "price": 1200
        },
    ],
    shippingList: [
        {
            "id": 1,
            "type": "free",
            "estimatedFrom": 2,
            "estimatedTo": 5,
            "price": 50
        },
        {
            "id": 2,
            "type": "fast",
            "estimatedFrom": 5,
            "estimatedTo": 7,
            "price": 100
        },
        {
            "id": 3,
            "type": "rocket",
            "estimatedFrom": 2,
            "estimatedTo": 5,
            "price": 150
        },
    ],
}

const getTotalPrice = ({piecePrice, shippingPrice, totalQuantity })=> {
  var totalPrice = 0 ;
  if(totalQuantity > 0 ){
    totalPrice = totalQuantity * piecePrice  + shippingPrice ; 
  }

  return totalPrice;
}


const getTotalQuantitiyPrice = ({piecePrice, totalQuantity })=> {
  var totalPrice = totalQuantity * piecePrice ; 

  return totalPrice; 
}

const initialProductState  = {
  product : product,
  selectedColor: 1,
  selectedStorage: 3,
  totalPrice: 0,
  quantityPrice: 0,
  totalQuantity:0,
  piecePrice: 1200,
  selectedShipping: 2,
  shippingPrice: 100,
}

const productSlice = createSlice({
    name: 'product',
    initialState : initialProductState,
    reducers: {
        selectColor(state, action){
            state.selectedColor =  action.payload;
        },
        selectStorage(state, action){
            var {id, price} = action.payload;
            var {shippingPrice, totalQuantity} = state;
            var storagePrice = price;
            state.piecePrice =  storagePrice;
            state.selectedStorage =  id;
            if(totalQuantity > 0 ){
              state.quantityPrice = getTotalQuantitiyPrice({'piecePrice': storagePrice , 'totalQuantity': totalQuantity});
              state.totalPrice = getTotalPrice({'piecePrice': storagePrice , 'totalQuantity': totalQuantity, 'shippingPrice': shippingPrice});
            }
        },
        selectShipping(state, action){
            var {price, id} = action.payload;
            var {piecePrice, totalQuantity} = state;
            var shippingPrice = price;
            state.selectedShipping =  id;
            state.shippingPrice = shippingPrice;
            if(totalQuantity > 0 ){
              state.quantityPrice = getTotalQuantitiyPrice({'piecePrice': piecePrice , 'totalQuantity': totalQuantity});
              state.totalPrice = getTotalPrice({'piecePrice': piecePrice , 'totalQuantity': totalQuantity, 'shippingPrice': shippingPrice});
            }
        },
        addPiece(state){
          var {piecePrice, shippingPrice}  = state;
          var totalQuantity = state.totalQuantity + 1 ;
          state.quantityPrice += piecePrice ;
          state.totalQuantity = totalQuantity;
          state.totalPrice = getTotalPrice({'piecePrice': piecePrice , 'totalQuantity': totalQuantity, 'shippingPrice': shippingPrice});
        },
        removePiece(state){
          debugger
          var {piecePrice, shippingPrice, totalQuantity }  = state;
          if(totalQuantity !== 0){
            var quantity = totalQuantity - 1  ;
            state.totalQuantity = quantity;
            state.quantityPrice -= piecePrice ;
            state.totalPrice = getTotalPrice({'piecePrice': piecePrice , 'totalQuantity': quantity, 'shippingPrice': shippingPrice});
          }
        },
        placeOrder(state){
          
        }
    }
})

export const productActions = productSlice.actions ;

export default productSlice.reducer;

