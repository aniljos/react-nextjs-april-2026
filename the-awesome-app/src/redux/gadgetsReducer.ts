import type { CartItem } from "../model/CartItem"

export type GadgetState = {
    cart: CartItem[]
}
const initialState: GadgetState = {
    cart: []
}

// addtocart => {type: "addtocart", payload: CartItem}
// removeItem => {type: "removeItem", productId: number}
// clearcart => {type: "clearcart"}

export const gadgetsReducer = (state=initialState, action)=> {

    if(action.type==="addtocart" && action.payload){
        //state.cart.push(action.payload);
        const cart = [...state.cart]
        cart.push(action.payload);
        return {
            cart: cart
        }
    }

    return state;
}