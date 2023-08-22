import React, { useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import CartProvider from "./components/CartProvider";
import Footer from "./components/Footer";
const LandingPage = () => {
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

  return (
    <CartProvider>
      <Header onShow={showHandler} onHide={false}/>
      {isShown && <Cart onShow={showHandler} />}
      <Hero />
      <Products items={productsArr} />
      <Footer />
    </CartProvider>
  );
};

export default LandingPage;
