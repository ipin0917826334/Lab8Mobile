import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, TabRouter } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
// import คอมโพเนนต์ที่จำเป็น

const MealsNavigator = createNativeStackNavigator();

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return (
    <NavigationContainer>
      <MealsNavigator.Navigator initialRouteName="Meal Categories">
        <MealsNavigator.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Meal Categories",
            headerStyle: { backgroundColor: "#4a148c" },
            headerTintColor: "white",
          }}
        />
        <MealsNavigator.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={({ route }) => ({
            title: route.params.categoryTitle,
            headerStyle: { backgroundColor: "#4a148c" },
            headerTintColor: "white",
          })}
        />
        <MealsNavigator.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={({ route }) => ({
            title: route.params.mealTitle,
            headerStyle: { backgroundColor: "#4a148c" },
            headerTintColor: "white",
          })}
        />
      </MealsNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "black",
  },
});
