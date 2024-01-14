import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";
import Header from "../components/Header/Header";
import { colors } from "../assets/constants/colors";

export default function ItemDetailsScreen({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/coffeeBg2.jpeg")}
          style={styles.image}
        />
        <View style={styles.backIcon}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Header title={item.name} />

        <View style={styles.details}>
          <Text style={styles.detailsText}>{item.details}</Text>
          <Text style={styles.volumeText}>{item.volume}</Text>
          <Text style={styles.priceText}>{item.price} тенге</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 680,
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: colors.white,
    borderBottomEndRadius: 50,
    borderBottomLeftRadius: 50,
    marginLeft: "6%",
    shadowColor: "gray",
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.9,
  },
  imageContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    shadowColor: "gray",
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
  },
  image: {
    height: "90%",
    width: "100%",
  },
  detailsContainer: {
    flex: 1,
  },
  details: {
    width: "70%",
    fontSize: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
  },
  detailsText: {
    fontSize: 20,
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  volumeText: {
    fontSize: 18,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 40,
  },
  backIcon: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
  },
});
