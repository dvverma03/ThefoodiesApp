import { StyleSheet, View, FlatList} from "react-native";
import MealItem from "./MealItem";

function MealList({items}){
    function renderMealData(itemData) {
        return (
          <View>
            <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} complexity={itemData.item.complexity} duration={itemData.item.duration} affordability={itemData.item.affordability} id={itemData.item.id}/>
          </View>
        );
      }
      return (
        <View style={styles.MainConatiner}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealData}
          />
        </View>
      );
}

export default MealList;

const styles = StyleSheet.create({
    MainConatiner: {
      flex: 1,
      paddingBottom: 10,
      marginVertical:10
    },
  });
  