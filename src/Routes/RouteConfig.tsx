import React from "react";
import { EmptyPage } from "../Screens/EmptyPage";
import EmptyPage2 from "../Screens/EmptyPage2";

const routes = [
  { id: 1, path: "register", element: <EmptyPage /> },
  { id: 2, path: "login", element: <EmptyPage /> },
  {
    id: 3,
    path: "home",
    element: <EmptyPage2 />,
    protected: true,
    dashboard: true,
  },
  { id: 4, path: "setting", element: <EmptyPage2 />, protected: true },
  // Add more routes here
];

export default routes;
