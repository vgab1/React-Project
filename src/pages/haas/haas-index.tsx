import { useEffect } from "react";
import { Header } from "../../components/header";
import { HaasDrivers } from "./haas-drivers";
import { HaasProfile } from "./haas-profile";
import { HaasTeam } from "./haas-team";

export function HaasPage() {
  useEffect(() => {
    document.title = "Haas - F1 Racing Team";
  }, []);
  return (
    <div>
      <Header />

      <h1 className="text-5xl italic p-9">Haas</h1>

      <main className="bg-white mx-auto p-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <HaasTeam />
          <HaasDrivers />
        </div>

        <HaasProfile />
      </main>
    </div>
  );
}
