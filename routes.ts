import { createBrowserRouter } from "react-router";
import App from "./src/App";
import VehiclePage from "./src/views/VehiclePage";
import FleetPage from "./src/views/FleetPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: () => window.location.replace("/vehicle"),
      },
      {
        path: "/vehicle",
        Component: VehiclePage,
      },
      {
        path: "/fleet",
        Component: FleetPage,
      },
    ],
  },
  {
    path: "*",
    loader: () => window.location.replace("/"),
  },
]);
