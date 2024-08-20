import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { McLarenPage } from "./pages";
import { LandoNorrisPage } from "./pages/norris-profile";
import { OscarPiastriPage } from "./pages/piastri-profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <McLarenPage />,
  },
  {
    path: "/drivers/lando-norris",
    element: <LandoNorrisPage />,
  },
  {
    path: "/drivers/oscar-piastri",
    element: <OscarPiastriPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
