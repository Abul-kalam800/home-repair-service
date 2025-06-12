import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { RouterProvider } from "react-router";
import { routers } from "./routers/router.jsx";
import AuthProvider from "./Contex/AuthProvider.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={routers}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
