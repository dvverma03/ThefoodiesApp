import { createContext, useState } from "react";
export const FavoriteContext= createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{}
})

function FavoriteContextProvider({children}){
    const [favoriteIds, setFavoriteIds]= useState([]);
     
    function addFavorite(id){
        setFavoriteIds((currentIds)=>[...currentIds, id])
    }
    function removeFavorite(id){
        setFavoriteIds((currentIds)=>
        currentIds.filter((mapId)=> mapId!=id)
        )
    }

    const value={
       ids:favoriteIds,
       addFavorite:addFavorite,
       removeFavorite:removeFavorite
    }

    return(
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteContextProvider;