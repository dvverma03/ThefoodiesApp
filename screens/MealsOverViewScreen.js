import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

export default function MealsOverViewScreen({ route, navigation }) {
  const catID = route.params.categoryId;

  const DisplayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == catID
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catID]);
  return( <MealList items={DisplayMeals} />)
}

const styles = StyleSheet.create({
  MainConatiner: {
    flex: 1,
    paddingBottom: 10,
    marginVertical: 10,
  },
});
