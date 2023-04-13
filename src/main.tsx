import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import OrbitControls from "./routes/orbit-controls";
import Lerp from "./routes/lerp";
import ScrollControlsExample from "./routes/scroll-controls";
import ScrollTriggerExample from "./routes/scroll-trigger";

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
        element: <ScrollControlsExample />,
      },
      {
        path: "scroll-trigger",
        element: <ScrollTriggerExample />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
