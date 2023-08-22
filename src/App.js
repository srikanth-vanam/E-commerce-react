import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import LandingPage from "./LandingPage";
import Home from "./components/Home";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/aboutUs", element: <AboutUs /> },
    {path:"/home",element:<Home />}
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
