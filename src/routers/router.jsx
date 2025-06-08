import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import Erroepage from "../pages/Erroepage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

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
