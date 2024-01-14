import React from "react";
import { View, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header/Header";
import MenuItem from "../components/MenuItem/MenuItem";
import { getMenu } from "../lib/getMenu";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/menuSlice";
import Carousel from "react-native-snap-carousel";
import { FontAwesome } from "react-native-vector-icons";
import { Feather } from "react-native-vector-icons";
import { colors } from "../assets/constants/colors";

export default function MenuScreen({ navigation }) {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart({ item, quantity: 1 }));
  };

  const handleShowDetails = (item) => {
    navigation.navigate("ItemDetails", { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Меню" />

      <Carousel
        data={getMenu()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.menuItemContainer}>
            <MenuItem item={item} />
            <View style={styles.menuIcons}>
              <FontAwesome
                name="cart-plus"
                size={35}
                color={colors.blue}
                onPress={() => handleAddToCart(item)}
              />
              <Feather
                name="arrow-right"
                size={35}
                color={colors.blue}
                onPress={() => handleShowDetails(item)}
              />
            </View>
          </TouchableOpacity>
        )}
        sliderWidth={400}
        itemWidth={270}
        sliderHeight={400}
        itemHeight={400}
        loop
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.lightBackground,
    alignItems: "center",
  },
  menuItemContainer: {
    width: 350,
    height: 400,
    backgroundColor: colors.white,
    borderRadius: 99,
    padding: 15,
    marginTop: 70,
    shadowColor: colors.gray,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 0.9,
  },
  menuIcons: {
    flex: 1,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
});
