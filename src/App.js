import AboutUs from "./components/AboutUs";
import LandingPage from "./LandingPage";
import Home from "./components/Home";
import Movies from "./components/Backend-Connectivity/Movies";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Contact from "./components/Contact";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/starwars">
          <Movies />
        </Route>
        <Route path="/contactUs">
          <Contact />
        </Route>
        <Route path="/products/:productTitle">
          <ProductDetail/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
