import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    const title1 = "";
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          {
            navigation.navigate("CategoryMeals", {
              categoryId: itemData.item.id,
              categoryTitle: itemData.item.title,
            });
            console.log(itemData.item.id);
          }
        }}
        options={({ route }) => ({
          title: route.params.categoryTitle.toString(),
        })}
        // onPress={()=>{console.log("KKK")}}
        // onPress={ () => { navigation.navigate("CategoryMeals"); } }
      />

      // // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <CategoryGridTile> ข้างต้นแทน
      // <View style={{ height: 50, width: "40%" }}>
      //   <Text>{itemData.item.title}</Text>
      // </View>
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างต้นแทน
    // <View>
    //   <Text>Categories Screen</Text>
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

export default CategoriesScreen;
