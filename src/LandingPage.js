import React, { useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
const LandingPage = () => {
  const productsArr = [
    {
      id:Math.random().toString(),
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id:Math.random().toString(),
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id:Math.random().toString(),
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:Math.random().toString(),
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
    <>
      <Header onShow={showHandler} onHide={false} />
      {isShown && <Cart onShow={showHandler} />}
      <Hero />
      <Products items={productsArr} />
      <Footer />
    </>
  );
};

export default LandingPage;
