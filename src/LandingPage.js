import React, { useContext, useState } from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
// import CartProvider from "./components/CartProvider";
import Footer from "./components/Footer";
import CartContext from "./components/CartContext";
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
  const ctx=useContext(CartContext);
  const [cartItems,setCartItems]=useState([]);
  const [isShown, setIsShown] = useState(false);
  const showHandler = (value) => {
    setIsShown(!value);
    const userEmailId = ctx.userEmail;
    let newEmailId;
    if (userEmailId) {
      console.log("inside email converter");
      const a = userEmailId.split("@");
      const b = a[0] + a[1];
      const c = b.split(".");
      newEmailId = c[0] + c[1];
    }

    fetch(
      `https://crudcrud.com/api/4e8e017b5d384fd899ec59d0cee351ab/${newEmailId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMsg = "Failed to postdata to crudcrud ";
            if (data && data.error && data.error.message) {
              errorMsg = data.error.message;
            }
            throw new Error(errorMsg);
          });
        }
      })
      .then((data) => {
        setCartItems(()=>{
          return [...data];
        })
        console.log("GET-response from crud is", data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <Header onShow={showHandler} onHide={false} length={cartItems.length}/>
      {isShown && <Cart onShow={showHandler} items={cartItems}/>}
      <Hero />
      <Products items={productsArr} />
      <Footer />
    </>
  );
};

export default LandingPage;
