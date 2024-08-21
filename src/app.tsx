import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { McLarenPage } from "./pages";
import { LandoNorrisPage } from "./pages/norris-profile";
import { OscarPiastriPage } from "./pages/piastri-profile";
import { FerrariPage } from "./pages/ferrari/ferrari-index";
import { CharlesLeclercPage } from "./pages/ferrari/leclerc-profile";
import { CarlosSainzPage } from "./pages/ferrari/sainz-profile";
import { RedBullPage } from "./pages/redBull/redbull-index";
import { MaxVerstappenPage } from "./pages/redBull/verstappen-profile";
import { SergioPerezPage } from "./pages/redBull/perez-profile";
import { MercedesPage } from "./pages/mercedes/mercedes-index";
import { LewisHamiltonPage } from "./pages/mercedes/hamilton-profile";
import { GeorgeRussellPage } from "./pages/mercedes/russell-profile";

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
  {
    path: "/teams/redbull",
    element: <RedBullPage />,
  },
  {
    path: "/drivers/max-verstappen",
    element: <MaxVerstappenPage />,
  },
  {
    path: "/drivers/sergio-perez",
    element: <SergioPerezPage />,
  },
  {
    path: "/teams/mercedes",
    element: <MercedesPage />,
  },
  {
    path: "/drivers/lewis-hamilton",
    element: <LewisHamiltonPage />,
  },
  {
    path: "/drivers/george-russell",
    element: <GeorgeRussellPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
