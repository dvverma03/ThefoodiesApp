import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import React from "react";
import MealDetailScreen from "../screens/MealDetailScreen";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
}) {
  const navigation = useNavigation();

  function HandleItemDetails() {
    navigation.navigate("Meal Details", {
      mealID: id,
    });
  }

  return (
    <View >
      <Pressable style={styles.MainContainer} onPress={HandleItemDetails}>
        <Image style={styles.MealItemIMG} source={{ uri: imageUrl }} />
        <Text style={styles.ItemTitle}>{title}</Text>
        <View style={styles.ItemDesc}>
          <Text style={{fontSize:18}}>{duration} Min</Text>
          <Text style={{fontSize:18}}>{complexity.toUpperCase()}</Text>
          <Text style={{fontSize:18}}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    borderRadius: 8,
    marginVertical:15,
    marginHorizontal: 8,
    overflow: "hidden",
    backgroundColor:'#ffffff',
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  MealItemIMG: {
    width: "95%",
    height: 250,
   margin:10
  },
  ItemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  ItemDesc: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
