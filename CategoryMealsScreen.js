import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = ({ route, navigation }) => {
  const { categoryId, categoryTitle } = route.params;
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          {
            navigation.navigate("MealDetail", {
              categoryId: itemData.item.id,
              mealTitle: itemData.item.title,
              steps: itemData.item.steps,
            });
            console.log(itemData.item.id);
          }
        }}
      />

      // ส่วนนี้ <View>...</View> ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <MealItem> ข้างบนแทน
      // <View style={{ height: 50, width: "40%" }}>
      //   <Text>{itemData.item.title}</Text>
      // </View>
    );
  };

  const catId = categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>

    // // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างบนแทน
    // <View>
    //   <Text>Category Meals Screen!!</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
