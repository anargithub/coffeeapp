import { createSlice } from "@reduxjs/toolkit";
import { getMenu } from "../lib/getMenu";

const initialState = {
  items: getMenu(),
  orderInfo: "",
  cart: [],
  totalCartPrice: 0,
};

const calculateTotalPrice = (quantity, itemPrice) => quantity * itemPrice;

const processOrder = (itemName, quantity, totalPrice) => {
  console.log(
    `Принят заказ: ${quantity} ${itemName} на общую сумму ${totalPrice} тенге`
  );
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: { ...initialState },
  reducers: {
    addToCart(state, action) {
      const { item, quantity } = action.payload;
      const total = calculateTotalPrice(quantity, item.price);

      state.cart.push({
        name: item.name,
        quantity: quantity,
        totalPrice: total,
      });
      state.totalCartPrice = state.cart.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    placeOrder(state, action) {
      state.cart.forEach((item) => {
        processOrder(item.name, item.quantity, item.totalPrice);
      });
      state.orderInfo = `Ваш заказ оформлен на общую сумму ${state.totalCartPrice} тенге`;
    },
    removeFromCart(state, action) {
      const itemName = action.payload;
      state.cart = state.cart.filter((item) => item.name !== itemName);
      state.totalCartPrice = state.cart.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
    removeAllFromCart(state, action) {
      state.cart = [];
      state.totalCartPrice = 0;
      state.orderInfo = `Корзина очищена`;
    },
  },
});

export const { addToCart, placeOrder, removeFromCart, removeAllFromCart } =
  menuSlice.actions;
export default menuSlice.reducer;
