import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../assets/constants/colors";
import { Fontisto } from "react-native-vector-icons";

export default function WelcomeScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROCOFFEE</Text>
      <View style={styles.coffeeIcon}>
        <Fontisto
          name="coffeescript"
          size={60}
          color={colors.lightBackground}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue,
  },
  title: {
    fontSize: 34,
    marginBottom: 50,
    fontWeight: "bold",
  },
});
