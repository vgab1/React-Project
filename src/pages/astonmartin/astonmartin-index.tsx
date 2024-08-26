import { useEffect } from "react";
import { Header } from "../../components/header";
import { AstonMartinDrivers } from "./astonmartin-drivers";
import { AstonMartinProfile } from "./astonmartin-profile";
import { AstonMartinTeam } from "./astonmartin-team";

export function AstonMartinPage() {
  useEffect(() => {
    document.title = "Aston Martin - F1 Racing Team";
  }, []);
  return (
    <div>
      <Header />

      <h1 className="text-5xl italic p-9">Aston Martin</h1>

      <main className="bg-white mx-auto p-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <AstonMartinTeam />
          <AstonMartinDrivers />
        </div>

        <AstonMartinProfile />
      </main>
    </div>
  );
}
