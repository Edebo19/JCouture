import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartArr:[],
    qty: 0
}
export const cartSlice = createSlice({
    name: "Jcouture",
    initialState,
    reducers:{
        addToCart:(state, {payload})=>{
            // state.cartArr.push(payload)
            const check = state.cartArr.findIndex((e)=> e.id === payload.id)

            if (check >=0) {
                state.cartArr[check].qty +=1

            } else {
                const ItemAdded = {
                    ...payload,
                    qty:1
                }
                state.cartArr.push(ItemAdded)
            }
        },
        clearCart:(state)=>{
            state.cartArr = []
        },
        deleteItem: (state, { payload }) => {
            state.cartArr = state.cartArr.filter((e) => e.id !== payload?.id);
        }
    }
})
export const {addToCart, clearCart, deleteItem} = cartSlice.actions
export default cartSlice.reducer