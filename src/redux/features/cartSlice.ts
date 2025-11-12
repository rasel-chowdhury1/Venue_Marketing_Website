import { createSlice } from '@reduxjs/toolkit'
import { products } from './../../data/products';


// Define the initial state using that type
const initialState = {
  products: [] as any,
  selectedItems: 0 ,
  totalPrice: 0,
  tax: 0, 
  taxRate: 0.1,
  grandTotal: 0
}



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
     const isExist = state.products.find(product => product.id === action.payload.id)
     
     if(!isExist){
        state.products.push({...action.payload, quantity: 1})
     }
     state.selectedItems =  state.products.reduce((total: number, product: any) => {
      return Number(total + product.quantity)
    }, 0)

    state.totalPrice = state.products.reduce((total: number, product: any) => {
      return Number(total + product.quantity * product.price);
    }, 0);
    state.tax = state.totalPrice * state.taxRate;;
    state.grandTotal = state.totalPrice+ state.tax;
    },
    updateQuantity: (state: any, action) => {
      const products = state.products.map((product: any) => {
        if (product.id === action.payload.id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            product.quantity -= 1;
          }
        }
        return product;
      });
      state.selectedItems =  state.products.reduce((total: number, product: any) => {
        return Number(total + product.quantity)
      }, 0)
  
      state.totalPrice = state.products.reduce((total: number, product: any) => {
        return Number(total + product.quantity * product.price);
      }, 0);
      state.tax = state.totalPrice * state.taxRate;;
      state.grandTotal = state.totalPrice+ state.tax;
      
    },
    removeCartProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload)
    },
    clearCart: (state)=>{
      state.products=[];
      state.selectedItems=0;
      state.totalPrice=0;
      state.tax=0;
      state.grandTotal=0;
    }
  },
})



export const { addToCart, updateQuantity,removeCartProduct,  clearCart } = cartSlice.actions


export default cartSlice.reducer