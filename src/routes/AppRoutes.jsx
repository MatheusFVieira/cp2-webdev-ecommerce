import { createBrowserRouter } from "react-router-dom";
import App from "../Layout";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho";
import Perfil from "../pages/Perfil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "carrinho", element: <Carrinho/> },
      { path: "perfil", element: <Perfil/> },
    ],
  },
]);

export default router;