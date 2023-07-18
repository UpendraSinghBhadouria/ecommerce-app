import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const CartSlice = createSlice({
    name: "createSlice",
    initialState: initialState,
    reducers: {
      
           addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.item.id);

            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`Increased ${action.payload.item.title} cart quantity`)
            }
            else{
                const tempProduct = {...action.payload.item, cartQuantity: 1}
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.item.title} added to cart`)
            }

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error(`${action.payload.name} removed from cart`)
        },

        decreaseCart: (state,action)=>{
            const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id);

            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;

                toast.info(`Decreased ${action.payload.title} cart quantity`)
            }
            else if(state.cartItems[itemIndex].cartQuantity === 1){
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);

                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                toast.error(`${action.payload.title} removed from cart`)
            }
        },

        getTotal: (state, action)  =>{
            const{total, quantity} =  state.cartItems.reduce((cartTotal, cartItem)=>{
                const {price, cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal;
            }, {total: 0, quantity:0})

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }

    }
})

export const {
    addToCart,
    removeFromCart,
    decreaseCart,
    getTotal
} = CartSlice.actions;
export default CartSlice.reducer;
