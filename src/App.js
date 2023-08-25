import AboutUs from "./components/AboutUs";
import LandingPage from "./LandingPage";
import Home from "./components/Home";
// import Movies from "./components/Backend-Connectivity/Movies";
import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import { useContext } from "react";
import CartContext from "./components/CartContext";

function App() {
  const ctx = useContext(CartContext);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/home">
        </Route> */}
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/products" exact>
          {ctx.isLoggedIn && <LandingPage />}
          {!ctx.isLoggedIn && <Redirect to="/login" />}
          {/* <Movies /> */}
        </Route>
        <Route path="/contactUs">
          <Contact />
        </Route>
        <Route path="/products/:productTitle">
          <ProductDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
