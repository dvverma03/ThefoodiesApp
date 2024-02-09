import { createSlice } from "@reduxjs/toolkit";
const favoriteSlice= createSlice({
    name:'favorite',
    initialState:{
        ids:[]
    },
    reducers:{
        addFavorite:(state, action)=>{
            state.ids.push(action.payload.id)
        },
        removeFavorite:(state, action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        }
    }
})

export const [addFavorite, removeFavorite]= favoriteSlice.actions
export default favoriteSlice.reducer