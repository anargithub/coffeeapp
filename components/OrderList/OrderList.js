import React from "react";
import { FlatList, StyleSheet } from "react-native";
import OrderItem from "../OrderItem/OrderItem";

export default function OrderList({ cart, onRemoveFromCart }) {
  return (
    <FlatList
      data={cart}
      renderItem={({ item, index }) => (
        <OrderItem
          key={index}
          item={item}
          onRemoveFromCart={onRemoveFromCart}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      style={styles.orderList}
    />
  );
}
const styles = StyleSheet.create({
  orderList: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});
