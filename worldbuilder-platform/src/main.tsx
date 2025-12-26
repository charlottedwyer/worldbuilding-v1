import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./app/router";
import { WorldProvider } from "./app/WorldContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WorldProvider>
      <RouterProvider router={router} />
    </WorldProvider>
  </React.StrictMode>
);
