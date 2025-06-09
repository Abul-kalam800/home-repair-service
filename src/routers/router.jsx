import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import Erroepage from "../pages/Erroepage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Allservices from "../pages/Allservices";
import Addservices from "../pages/Addservices";
import ServicesDetails from "../pages/ServicesDetails";

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayouts,
    errorElement: <Erroepage></Erroepage>,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path:'/allservices',
        loader: ()=>fetch('http://localhost:4000/allservices'),
        Component:Allservices

      },
      {
        path:'/allservices/services/:id',
        loader: ({params})=> fetch(`http://localhost:4000/allservices/services/${params.id}`),
        Component:ServicesDetails
      },
      {
        path:'/addservices',
        Component:Addservices
      },
      {
        path:'/services/:id',
        Component:ServicesDetails
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/registration",
        Component: Registration,
      },
    ],
  },
]);
