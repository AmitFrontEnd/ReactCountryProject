import { createBrowserRouter, RouterProvider } from "react-router";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import CountryDetail from "./components/CountryDetail";
import Home from "./components/Home";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/:country", element: <CountryDetail /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
