import { StyleSheet , Image, Text, View} from 'react-native'
import React, { useContext } from 'react'
import MealList from '../components/MealList'
import { FavoriteContext } from '../store/context/FavoriteContext'
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';

export default function FavoriteScreen() {
  const FavoriteCxt= useContext(FavoriteContext);
  // const favoriteMeals= useSelector((state)=>state.favoriteMeals.ids)
  // const favoriteItems= MEALS.filter((meals)=> favoriteMeals.includes(meals.id))
  const favoriteItems= MEALS.filter(meals=> FavoriteCxt.ids.includes(meals.id))

  if(favoriteItems.length==0){
    return (
      <View >
        <Image style={styles.EmptyImg}
        source={{uri:'https://cdn.dribbble.com/users/310943/screenshots/2792692/empty-state-illustrations_still_2x.gif?resize=400x0'}}
        />
        <Text style={styles.Conatiner}>I'm Looking for something</Text>
        <Text style={styles.Conatiner}>Please Add something</Text>
      </View>
    )
  }
  return (
    <MealList items={favoriteItems}/>
  )
}

const styles = StyleSheet.create({
  
  EmptyImg:{
    height:500,
    
  },
  Conatiner:{
    fontSize:25,
    textAlign:'center',
    paddingVertical:20,
    fontWeight:'bold'
  }
})