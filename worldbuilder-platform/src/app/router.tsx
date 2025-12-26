import { createBrowserRouter, Navigate } from "react-router-dom";
import AppShell from "./AppShell";
import Worlds from "../pages/Worlds";
import Wiki from "../pages/Wiki";
import Characters from "../pages/Characters";
import Locations from "../pages/Locations";
import Maps from "../pages/Maps";
import Timelines from "../pages/Timelines";
import WritingTools from "../pages/WritingTools";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/wiki" replace /> },
      { path: "worlds", element: <Worlds /> },
      { path: "wiki", element: <Wiki /> },
      { path: "characters", element: <Characters /> },
      { path: "locations", element: <Locations /> },
      { path: "maps", element: <Maps /> },
      { path: "timelines", element: <Timelines /> },
      { path: "writing", element: <WritingTools /> },
    ],
  },
]);
