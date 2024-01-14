import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "../screens/OrderScreen";
import MenuScreen from "../screens/MenuScreen";
import ItemDetailsScreen from "../screens/ItemDetailsScreen";

const Stack = createNativeStackNavigator();

export default function HomeScreenNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="ItemDetails"
        component={ItemDetailsScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
