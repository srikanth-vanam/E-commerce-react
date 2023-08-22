import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import LandingPage from "./LandingPage";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/aboutUs", element: <AboutUs /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
