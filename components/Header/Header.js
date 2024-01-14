import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../assets/constants/colors";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
});
