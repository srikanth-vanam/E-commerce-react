import { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");
  const [tokenString, setTokenString] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);
  const userLoggedIn = !!tokenString;
  const [cartItemsCount,setCartItemsCount]=useState(0);
  const addItemHandler = (item) => {
    // setCartItem((prevItem) => {
    //   let itemPresent = false;
    //   const newCart = [...prevItem];
    //   for (const iterator of newCart) {
    //     if (iterator.title === item.title) {
    //       itemPresent = true;
    //       iterator.quantity += item.quantity;
    //       break;
    //     }
    //   }
    //   if (!itemPresent) {
    //     newCart.push(item);
    //   }
    //   return newCart;
    // });
    // have to look this tommorrow how to post and get data but showing it with the help of context;
    postDataToCrud(item);
    cartCountIncrementHandler();
  };

  const postDataToCrud = (item) => {
    const userEmailId = email;
    let newEmailId;
    if (userEmailId) {
      console.log("inside email converter");
      const a = userEmailId.split("@");
      const b = a[0] + a[1];
      const c = b.split(".");
      newEmailId = c[0] + c[1];

      fetch(
        `https://crudcrud.com/api/54396252f0534d99bf47d36389c49a0f/${newEmailId}`,
        {
          method: "POST",
          body: JSON.stringify(item),
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
          console.log("response from crud is", data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const removeItemHandler = (item) => {
    cartCountDecrementHandler();
    // delete is not working bcos of CORS-issue
    // deleteDataOnCrud(item);
    setCartItem((prevItem) => {
      const newCartItems = prevItem.filter((obj) => {
        return obj.id !== item.id;
      });
      return newCartItems;
    });
  };

  const getDataFromCrudHandler=()=>{
    const userEmailId = email;
    let newEmailId;
    if (userEmailId) {
      console.log("inside email converter");
      const a = userEmailId.split("@");
      const b = a[0] + a[1];
      const c = b.split(".");
      newEmailId = c[0] + c[1];

      fetch(
        `https://crudcrud.com/api/54396252f0534d99bf47d36389c49a0f/${newEmailId}`,
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
              let errorMsg = "Failed to getData from crudcrud ";
              if (data && data.error && data.error.message) {
                errorMsg = data.error.message;
              }
              throw new Error(errorMsg);
            });
          }
        })
        .then((data) => {
          setCartItem(()=>{
            return [...data];
          })
          setCartItemsCount(data.length);
          console.log("GET-response from crud is", data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }

  const deleteDataOnCrud=(item)=>{
    const userEmailId = email;
    let newEmailId;
    if (userEmailId) {
      console.log("inside email converter");
      const a = userEmailId.split("@");
      const b = a[0] + a[1];
      const c = b.split(".");
      newEmailId = c[0] + c[1];

      fetch(
        `https://crudcrud.com/api/54396252f0534d99bf47d36389c49a0f/${newEmailId}/${item.id}`,
        {
          method: "DELETE",
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
              let errorMsg = "Failed to daleteData on crudcrud ";
              if (data && data.error && data.error.message) {
                errorMsg = data.error.message;
              }
              throw new Error(errorMsg);
            });
          }
        })
        .then((data) => {
          console.log("response from crud in deleteApi is", data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }

  const addTokenHandler = (tokenId) => {
    console.log(tokenId);
    setTokenString(tokenId);
    localStorage.setItem("token", tokenId);
    emailHandler();
  };

  const removeTokenHandler = () => {
    console.log(tokenString);
    setTokenString(null);
    localStorage.removeItem("token");
  };

  const emailHandler = () => {
    const localEmail = localStorage.getItem("email");
    setEmail(localEmail);
  };

  useEffect(() => {
    const localEmail = localStorage.getItem("email");
    if (localEmail !== null) {
      console.log("inside the useEffect, setting email ");
      setEmail(localEmail);
    }
  }, [tokenString]);

  const cartCountIncrementHandler=()=>{
    setCartItemsCount((prevCount)=>{
      return prevCount+1;
    })
  }

  const cartCountDecrementHandler=()=>{
    setCartItemsCount((prevCount)=>{
      return prevCount-1;
    })
  }

  const cartContext = {
    cartItems: cartItem,
    totalAmount: 0,
    addItems: addItemHandler,
    removeItems: removeItemHandler,
    token: tokenString,
    isLoggedIn: userLoggedIn,
    addToken: addTokenHandler,
    removeToken: removeTokenHandler,
    userEmail: email,
    getDataFromCrud:getDataFromCrudHandler,
    cartCount:cartItemsCount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
