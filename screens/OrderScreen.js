import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "../components/OrderList/OrderList";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import {
  placeOrder,
  removeFromCart,
  removeAllFromCart,
} from "../store/menuSlice";
import { colors } from "../assets/constants/colors";
import { MaterialIcons } from "react-native-vector-icons";
import Header from "../components/Header/Header";

export default function OrderScreen() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.menu.cart);
  const totalCartPrice = useSelector((state) => state.menu.totalCartPrice);
  const orderInfo = useSelector((state) => state.menu.orderInfo);

  const handleOrder = () => {
    dispatch(placeOrder());
  };

  const handleRemoveFromCart = (itemName) => {
    dispatch(removeFromCart(itemName));
  };
  const handleClearCart = () => {
    dispatch(removeAllFromCart());
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Ваш заказ" />

      <View style={styles.deleteIcon}>
        <MaterialIcons
          name="delete"
          size={30}
          onPress={handleClearCart}
          color={colors.blue}
        />
      </View>

      <OrderList cart={cart} onRemoveFromCart={handleRemoveFromCart} />
      <OrderSummary totalCartPrice={totalCartPrice} />

      <View style={styles.buttonContainer}>
        <Button
          title="Оформить заказ"
          onPress={handleOrder}
          color={colors.blue}
        />
      </View>

      <View style={styles.orderContainer}>
        <Text style={styles.orderInfo}>{orderInfo}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  orderContainer: {
    borderRadius: 10,
  },
  orderInfo: {
    marginTop: 20,
    color: colors.gray,
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
  deleteIcon: {
    left: 350,
  },
});
