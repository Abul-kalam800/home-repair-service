import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import Erroepage from "../pages/Erroepage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Allservices from "../pages/Allservices";
import Addservices from "../pages/Addservices";

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
        Component:Allservices

      },
      {
        path:'/addservices',
        Component:Addservices
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
