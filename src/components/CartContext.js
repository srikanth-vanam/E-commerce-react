import React from "react";
const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeItems:(item)=>{},
});
export default CartContext;
