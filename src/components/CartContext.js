import React from "react";
const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeItems:(item)=>{},
  token: '',
  isLoggedIn:'false',
  addToken: (token) => {},
  removeToken: () => {},
});
export default CartContext;
