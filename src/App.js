import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import LandingPage from "./LandingPage";
import Home from "./components/Home";
import Movies from "./components/Backend-Connectivity/Movies";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/aboutUs", element: <AboutUs /> },
    {path:"/home",element:<Home />},
    {path:'/starwars',element:<Movies />}
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
