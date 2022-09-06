import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity;
        },
        removeProduct:(state,action)=>{            
            state.quantity -= 1;
            state.products.forEach( (product,index,obj) => {                             
                if(index === action.payload.index){
                    obj.splice(index,1);
                }
            });
            state.total -= action.payload.product.price * action.payload.product.quantity;
        },
        cleanCart:(state,action)=>{
            state.quantity = 0;
            state.products = [];
            state.total = 0;
        }
    }
})

export const {addProduct,removeProduct,cleanCart} = cartSlice.actions;
export default cartSlice.reducer;