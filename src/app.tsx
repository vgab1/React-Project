import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { McLarenPage } from "./pages";
import { LandoNorrisPage } from "./pages/norris-profile";
import { OscarPiastriPage } from "./pages/piastri-profile";
import { FerrariPage } from "./pages/ferrari/ferrari-index";
import { CharlesLeclercPage } from "./pages/ferrari/leclerc-profile";
import { CarlosSainzPage } from "./pages/ferrari/sainz-profile";

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
  {
    path: "/teams/ferrari",
    element: <FerrariPage />,
  },
  {
    path: "/drivers/charles-leclerc",
    element: <CharlesLeclercPage />,
  },
  {
    path: "/drivers/carlos-sainz",
    element: <CarlosSainzPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
