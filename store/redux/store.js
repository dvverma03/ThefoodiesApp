import favoriteReducers from "./FavoriteSlice"

import { configureStore } from "@reduxjs/toolkit";
export const store= configureStore({
    reducer:{
        favoriteMeals:favoriteReducers
    }
})