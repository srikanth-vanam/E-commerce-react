import AboutUs from "./components/AboutUs";
import LandingPage from "./LandingPage";
import Home from "./components/Home";
import Movies from "./components/Backend-Connectivity/Movies";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Contact from "./components/Contact";
function App() {
  
  
  return <>
  <Route exact path="/">
    <LandingPage />
  </Route>
  <Route path="/home">
    <Home />
  </Route>
  <Route path="/aboutUs">
    <AboutUs />
  </Route>
  <Route path="/starwars">
    <Movies />
  </Route>
  <Route path="/contactUs">
    <Contact />
  </Route>
  </>;
}

export default App;
