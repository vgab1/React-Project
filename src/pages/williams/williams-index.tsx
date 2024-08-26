import { useEffect } from "react";
import { Header } from "../../components/header";
import { WilliamsDrivers } from "./williams-drivers";
import { WilliamsProfile } from "./williams-profile";
import { WilliamsTeam } from "./williams-team";

export function WilliamsPage() {
  useEffect(() => {
    document.title = "Williams - F1 Racing Team";
  }, []);
  return (
    <div>
      <Header />

      <h1 className="text-5xl italic p-9">Williams</h1>

      <main className="bg-white mx-auto p-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <WilliamsTeam />
          <WilliamsDrivers />
        </div>

        <WilliamsProfile />
      </main>
    </div>
  );
}
