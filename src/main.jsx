import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { RouterProvider } from "react-router";
import { routers } from "./routers/router.jsx";
import AuthProvider from "./Contex/AuthProvider.jsx";
import PrivetRouter from "./privetRouts/PrivetRouter.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={routers}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
