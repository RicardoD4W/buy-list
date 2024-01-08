import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, RouterProvider, createHashRouter } from "react-router-dom";

import App from "./app.jsx";
import ListaCompra from "./components/organism/lista-compra.jsx";
import LoginPage from "./components/organism/login-page.jsx";
import { ChakraProvider } from "@chakra-ui/react";

const router = createHashRouter([
  {
    path: "/",
    children: [
      { index: true, element: <App /> },
      { path: "/lista", element: <ListaCompra /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
