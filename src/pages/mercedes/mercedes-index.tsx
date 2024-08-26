import { useEffect } from "react";
import { Header } from "../../components/header";
import { MercedesDrivers } from "./mercedes-drivers";
import { MercedesProfile } from "./mercedes-profile";
import { MercedesTeam } from "./mercedes-team";

export function MercedesPage() {
  useEffect(() => {
    document.title = "Mercedes - F1 Racing Team";
  }, []);
  return (
    <div>
      <Header />

      <h1 className="text-5xl italic p-9">Mercedes</h1>

      <main className="bg-white mx-auto p-6 max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <MercedesTeam />
          <MercedesDrivers />
        </div>
        <MercedesProfile />
      </main>
    </div>
  );
}
