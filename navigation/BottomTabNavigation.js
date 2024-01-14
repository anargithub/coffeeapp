import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrderScreen from "../screens/OrderScreen";
import HomeScreenNavigation from "./HomeScreenNavigation";
import AntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "red",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreenNavigation}
      />
      <Tab.Screen
        name="Order"
        options={{
          headerShown: false,
          tabBarLabel: "Cart",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="shoppingcart" color={color} size={size} />
          ),
        }}
        component={OrderScreen}
      />
    </Tab.Navigator>
  );
}
