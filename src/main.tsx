import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import OrbitControls from "./routes/orbit-controls";
import Lerp from "./routes/lerp";
import ScrollControls from "./routes/scroll-controls";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <OrbitControls />,
      },
      {
        path: "lerp",
        element: <Lerp />,
      },
      {
        path: "scroll-controls",
        element: <ScrollControls />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
