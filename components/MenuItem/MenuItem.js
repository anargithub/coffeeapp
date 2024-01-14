import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { colors } from "../../assets/constants/colors";

export default function MenuItem({ item, onPress }) {
  return (
    <View onPress={onPress} style={styles.container}>
      <Image source={item.image} style={styles.backgroundImage} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price} тенге</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    alignItems: "center",
  },
  backgroundImage: {
    width: 250,
    height: 250,
    marginTop: -60,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    flex: 1,
    padding: 30,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});
