import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
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

  const cartContext = {
    cartItems: cartItem,
    totalAmount: 0,
    addItems: addItemHandler,
    removeItems: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
