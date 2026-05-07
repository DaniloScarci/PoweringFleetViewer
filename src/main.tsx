
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";
import {routes} from "../routes.ts"

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />,
)
