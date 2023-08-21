import React, { useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
function App() {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const [isShown, setIsShown] = useState(false);
  const showHandler = (value) => {
    setIsShown(!value);
  };
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];
  const [cartItems, setCartItems] = useState(cartElements);
  const removeHandler = (item) => {
    setCartItems((prevItem) => {
      const newCartItems = prevItem.filter((obj) => {
        return obj.title !== item.title;
      });
      return newCartItems;
    });
  };
  return (
    <>
      <Header onShow={showHandler} />
      {isShown && (
        <Cart items={cartItems} onRemove={removeHandler} onShow={showHandler} />
      )}
      <Hero />
      <Products items={productsArr} />
    </>
  );
}

export default App;
