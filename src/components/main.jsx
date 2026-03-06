import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "../index.css";
import App from "./App.jsx";
import WorkMain from "../work/WorkMain.jsx";
import Branding from "../work/Branding.jsx";
import Marketing from "../work/Marketing.jsx";
import WebDev from "../work/WebDev.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "workMain",
        element: <WorkMain />,
        children: [
          { path: "Branding", element: <Branding /> },
          { path: "Marketing", element: <Marketing /> },
          { path: "Web Development", element: <WebDev /> },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
