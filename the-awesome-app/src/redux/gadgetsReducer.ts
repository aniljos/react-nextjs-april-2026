import type { PayloadAction } from "@reduxjs/toolkit"
import type { CartItem } from "../model/CartItem"
import { createSlice } from "@reduxjs/toolkit"

export type GadgetState = {
    cart: CartItem[]
}
const initialState: GadgetState = {
    cart: []
}

// addtocart => {type: "addtocart", payload: CartItem}
// removeItem => {type: "removeItem", productId: number}
// clearcart => {type: "clearcart"}

// export const gadgetsReducer = (state=initialState, action)=> {

//     if(action.type==="addtocart" && action.payload){
//         //state.cart.push(action.payload);
//         const cart = [...state.cart]
//         cart.push(action.payload);
//         return {
//             cart: cart
//         }
//     }

//     return state;
// }

const slice = createSlice({
    name: "gadgetsSlice",
    initialState,
    reducers: {

        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const index = state.cart.findIndex(item => item.product.id === action.payload);
            if(index !== -1){
                state.cart.splice(index, 1);
            }
        },
        clearCart: (state)=> {
            state.cart.splice(0, state.cart.length);
        }
    }
})
//action creators
export const {addToCart, clearCart, removeFromCart} =  slice.actions;
export const gadgetsReducer = slice.reducer;