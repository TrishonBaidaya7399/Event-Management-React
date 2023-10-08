import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Services from "../assets/Components/Services/Services";
import ServiceDetails from "../assets/Components/ServiceDetails/ServiceDetails"; 
import Gallery from "../Pages/Gallery/Gallery";
import AboutPage from "../Pages/About/AboutPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registration/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/services",
        element: <Services />
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
        element: <ServiceDetails /> ,
        loader: ()=>fetch('/public/Data/events.json')
      }
    ]
  }
]);

export default router;
