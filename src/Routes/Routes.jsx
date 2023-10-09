import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Services from "../assets/Components/Services/Services";
import ServiceDetails from "../assets/Components/ServiceDetails/ServiceDetails"; 
import Gallery from "../Pages/Gallery/Gallery";
import AboutPage from "../Pages/About/AboutPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/services",
        element: <PrivateRoute><Services /></PrivateRoute>
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/servicedetails/:id", 
        element: <PrivateRoute><ServiceDetails /> </PrivateRoute>,
        loader: ()=>fetch('/Data/events.json')
      }
    ]
  }
]);

export default router;
