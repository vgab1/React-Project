import { useEffect } from "react";
import { Header } from "../../components/header";
import { SauberDrivers } from "./kicksauber-drivers";
import { SauberProfile } from "./kicksauber-profile";
import { SauberTeam } from "./kicksauber-team";

export function KickSauberPage() {
  useEffect(() => {
    document.title = "Stake F1 Team Kick Sauber - F1 Racing Team";
  }, []);
  return (
    <div>
      <Header />

      <h1 className="text-5xl italic p-9">Kick Sauber</h1>

      <main className="bg-white mx-auto p-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <SauberTeam />
          <SauberDrivers />
        </div>

        <SauberProfile />
      </main>
    </div>
  );
}
