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
import { AstonMartinPage } from "./pages/astonmartin/astonmartin-index";
import { FernandoAlonsoPage } from "./pages/astonmartin/alonso-profile";
import { LanceStrollPage } from "./pages/astonmartin/stroll-profile";
import { RbPage } from "./pages/rb/rb-index";
import { DanielRicciardoPage } from "./pages/rb/ricciardo-profile";
import { YukiTsunodaPage } from "./pages/rb/tsunoda-profile";
import { HaasPage } from "./pages/haas/haas-index";
import { NicoHulkenbergPage } from "./pages/haas/hulkenberg-profile";
import { KevinMagnussenPage } from "./pages/haas/magnussen-profile";
import { AlpinePage } from "./pages/alpine/alpine-index";
import { PierreGaslyPage } from "./pages/alpine/gasly-profile";
import { EstebanOconPage } from "./pages/alpine/ocon-profile";
import { WilliamsPage } from "./pages/williams/williams-index";
import { AlexanderAlbonPage } from "./pages/williams/albon-profile";
import {FrancoColapintoPage} from "./pages/williams/colapinto-profile";
import { KickSauberPage } from "./pages/kicksauber/kicksauber-index";
import { ValtteriBottasPage } from "./pages/kicksauber/bottas-profile";
import { ZhouGuanyuPage } from "./pages/kicksauber/zhou-profile";

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
    path: "/teams/red-bull-racing",
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
  {
    path: "/teams/aston-martin",
    element: <AstonMartinPage />,
  },
  {
    path: "/drivers/fernando-alonso",
    element: <FernandoAlonsoPage />,
  },
  {
    path: "/drivers/lance-stroll",
    element: <LanceStrollPage />,
  },
  {
    path: "/teams/rb",
    element: <RbPage />,
  },
  {
    path: "/drivers/yuki-tsunoda",
    element: <YukiTsunodaPage />,
  },
  {
    path: "/drivers/daniel-ricciardo",
    element: <DanielRicciardoPage />,
  },
  {
    path: "/teams/haas",
    element: <HaasPage />,
  },
  {
    path: "/drivers/nico-hulkenberg",
    element: <NicoHulkenbergPage />,
  },
  {
    path: "/drivers/kevin-magnussen",
    element: <KevinMagnussenPage />,
  },
  {
    path: "/teams/alpine",
    element: <AlpinePage />,
  },
  {
    path: "/drivers/pierre-gasly",
    element: <PierreGaslyPage />,
  },
  {
    path: "/drivers/esteban-ocon",
    element: <EstebanOconPage />,
  },
  {
    path: "/teams/williams",
    element: <WilliamsPage />,
  },
  {
    path: "/drivers/alexander-albon",
    element: <AlexanderAlbonPage />,
  },
  {
    path: "/drivers/franco-colapinto",
    element: <FrancoColapintoPage />,
  },
  {
    path: "/teams/kick-sauber",
    element: <KickSauberPage />,
  },
  {
    path: "/drivers/valtteri-bottas",
    element: <ValtteriBottasPage />,
  },
  {
    path: "/drivers/zhou-guanyu",
    element: <ZhouGuanyuPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
