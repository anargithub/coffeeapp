import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../assets/constants/colors";

export default function OrderSummary({ totalCartPrice }) {
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.totalPrice}>Итого: {totalCartPrice} тенге</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
    backgroundColor: colors.lightBackground,
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.blue,
  },
});
