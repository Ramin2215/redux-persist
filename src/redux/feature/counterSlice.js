import { createSlice } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";




export const counter = createSlice({
    name:"counter",
    initialState:{
        count:0,
        input:"",
        basket:[],
        data:[]
    },
    reducers:{
        increment:(state,action)=>{
            state.count += 1;
        },
        getDAta:(state,action)=>{
            state.data = action.payload;
        },
        decrement:(state,action)=>{
            state.count -= 1;
        },
        input:(state,action)=>{
            state.input = action.payload;
        },
        addBasket:(state,action)=>{
            state.basket.push(state.data.find(item=>item.id == action.payload));
        }
    }
})

export const reducer = persistReducer({
    key:"counter",
    storage:localStorage,
    whitelist :[
        "count",
        "basket",
        "data"
    ]
},counter.reducer)

export const {increment,decrement,addBasket,getDAta} = counter.actions;

export default reducer;

/* export default counter.reducer */