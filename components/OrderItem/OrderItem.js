import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { colors } from "../../assets/constants/colors";
import { Feather } from "react-native-vector-icons";

export default function OrderItem({ item, onRemoveFromCart }) {
  const handleRemove = () => {
    onRemoveFromCart(item.name);
  };

  return (
    <View style={styles.orderItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.price}>{item.totalPrice} тенге</Text>
      <View style={styles.deleteIcon}>
        <Feather
          name="x"
          size={30}
          onPress={handleRemove}
          color={colors.blue}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderItem: {
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: colors.gray,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  itemName: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
