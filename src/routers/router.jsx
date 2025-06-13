import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import Erroepage from "../pages/Erroepage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Allservices from "../pages/Allservices";
import Addservices from "../pages/Addservices";
import ServicesDetails from "../pages/ServicesDetails";
import Loading from "../componets/Loading";
import PrivetRouter from "../privetRouts/PrivetRouter";
import ManageService from "../pages/ManageService";
import Update from "../componets/Update";
import BookedService from "../pages/BookedService";
import ServiceToDo from "../pages/ServiceToDo";

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
        path: "/allservices",
        hydrateFallbackElement: <Loading></Loading>,
        Component: Allservices,
        // loader: () => fetch("http://localhost:3000/allservices"),
      },
      {
        path: "/allservices/:id",
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivetRouter>
            <ServicesDetails></ServicesDetails>
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allservices/${params.id}`),
      },
      {
        path: "/addservices",
        element: (
          <PrivetRouter>
            <Addservices></Addservices>
          </PrivetRouter>
        ),
      },
      {
        path:'/manageservice',
        element:<PrivetRouter><ManageService></ManageService></PrivetRouter>
      },
      {
        path: "/services/:id",
        Component: ServicesDetails,
      },
      {
        path:'/update/:id',
       element:<PrivetRouter><Update></Update></PrivetRouter>,
        loader:({params})=> fetch(`http://localhost:3000/allservices/${params.id}`)
      },
      {
        path:'/booking',
        element:<PrivetRouter><BookedService></BookedService></PrivetRouter>
      },
      {
        path:'/viewbooking',
        element:<PrivetRouter><ServiceToDo></ServiceToDo></PrivetRouter>
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
