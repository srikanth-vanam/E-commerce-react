import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const initialToken = localStorage.getItem("token");
  const [tokenString, setTokenString] = useState(initialToken);
  const userLoggedIn = !!tokenString;

  const addItemHandler = (item) => {
    setCartItem((prevItem) => {
      let itemPresent = false;
      const newCart = [...prevItem];
      for (const iterator of newCart) {
        if (iterator.title === item.title) {
          itemPresent = true;
          iterator.quantity += item.quantity;
          break;
        }
      }
      if (!itemPresent) {
        newCart.push(item);
      }
      return newCart;
    });
  };

  const removeItemHandler = (item) => {
    setCartItem((prevItem) => {
      const newCartItems = prevItem.filter((obj) => {
        return obj.title !== item.title;
      });
      return newCartItems;
    });
  };

  const addTokenHandler = (tokenId) => {
    console.log(tokenId);
    setTokenString(tokenId);
    localStorage.setItem("token", tokenId);
  };

  const removeTokenHandler = () => {
    console.log(tokenString);
    setTokenString(null);
    localStorage.removeItem("token");
  };

  const cartContext = {
    cartItems: cartItem,
    totalAmount: 0,
    addItems: addItemHandler,
    removeItems: removeItemHandler,
    token: tokenString,
    isLoggedIn: userLoggedIn,
    addToken: addTokenHandler,
    removeToken: removeTokenHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
