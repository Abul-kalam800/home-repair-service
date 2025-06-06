import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import Erroepage from "../pages/Erroepage";

export const routers=createBrowserRouter([
    {path:'/',
    Component:Mainlayouts,
    errorElement:<Erroepage></Erroepage>,
    children:[
        {path:"/",
            index:true,
            Component:Home
        }
    ]
    }
])
