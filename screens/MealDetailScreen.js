import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
import IngradientItem from "../components/IngradientItem";
import { FavoriteContext } from "../store/context/FavoriteContext";
import { useDispatch, useSelector } from "react-redux";
// import { addFavorite, removeFavorite } from "../store/redux/FavoriteSlice";

export default function MealDetailScreen({ route, navigation }) {
  const FavoriteMealCxt= useContext(FavoriteContext)
  const mealID = route.params.mealID;
  const selectedMeal = MEALS.find((meal) => meal.id == mealID);
  const MealIsFav= FavoriteMealCxt.ids.includes(mealID)

  function ChangeFavHandler() {
    if(MealIsFav){
      FavoriteMealCxt.removeFavorite(mealID)
    }
    else{
      FavoriteMealCxt.addFavorite(mealID)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={ChangeFavHandler}
            icon={MealIsFav?'star':'star-outline'}
            color={"white"}
          ></IconButton>
        );
      },
    });
  }, [navigation, ChangeFavHandler]);

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.CardConatiner}>
          <Image
            source={{ uri: selectedMeal.imageUrl }}
            style={styles.DetailsIMG}
          />
          <Text style={styles.Title}>{selectedMeal.title}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              elevation: 5,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {selectedMeal.complexity}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {selectedMeal.duration}Min
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {selectedMeal.affordability}
            </Text>
          </View>
        </View>
        <Text style={[styles.Title, { textAlign: "center", marginTop: 10 }]}>
          Ingredients
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom: 10,
            marginTop: 5,
            fontSize: 20,
          }}
        />

        {selectedMeal.ingredients.map((items) => (
          <IngradientItem key={items} item={items} />
        ))}
        <Text style={[styles.Title, { textAlign: "center" }]}>Steps</Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom: 10,
            marginTop: 5,
          }}
        />
        
        {selectedMeal.steps.map((items) => (
          <IngradientItem key={items} item={items} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
  },
  CardConatiner: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: "white",
  },
  DetailsIMG: {
    height: 250,
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
});
